import React, { useEffect, useRef } from 'react';

// Animated canvas background with three modes:
// 'mars' (big realistic Mars), 'solar' (solar system), 'inside' (mars landscape)
export default function BackgroundScene({ mode = 'mars' }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouse);

    // star field
    const starCount = 500;
    const stars = new Array(starCount).fill(0).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random(),
      r: Math.random() * 1.2 + 0.3,
    }));

    // planets for solar mode
    const planets = [
      { r: 8, d: 60, speed: 0.012, color: '#e5e7eb' },
      { r: 10, d: 100, speed: 0.009, color: '#dc2626' },
      { r: 7, d: 140, speed: 0.015, color: '#9ca3af' },
      { r: 14, d: 190, speed: 0.006, color: '#b91c1c' },
      { r: 6, d: 230, speed: 0.02, color: '#f3f4f6' },
    ];

    let t = 0;

    function drawMars(cx, cy, scale = 1) {
      const radius = Math.min(width, height) * 0.32 * scale;
      const grd = ctx.createRadialGradient(
        cx - radius * 0.2,
        cy - radius * 0.35,
        radius * 0.1,
        cx,
        cy,
        radius
      );
      grd.addColorStop(0, '#7f1d1d');
      grd.addColorStop(0.55, '#991b1b');
      grd.addColorStop(1, '#0f172a');
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // Bands and craters
      ctx.save();
      ctx.clip();
      for (let i = 0; i < 90; i++) {
        const ang = (i / 90) * Math.PI * 2 + t * 0.01;
        const y = cy + Math.sin(ang) * radius * 0.6;
        ctx.strokeStyle = 'rgba(239,68,68,0.07)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(cx, y, radius * 0.95, radius * 0.35, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      for (let i = 0; i < 120; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = Math.random() * radius * 0.95;
        const x = cx + Math.cos(a + t * 0.002) * r;
        const y = cy + Math.sin(a + t * 0.002) * r * 0.6;
        ctx.fillStyle = 'rgba(0,0,0,0.12)';
        ctx.beginPath();
        ctx.arc(x, y, Math.random() * 4 + 1, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // subtle rim
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();
    }

    function drawSolar(cx, cy) {
      const sunR = 28;
      const sunGrad = ctx.createRadialGradient(cx - 10, cy - 10, 5, cx, cy, sunR);
      sunGrad.addColorStop(0, '#991b1b');
      sunGrad.addColorStop(1, '#0b1220');
      ctx.fillStyle = sunGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, sunR, 0, Math.PI * 2);
      ctx.fill();

      planets.forEach((p, i) => {
        const ang = t * p.speed + i;
        const px = cx + Math.cos(ang) * p.d;
        const py = cy + Math.sin(ang) * p.d;
        ctx.strokeStyle = 'rgba(148,163,184,0.12)';
        ctx.beginPath();
        ctx.arc(cx, cy, p.d, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function drawLandscape() {
      const bands = 7;
      for (let i = 0; i < bands; i++) {
        const y = height * (0.5 + i * 0.1);
        ctx.fillStyle = `rgba(153,27,27,${0.35 + i * 0.08})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        for (let x = 0; x <= width; x += 40) {
          const n = Math.sin(x * 0.01 + i + t * (0.005 + i * 0.001)) * 20 * (i + 1);
          ctx.lineTo(x, y + n);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fill();
      }
    }

    function loop() {
      t += 1;
      ctx.clearRect(0, 0, width, height);

      // starfield parallax
      stars.forEach((s) => {
        const parallaxX = (mouseRef.current.x / width - 0.5) * 2;
        const parallaxY = (mouseRef.current.y / height - 0.5) * 2;
        const x = s.x + parallaxX * s.z * 12;
        const y = s.y + parallaxY * s.z * 12;
        ctx.fillStyle = `rgba(229,231,235,${0.18 + s.z * 0.8})`;
        ctx.fillRect(x, y, s.r, s.r);
      });

      const cx = width / 2;
      const cy = height / 2;

      if (mode === 'mars') {
        drawMars(cx, cy, 1);
      } else if (mode === 'solar') {
        drawSolar(cx, cy);
      } else if (mode === 'inside') {
        drawLandscape();
      }

      rafRef.current = requestAnimationFrame(loop);
    }

    loop();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden
      style={{ display: 'block' }}
    />
  );
}
