import { useState } from "react";

// ─── Pharaoh Card ─────────────────────────────────────────────────────────────
function PharaohCard({ p, theme }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen((v) => !v)}
      style={{
        background: `linear-gradient(
           135deg,
            ${theme.card},
         ${theme.section}
        )`,
        border: `1px solid ${open ? theme.border + "80" : theme.border + "40"}`,
        borderRadius: 12,
        padding: 26,
        cursor: "pointer",
        transition: "border-color 0.3s, box-shadow 0.3s",
        boxShadow: open ? `0 18px 44px rgba(201,168,76,0.18)` : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 13,
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            flexShrink: 0,
            overflow: "hidden",
            background: `radial-gradient(circle,${theme.gold}30,transparent)`,
            border: `2px solid ${theme.gold}60`,
          }}
        >
          {/* 🚀 إضافة خاصية loading="lazy" هنا لتحسين الأداء وسرعة تحميل الصفحة */}
          <img
            src={p.img}
            alt={p.name}
            loading="lazy" 
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <h3
            style={{
              color: theme.textSecondary,
              fontSize: 18,
              fontWeight: 800,
              margin: 0,
            }}
          >
            {p.name}
          </h3>
          <div
            style={{ color: theme.textSecondary, fontSize: 11, marginTop: 3 }}
          >
            {p.dynasty}
          </div>
          <div
            style={{
              color: theme.textSecondary,
              fontSize: 12,
              opacity: 0.6,
              marginTop: 2,
            }}
          >
            {p.era}
          </div>
        </div>
        <span
          style={{
            color: theme.textSecondary,
            opacity: 0.55,
            fontSize: 16,
            transition: "transform 0.3s",
            transform: open ? "rotate(180deg)" : "none",
            display: "block",
          }}
        >
          ▾
        </span>
      </div>
      <p
        style={{
          color: theme.textSecondary,
          fontSize: 13,
          lineHeight: 1.85,
          opacity: 0.82,
        }}
      >
        {p.desc}
      </p>
      {open && (
        <div
          style={{
            marginTop: 14,
            padding: "13px 15px",
            background: `${theme.textSecondary}10`,
            borderRadius: 8,
            border: `1px solid ${theme.textSecondary}30`,
            animation: "fadeUp 0.3s ease",
          }}
        >
          <div
            style={{
              color: theme.textSecondary,
              fontSize: 12,
              fontWeight: 700,
              marginBottom: 9,
            }}
          >
            المعابد والمواقع المرتبطة:
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {p.temples.map((t) => (
              <span
                key={t}
                style={{
                  background: `${theme.textSecondary}20`,
                  color: theme.textSecondary,
                  padding: "4px 13px",
                  borderRadius: 20,
                  fontSize: 12,
                  border: `1px solid ${theme.textSecondary}40`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PharaohCard;