// ============ HERO: Cake with candles to blow out ============
const CANDLE_COUNT = 7;

function Hero() {
  const [blown, setBlown] = React.useState(() => Array(CANDLE_COUNT).fill(false));
  const [celebrated, setCelebrated] = React.useState(false);
  const { burst } = useConfetti();
  const allBlown = blown.every(Boolean);

  const cakeRef = React.useRef(null);

  React.useEffect(() => {
    if (allBlown && !celebrated) {
      setCelebrated(true);
      // big celebration burst
      const rect = cakeRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const fire = () => {
        burst({ x: cx - 80, y: cy, angle: -Math.PI / 2 + 0.3, spread: 1.4, speed: 520, count: 90 });
        burst({ x: cx + 80, y: cy, angle: -Math.PI / 2 - 0.3, spread: 1.4, speed: 520, count: 90 });
        burst({ x: cx, y: cy - 40, angle: -Math.PI / 2, spread: 2.6, speed: 380, count: 60 });
      };
      fire();
      setTimeout(fire, 350);
      setTimeout(fire, 800);
    }
  }, [allBlown, celebrated, burst]);

  const blowOne = (i) => {
    if (blown[i]) return;
    setBlown(prev => { const n = [...prev]; n[i] = true; return n; });
  };
  const reset = () => {
    setBlown(Array(CANDLE_COUNT).fill(false));
    setCelebrated(false);
  };

  // Candle layout
  const candleXs = React.useMemo(() => {
    const out = [];
    const N = CANDLE_COUNT;
    const span = 320; // px across cake top
    for (let i = 0; i < N; i++) {
      out.push(-span / 2 + (span * i) / (N - 1));
    }
    return out;
  }, []);

  return (
    <section className="scene dark hero" id="hero">
      {/* corner florals */}
      <div style={{ position: "absolute", top: 40, left: 40, color: "var(--gold)", opacity: 0.7 }}>
        <LeafSprig size={80} />
      </div>
      <div style={{ position: "absolute", top: 40, right: 40, color: "var(--gold)", opacity: 0.7 }}>
        <LeafSprig size={80} flip />
      </div>
      <div style={{ position: "absolute", bottom: 40, left: 60, color: "var(--rose)", opacity: 0.6 }}>
        <BloomMark size={36} />
      </div>
      <div style={{ position: "absolute", bottom: 60, right: 60, color: "var(--gold)", opacity: 0.6 }}>
        <BloomMark size={28} petals={8} />
      </div>

      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="rule">an evening of forty-five</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-sub display">Selamat Hari Lahir</span>
          <span className="hero-name script">Umi</span>
          <span className="hero-name-line"></span>
          <span className="hero-for display">Noorhayati</span>
        </h1>

        <div className="cake-wrap" ref={cakeRef}>
          <Cake candleXs={candleXs} blown={blown} onBlow={blowOne} />
        </div>

        <div className="hero-prompt">
          {!allBlown ? (
            <span className="script">
              {blown.filter(Boolean).length === 0
                ? "tap the candles to blow them out, one by one…"
                : `${CANDLE_COUNT - blown.filter(Boolean).length} candle${CANDLE_COUNT - blown.filter(Boolean).length === 1 ? "" : "s"} left — make your wish`}
            </span>
          ) : (
            <span className="script" style={{ color: "var(--gold-bright)" }}>
              wish made. now scroll, sayang ↓
              <button className="bare relight" onClick={reset}>(relight)</button>
            </span>
          )}
        </div>
      </div>

      <style>{`
        .hero { display: flex; align-items: center; justify-content: center; padding: 80px 6vw 40px; }
        .hero-inner {
          text-align: center; width: 100%; max-width: 1100px;
          display: flex; flex-direction: column; align-items: center; gap: 36px;
        }
        .hero-eyebrow { color: var(--gold); opacity: 0.9; }
        .hero-title {
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          font-weight: 400; margin: 0;
          line-height: 1;
        }
        .hero-sub {
          font-size: clamp(28px, 3.4vw, 48px);
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--cream); opacity: 0.85;
        }
        .hero-name {
          font-size: clamp(120px, 18vw, 240px);
          color: var(--gold-bright); line-height: 0.85;
          letter-spacing: -0.02em;
          text-shadow: 0 6px 40px rgba(224, 182, 88, 0.25);
        }
        .hero-name-line { width: 80px; height: 1px; background: var(--gold); opacity: 0.6; margin: 14px 0 6px; }
        .hero-for {
          font-size: clamp(20px, 2vw, 28px);
          letter-spacing: 0.4em; text-transform: uppercase;
          color: var(--cream); opacity: 0.6;
        }
        .cake-wrap { margin: 12px 0 0; }
        .hero-prompt {
          margin-top: 24px;
          font-size: 28px;
          color: var(--cream); opacity: 0.85;
          min-height: 40px;
        }
        .relight {
          margin-left: 12px; font-family: var(--serif);
          font-size: 16px; color: var(--gold); text-decoration: underline;
          opacity: 0.7; letter-spacing: 0.05em;
        }
        .relight:hover { opacity: 1; }
      `}</style>
    </section>
  );
}

