// ============ SECTION: Timeline ============
const TIMELINE = [
  { year: "1981", title: "lahir", body: "Born in Kuantan, the second of five. They named you after a flower." },
  { year: "1999", title: "pergi belajar", body: "Left home for university with one suitcase and Tok's tasbih in your pocket." },
  { year: "2003", title: "married Ayah", body: "It rained the whole akad. You said it was good luck. It was." },
  { year: "2005", title: "you became Umi", body: "Me. I arrived on a Tuesday. You held me before anyone else did." },
  { year: "2012", title: "the garden begins", body: "First pot of bunga raya on the back balcony. It died. You bought another." },
  { year: "2018", title: "the cookbook era", body: "You wrote down recipes you'd cooked from memory for forty years. The notebook is sacred." },
  { year: "2023", title: "first solo trip", body: "Three days in Penang, just you and your camera. You came back radiant." },
  { year: "2026", title: "forty-five", body: "Here. Now. The middle of your story, and the best chapter so far." },
];

function Timeline() {
  return (
    <section className="scene dark timeline-scene" id="timeline">
      <div className="center" style={{ marginBottom: 80 }}>
        <span className="section-eyebrow" style={{ color: "var(--gold-bright)" }}>the long way around</span>
        <h2 className="section-title" style={{ color: "var(--cream)" }}>
          forty-five <em>years of you</em>
        </h2>
      </div>

      <div className="timeline">
        <div className="spine">
          <div className="spine-line" />
          <div className="spine-start"><BloomMark size={28} /></div>
          <div className="spine-end"><BloomMark size={36} petals={8} /></div>
        </div>

        {TIMELINE.map((e, i) => (
          <TLEvent key={e.year} {...e} side={i % 2 === 0 ? "L" : "R"} />
        ))}
      </div>

      <style>{`
        .timeline-scene { padding-bottom: 180px; }
        .timeline {
          position: relative; max-width: 1100px; margin: 0 auto;
          padding: 40px 0;
        }
        .spine {
          position: absolute; left: 50%; top: 0; bottom: 0; transform: translateX(-50%);
          width: 2px;
        }
        .spine-line { width: 1px; height: 100%; margin: 0 auto;
          background: linear-gradient(to bottom, transparent, var(--gold) 40px, var(--gold) calc(100% - 40px), transparent);
          opacity: 0.5;
        }
        .spine-start, .spine-end { position: absolute; left: 50%; transform: translateX(-50%); color: var(--gold-bright); }
        .spine-start { top: -10px; }
        .spine-end { bottom: -10px; }

        .tl-event {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 80px 1fr;
          gap: 0;
          padding: 30px 0;
          align-items: center;
        }
        .tl-event .dot {
          width: 14px; height: 14px; border-radius: 50%;
          background: var(--gold-bright); margin: 0 auto;
          box-shadow: 0 0 0 4px var(--plum), 0 0 0 5px var(--gold);
          position: relative;
        }
        .tl-card {
          background: rgba(245, 231, 205, 0.04);
          border: 1px solid rgba(224, 182, 88, 0.18);
          padding: 22px 26px 24px;
          backdrop-filter: blur(4px);
          transition: transform 0.4s ease, background 0.4s ease, border-color 0.4s ease;
        }
        .tl-card:hover {
          background: rgba(245, 231, 205, 0.08);
          border-color: rgba(224, 182, 88, 0.4);
          transform: translateY(-4px);
        }
        .tl-card .year {
          font-family: var(--display); font-size: 28px; color: var(--gold-bright);
          letter-spacing: 0.2em; margin-bottom: 6px;
        }
        .tl-card h3 {
          font-family: var(--script); font-size: 36px; color: var(--cream);
          font-weight: 400; margin: 0 0 10px; line-height: 1;
        }
        .tl-card p { margin: 0; color: #cdbcc4; font-size: 17px; line-height: 1.55; }

        .tl-event.L .tl-card { grid-column: 1; text-align: right; }
        .tl-event.L .spacer { grid-column: 3; }
        .tl-event.R .spacer { grid-column: 1; }
        .tl-event.R .tl-card { grid-column: 3; text-align: left; }
        .tl-event .dot { grid-column: 2; }

        @media (max-width: 720px) {
          .tl-event { grid-template-columns: 30px 1fr; }
          .spine { left: 15px; transform: none; }
          .tl-event .dot { grid-column: 1; }
          .tl-event.L .tl-card, .tl-event.R .tl-card { grid-column: 2; text-align: left; }
          .spacer { display: none; }
        }
      `}</style>
    </section>
  );
}
function TLEvent({ year, title, body, side }) {
  return (
    <div className={"tl-event " + side}>
      <div className="dot" />
      <div className="tl-card">
        <div className="year">{year}</div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div className="spacer" />
    </div>
  );
}

