// ============ SECTION: A letter from Along ============

function Letter() {
  const [open, setOpen] = React.useState(false);

  return (
    <section className="scene letter-scene" id="letter">
      <div className="reveal-on-scroll center" style={{ marginBottom: 60 }}>
        <span className="section-eyebrow">a letter, folded carefully</span>
        <h2 className="section-title">read me <em>first</em></h2>
        <div className="rule">from your firstborn</div>
      </div>

      <div className={"envelope-wrap " + (open ? "open" : "")}>
        <button className="envelope" onClick={() => setOpen(o => !o)} aria-label="Open letter">
          <svg viewBox="0 0 480 320" width="100%" height="100%">
            <defs>
              <linearGradient id="env-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#f5e7cd" />
                <stop offset="1" stopColor="#e6d3a8" />
              </linearGradient>
              <linearGradient id="env-flap" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ebd6b0" />
                <stop offset="1" stopColor="#d6bb86" />
              </linearGradient>
            </defs>
            <rect x="0" y="40" width="480" height="280" rx="6" fill="url(#env-grad)" />
            <polygon className="flap" points="0,40 240,200 480,40" fill="url(#env-flap)" />
            {/* wax seal */}
            <circle cx="240" cy="200" r="32" fill="var(--rose-deep)" />
            <circle cx="240" cy="200" r="32" fill="none" stroke="var(--gold)" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.7" />
            <text x="240" y="208" textAnchor="middle" fontFamily="Italiana, serif" fontSize="24" fill="var(--gold-bright)">N</text>
            {/* address */}
            <text x="240" y="260" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="22" fill="var(--ink-soft)">
              to my Umi, with love
            </text>
            <line x1="160" y1="276" x2="320" y2="276" stroke="var(--ink-soft)" strokeWidth="0.5" opacity="0.4" />
          </svg>
          {!open && <span className="open-hint script">click to open</span>}
        </button>

        <div className="letter-paper" aria-hidden={!open}>
          <div className="paper-inner">
            <p className="dear script">Umi sayang,</p>
            <p>
              Forty-five years. Tahun ini terasa sangat istimewa — not because of the number, but because
              of every quiet morning, every plate you set down without being asked, every flower you
              coaxed out of stubborn soil.
            </p>
            <p>
              I built this little corner of the internet because words on paper feel too small for what
              I want to say. Scroll, and you will find: a cake to wish on, a garden of memories, the
              recipes you taught me, and a gift at the end that I hope makes you laugh.
            </p>
            <p>
              You are the steadiest thing in my life. I love you more than mangosteens in season.
            </p>
            <p className="sign script">— Along</p>
          </div>
          <div className="paper-edge" />
        </div>
      </div>

      <style>{`
        .letter-scene { background: var(--cream); padding-bottom: 160px; }
        .envelope-wrap {
          position: relative; width: min(560px, 90vw); margin: 0 auto;
          aspect-ratio: 3/2;
        }
        .envelope {
          position: relative; width: 100%; height: 100%;
          background: transparent; border: none; padding: 0; cursor: pointer;
          filter: drop-shadow(0 30px 50px rgba(42, 24, 48, 0.18));
          transition: transform 0.6s ease, opacity 0.6s ease;
        }
        .envelope:hover { transform: translateY(-4px) rotate(-1deg); }
        .envelope .flap {
          transform-origin: 240px 40px;
          transition: transform 0.9s cubic-bezier(.6,-0.2,.3,1.4);
        }
        .envelope-wrap.open .envelope { opacity: 0; pointer-events: none; transform: translateY(-20px); }
        .envelope-wrap.open .flap { transform: rotateX(180deg); }
        .open-hint {
          position: absolute; bottom: -34px; left: 50%; transform: translateX(-50%);
          color: var(--rose-deep); font-size: 22px; opacity: 0.8;
        }

        .letter-paper {
          position: absolute; inset: -40px -20px auto -20px;
          background: #fbf3e2;
          background-image:
            repeating-linear-gradient(to bottom, transparent 0 31px, rgba(184,106,122,0.12) 31px 32px);
          padding: 60px 60px 50px;
          border-radius: 2px;
          box-shadow:
            0 1px 0 rgba(255,255,255,0.6) inset,
            0 30px 60px rgba(42, 24, 48, 0.22),
            0 0 0 1px rgba(143, 107, 31, 0.08);
          transform: translateY(40px) rotateX(20deg) scale(0.85);
          opacity: 0; pointer-events: none;
          transition: transform 0.9s cubic-bezier(.2,.6,.2,1.2) 0.3s, opacity 0.6s ease 0.4s;
          transform-origin: 50% 0;
        }
        .envelope-wrap.open .letter-paper {
          transform: translateY(0) rotateX(0) scale(1);
          opacity: 1; pointer-events: auto;
        }
        .letter-paper::before {
          content: ""; position: absolute; top: 20px; left: 30px;
          width: 24px; height: 24px; background: var(--rose);
          border-radius: 50%; opacity: 0.85;
          box-shadow: 0 0 0 4px var(--cream), 0 0 0 5px var(--rose-deep);
          background-image: radial-gradient(circle at 30% 30%, var(--gold-bright), var(--rose) 60%);
        }
        .paper-inner { font-family: var(--serif); color: var(--ink); font-size: 19px; line-height: 32px; }
        .paper-inner p { margin: 0 0 14px; }
        .paper-inner .dear { font-size: 36px; color: var(--rose-deep); margin-bottom: 18px; }
        .paper-inner .sign { font-size: 32px; color: var(--rose-deep); text-align: right; margin-top: 22px; }
      `}</style>
    </section>
  );
}

