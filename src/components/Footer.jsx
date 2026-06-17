import { SECTIONS, SECTION_IDS } from "../data/sections";
import { goTo } from "../utils/scroll";

export default function Footer({ theme, setActive }) {
  return (
    <footer
      style={{
        width: "100%",
        background: theme.footer,
        borderTop: `1px solid ${theme.gold}20`,
        padding: "42px 28px",
        textAlign: "center",
        transition: "background 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontSize: 36,
            marginBottom: 10,
          }}
        >
          𓂀
        </div>

        <div
          style={{
            color: theme.gold,
            fontSize: 16,
            fontWeight: 700,
            marginBottom: 5,
          }}
        >
          PharaohsLegacy
        </div>

        <div
          style={{
            color: theme.textSecondary,
            fontSize: 12,
            marginBottom: 22,
          }}
        >
          © 2026 جميع الحقوق محفوظة — رحلة عبر آلاف السنين من التاريخ
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {SECTIONS.map((l) => (
            <button
              key={l}
              onClick={() => {
                setActive(l);
                goTo(SECTION_IDS[l]);
              }}
              style={{
                background: "none",
                border: "none",
                color: theme.gray,
                cursor: "pointer",
                fontSize: 12,
                padding: "5px 13px",
                fontFamily: "'Noto Naskh Arabic',serif",
                borderRadius: 4,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = theme.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = theme.gray)}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}