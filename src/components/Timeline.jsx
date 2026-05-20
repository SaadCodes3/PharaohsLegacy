

// ─── Timeline ─────────────────────────────────────────────────────────────────
function Timeline({ theme }) {
  const events = [
    { year: "3100 ق.م", event: "توحيد مصر العليا والسفلى على يد الملك مينا", icon: "🔱" },
    { year: "2560 ق.م", event: "بناء الهرم الأكبر لخوفو في الجيزة", icon: "🔺" },
    { year: "1350 ق.م", event: "الثورة الدينية لأخناتون والديانة التوحيدية", icon: "☀️" },
    { year: "1274 ق.م", event: "معركة قادش — أعظم معارك رمسيس الثاني", icon: "⚔️" },
    { year: "332 ق.م", event: "فتح الإسكندر الأكبر لمصر وتأسيس الإسكندرية", icon: "🏛️" },
    { year: "30 ق.م", event: "انتهاء عصر الفراعنة بوفاة كليوباترا", icon: "🐍" },
  ];
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", padding: "0 12px" }}>
      <div className="tl-line" style={{ position: "absolute", right: "calc(50% - 1px)", top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom,transparent,${theme.gold}70,transparent)` }} />
      {events.map((e, i) => (
        <div key={i} className="tl-item" style={{ display: "flex", flexDirection: i % 2 === 0 ? "row" : "row-reverse", alignItems: "center", gap: 18, marginBottom: 40 }}>
          <div style={{ flex: 1, textAlign: i % 2 === 0 ? "right" : "left", padding: "0 6px" }}>
            <div style={{ color: theme.text, fontWeight: 700, fontSize: 15, marginBottom: 5 }}>{e.year}</div>
            <div style={{ color: theme.text, fontSize: 15, lineHeight: 1.7, opacity: 0.84 }}>{e.event}</div>
          </div>
          <div style={{ width: 48, height: 48, borderRadius: "50%", flexShrink: 0, background: `radial-gradient(circle,${theme.gold}28,#1A1408)`, border: `2px solid ${theme.gold}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, zIndex: 2 }}>{e.icon}</div>
          <div className="tl-spacer" style={{ flex: 1 }} />
        </div>
      ))}
    </div>
  );
}

export default Timeline;