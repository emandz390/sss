// ============ App composition ============

function App() {
  const audioRef = React.useRef(null);

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

  // Background music — try autoplay, fall back to first interaction
  React.useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.35;

    const tryPlay = () => audio.play().catch(() => {});
    tryPlay();

    const onInteract = () => {
      audio.play().catch(() => {});
      document.removeEventListener("click", onInteract);
      document.removeEventListener("touchstart", onInteract);
      document.removeEventListener("keydown", onInteract);
      document.removeEventListener("scroll", onInteract);
    };

    document.addEventListener("click", onInteract);
    document.addEventListener("touchstart", onInteract);
    document.addEventListener("keydown", onInteract);
    document.addEventListener("scroll", onInteract, { once: true });

    return () => {
      document.removeEventListener("click", onInteract);
      document.removeEventListener("touchstart", onInteract);
      document.removeEventListener("keydown", onInteract);
      document.removeEventListener("scroll", onInteract);
    };
  }, []);

  return (
    <ConfettiProvider>
      <audio
        ref={audioRef}
        loop
        src="music/10 Minute Timer with Peaceful Instrumental Worship Piano _ Goodness of God [96spRGttVyA].mp3"
      />
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