// ============ SECTION: Family wishes ============
const WISHES = [
  { from: "Ayah", role: "your husband, 23 years", text: "Twenty-three years and you still surprise me. Selamat hari lahir, my love. Here's to forty-five more, kalau Tuhan izinkan.", tone: "rose" },
  { from: "Angah", role: "your second", text: "Umi, terima kasih for the late-night Maggi and the not-asking-questions. I owe you everything. Sayang Umi.", tone: "gold" },
  { from: "Adik", role: "your youngest", text: "You're the only person who lets me steal her clothes without complaining (out loud). I love you, Umi. You are my best friend.", tone: "sage" },
  { from: "Mak Long", role: "your eldest sister", text: "Adik kecil. Forty-five looks good on you. Remember when you cried because I wouldn't share my pencil? I would share it now.", tone: "rose" },
  { from: "Nenek", role: "your mother", text: "Anak Mak. You are still my baby. Panjang umur, murah rezeki, dan sentiasa dilindungi Allah.", tone: "gold" },
  { from: "Cik Wan", role: "neighbour, friend, accomplice", text: "Kakak Yati! The garden gossip is not the same without you on Sunday mornings. May your bunga raya always bloom.", tone: "sage" },
];

function Wishes() {
  return (
    <section className="scene wishes-scene" id="wishes">
      <div className="center" style={{ marginBottom: 70 }}>
        <span className="section-eyebrow">whispers from the people who love you</span>
        <h2 className="section-title">a chorus of <em>doa</em></h2>
      </div>

      <div className="wishes-grid">
        {WISHES.map((w, i) => <WishCard key={i} {...w} idx={i} />)}
      </div>

      <style>{`
        .wishes-scene { background: var(--cream); padding-bottom: 160px; }
        .wishes-grid {
          column-count: 3;
          column-gap: 28px;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (max-width: 900px) { .wishes-grid { column-count: 2; } }
        @media (max-width: 560px) { .wishes-grid { column-count: 1; } }
        .wish {
          break-inside: avoid;
          margin: 0 0 28px;
          padding: 28px 26px 22px;
          background: #fbf3e2;
          box-shadow: 0 10px 30px rgba(42, 24, 48, 0.10);
          border-top: 3px solid var(--accent, var(--rose));
          position: relative;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .wish:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(42, 24, 48, 0.18); }
        .wish .quote-mark {
          position: absolute; top: 12px; right: 18px;
          font-family: var(--display); font-size: 56px; color: var(--accent);
          opacity: 0.25; line-height: 1;
        }
        .wish p {
          font-family: var(--serif); font-size: 18px; line-height: 1.55;
          color: var(--ink); margin: 0 0 20px;
        }
        .wish .from {
          font-family: var(--script); font-size: 26px; color: var(--accent);
          line-height: 1; margin-bottom: 2px;
        }
        .wish .role {
          font-family: var(--serif); font-size: 13px; color: var(--ink-soft);
          letter-spacing: 0.12em; text-transform: uppercase;
        }
      `}</style>
    </section>
  );
}
function WishCard({ from, role, text, tone, idx }) {
  const colors = { rose: "var(--rose)", gold: "var(--gold-deep)", sage: "var(--sage)" };
  return (
    <div className="wish" style={{ "--accent": colors[tone] }}>
      <span className="quote-mark">"</span>
      <p>{text}</p>
      <div className="from">{from}</div>
      <div className="role">{role}</div>
    </div>
  );
}

