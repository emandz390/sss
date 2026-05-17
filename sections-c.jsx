// ============ SECTION: Playlist ============
const PLAYLIST = [
  { title: "Sudirman — Balik Kampung", note: "you played this every time we drove down to Kuantan" },
  { title: "Sheila Majid — Sinaran", note: "the song you sang while washing dishes" },
  { title: "P. Ramlee — Getaran Jiwa", note: "Ayah's favourite. you pretend it isn't yours too" },
  { title: "Siti Nurhaliza — Cindai", note: "Hari Raya morning, full volume, no exceptions" },
  { title: "Anuar Zain — Andainya Takdir", note: "you cried at this once. only once." },
  { title: "Faizal Tahir — Sampai Syurga", note: "the one we listened to on the way home from hospital" },
];

function Playlist() {
  const [playing, setPlaying] = React.useState(null);

  return (
    <section className="scene playlist-scene" id="playlist">
      <div className="center" style={{ marginBottom: 60 }}>
        <span className="section-eyebrow">songs that mean you</span>
        <h2 className="section-title">a mixtape, <em>for Umi</em></h2>
        <p className="ink-soft" style={{ maxWidth: 520, margin: "10px auto 0", fontSize: 17, lineHeight: 1.55 }}>
          A cassette I would have made you in 1996 if I'd been alive yet.
        </p>
      </div>

      <div className="cassette">
        <div className="cassette-body">
          <div className="cassette-label">
            <div className="label-row">
              <span className="brand">SIDE A · for Umi</span>
              <span className="dur">45 min</span>
            </div>
            <div className="label-title script">Selamat Hari Lahir</div>
            <div className="label-sub">a mixtape by Along, 2026</div>
          </div>
          <div className="reels">
            <div className={"reel " + (playing !== null ? "spin" : "")}><div className="reel-inner" /></div>
            <div className={"reel " + (playing !== null ? "spin" : "")}><div className="reel-inner" /></div>
          </div>
        </div>
        <div className="cassette-bottom">
          <div className="screw" /><div className="screw" /><div className="screw" /><div className="screw" />
        </div>
      </div>

      <ol className="track-list">
        {PLAYLIST.map((t, i) => (
          <li key={i} className={"track " + (playing === i ? "playing" : "")}>
            <button className="bare track-btn" onClick={() => setPlaying(playing === i ? null : i)}>
              <span className="track-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="track-icon">
                {playing === i ? (
                  <span className="bars"><span /><span /><span /><span /></span>
                ) : (
                  <span className="play-tri">▸</span>
                )}
              </span>
              <span className="track-title">{t.title}</span>
              <span className="track-note script">{t.note}</span>
            </button>
          </li>
        ))}
      </ol>

      <style>{`
        .playlist-scene { background: var(--cream); padding-bottom: 160px; }

        .cassette {
          width: min(560px, 92vw);
          margin: 0 auto 60px;
          filter: drop-shadow(0 30px 50px rgba(42,24,48,0.25));
        }
        .cassette-body {
          background: var(--plum);
          background-image: linear-gradient(180deg, #3d2547, #1c0f24);
          border-radius: 8px 8px 4px 4px;
          padding: 22px 22px 12px;
          position: relative;
          border: 1px solid rgba(224, 182, 88, 0.18);
        }
        .cassette-label {
          background: #fbf3e2;
          color: var(--ink);
          padding: 14px 18px 16px;
          border-radius: 3px;
          font-family: var(--serif);
          margin-bottom: 18px;
        }
        .label-row { display: flex; justify-content: space-between; font-size: 12px;
          letter-spacing: 0.2em; text-transform: uppercase; color: var(--rose-deep); }
        .label-title { font-size: 36px; line-height: 1; color: var(--plum); margin: 4px 0 2px; }
        .label-sub { font-family: var(--script); color: var(--rose); font-size: 18px; }

        .reels {
          display: flex; gap: 80px; justify-content: center;
          padding: 14px 0 22px;
        }
        .reel {
          width: 80px; height: 80px; border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #5a4255 0%, #2a1830 60%);
          border: 4px solid rgba(224,182,88,0.4);
          display: grid; place-items: center;
        }
        .reel-inner {
          width: 28px; height: 28px; border-radius: 50%;
          background: var(--gold-bright);
          position: relative;
        }
        .reel-inner::before, .reel-inner::after {
          content: ""; position: absolute; inset: 0; margin: auto;
          width: 60px; height: 4px; background: var(--gold);
          top: 50%; left: -16px; transform: translateY(-50%);
          opacity: 0.6;
        }
        .reel-inner::after { transform: translateY(-50%) rotate(60deg); }
        .reel.spin { animation: spin 2s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        .cassette-bottom {
          display: flex; justify-content: space-between;
          padding: 6px 30px;
          background: var(--plum-deep);
          border-radius: 0 0 4px 4px;
        }
        .screw { width: 10px; height: 10px; border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #8f6b1f, #2a1830); }

        .track-list {
          list-style: none; padding: 0;
          max-width: 700px; margin: 0 auto;
          border-top: 1px solid rgba(143,107,31,0.2);
        }
        .track { border-bottom: 1px solid rgba(143,107,31,0.2); }
        .track-btn {
          display: grid; grid-template-columns: 40px 36px 1fr auto; gap: 16px;
          align-items: center;
          width: 100%; padding: 18px 4px; text-align: left;
          transition: padding 0.3s ease, background 0.3s ease;
        }
        .track-btn:hover, .track.playing .track-btn {
          padding-left: 16px; background: rgba(184,106,122,0.06);
        }
        .track-num { font-family: var(--display); color: var(--rose);
          letter-spacing: 0.2em; font-size: 16px; }
        .track-icon {
          width: 36px; height: 36px; border-radius: 50%;
          background: var(--rose); color: var(--cream);
          display: grid; place-items: center; font-size: 16px;
          transition: background 0.3s ease;
        }
        .track.playing .track-icon { background: var(--gold-deep); }
        .track-title { font-family: var(--display); font-size: 22px; color: var(--ink); }
        .track-note { color: var(--ink-soft); font-size: 18px; text-align: right; }
        @media (max-width: 700px) {
          .track-btn { grid-template-columns: 32px 32px 1fr; }
          .track-note { grid-column: 1 / -1; padding-left: 80px; padding-top: 2px; }
        }

        .play-tri { transform: translateX(2px); }
        .bars { display: flex; gap: 3px; align-items: end; height: 16px; }
        .bars span {
          width: 3px; background: currentColor; height: 100%;
          animation: bar 0.9s ease-in-out infinite;
        }
        .bars span:nth-child(2) { animation-delay: 0.2s; }
        .bars span:nth-child(3) { animation-delay: 0.4s; }
        .bars span:nth-child(4) { animation-delay: 0.1s; }
        @keyframes bar {
          0%, 100% { height: 25%; }
          50% { height: 100%; }
        }
      `}</style>
    </section>
  );
}

