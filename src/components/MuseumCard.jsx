import { useState } from "react";

// ─── Museum Card ──────────────────────────────────────────────────────────────
function MuseumCard({ m , theme }) {
  const [done, setDone] = useState(false);
  return (
    <div className="card" style={{
      bbackground: `linear-gradient(
         135deg,
          ${theme.card},
       ${theme.section}
      )`,
      border: `1px solid ${theme.text}30`, borderRadius: 12, padding: 24,
      display: "flex", flexDirection: "column",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 13, gap: 8 }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ color: theme.text, fontSize: 16, fontWeight: 800, margin: "0 0 5px" }}>{m.name}</h3>
          <span style={{ color: theme.gray, fontSize: 12 }}>📍 {m.location}</span>
        </div>
        <div style={{ background: `${theme.gold}20`, border: `1px solid ${theme.text}40`, borderRadius: 8, padding: "7px 11px", textAlign: "center", flexShrink: 0 }}>
          <div style={{ color: theme.text, fontWeight: 800, fontSize: 12 }}>{m.pieces}</div>
          <div style={{ color: theme.gray, fontSize: 10 }}>قطعة أثرية</div>
        </div>
      </div>
      <p style={{ color: theme.text, fontSize: 13, lineHeight: 1.75, opacity: 0.82, marginBottom: 13, flex: 1 }}>{m.desc}</p>
      <div style={{ background: `${theme.pharaohRed}1E`, border: `1px solid ${theme.pharaohRed}40`, borderRadius: 8, padding: "9px 13px", marginBottom: 15 }}>
        <span style={{ color: theme.pharaohRed, fontSize: 12 }}>✨ أبرز المقتنيات: </span>
        <span style={{ color: theme.text, fontSize: 12 }}>{m.highlight}</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ color: theme.gold, fontWeight: 800, fontSize: 16 }}>{m.price} جنيه</div>
        <button className="btn-gold" style={{ padding: "9px 20px", fontSize: 13, fontFamily: "'Noto Naskh Arabic',serif" }}
          onClick={() => { setDone(true); setTimeout(() => setDone(false), 2500); }}>
          {done ? "✅ تم الحجز!" : "احجز زيارة"}
        </button>
      </div>
    </div>
  );
}

export default MuseumCard;