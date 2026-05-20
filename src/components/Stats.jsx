import { facts } from "../data/facts";

import { SECTIONS, SECTION_IDS } from "../data/sections";

// ─── Stats ────────────────────────────────────────────────────────────────────
function Stats({ theme }) {
  return (
    <section
      id="stats"
      style={{ width: "100%", background: theme.bg, padding: "64px 28px" }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
          gap: 18,
        }}
      >
        {facts.map((f, i) => (
          <div
            key={i}
            className="card"
            style={{
              textAlign: "center",
              padding: "38px 18px",
              background: `linear-gradient(
              135deg,
              ${theme.card},
              ${theme.section}
            )`,
              border: `3px solid ${theme.border}30`,
              borderRadius: 12,
            }}
          >
            <div
              style={{
                fontSize: "2.2rem",
                fontWeight: 900,
                color: theme.text,
                marginBottom: 8,
              }}
            >
              {f.num}
            </div>
            <div style={{ color: theme.text, fontSize: 13, opacity: 0.78 }}>
              {f.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Stats;