// ============ SECTION: The Gift ============
function Gift() {
  const [opened, setOpened] = React.useState(false);
  const { burst } = useConfetti();
  const giftRef = React.useRef(null);

  const open = () => {
    if (opened) return;
    setOpened(true);
    const r = giftRef.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    burst({ x: cx, y: cy, angle: -Math.PI / 2, spread: 2.4, speed: 460, count: 120,
      colors: ["#c89b3c", "#e0b658", "#b86a7a", "#f5e7cd", "#8a9c70"] });
    setTimeout(() => burst({ x: cx - 100, y: cy, angle: -Math.PI / 2, spread: 1.2, count: 60 }), 200);
    setTimeout(() => burst({ x: cx + 100, y: cy, angle: -Math.PI / 2, spread: 1.2, count: 60 }), 400);
  };

  return (
    <section className="scene dark gift-scene" id="gift">
      <div className="center" style={{ marginBottom: 60 }}>
        <span className="section-eyebrow" style={{ color: "var(--gold-bright)" }}>one more thing</span>
        <h2 className="section-title" style={{ color: "var(--cream)" }}>
          a small <em>gift</em>
        </h2>
        <p style={{ color: "#cdbcc4", fontSize: 18, maxWidth: 480, margin: "0 auto" }}>
          {opened ? "for the woman who never asks for anything." : "click the box. it isn't much. it's everything."}
        </p>
      </div>

      <div className="gift-stage" ref={giftRef}>
        <div className={"gift " + (opened ? "opened" : "")} onClick={open}>
          <div className="gift-lid">
            <div className="ribbon-h" />
            <div className="ribbon-v" />
            <div className="bow">
              <div className="bow-l" />
              <div className="bow-r" />
              <div className="bow-knot" />
            </div>
          </div>
          <div className="gift-box">
            <div className="ribbon-h" />
            <div className="ribbon-v" />
          </div>
          <div className="gift-shadow" />
          <div className="gift-tag script">to Umi · from Along</div>
        </div>

        <div className={"gift-reveal " + (opened ? "show" : "")}>
          <div className="reveal-card">
            <div className="reveal-top">
              <BloomMark size={48} />
            </div>
            <p className="rt-eyebrow">a promise, in lieu of a present</p>
            <h3 className="rt-title">
              this year, I will <em>plant a garden</em> with you.
            </h3>
            <p className="rt-body">
              One Saturday a month. You choose the seeds, I'll do the digging.
              We'll start with the bunga raya you've been eyeing at the nursery —
              the yellow one, the one Ayah says is "too much money."
              I already bought it. It's in the boot of my car.
            </p>
            <p className="rt-body">
              Forty-five Saturdays this year, sayang. One for each year. <br/>
              Tahun ini kita berkebun sama-sama.
            </p>
            <div className="rt-sign script">— Along</div>
          </div>
        </div>
      </div>

      <style>{`
        .gift-scene { padding-bottom: 180px; }
        .gift-stage {
          position: relative; max-width: 720px; margin: 40px auto 0;
          min-height: 520px; display: flex; flex-direction: column; align-items: center;
        }
        .gift {
          position: relative; width: 260px; height: 260px;
          cursor: pointer;
          transform-style: preserve-3d;
          transition: transform 0.6s ease;
        }
        .gift:not(.opened):hover { transform: translateY(-6px) rotate(-2deg); }
        .gift-lid, .gift-box {
          position: absolute; left: 50%; transform: translateX(-50%);
          width: 260px;
          background: linear-gradient(180deg, var(--rose-deep), #5a1f2e);
          border: 1px solid rgba(224, 182, 88, 0.3);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        .gift-lid {
          top: 0; height: 60px;
          background: linear-gradient(180deg, #a14856, var(--rose-deep));
          transform-origin: bottom center;
          transition: transform 0.8s cubic-bezier(.5,-0.2,.3,1.6), opacity 0.8s ease;
          z-index: 2;
        }
        .gift.opened .gift-lid {
          transform: translateX(-50%) translateY(-200px) rotate(-30deg) scale(0.8);
          opacity: 0;
        }
        .gift-box {
          top: 50px; height: 200px;
          transition: transform 0.8s ease;
        }
        .gift.opened .gift-box {
          transform: translateX(-50%) translateY(40px) scale(0.95);
          opacity: 0.5;
        }
        .ribbon-h, .ribbon-v {
          position: absolute; background: var(--gold-bright);
          box-shadow: 0 0 6px rgba(224,182,88,0.5);
        }
        .ribbon-h { left: 0; right: 0; top: 50%; height: 14px; transform: translateY(-50%); }
        .ribbon-v { top: 0; bottom: 0; left: 50%; width: 14px; transform: translateX(-50%); }
        .gift-lid .ribbon-h { top: 50%; }
        .bow {
          position: absolute; top: -30px; left: 50%; transform: translateX(-50%);
          width: 100px; height: 50px;
        }
        .bow-l, .bow-r {
          position: absolute; width: 40px; height: 50px; border-radius: 50% 50% 50% 30%;
          background: var(--gold-bright);
          box-shadow: inset -4px 0 6px rgba(143,107,31,0.4);
        }
        .bow-l { left: 0; transform: rotate(-20deg); }
        .bow-r { right: 0; transform: rotate(20deg) scaleX(-1); }
        .bow-knot {
          position: absolute; left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          width: 22px; height: 22px; border-radius: 4px;
          background: var(--gold-deep);
        }
        .gift-shadow {
          position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%);
          width: 220px; height: 18px; border-radius: 50%;
          background: radial-gradient(ellipse at center, rgba(0,0,0,0.5), transparent 60%);
        }
        .gift-tag {
          position: absolute; bottom: -54px; left: 50%; transform: translateX(-50%);
          font-size: 22px; color: var(--gold-bright);
          background: var(--plum); padding: 0 12px;
          opacity: 0.9; white-space: nowrap;
        }

        .gift-reveal {
          position: absolute; top: 0; left: 0; right: 0;
          opacity: 0; pointer-events: none;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s;
        }
        .gift-reveal.show { opacity: 1; pointer-events: auto; transform: translateY(0); }
        .reveal-card {
          background: #fbf3e2;
          color: var(--ink);
          padding: 50px 50px 44px;
          max-width: 620px; margin: 0 auto;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
          text-align: center;
          position: relative;
        }
        .reveal-card::before, .reveal-card::after {
          content: ""; position: absolute; top: 16px; height: 60%;
          width: 1px; background: var(--gold); opacity: 0.4;
        }
        .reveal-card::before { left: 20px; }
        .reveal-card::after { right: 20px; }
        .reveal-top { color: var(--rose); margin-bottom: 16px; }
        .rt-eyebrow {
          font-family: var(--script); font-size: 22px; color: var(--rose-deep);
          margin: 0 0 8px;
        }
        .rt-title {
          font-family: var(--display); font-size: clamp(32px, 4vw, 48px);
          font-weight: 400; line-height: 1.15; margin: 0 0 20px;
          color: var(--plum);
        }
        .rt-title em {
          font-family: var(--script); font-style: normal; color: var(--rose-deep);
          font-size: 1.2em;
        }
        .rt-body {
          font-family: var(--serif); font-size: 18px; line-height: 1.65;
          color: var(--ink-soft); margin: 0 0 14px;
        }
        .rt-sign {
          margin-top: 20px;
          font-family: var(--script); font-size: 30px; color: var(--rose-deep);
        }
      `}</style>
    </section>
  );
}

