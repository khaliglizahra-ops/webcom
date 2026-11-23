/**
 * Dot shapes for the home hero. Every shape is the same number of points,
 * so the field can morph from one to the next as the page scrolls.
 * Flat shapes are drawn on an offscreen canvas and sampled; brighter pixels
 * get more dots, so outlines read crisp and fills read as soft halftone.
 */

export type Shape = Float32Array; // x, y, z triples in roughly [-1, 1]

const S = 320;

function sample(draw: (c: CanvasRenderingContext2D) => void, n: number): Shape {
    const cv = document.createElement('canvas');
    cv.width = S; cv.height = S;
    const c = cv.getContext('2d', { willReadFrequently: true })!;
    c.fillStyle = '#fff';
    c.strokeStyle = '#fff';
    c.lineCap = 'round';
    c.lineJoin = 'round';
    draw(c);
    const data = c.getImageData(0, 0, S, S).data;
    const cand: number[] = [];
    const weight: number[] = [];
    for (let y = 0; y < S; y += 1) {
        for (let x = 0; x < S; x += 1) {
            const a = data[(y * S + x) * 4 + 3];
            if (a > 8) { cand.push(x, y); weight.push(a / 255); }
        }
    }
    const out = new Float32Array(n * 3);
    let k = 0, guard = 0;
    const m = weight.length;
    while (k < n && guard < n * 400) {
        guard++;
        const j = (Math.random() * m) | 0;
        if (Math.random() > weight[j] * weight[j]) continue;
        out[k * 3] = ((cand[j * 2] + Math.random()) / S) * 2 - 1;
        out[k * 3 + 1] = ((cand[j * 2 + 1] + Math.random()) / S) * 2 - 1;
        out[k * 3 + 2] = (Math.random() - 0.5) * 0.12;
        k++;
    }
    return out;
}

function sphere(n: number): Shape {
    const out = new Float32Array(n * 3);
    const g = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
        const y = 1 - (i / (n - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const th = g * i;
        // a thin shell with a little scatter, like dust held in orbit
        const s = 0.82 + (Math.random() < 0.12 ? Math.random() * 0.35 : 0);
        out[i * 3] = Math.cos(th) * r * s;
        out[i * 3 + 1] = y * s;
        out[i * 3 + 2] = Math.sin(th) * r * s;
    }
    return out;
}

/** a browser window with a page inside */
function browser(c: CanvasRenderingContext2D) {
    c.globalAlpha = 0.07;
    c.beginPath(); c.roundRect(26, 62, 268, 196, 14); c.fill();
    c.globalAlpha = 1; c.lineWidth = 4;
    c.beginPath(); c.roundRect(26, 62, 268, 196, 14); c.stroke();
    c.lineWidth = 2;
    c.beginPath(); c.moveTo(26, 88); c.lineTo(294, 88); c.stroke();
    [44, 58, 72].forEach(x => { c.beginPath(); c.arc(x, 75, 4, 0, Math.PI * 2); c.fill(); });
    c.globalAlpha = 0.5; c.beginPath(); c.roundRect(100, 69, 120, 12, 6); c.fill();
    // headline, copy and a button
    c.globalAlpha = 1;
    c.fillRect(46, 108, 128, 11);
    c.fillRect(46, 125, 96, 11);
    c.globalAlpha = 0.45;
    c.fillRect(46, 146, 118, 4); c.fillRect(46, 155, 104, 4);
    c.globalAlpha = 1;
    c.beginPath(); c.roundRect(46, 168, 58, 16, 8); c.fill();
    // image block
    c.globalAlpha = 0.32; c.beginPath(); c.roundRect(190, 104, 86, 82, 8); c.fill();
    c.globalAlpha = 1; c.lineWidth = 2; c.beginPath(); c.roundRect(190, 104, 86, 82, 8); c.stroke();
    // three cards
    c.lineWidth = 2;
    [46, 128, 210].forEach(x => { c.beginPath(); c.roundRect(x, 200, 66, 42, 6); c.stroke(); });
}

/** a shopping bag */
function bag(c: CanvasRenderingContext2D) {
    c.beginPath();
    c.moveTo(86, 118); c.lineTo(234, 118); c.lineTo(250, 282); c.lineTo(70, 282); c.closePath();
    c.globalAlpha = 0.16; c.fill();
    c.globalAlpha = 1; c.lineWidth = 5; c.stroke();
    c.lineWidth = 5;
    c.beginPath(); c.arc(160, 118, 44, Math.PI, 0); c.stroke();
    // a tag with a tick
    c.lineWidth = 4;
    c.beginPath(); c.moveTo(132, 206); c.lineTo(152, 226); c.lineTo(190, 186); c.stroke();
}

/** a map pin standing on two rings */
function pin(c: CanvasRenderingContext2D) {
    c.beginPath();
    c.arc(160, 120, 70, Math.PI * 0.8, Math.PI * 0.2, false);
    c.lineTo(160, 262); c.closePath();
    c.globalAlpha = 0.2; c.fill();
    c.globalAlpha = 1; c.lineWidth = 5; c.stroke();
    c.save();
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(160, 120, 26, 0, Math.PI * 2); c.fill();
    c.restore();
    c.lineWidth = 4; c.beginPath(); c.arc(160, 120, 26, 0, Math.PI * 2); c.stroke();
    c.lineWidth = 2;
    c.globalAlpha = 0.8; c.beginPath(); c.ellipse(160, 272, 70, 14, 0, 0, Math.PI * 2); c.stroke();
    c.globalAlpha = 0.45; c.beginPath(); c.ellipse(160, 274, 126, 26, 0, 0, Math.PI * 2); c.stroke();
}

/** rising bars with a trend arrow */
function chart(c: CanvasRenderingContext2D) {
    c.lineWidth = 3;
    c.beginPath(); c.moveTo(36, 282); c.lineTo(290, 282); c.stroke();
    const hs = [46, 74, 64, 112, 160];
    hs.forEach((h, i) => {
        const x = 52 + i * 48;
        c.globalAlpha = 0.22; c.fillRect(x, 282 - h, 32, h);
        c.globalAlpha = 1; c.lineWidth = 3; c.strokeRect(x, 282 - h, 32, h);
    });
    c.lineWidth = 5;
    c.beginPath();
    c.moveTo(56, 206); c.lineTo(116, 170); c.lineTo(164, 184); c.lineTo(212, 128); c.lineTo(268, 70);
    c.stroke();
    c.beginPath(); c.moveTo(240, 70); c.lineTo(270, 68); c.lineTo(268, 98); c.stroke();
}

export function buildShapes(n: number): Shape[] {
    return [sphere(n), sample(browser, n), sample(bag, n), sample(pin, n), sample(chart, n)];
}
