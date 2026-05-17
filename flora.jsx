// Small reusable floral / decorative SVGs for the "planting flowers" motif.
// All use currentColor so they pick up the surrounding text color.

function FloralSpray({ size = 120, style = {} }) {
  return (
    <svg viewBox="0 0 120 160" width={size} height={(size * 160) / 120} style={style}>
      <g className="flower-stroke">
        <path d="M60 158 C60 130, 58 100, 62 70 C66 40, 60 20, 60 6" />
        <path d="M60 130 C 48 122, 38 118, 28 122" />
        <path d="M60 110 C 72 102, 84 100, 92 104" />
        <path d="M60 88 C 50 82, 42 78, 34 80" />
        <path d="M60 70 C 70 64, 78 60, 86 62" />
      </g>
      {/* leaves */}
      <g className="flower-fill" opacity="0.85">
        <path d="M28 122 C20 118, 14 110, 12 100 C22 102, 30 110, 32 122 Z" />
        <path d="M92 104 C100 100, 106 92, 108 82 C98 84, 90 92, 88 104 Z" />
        <path d="M34 80 C28 76, 22 70, 22 60 C30 64, 36 72, 36 82 Z" />
        <path d="M86 62 C92 56, 96 48, 96 38 C88 42, 82 50, 82 60 Z" />
      </g>
      {/* top bloom */}
      <g transform="translate(60 6)">
        <circle r="3.5" className="flower-fill" />
        {[0, 60, 120, 180, 240, 300].map(a => (
          <ellipse key={a} cx="0" cy="-9" rx="4" ry="7" className="flower-fill"
            transform={`rotate(${a})`} opacity="0.85" />
        ))}
      </g>
    </svg>
  );
}

function BloomMark({ size = 40, petals = 6, style = {} }) {
  return (
    <svg viewBox="-25 -25 50 50" width={size} height={size} style={style}>
      {Array.from({ length: petals }).map((_, i) => {
        const a = (i * 360) / petals;
        return <ellipse key={i} cx="0" cy="-12" rx="5" ry="9" className="flower-fill"
          transform={`rotate(${a})`} opacity="0.9" />;
      })}
      <circle r="4" fill="var(--gold-bright)" />
    </svg>
  );
}

function LeafSprig({ size = 60, style = {}, flip = false }) {
  return (
    <svg viewBox="0 0 80 120" width={size} height={(size * 120) / 80}
      style={{ ...style, transform: flip ? "scaleX(-1)" : undefined }}>
      <g className="flower-stroke">
        <path d="M40 116 C 40 90, 42 60, 40 30 C 38 14, 40 6, 40 4" />
        <path d="M40 96 C 30 90, 22 86, 14 88" />
        <path d="M40 80 C 50 74, 58 70, 66 72" />
        <path d="M40 60 C 30 54, 22 50, 16 52" />
        <path d="M40 44 C 50 38, 58 34, 64 36" />
      </g>
      <g className="flower-fill" opacity="0.7">
        <path d="M14 88 C 8 84, 4 78, 4 70 C 12 72, 18 78, 20 88 Z" />
        <path d="M66 72 C 72 68, 76 62, 76 54 C 68 56, 62 62, 60 72 Z" />
        <path d="M16 52 C 10 48, 6 42, 6 34 C 14 36, 20 42, 22 52 Z" />
        <path d="M64 36 C 70 32, 74 26, 74 18 C 66 20, 60 26, 58 36 Z" />
      </g>
    </svg>
  );
}

function Wreath({ size = 220, style = {} }) {
  return (
    <svg viewBox="-110 -110 220 220" width={size} height={size} style={style}>
      <g className="flower-stroke" opacity="0.8">
        <circle r="80" />
      </g>
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i * 360) / 16;
        return (
          <g key={i} transform={`rotate(${a}) translate(0 -80)`}>
            <ellipse cx="0" cy="0" rx="6" ry="14" className="flower-fill" opacity="0.7" />
          </g>
        );
      })}
      {[30, 150, 270].map(a => (
        <g key={a} transform={`rotate(${a}) translate(0 -80)`}>
          <BloomMark size={28} />
        </g>
      ))}
    </svg>
  );
}

Object.assign(window, { FloralSpray, BloomMark, LeafSprig, Wreath });