// ============ SECTION: Final signature ============
function Signature() {
  return (
    <section className="scene sig-scene">
      <div className="center">
        <div style={{ color: "var(--rose)", display: "inline-block" }}>
          <Wreath size={200} />
        </div>
        <p className="display sig-up">selamat hari lahir,</p>
        <p className="script sig-name">Umi</p>
        <p className="display sig-down">empat puluh lima tahun penuh warna-warni</p>
        <div className="rule" style={{ margin: "30px auto 16px", color: "var(--rose)" }}>
          sepenuh hati kami
        </div>
        <p className="script sig-from">Daripada Along</p>
        <p style={{ fontSize: 13, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--ink-soft)", marginTop: 40 }}>
          18 Mei 2026 · dibuat dengan kasih sayang, bukan duit
        </p>
      </div>

      <style>{`
        .sig-scene { background: var(--cream); padding-top: 120px; padding-bottom: 140px; min-height: auto; }
        .sig-up { font-size: clamp(24px, 2.6vw, 36px); letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--rose-deep); margin: 24px 0 4px; }
        .sig-name { font-size: clamp(60px, 9vw, 120px); color: var(--rose-deep);
          line-height: 0.9; margin: 0 0 12px; }
        .sig-down { font-size: clamp(18px, 1.8vw, 24px); letter-spacing: 0.3em;
          text-transform: uppercase; color: var(--ink-soft); margin: 0; }
        .sig-from { font-size: 42px; color: var(--rose-deep); margin: 0; }
      `}</style>
    </section>
  );
}

Object.assign(window, { Playlist, Gift, Signature });