function Cake({ candleXs, blown, onBlow }) {
  const CAKE_W = 420;
  return (
    <svg viewBox="-260 -240 520 320" width="min(520px, 86vw)">
      <defs>
        <linearGradient id="cake-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3d68a" />
          <stop offset="1" stopColor="#c89b3c" />
        </linearGradient>
        <linearGradient id="cake-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3d2547" />
          <stop offset="1" stopColor="#1c0f24" />
        </linearGradient>
        <linearGradient id="drip" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e0b658" />
          <stop offset="1" stopColor="#8f6b1f" />
        </linearGradient>
        <radialGradient id="flameG" cx="0.5" cy="0.55" r="0.6">
          <stop offset="0" stopColor="#fff6c8" />
          <stop offset="0.5" stopColor="#ffd266" />
          <stop offset="1" stopColor="#ff8a3a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glowG" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffd680" stopOpacity="0.7" />
          <stop offset="1" stopColor="#ffd680" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* stand shadow */}
      <ellipse cx="0" cy="70" rx="260" ry="14" fill="#000" opacity="0.35" />

      {/* tier 2 (bottom) */}
      <g>
        <ellipse cx="0" cy="60" rx="230" ry="22" fill="url(#cake-side)" />
        <rect x="-230" y="-30" width="460" height="90" fill="url(#cake-side)" />
        <ellipse cx="0" cy="-30" rx="230" ry="22" fill="#5a3a66" />
        {/* gold drip */}
        <path d="M -230 -30 Q -210 0 -190 -10 Q -170 14 -150 -6 Q -120 22 -100 -8 Q -70 18 -50 -10 Q -20 24 0 -8 Q 30 22 60 -10 Q 90 24 110 -8 Q 140 20 160 -10 Q 190 18 210 -8 Q 226 6 230 -30 L 230 -30 Z"
          fill="url(#drip)" opacity="0.95" />
        {/* tiny piped dots */}
        {Array.from({ length: 14 }).map((_, i) => (
          <circle key={i} cx={-210 + i * 32} cy={50} r="3" fill="var(--gold-bright)" opacity="0.85" />
        ))}
      </g>

      {/* tier 1 (top) */}
      <g transform="translate(0,-110)">
        <ellipse cx="0" cy="48" rx="160" ry="16" fill="url(#cake-side)" />
        <rect x="-160" y="-30" width="320" height="78" fill="url(#cake-side)" />
        <ellipse cx="0" cy="-30" rx="160" ry="16" fill="url(#cake-top)" />
        {/* sugar flowers */}
        <g transform="translate(-110 -32)" style={{ color: "var(--rose)" }}>
          <SugarFlower r="10" />
        </g>
        <g transform="translate(110 -32)" style={{ color: "var(--rose)" }}>
          <SugarFlower r="10" />
        </g>
        <g transform="translate(0 -36)" style={{ color: "#f5e7cd" }}>
          <SugarFlower r="8" />
        </g>
        {/* piped border */}
        {Array.from({ length: 11 }).map((_, i) => (
          <circle key={i} cx={-150 + i * 30} cy={40} r="4" fill="var(--gold-bright)" opacity="0.95" />
        ))}
      </g>

      {/* candles on top of top tier (y around -150) */}
      {candleXs.map((x, i) => (
        <Candle key={i} x={x} y={-150} blown={blown[i]} onClick={() => onBlow(i)} />
      ))}

      {/* "45" written on cake side */}
      <text x="0" y="20" textAnchor="middle"
        fontFamily="Italiana, serif" fontSize="42" fill="#e0b658" letterSpacing="6">
        forty-five
      </text>
    </svg>
  );
}

