// ─── Temple Card ──────────────────────────────────────────────────────────────
function TempleCard({ t, theme }) {
  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(
         135deg,
          ${theme.card},
       ${theme.section}
      )`,
        border: `1px solid ${theme.textSecondary}38`,
        borderRadius: 12,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: 144,
          background: `linear-gradient(
            135deg,
            ${theme.card},
            ${theme.section}
           )`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 64,
          position: "relative",
        }}
      >
        <img
          src={t.img}
          alt={t.name}
          style={{
            width: "100%",
            height: 190,
            objectFit: "cover",
            marginBottom: 16,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: theme.sand,
            
            padding: "3px 9px",
            borderRadius: 20,
            fontSize: 11,
            fontWeight: 700,
          }}
        >
          {"⭐".repeat(t.rating)}
        </div>
      </div>
      <div
        style={{
          padding: "20px 22px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 5,
            gap: 8,
          }}
        >
          <h3
            style={{
              color: theme.text,
              fontSize: 17,
              fontWeight: 800,
              margin: 0,
              flex: 1,
            }}
          >
            {t.name}
          </h3>
          <span style={{ color: theme.text, fontSize: 12, flexShrink: 0 }}>
            📍 {t.location}
          </span>
        </div>
        <div
          style={{
            color: theme.textSecondary,
            fontSize: 11,
            opacity: 0.5,
            marginBottom: 10,
          }}
        >
          {t.period}
        </div>
        <p
          style={{
            color: theme.text,
            fontSize: 13,
            lineHeight: 1.78,
            opacity: 0.83,
            marginBottom: 16,
            flex: 1,
          }}
        >
          {t.desc}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `1px solid ${theme.text}20`,
            paddingTop: 13,
          }}
        >
          <div style={{ color: theme.gold, fontWeight: 700, fontSize: 14 }}>
            {t.price} جنيه{" "}
            <span style={{ color: theme.gray, fontSize: 11, fontWeight: 400 }}>
              / شخص
            </span>
          </div>
          <div style={{ color: theme.gray, fontSize: 12 }}>🕐 {t.visits}</div>
        </div>
      </div>
    </div>
  );
}

export default TempleCard;
