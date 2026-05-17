// ============ SECTION: A letter from Along ============

function Letter() {
  const [open, setOpen] = React.useState(false);

  return (
    <section className="scene letter-scene" id="letter">
      <div className="reveal-on-scroll center" style={{ marginBottom: 60 }}>
        <span className="section-eyebrow">sepucuk surat nukilan rasa</span>
        <h2 className="section-title">baca yang <em>ni dulu</em></h2>
        <div className="rule">daripada anak sulung Umi</div>
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
              untuk Umi tercinta
            </text>
            <line x1="160" y1="276" x2="320" y2="276" stroke="var(--ink-soft)" strokeWidth="0.5" opacity="0.4" />
          </svg>
          {!open && <span className="open-hint script">click to open</span>}
        </button>

        <div className="letter-paper" aria-hidden={!open}>
          <div className="paper-inner">
            <p className="dear script">Ke hadapan Umi,</p>
            <p>
              Empat puluh lima tahun. Tahun ni rasa cukup istimewa bukan kerana angkanya, tapi kerana
              setiap pagi yang damai, dan setiap benih yang Umi siram dengan kasih hingga mekar gembira.
            </p>
            <p>
              Website ni Along buat sebab ayat atas kertas tak lagi dapat tampung luasnya rasa terima kasih
              along kat umi. Skrol ke bawah, dan Umi akan jumpa sebiji kek untuk mengiringi bait doa, seisi taman penuh
              memori, montaj kenangan, dan himpunan ucapan yang moga-moga dapat buat Umi rasa gembira.
            </p>
            <p>
              Umilah tempat berpaut yang paling kukuh dalam hidup ni. Sayang Umi seluas langit, lebih daripada
              indahnya hamparan bintang di langit malam.
            </p>
            <div className="sign-block">
              <img src="pics/signature.png" alt="tandatangan Along" className="sig-img" />
              <p className="sign script">anak Umi<br/>Along</p>
            </div>
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
        .paper-inner .sign { font-size: 32px; color: var(--rose-deep); text-align: right; margin-top: 4px; }
        .sign-block { display: flex; flex-direction: column; align-items: flex-end; margin-top: 22px; }
        .sig-img { height: 60px; width: auto; opacity: 0.85; margin-bottom: 4px; }
      `}</style>
    </section>
  );
}

// ============ SECTION: Things I love about Umi ============
const LOVE_ITEMS = [
  { n: "01", t: "Senyuman Umi", d: "Senyuman Umi selalu buat rumah rasa lebih ceria. Kadang-kadang tak perlu cakap apa-apa pun, cukup Umi senyum, suasana terus rasa tenang." },
  { n: "02", t: "Pokok Umi", d: "Along masih ingat macam mana Umi boleh marah bila bola kena pokok Umi, macam pokok tu pun boleh rasa sakit. Tapi sebenarnya itu yang buat kami tahu yang semua benda Umi jaga dengan penuh kasih sayang." },
  { n: "03", t: "Kesabaran Umi", d: "Umi ajar Along lipat baju berkali-kali sampai betul. Sampai sekarang pun Along rasa macam masih tak betul-betul pandai, tapi Umi tetap sabar dan okay je dengan tu." },
  { n: "04", t: "Masakan Umi", d: "Daging goreng, sotong celup tepung, dan semua masakan Umi memang terbaik dunia. Makan dekat mana-mana pun tetap tak boleh lawan air tangan Umi." },
  { n: "05", t: "Tangan Umi", d: "Tangan Umi pernah jaga kami masa sakit dan siapkan macam-macam untuk kami." },
  { n: "06", t: "Kedegilan dan Kerisauan Umi", d: "Umi boleh siram pokok walaupun hujan, kemas rumah macam tiada hari esok walaupun Ayah dah suruh berhenti, dan tetap cari kami bila kami keluar walaupun kami semua dah besar. Kadang-kadang nampak macam tak perlu, tapi sebenarnya tulah cara Umi sayang kami." },
];

function ThingsILove() {
  return (
    <section className="scene dark love-scene" id="love">
      <div className="center" style={{ marginBottom: 80 }}>
        <span className="section-eyebrow" style={{ color: "var(--gold-bright)" }}>perkara kecil yang Along selalu ingat</span>
        <h2 className="section-title" style={{ color: "var(--cream)" }}>
          tentang <em>Umi</em>
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
  // top row: left → right
  { caption: "Umi sentiasa pandai menghiburkan suasana dengan gelak tawa dan gurau senda.", img: "pics/WhatsApp Image 2026-05-17 at 18.10.57.jpeg", rot: -3 },
  { caption: "Umi sentiasa jaga pemakanan kami, walaupun kami sendiri kadang-kadang tak reti nak jaga diri.", img: "pics/WhatsApp Image 2026-05-17 at 18.10.57 (2).jpeg", rot: 2 },
  { caption: "Di sebalik kegusaran dan kesusahan Umi, Umi tetap pastikan kami sentiasa gembira.", img: "pics/WhatsApp Image 2026-05-17 at 18.10.57 (3).jpeg", rot: -1 },
  { caption: "Umi selalu nak bawa kita ke mana-mana, sebab bagi Umi, masa bersama keluarga itu paling berharga.", img: "pics/WhatsApp Image 2026-05-17 at 18.10.57 (1).jpeg", rot: 3 },
  // bottom row: left → right
  { caption: "Umi selalu tekankan agama dulu. Along rasa gembira sangat dapat tunaikan umrah dengan Umi.", img: "pics/WhatsApp Image 2026-05-17 at 18.10.58 (2).jpeg", rot: -2 },
  { caption: "Umi selalu pastikan kami nampak segak dan cantik, walaupun kami kadang-kadang tak kisah pun.", img: "pics/WhatsApp Image 2026-05-17 at 18.10.58.jpeg", rot: 2 },
  { caption: "Semoga keluarga kita kekal bahagia sampai bila-bila.", img: "pics/WhatsApp Image 2026-05-17 at 18.10.59.jpeg", rot: -1 },
  { caption: "Tak kira sejauh mana jarak memisahkan, Umi tetap luangkan segalanya untuk lihat sendiri keadaan kami.", img: "pics/WhatsApp Image 2026-05-17 at 18.10.58 (1).jpeg", rot: 1 },
];

function Gallery() {
  return (
    <section className="scene gallery-scene" id="gallery">
      <div className="center" style={{ marginBottom: 70 }}>
        <span className="section-eyebrow">kenangan sepanjang tahun</span>
        <h2 className="section-title">album kecil <em>untuk Umi</em></h2>
        <p className="ink-soft" style={{ maxWidth: 520, margin: "0 auto", fontSize: 18, lineHeight: 1.55 }}>
          Beberapa kenangan kecil yang mengingatkan Along betapa besarnya kasih sayang Umi dalam hidup kami.
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
          grid-template-columns: repeat(4, 1fr);
          gap: 60px 28px;
          max-width: 1200px; margin: 0 auto;
          padding: 20px;
        }
        @media (max-width: 900px) { .polaroid-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) { .polaroid-grid { grid-template-columns: 1fr; } }
        .polaroid {
          background: #fff;
          padding: 14px 14px 18px;
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
          position: relative; overflow: hidden;
        }
        .polaroid .caption {
          margin-top: 12px;
          font-family: var(--script); font-size: 17px; color: var(--ink);
          line-height: 1.35; text-align: center;
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

function Polaroid({ caption, img, rot }) {
  return (
    <div className="polaroid" style={{ "--rot": `${rot}deg` }}>
      <div className="pin" />
      <div className="photo">
        <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
      <div className="caption">{caption}</div>
    </div>
  );
}

Object.assign(window, { Letter, ThingsILove, Gallery });