function SugarFlower({ r = 10 }) {
  return (
    <g>
      {[0, 72, 144, 216, 288].map(a => (
        <ellipse key={a} cx="0" cy={-r * 0.7} rx={r * 0.45} ry={r * 0.75}
          fill="currentColor" opacity="0.92"
          transform={`rotate(${a})`} />
      ))}
      <circle r={r * 0.32} fill="var(--gold-bright)" />
    </g>
  );
}

function Candle({ x, y, blown, onClick }) {
  // candle base at (x, y); body extends downward; flame above
  return (
    <g transform={`translate(${x} ${y})`} className="candle" onClick={onClick} style={{ cursor: blown ? "default" : "pointer" }}>
      {/* clickable hit area */}
      <rect x="-22" y="-70" width="44" height="100" fill="transparent" />
      {/* candle body */}
      <rect x="-6" y="-30" width="12" height="60" rx="2" fill="var(--rose)" />
      {/* stripe */}
      <rect x="-6" y="-12" width="12" height="4" fill="#f5e7cd" opacity="0.85" />
      <rect x="-6" y="6" width="12" height="4" fill="#f5e7cd" opacity="0.85" />
      {/* wick */}
      <line x1="0" y1="-30" x2="0" y2="-40" stroke="#2a1830" strokeWidth="1.4" />

      {/* flame group */}
      {!blown ? (
        <g style={{ transformOrigin: "0px -40px", animation: "flame-flicker 0.7s ease-in-out infinite" }}>
          <ellipse cx="0" cy="-58" rx="22" ry="28" fill="url(#glowG)" />
          <path d="M0 -38 C -7 -42, -8 -52, -3 -60 C -1 -66, 0 -70, 0 -76 C 1 -70, 4 -64, 6 -58 C 9 -50, 6 -42, 0 -38 Z"
            fill="url(#flameG)" />
          <path d="M0 -42 C -3 -46, -4 -52, -1 -58 C 0 -62, 0 -64, 0 -68 C 1 -64, 3 -60, 3 -56 C 4 -50, 2 -44, 0 -42 Z"
            fill="#fff6c8" opacity="0.9" />
        </g>
      ) : (
        <g className="smoke">
          <path d="M0 -40 C -4 -50, 4 -56, 0 -68 C -4 -78, 4 -86, 0 -100"
            stroke="#c8b8be" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5">
            <animate attributeName="opacity" values="0.55;0;0" keyTimes="0;0.7;1" dur="2s" fill="freeze" />
            <animate attributeName="d"
              values="M0 -40 C -4 -50, 4 -56, 0 -68 C -4 -78, 4 -86, 0 -100;
                      M0 -40 C -8 -54, 8 -62, 0 -78 C -8 -92, 8 -100, 0 -120;
                      M0 -40 C -14 -60, 14 -70, 0 -90 C -14 -110, 14 -120, 0 -140"
              keyTimes="0;0.5;1" dur="2s" fill="freeze" />
          </path>
        </g>
      )}
    </g>
  );
}

Object.assign(window, { Hero });
