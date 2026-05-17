// Confetti utility used across the page.
const ConfettiCtx = React.createContext(null);

function ConfettiProvider({ children }) {
  const canvasRef = React.useRef(null);
  const particlesRef = React.useRef([]);
  const rafRef = React.useRef(0);
  const lastRef = React.useRef(0);

  React.useEffect(() => {
    const cvs = canvasRef.current;
    const ctx = cvs.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      cvs.width = window.innerWidth * dpr;
      cvs.height = window.innerHeight * dpr;
      cvs.style.width = window.innerWidth + "px";
      cvs.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const loop = (t) => {
      const dt = Math.min(0.05, (t - lastRef.current) / 1000 || 0.016);
      lastRef.current = t;
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      const ps = particlesRef.current;
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i];
        p.life -= dt;
        if (p.life <= 0) { ps.splice(i, 1); continue; }
        p.vy += 380 * dt; // gravity
        p.vx *= 0.995;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rot += p.vr * dt;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = Math.min(1, p.life / 0.6);
        ctx.fillStyle = p.color;
        if (p.shape === "rect") {
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size / 1.5);
        } else if (p.shape === "circle") {
          ctx.beginPath(); ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2); ctx.fill();
        } else { // petal
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size / 2, p.size / 1.1, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(rafRef.current); };
  }, []);

  const burst = React.useCallback((opts = {}) => {
    const {
      x = window.innerWidth / 2,
      y = window.innerHeight / 2,
      count = 80,
      spread = Math.PI * 2,
      angle = -Math.PI / 2,
      speed = 360,
      colors = ["#c89b3c", "#e0b658", "#b86a7a", "#8a9c70", "#f5e7cd", "#8a3a4a"],
      shapes = ["rect", "circle", "petal"],
      life = 2.8,
    } = opts;
    const ps = particlesRef.current;
    for (let i = 0; i < count; i++) {
      const a = angle + (Math.random() - 0.5) * spread;
      const s = speed * (0.6 + Math.random() * 0.7);
      ps.push({
        x, y,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 12,
        size: 6 + Math.random() * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        life: life * (0.7 + Math.random() * 0.6),
      });
    }
  }, []);

  return (
    <ConfettiCtx.Provider value={{ burst }}>
      <canvas id="confetti-canvas" ref={canvasRef}></canvas>
      {children}
    </ConfettiCtx.Provider>
  );
}
function useConfetti() { return React.useContext(ConfettiCtx); }

Object.assign(window, { ConfettiProvider, useConfetti });