// ============ SECTION: Things I love about Umi ============
const LOVE_ITEMS = [
  { n: "01", t: "Your garden", d: "How you talk to your bunga raya every morning, calling them \"sayang\" like they understand. They do, I think." },
  { n: "02", t: "Your laugh", d: "The one that escapes before you can cover your mouth. It is my favourite sound in the world." },
  { n: "03", t: "Your patience", d: "You taught me to fold clothes seven times before I got it right, and never once raised your voice." },
  { n: "04", t: "Your nasi lemak", d: "No one else's sambal tastes like home. Many have tried. Many have failed." },
  { n: "05", t: "Your hands", d: "They have held tantrums, dough, fevers, and my whole face when I cried. They are the strongest thing I know." },
  { n: "06", t: "Your stubbornness", d: "Watering the pokok in the rain because \"they need to know I'm here.\" Umi, I love that you are like this." },
];

function ThingsILove() {
  return (
    <section className="scene dark love-scene" id="love">
      <div className="center" style={{ marginBottom: 80 }}>
        <span className="section-eyebrow" style={{ color: "var(--gold-bright)" }}>a small inventory</span>
        <h2 className="section-title" style={{ color: "var(--cream)" }}>
          things I love <em>about you</em>
        </h2>
      </div>

      <div className="love-grid">
        {LOVE_ITEMS.map((it, i) => (
          <LoveCard key={i} {...it} />
        ))}
      </div>

      <style>{`
        .love-scene { padding-top: 140px; padding-bottom: 160px; }
        .love-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 36px 48px;
          max-width: 1200px; margin: 0 auto;
        }
        .love-card {
          position: relative;
          padding: 30px 28px 32px;
          border-top: 1px solid rgba(224, 182, 88, 0.35);
          cursor: default;
          transition: background 0.5s ease;
        }
        .love-card:hover { background: rgba(245, 231, 205, 0.04); }
        .love-card .num {
          font-family: var(--display); font-size: 20px;
          color: var(--gold); letter-spacing: 0.3em; margin-bottom: 14px;
        }
        .love-card h3 {
          font-family: var(--display);
          font-size: 32px; font-weight: 400; margin: 0 0 12px;
          color: var(--cream);
          letter-spacing: -0.005em;
        }
        .love-card p {
          font-family: var(--serif);
          font-size: 18px; line-height: 1.55; color: #cdbcc4;
          margin: 0;
        }
        .love-card .leaf {
          position: absolute; top: 30px; right: 24px;
          color: var(--gold); opacity: 0;
          transition: opacity 0.5s ease, transform 0.6s ease;
          transform: translateY(8px) rotate(-12deg);
        }
        .love-card:hover .leaf { opacity: 0.6; transform: translateY(0) rotate(-6deg); }
      `}</style>
    </section>
  );
}

function LoveCard({ n, t, d }) {
  return (
    <div className="love-card">
      <div className="num">{n}</div>
      <h3>{t}</h3>
      <p>{d}</p>
      <div className="leaf"><BloomMark size={28} petals={5} /></div>
    </div>
  );
}

