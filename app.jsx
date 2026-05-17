// ============ App composition ============

function App() {
  // Simple scroll reveal
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

  return (
    <ConfettiProvider>
      <Hero />
      <Letter />
      <ThingsILove />
      <Gallery />
      <Timeline />
      <Wishes />
      <Recipe />
      <Playlist />
      <Gift />
      <Signature />
    </ConfettiProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