// ============ SECTION: Recipe ============
function Recipe() {
  return (
    <section className="scene dark recipe-scene" id="recipe">
      <div className="recipe-wrap">
        <div className="recipe-intro">
          <span className="section-eyebrow" style={{ color: "var(--gold-bright)" }}>from your kitchen, to mine</span>
          <h2 className="section-title" style={{ color: "var(--cream)" }}>
            the things <em>you taught me</em>
          </h2>
          <p style={{ color: "#cdbcc4", fontSize: 18, lineHeight: 1.65, maxWidth: 460 }}>
            Every recipe is a hand-me-down. You never wrote them down — you let me
            stand on a stool and watch, year after year, until my hands knew. This is the one
            I make when I miss you.
          </p>
          <div className="taught-list">
            <div><span>·</span> how to find a ripe mango by smell, never by squeeze</div>
            <div><span>·</span> that sambal is patience, not heat</div>
            <div><span>·</span> when to bend low to a flower, and when to leave it alone</div>
            <div><span>·</span> the trick to folding kuih lapis without tearing it</div>
            <div><span>·</span> that "tak apa" is the most powerful sentence in the language</div>
          </div>
        </div>

        <div className="recipe-card">
          <div className="recipe-card-inner">
            <div className="recipe-header">
              <span className="recipe-kicker">Umi's recipe №07</span>
              <h3>Nasi Lemak Umi</h3>
              <p className="recipe-meta">serves the whole family · 1 hour · best on Sunday morning</p>
            </div>
            <div className="recipe-cols">
              <div className="col">
                <h4>bahan</h4>
                <ul>
                  <li>2 cawan beras, jasmine</li>
                  <li>1 cawan santan, fresh if you can</li>
                  <li>2 helai daun pandan, knotted</li>
                  <li>secubit garam</li>
                  <li>kayu manis, 1 inch</li>
                  <li>untuk sambal: cili kering, bawang, belacan, gula merah, asam jawa</li>
                  <li>ikan bilis, kacang, telur, timun — to plate</li>
                </ul>
              </div>
              <div className="col">
                <h4>cara</h4>
                <ol>
                  <li>Rinse the rice three times. Three. Always.</li>
                  <li>Steam rice with santan, pandan, garam, kayu manis. Do not stir.</li>
                  <li>For the sambal: blend, then simmer slowly. Patience, sayang.</li>
                  <li>Fry ikan bilis until your kitchen smells like a Saturday.</li>
                  <li>Plate with timun, kacang, telur. Serve hot.</li>
                </ol>
                <p className="rnote">Umi's note — "Kalau nampak macam tak cukup pedas, biarkan. It will deepen overnight."</p>
              </div>
            </div>
          </div>
          <div className="recipe-tape t1" />
          <div className="recipe-tape t2" />
        </div>
      </div>

      <style>{`
        .recipe-scene { padding-bottom: 160px; }
        .recipe-wrap {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          max-width: 1200px; margin: 0 auto;
          align-items: start;
        }
        @media (max-width: 900px) { .recipe-wrap { grid-template-columns: 1fr; } }
        .recipe-intro { padding-top: 20px; }
        .taught-list {
          margin-top: 30px; font-family: var(--serif);
          font-size: 17px; color: #cdbcc4; line-height: 1.85;
        }
        .taught-list span { color: var(--gold-bright); margin-right: 8px; }

        .recipe-card {
          position: relative;
          background: #fbf3e2;
          background-image:
            repeating-linear-gradient(to bottom, transparent 0 31px, rgba(184,106,122,0.10) 31px 32px),
            linear-gradient(180deg, #fbf3e2, #f5e7cd);
          color: var(--ink);
          padding: 50px 50px 40px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(143,107,31,0.08);
          transform: rotate(-1deg);
        }
        .recipe-card-inner { font-family: var(--serif); }
        .recipe-card::before {
          content: ""; position: absolute; left: 60px; top: 0; bottom: 0;
          width: 1px; background: var(--rose); opacity: 0.4;
        }
        .recipe-kicker {
          font-family: var(--script); color: var(--rose-deep); font-size: 20px;
        }
        .recipe-card h3 {
          font-family: var(--display); font-size: 44px; font-weight: 400;
          margin: 4px 0 6px; color: var(--plum);
        }
        .recipe-meta { font-style: italic; color: var(--ink-soft); margin: 0 0 24px; font-size: 15px; }
        .recipe-cols { display: grid; grid-template-columns: 1fr 1.4fr; gap: 30px; }
        @media (max-width: 560px) { .recipe-cols { grid-template-columns: 1fr; } }
        .recipe-cols h4 {
          font-family: var(--display); font-size: 20px; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--rose-deep); margin: 0 0 12px;
        }
        .recipe-cols ul, .recipe-cols ol { margin: 0 0 14px; padding-left: 18px; font-size: 16px; line-height: 1.7; }
        .recipe-cols li { margin-bottom: 4px; }
        .rnote {
          font-family: var(--script); font-size: 19px; color: var(--rose-deep);
          margin-top: 14px; line-height: 1.4;
        }
        .recipe-tape {
          position: absolute; width: 90px; height: 28px;
          background: rgba(255, 248, 220, 0.6);
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        .recipe-tape.t1 { top: -14px; left: 30px; transform: rotate(-8deg); }
        .recipe-tape.t2 { bottom: -14px; right: 50px; transform: rotate(6deg); }
      `}</style>
    </section>
  );
}

Object.assign(window, { Timeline, Wishes, Recipe });