// ============ SECTION: Photo Gallery ============
const PHOTOS = [
  { caption: "1981 — Umi at sixteen, on her father's bicycle.", year: "1981", color: "#b86a7a", rot: -3 },
  { caption: "1996 — newlywed, in the garden you would later make magnificent.", year: "1996", color: "#8a9c70", rot: 2 },
  { caption: "2003 — me, four, holding your finger like it was a rope.", year: "2003", color: "#c89b3c", rot: -2 },
  { caption: "2011 — the year you taught me to ride a bicycle. I fell six times.", year: "2011", color: "#8a3a4a", rot: 3 },
  { caption: "2019 — Hari Raya, three trays of kuih, all yours.", year: "2019", color: "#3d2547", rot: -1 },
  { caption: "2024 — your bunga raya finally bloomed yellow.", year: "2024", color: "#e0b658", rot: 2 },
];

function Gallery() {
  return (
    <section className="scene gallery-scene" id="gallery">
      <div className="center" style={{ marginBottom: 70 }}>
        <span className="section-eyebrow">forty-five years, in pictures</span>
        <h2 className="section-title">a small <em>album</em></h2>
        <p className="ink-soft" style={{ maxWidth: 520, margin: "0 auto", fontSize: 18, lineHeight: 1.55 }}>
          Drop your real photos in later — for now these are placeholders, but each one has a memory attached.
        </p>
      </div>

      <div className="polaroid-grid">
        {PHOTOS.map((p, i) => (
          <Polaroid key={i} {...p} idx={i} />
        ))}
      </div>

      <style>{`
        .gallery-scene { background: var(--cream); padding-bottom: 160px; }
        .polaroid-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 70px 36px;
          max-width: 1200px; margin: 0 auto;
          padding: 20px;
        }
        .polaroid {
          background: #fff;
          padding: 16px 16px 60px;
          box-shadow: 0 10px 30px rgba(42, 24, 48, 0.18), 0 1px 0 rgba(0,0,0,0.05);
          transform: rotate(var(--rot, 0deg));
          transition: transform 0.4s cubic-bezier(.3,.7,.3,1.3), box-shadow 0.4s ease;
          cursor: grab;
          position: relative;
        }
        .polaroid:hover {
          transform: rotate(0deg) translateY(-10px) scale(1.04);
          box-shadow: 0 30px 60px rgba(42, 24, 48, 0.28);
          z-index: 5;
        }
        .polaroid .photo {
          aspect-ratio: 1/1;
          background: var(--ph, #b86a7a);
          background-image:
            radial-gradient(circle at 30% 25%, rgba(255,255,255,0.25), transparent 50%),
            radial-gradient(circle at 70% 75%, rgba(0,0,0,0.18), transparent 50%);
          position: relative; overflow: hidden;
        }
        .polaroid .photo-year {
          position: absolute; bottom: 10px; right: 12px;
          font-family: var(--display);
          font-size: 18px; color: rgba(255,255,255,0.7);
          letter-spacing: 0.2em;
        }
        .polaroid .photo-icon {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          color: rgba(255,255,255,0.5);
        }
        .polaroid .caption {
          position: absolute; bottom: 14px; left: 16px; right: 16px;
          font-family: var(--script); font-size: 19px; color: var(--ink);
          line-height: 1.2;
        }
        .polaroid .pin {
          position: absolute; top: -8px; left: 50%; transform: translateX(-50%);
          width: 14px; height: 14px; border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #d97a8a, #8a3a4a);
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
      `}</style>
    </section>
  );
}

function Polaroid({ caption, year, color, rot, idx }) {
  // alternating photo placeholder icons
  const icons = [<BloomMark size={70} key="b" />, <LeafSprig size={80} key="l" />, <FloralSpray size={80} key="f" />];
  return (
    <div className="polaroid" style={{ "--rot": `${rot}deg`, "--ph": color }}>
      <div className="pin" />
      <div className="photo">
        <div className="photo-icon">{icons[idx % icons.length]}</div>
        <div className="photo-year">{year}</div>
      </div>
      <div className="caption">{caption}</div>
    </div>
  );
}

Object.assign(window, { Letter, ThingsILove, Gallery });
