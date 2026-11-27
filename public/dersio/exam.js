(function () {
  var C = window.DERSIO_CONFIG || {};
  var EX = window.DERSIO_EXAM;
  var Q = EX.questions;
  var KEY = "dersio-exam-v1";
  var wa = (C.whatsappNumber || "").replace(/\D/g, "");
  var state = load() || null;
  var tick = null;

  function $(id) { return document.getElementById(id); }
  function show(view) {
    ["start", "closed", "test", "result"].forEach(function (v) { $("view-" + v).hidden = v !== view; });
    $("timer").hidden = view !== "test";
    window.scrollTo(0, 0);
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  function load() { try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; } }
  function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

  // ---------- start ----------
  $("ex-duration").textContent = EX.durationMinutes;
  $("ex-count").textContent = Q.length;
  $("ex-subjects").textContent = EX.subjects.join(", ");
  $("ex-edition").textContent = EX.edition || "";

  $("start-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var err = this.querySelector(".error");
    var name = $("s-name").value.trim(), phone = $("s-phone").value.trim();
    if (!name || phone.replace(/\D/g, "").length < 9 || !$("s-consent").checked) {
      err.textContent = "Zəhmət olmasa adı, düzgün telefon nömrəsini yazın və razılığı qeyd edin.";
      err.hidden = false; return;
    }
    err.hidden = true;
    state = {
      student: { name: name, phone: phone, grade: $("s-grade").value, group: $("s-group").value },
      answers: Q.map(function () { return null; }),
      current: 0,
      startedAt: Date.now(),
      finishedAt: null
    };
    save(); startTest();
  });

  // ---------- test ----------
  function startTest() {
    show("test"); renderPalette(); renderQuestion();
    clearInterval(tick); tick = setInterval(updateTimer, 1000); updateTimer();
  }
  function remainingMs() { return state.startedAt + EX.durationMinutes * 60000 - Date.now(); }
  function updateTimer() {
    var ms = remainingMs();
    if (ms <= 0) { finish(); return; }
    var s = Math.ceil(ms / 1000), m = Math.floor(s / 60);
    $("timer").textContent = (m < 10 ? "0" : "") + m + ":" + ("0" + (s % 60)).slice(-2);
    $("timer").classList.toggle("low", ms < 5 * 60000);
  }
  function renderQuestion() {
    var i = state.current, q = Q[i];
    $("q-subject").textContent = q.subject;
    $("q-pos").textContent = (i + 1) + " / " + Q.length;
    $("q-progress").style.width = ((i + 1) / Q.length * 100) + "%";
    $("q-text").textContent = q.text;
    var box = $("q-options"); box.innerHTML = "";
    q.options.forEach(function (opt, k) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "option" + (state.answers[i] === k ? " selected" : "");
      b.setAttribute("role", "radio"); b.setAttribute("aria-checked", state.answers[i] === k);
      b.innerHTML = "<b>" + "ABCDE"[k] + "</b><span></span>";
      b.querySelector("span").textContent = opt;
      b.addEventListener("click", function () {
        state.answers[i] = k; save(); renderQuestion(); renderPalette();
      });
      box.appendChild(b);
    });
    $("btn-prev").disabled = i === 0;
    $("btn-next").textContent = i === Q.length - 1 ? "Bitir" : "Növbəti →";
  }
  function renderPalette() {
    var p = $("palette"); p.innerHTML = "";
    var last = null;
    Q.forEach(function (q, i) {
      if (q.subject !== last) {
        var h = document.createElement("div"); h.className = "pal-subject"; h.textContent = q.subject; p.appendChild(h); last = q.subject;
      }
      var b = document.createElement("button");
      b.type = "button"; b.textContent = i + 1;
      b.className = "pal" + (state.answers[i] !== null ? " done" : "") + (i === state.current ? " current" : "");
      b.setAttribute("aria-label", "Sual " + (i + 1));
      b.addEventListener("click", function () { state.current = i; save(); renderQuestion(); renderPalette(); });
      p.appendChild(b);
    });
  }
  $("btn-prev").addEventListener("click", function () { if (state.current > 0) { state.current--; save(); renderQuestion(); renderPalette(); } });
  $("btn-next").addEventListener("click", function () {
    if (state.current < Q.length - 1) { state.current++; save(); renderQuestion(); renderPalette(); }
    else askFinish();
  });
  $("btn-finish").addEventListener("click", askFinish);
  function askFinish() {
    var empty = state.answers.filter(function (a) { return a === null; }).length;
    var msg = empty ? empty + " sual cavabsız qalıb. Sınağı bitirmək istəyirsən?" : "Sınağı bitirmək istəyirsən?";
    if (confirm(msg)) finish();
  }
  function finish() {
    clearInterval(tick);
    if (!state.finishedAt) { state.finishedAt = Math.min(Date.now(), state.startedAt + EX.durationMinutes * 60000); save(); }
    renderResult();
    saveOnline();
  }

  // If the student is logged in, keep the result in their panel.
  function saveOnline() {
    if (state.synced || C.static) return;
    var r = compute(), subjects = {};
    EX.subjects.forEach(function (s) { subjects[s] = r.bySubject[s]; });
    fetch("/api/me").then(function (x) { return x.ok ? x.json() : null; }).then(function (d) {
      if (!d || !d.user || (d.user.role !== "student" && d.user.role !== "parent")) return;
      return fetch("/api/me/exam-results", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ edition: EX.edition || EX.title, score: r.score, maxScore: EX.maxScore, correct: r.correct, total: r.total,
          details: { subjects: subjects, weak: r.weak.map(function (t) { return t.topic; }) } }) })
        .then(function (x) { if (x.ok) { state.synced = true; save(); var n = document.getElementById("r-saved"); if (n) n.hidden = false; } });
    }).catch(function () {});
  }

  // ---------- result ----------
  function compute() {
    var bySubject = {}, byTopic = {}, correct = 0;
    Q.forEach(function (q, i) {
      var ok = state.answers[i] === q.answer;
      if (ok) correct++;
      var s = bySubject[q.subject] = bySubject[q.subject] || { correct: 0, total: 0 };
      s.total++; if (ok) s.correct++;
      var tk = q.subject + "|" + q.topic;
      var t = byTopic[tk] = byTopic[tk] || { subject: q.subject, topic: q.topic, correct: 0, total: 0 };
      t.total++; if (ok) t.correct++;
    });
    var weak = Object.keys(byTopic).map(function (k) { return byTopic[k]; })
      .filter(function (t) { return t.correct < t.total; })
      .sort(function (a, b) { return a.correct / a.total - b.correct / b.total; });
    var weakestSubject = EX.subjects.slice().sort(function (a, b) {
      return bySubject[a].correct / bySubject[a].total - bySubject[b].correct / bySubject[b].total;
    })[0];
    return {
      correct: correct, total: Q.length,
      score: Math.round(correct / Q.length * EX.maxScore),
      bySubject: bySubject, weak: weak, weakestSubject: weakestSubject,
      minutes: Math.max(1, Math.round((state.finishedAt - state.startedAt) / 60000))
    };
  }

  function renderResult() {
    var r = compute();
    show("result");
    var first = state.student.name.split(" ")[0];
    $("r-title").textContent = "Afərin, " + first + "!";
    $("r-sub").textContent = r.correct + " / " + r.total + " düzgün cavab · " + r.minutes + " dəqiqə";
    $("r-score").textContent = r.score;
    $("r-max").textContent = EX.maxScore + " üzərindən";
    Array.prototype.forEach.call(document.querySelectorAll(".r-maxnum"), function (el) { el.textContent = EX.maxScore; });

    var box = $("r-subjects"); box.innerHTML = "";
    EX.subjects.forEach(function (s) {
      var b = r.bySubject[s], pct = Math.round(b.correct / b.total * 100);
      var el = document.createElement("div"); el.className = "card subj";
      el.innerHTML = '<div class="subj-head"><strong></strong><span></span></div><div class="progress"><div style="width:' + pct + '%"></div></div><span class="muted"></span>';
      el.querySelector("strong").textContent = s;
      el.querySelector(".subj-head span").textContent = pct + "%";
      el.querySelector(".muted").textContent = b.correct + " / " + b.total + " düzgün";
      box.appendChild(el);
    });

    var wl = $("r-weak"); wl.innerHTML = "";
    if (!r.weak.length) wl.innerHTML = "<li>Zəif mövzu tapılmadı. Əla nəticədir!</li>";
    r.weak.slice(0, 6).forEach(function (t) {
      var li = document.createElement("li");
      li.innerHTML = "<span></span><small></small>";
      li.querySelector("span").textContent = t.topic + " (" + t.subject + ")";
      li.querySelector("small").textContent = t.correct + " / " + t.total;
      wl.appendChild(li);
    });

    var ws = r.weakestSubject;
    $("r-offer-title").textContent = ws + " üzrə pulsuz dərs";
    $("r-offer-text").textContent = "Bu fənn üzrə yoxlanılmış müəllimlə 15 dəqiqəlik pulsuz tanışlıq dərsi. Zəif mövzular üzərində birlikdə plan qurun.";
    var topics = r.weak.filter(function (t) { return t.subject === ws; }).map(function (t) { return t.topic; }).join(", ");
    var note = "600bal sınağı: " + r.score + " bal" + (topics ? ". Zəif mövzular: " + topics : "");
    $("r-offer-btn").href = "index.html?fenn=" + encodeURIComponent(ws) + "&qeyd=" + encodeURIComponent(note) + "#qeydiyyat";

    var rv = $("r-review"); rv.innerHTML = "";
    Q.forEach(function (q, i) {
      var a = state.answers[i], ok = a === q.answer;
      var li = document.createElement("li"); li.className = ok ? "ok" : "bad";
      li.innerHTML = "<div></div><small></small>";
      li.querySelector("div").textContent = q.text;
      li.querySelector("small").textContent = (ok ? "✓ " : "✗ ") + "Sənin cavabın: " + (a === null ? "boş" : q.options[a]) + (ok ? "" : " · Düzgün: " + q.options[q.answer]);
      rv.appendChild(li);
    });

    $("r-send").onclick = function () { send(r); };
  }

  function send(r) {
    var s = state.student;
    var lines = [
      "*600bal sınağı nəticəsi*",
      "Şagird: " + s.name, "Valideyn telefonu: " + s.phone, "Sinif: " + s.grade, "Qrup: " + s.group,
      "Bal: " + r.score + " / " + EX.maxScore + " (" + r.correct + "/" + r.total + ")"
    ];
    EX.subjects.forEach(function (x) { lines.push(x + ": " + r.bySubject[x].correct + "/" + r.bySubject[x].total); });
    if (r.weak.length) lines.push("Zəif mövzular: " + r.weak.map(function (t) { return t.topic; }).join(", "));
    lines.push("Vaxt: " + r.minutes + " dəq", "Sınaq: " + (EX.edition || EX.title));
    var msg = lines.join("\n");
    var out = $("r-send-result");
    if (wa) {
      window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
      out.innerHTML = "<strong>WhatsApp açıldı.</strong> Mesajı göndər, koordinatorumuz sənə uyğun müəllim təklif edəcək.";
    } else {
      out.innerHTML = "<strong>Hazırdır.</strong> (WhatsApp nömrəsi hələ qoşulmayıb.)<pre></pre>";
      out.querySelector("pre").textContent = msg;
    }
    out.classList.add("show");
  }

  $("r-restart").addEventListener("click", function () {
    if (!confirm("Nəticən silinəcək. Yenidən başlamaq istəyirsən?")) return;
    try { localStorage.removeItem(KEY); } catch (e) {}
    state = null; show("start");
  });

  // ---------- boot ----------
  if (C.examOpen === false) {
    if (C.nextExamDate) $("closed-date").textContent = C.nextExamDate + ", saat " + (C.nextExamTime || "");
    show("closed");
  } else if (state && state.finishedAt) {
    renderResult();
  } else if (state && remainingMs() > 0) {
    startTest();
  } else if (state) {
    finish();
  } else {
    show("start");
  }
})();
