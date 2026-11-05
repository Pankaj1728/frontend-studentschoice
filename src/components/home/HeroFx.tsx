'use client';

import { useEffect, useRef, type RefObject } from 'react';

type Rgb = [number, number, number];

const BRAND: Rgb = [110, 0, 224];
const STAR: Rgb = [217, 119, 6];
const PINK: Rgb = [224, 69, 155];

const rgba = (c: Rgb, a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

type Trail = { x: number; y: number; len: number; v: number; a: number; t0: number; life: number };

// Hero background: breathing rings behind the student and shooting light trails.
// Draws on a canvas behind the hero content; pauses when the hero is off screen.
export function HeroFx({
  heroRef,
  imgRef,
  textRef,
}: {
  heroRef: RefObject<HTMLElement | null>;
  imgRef: RefObject<HTMLElement | null>;
  textRef: RefObject<HTMLElement | null>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const cv = canvasRef.current;
    const ctx = cv?.getContext('2d');
    if (!hero || !cv || !ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0;
    let H = 0;
    let dpr = 1;
    let tx = 0;
    let ty = 0;
    let px = 0;
    let py = 0;
    let trails: Trail[] = [];
    let nextSpawn = 0;
    const t0 = performance.now();

    const spawn = (now: number) => {
      const mobile = W < 700;
      trails.push({
        x: Math.random() * W * 0.92,
        y: H * (0.12 + Math.random() * 0.84),
        len: (mobile ? 110 : 150) + Math.random() * (mobile ? 80 : 130),
        v: (mobile ? 220 : 300) + Math.random() * 150,
        a: -(0.32 + Math.random() * 0.18),
        t0: now,
        life: 1300 + Math.random() * 700,
      });
    };

    const draw = (now: number) => {
      const img = imgRef.current;
      const t = now - t0;
      px += (tx - px) * 0.05;
      py += (ty - py) * 0.05;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      if (!img) return;
      const hr = hero.getBoundingClientRect();
      const ir = img.getBoundingClientRect();
      if (!ir.width) return;

      // rings are centred on the purple circle in hero-banner.svg (640×507: centre 307,170, radius 158)
      const Rc = ir.width * (158 / 640);
      const cx = ir.left - hr.left + ir.width * (307 / 640) - px * 10;
      const cy = ir.top - hr.top + ir.height * (170 / 507) - py * 8;

      ctx.lineWidth = 1.2;
      for (let i = 0; i < 6; i++) {
        const r = Rc + 40 + i * 62 + 3 * Math.sin(t * 0.0012 - i * 0.7);
        const al = (0.24 - i * 0.03) * (0.65 + 0.35 * Math.sin(t * 0.0016 - i * 0.9));
        ctx.strokeStyle = rgba(BRAND, Math.max(0, al));
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // a soft ripple that travels outward every 4.5 seconds
      if (!reduce) {
        const ph = (t % 4500) / 4500;
        ctx.strokeStyle = rgba(PINK, 0.28 * Math.pow(1 - ph, 1.5));
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(cx, cy, Rc + 20 + ph * 400, 0, Math.PI * 2);
        ctx.stroke();
      }

      const maxT = W < 700 ? 2 : 4;
      if (!reduce && now >= nextSpawn && trails.length < maxT) {
        spawn(now);
        nextSpawn = now + 700 + Math.random() * 900;
      }
      for (let k = trails.length - 1; k >= 0; k--) {
        const tr = trails[k];
        const e = (now - tr.t0) / tr.life;
        if (e >= 1) {
          trails.splice(k, 1);
          continue;
        }
        const env = Math.min(1, e / 0.15) * Math.min(1, (1 - e) / 0.3);
        const dx = Math.cos(tr.a);
        const dy = Math.sin(tr.a);
        const dist = (tr.v * (now - tr.t0)) / 1000;
        const hx = tr.x + dx * dist;
        const hy = tr.y + dy * dist;
        const L = tr.len * Math.min(1, e / 0.2 + 0.3);
        const sx = hx - dx * L;
        const sy = hy - dy * L;
        const g = ctx.createLinearGradient(sx, sy, hx, hy);
        g.addColorStop(0, rgba(BRAND, 0));
        g.addColorStop(0.7, rgba(PINK, 0.45 * env));
        g.addColorStop(1, rgba(STAR, 0.85 * env));
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(hx, hy);
        ctx.stroke();
        const hg = ctx.createRadialGradient(hx, hy, 0, hx, hy, 7);
        hg.addColorStop(0, `rgba(255,255,255,${0.95 * env})`);
        hg.addColorStop(0.4, rgba(STAR, 0.7 * env));
        hg.addColorStop(1, rgba(STAR, 0));
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.arc(hx, hy, 7, 0, Math.PI * 2);
        ctx.fill();
      }

      // keep the copy easy to read: soften the effect behind the text
      ctx.globalCompositeOperation = 'destination-out';
      const tc = textRef.current?.getBoundingClientRect();
      if (window.innerWidth > 1024 && tc) {
        const xr = tc.right - hr.left;
        const fg = ctx.createLinearGradient(0, 0, xr + 60, 0);
        fg.addColorStop(0, 'rgba(0,0,0,.42)');
        fg.addColorStop(0.85, 'rgba(0,0,0,.42)');
        fg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = fg;
        ctx.fillRect(0, 0, xr + 60, H);
      } else {
        const yt = ir.top - hr.top;
        const vg = ctx.createLinearGradient(0, yt - 60, 0, yt + 20);
        vg.addColorStop(0, 'rgba(0,0,0,.78)');
        vg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = vg;
        ctx.fillRect(0, 0, W, yt + 20);
      }
      // fade the bottom edge so the rings never look cut off
      const be = ctx.createLinearGradient(0, H - 80, 0, H);
      be.addColorStop(0, 'rgba(0,0,0,0)');
      be.addColorStop(1, 'rgba(0,0,0,1)');
      ctx.fillStyle = be;
      ctx.fillRect(0, H - 80, W, 80);
      ctx.globalCompositeOperation = 'source-over';
    };

    const size = () => {
      W = hero.clientWidth;
      H = hero.clientHeight;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      cv.width = Math.max(1, Math.round(W * dpr));
      cv.height = Math.max(1, Math.round(H * dpr));
      if (reduce) draw(performance.now());
    };
    const ro = new ResizeObserver(size);
    ro.observe(hero);
    size();

    // reduced motion: one calm still frame with a few trails
    if (reduce) {
      const n0 = performance.now();
      trails = [
        { x: W * 0.08, y: H * 0.18, len: 220, v: 0, a: -0.42, t0: n0 - 500, life: 2000 },
        { x: W * 0.45, y: H * 0.9, len: 200, v: 0, a: -0.42, t0: n0 - 500, life: 2000 },
        { x: W * 0.82, y: H * 0.62, len: 170, v: 0, a: -0.42, t0: n0 - 500, life: 2000 },
      ];
      draw(n0);
      return () => ro.disconnect();
    }

    // gentle mouse parallax for the rings (desktop only)
    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width) * 2 - 1;
      ty = ((e.clientY - r.top) / r.height) * 2 - 1;
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
    };
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (finePointer) {
      hero.addEventListener('mousemove', onMove);
      hero.addEventListener('mouseleave', onLeave);
    }

    // run only while the hero is visible and the tab is active
    let running = false;
    let raf = 0;
    let seen = false;
    const loop = () => {
      if (!running) {
        raf = 0;
        return;
      }
      draw(performance.now());
      raf = requestAnimationFrame(loop);
    };
    const setRun = (on: boolean) => {
      running = on && !document.hidden;
      if (running && !raf) raf = requestAnimationFrame(loop);
    };
    const io = new IntersectionObserver((es) => {
      seen = es[0].isIntersecting;
      setRun(seen);
    });
    io.observe(hero);
    const onVis = () => setRun(seen);
    document.addEventListener('visibilitychange', onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      if (finePointer) {
        hero.removeEventListener('mousemove', onMove);
        hero.removeEventListener('mouseleave', onLeave);
      }
    };
  }, [heroRef, imgRef, textRef]);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full" />;
}
