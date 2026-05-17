// ============ Splash entry screen ============

function SplashScreen({ onEnter, leaving }) {
  return (
    <div className={"splash" + (leaving ? " leaving" : "")} onClick={onEnter}>
      <div className="splash-content">
        <div style={{ color: "var(--rose)", marginBottom: 20 }}>
          <BloomMark size={52} />
        </div>
        <p className="splash-greeting display">Selamat Hari Lahir</p>
        <p className="splash-name script">Umi</p>
        <p className="splash-cta">ketuk untuk masuk ↓</p>
      </div>
      <style>{`
        .splash {
          position: fixed; inset: 0; z-index: 9999;
          background: var(--plum);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          opacity: 1;
          transition: opacity 0.8s ease;
        }
        .splash.leaving { opacity: 0; pointer-events: none; }
        .splash-content { text-align: center; padding: 20px; }
        .splash-greeting {
          font-size: clamp(22px, 4vw, 38px);
          letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--cream); opacity: 0.75;
          margin: 0 0 6px;
        }
        .splash-name {
          font-size: clamp(90px, 18vw, 200px);
          color: var(--gold-bright); line-height: 0.88;
          margin: 0 0 36px;
          text-shadow: 0 4px 40px rgba(224, 182, 88, 0.3);
        }
        .splash-cta {
          font-family: var(--serif); font-size: 15px;
          color: var(--cream);
          letter-spacing: 0.3em; text-transform: uppercase;
          margin: 0;
          animation: splash-pulse 2s ease-in-out infinite;
        }
        @keyframes splash-pulse { 0%, 100% { opacity: 0.35; } 50% { opacity: 0.85; } }
      `}</style>
    </div>
  );
}

// ============ App composition ============

function App() {
  const audioRef = React.useRef(null);
  const [splashVisible, setSplashVisible] = React.useState(true);
  const [splashLeaving, setSplashLeaving] = React.useState(false);

  // Scroll reveal
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) e.target.classList.add("in");
      }
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const enterSite = () => {
    // Play on direct user gesture — works on iOS Safari and all mobile browsers
    const audio = audioRef.current;
    audio.volume = 0.35;
    audio.play().catch(() => {});

    setSplashLeaving(true);
    setTimeout(() => setSplashVisible(false), 800);
  };

  return (
    <ConfettiProvider>
      <audio
        ref={audioRef}
        loop
        src="music/10 Minute Timer with Peaceful Instrumental Worship Piano _ Goodness of God [96spRGttVyA].mp3"
      />
      {splashVisible && <SplashScreen onEnter={enterSite} leaving={splashLeaving} />}
      <Hero />
      <Letter />
      <ThingsILove />
      <Gallery />
      <Timeline />
      <VideoSection />
      <Wishes />
      <Signature />
    </ConfettiProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
