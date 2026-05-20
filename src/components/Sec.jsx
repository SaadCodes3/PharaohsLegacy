

// ─── Section ──────────────────────────────────────────────────────────────────
function Sec({ id, title, subtitle,children , theme }) {
  return (
    <section id={id} style={{ width: "100%", background: theme.bg, padding: "88px 28px", direction: "rtl" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ color: theme.gold, fontSize: 11, letterSpacing: 5, textTransform: "uppercase", marginBottom: 12, opacity: 0.75 }}>◆ {subtitle} ◆</div>
          <h2 style={{ color: theme.textSecondary, fontSize: "clamp(1.55rem,3.2vw,2.5rem)", fontWeight: 900 }}>{title}</h2>
          <div style={{ width: 72, height: 3, background: `linear-gradient(90deg,transparent,${theme.gold},transparent)`, margin: "16px auto 0" }} />
        </div>
        {children}
      </div>
    </section>
  );
}
export default Sec;