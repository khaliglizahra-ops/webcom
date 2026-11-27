(function () {
  var C = window.DERSIO_CONFIG || {};

  // Packages
  var box = document.getElementById("packages");
  (C.packages || []).forEach(function (p) {
    var price = p.price ? p.price + " ₼ <small>/ ay</small>" : (p.priceText || "");
    var el = document.createElement("div");
    el.className = "card pkg";
    el.innerHTML =
      '<span class="eyebrow">' + p.tag + "</span>" +
      "<h3>" + p.title + "</h3>" +
      '<p class="muted">' + p.detail + "</p>" +
      '<div class="price">' + price + "</div>" +
      '<a class="btn btn-ghost" href="#qeydiyyat" data-pkg="' + p.title + '">Bu paketi istəyirəm</a>';
    box.appendChild(el);
  });
  box.addEventListener("click", function (e) {
    var a = e.target.closest("[data-pkg]");
    if (!a) return;
    var note = document.getElementById("l-note");
    note.value = "Paket: " + a.getAttribute("data-pkg") + (note.value ? "\n" + note.value : "");
  });

  // Prefill lead form from the exam result link (?fenn=...&qeyd=...)
  var qs = new URLSearchParams(location.search);
  if (qs.get("fenn")) {
    var sel = document.getElementById("l-subject");
    Array.prototype.forEach.call(sel.options, function (o) { if (o.text === qs.get("fenn")) sel.value = o.value; });
  }
  if (qs.get("qeyd")) document.getElementById("l-note").value = qs.get("qeyd");

  // Exam date, links, year
  if (C.nextExamDate) document.getElementById("exam-date").textContent = C.nextExamDate + ", saat " + (C.nextExamTime || "");
  // Social links show only once the accounts exist (set them in config.js)
  if (C.instagram) document.getElementById("ig-link").href = C.instagram; else document.getElementById("ig-link").remove();
  if (C.telegram) document.getElementById("tg-link").href = C.telegram; else document.getElementById("tg-link").remove();
  if (!C.instagram && !C.telegram) document.getElementById("social").remove();
  document.getElementById("year").textContent = new Date().getFullYear();

  var wa = (C.whatsappNumber || "").replace(/\D/g, "");
  if (wa) {
    var b = document.getElementById("wa-btn");
    b.href = "https://wa.me/" + wa + "?text=" + encodeURIComponent("Salam, Dersio haqqında məlumat almaq istəyirəm.");
    b.target = "_blank"; b.rel = "noopener";
  }

  function phoneOk(v) { return v.replace(/\D/g, "").length >= 9; }

  // Turn a form into a WhatsApp message to the coordinator.
  function wire(id, title) {
    var form = document.getElementById(id);
    var err = form.querySelector(".error");
    var out = form.querySelector(".form-result");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      err.hidden = true;
      var bad = Array.prototype.filter.call(form.querySelectorAll("[required]"), function (f) {
        if (f.type === "checkbox") return !f.checked;
        if (f.type === "tel") return !phoneOk(f.value);
        return !f.value.trim();
      });
      if (bad.length) {
        err.textContent = "Zəhmət olmasa bütün vacib xanaları doldurun (telefon nömrəsi düzgün olmalıdır).";
        err.hidden = false; bad[0].focus(); return;
      }
      var lines = ["*" + title + "*"];
      Array.prototype.forEach.call(form.elements, function (f) {
        if (f.name && f.value && f.value !== "—") lines.push(f.name + ": " + f.value.trim());
      });
      lines.push("Mənbə: sayt" + (qs.get("qeyd") ? " (600bal sınağı)" : ""));
      var msg = lines.join("\n");

      if (wa) {
        window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
        out.innerHTML = "<strong>Təşəkkürlər!</strong> WhatsApp açıldı. Mesajı göndərin, koordinatorumuz tezliklə cavab verəcək.";
      } else {
        out.innerHTML = "<strong>Təşəkkürlər!</strong> Müraciətiniz hazırdır. (WhatsApp nömrəsi hələ qoşulmayıb.)<pre></pre>";
        out.querySelector("pre").textContent = msg;
      }
      out.classList.add("show");
    });
  }
  wire("lead-form", "Pulsuz dərs müraciəti");
  wire("exam-form", "600bal sınağı qeydiyyatı");
  wire("tutor-form", "Müəllim müraciəti");
})();


// Header: show "Hesabım" when logged in (only works when served by the Dersio server)
if (!(window.DERSIO_CONFIG || {}).static) fetch("/api/me").then(function (r) { return r.ok ? r.json() : null; }).then(function (d) {
  if (d && d.user) { var a = document.getElementById("nav-account"); a.textContent = "Hesabım"; a.href = d.user.role === "admin" ? "admin.html" : "hesabim.html"; }
}).catch(function () {});

// Home page: latest questions with their best answer (public, needs the Dersio server)
(function () {
  var box = document.getElementById("home-qa");
  if (!box || !window.fetch || (window.DERSIO_CONFIG || {}).static) return;
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function who(a) {
    var w = el("span", "qa-who");
    w.appendChild(el("span", "qa-avatar" + (a.role === "teacher" ? " t" : ""), a.name.split(" ").map(function (s) { return s[0]; }).join("").slice(0, 2).toUpperCase()));
    w.appendChild(el("span", "qa-name", a.name));
    if (a.verified) w.appendChild(el("span", "qa-badge", "Müəllim ✓"));
    return w;
  }
  fetch("/api/qa/featured?limit=6").then(function (r) { return r.ok ? r.json() : null; }).then(function (d) {
    if (!d) { document.getElementById("sual-cavab").hidden = true; return; }
    if (!d.questions.length) {
      var empty = el("div", "card home-qa-empty");
      empty.appendChild(el("strong", null, "Hələ sual yoxdur"));
      empty.appendChild(el("p", "muted", "İlk sualı sən ver: yoxlanılmış müəllimlər addım-addım izah edəcək."));
      var a = el("a", "btn btn-primary", "İlk sualı ver"); a.href = "sual-cavab.html#ver"; empty.appendChild(a);
      box.appendChild(empty); return;
    }
    d.questions.forEach(function (q) {
      var card = el("a", "card home-qa-card"); card.href = "sual.html?id=" + q.id;
      var top = el("div", "qa-meta"); top.appendChild(el("span", "eyebrow", q.subject)); top.appendChild(el("span", "small muted", q.answers + " cavab")); card.appendChild(top);
      card.appendChild(el("h3", "qa-title", q.title));
      var asked = el("div", "small muted home-qa-asked", "Soruşdu: " + q.author.name); card.appendChild(asked);
      if (q.answer) {
        var ans = el("div", "home-qa-answer" + (q.answer.best ? " best" : ""));
        if (q.answer.best) ans.appendChild(el("div", "qa-best", "✓ Ən yaxşı cavab"));
        ans.appendChild(el("p", "home-qa-text", q.answer.excerpt));
        var foot = el("div", "qa-foot"); foot.appendChild(who(q.answer.author));
        if (q.answer.likes) foot.appendChild(el("span", "small muted", "▲ " + q.answer.likes));
        ans.appendChild(foot); card.appendChild(ans);
      }
      box.appendChild(card);
    });
  }).catch(function () { document.getElementById("sual-cavab").hidden = true; });
})();
