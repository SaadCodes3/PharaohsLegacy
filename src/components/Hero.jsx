import { useState, useEffect } from "react";


import { goTo } from "../utils/scroll";

import { SECTIONS, SECTION_IDS } from "../data/sections";

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ theme }) {
  const [idx, setIdx] = useState(0);
  const slides = [
    {
      title: "اكتشف أسرار الحضارة الفرعونية",
      sub: "رحلة عبر آلاف السنين من التاريخ والحضارة المصرية العريقة",
      bg: "linear-gradient(135deg,#0D0A05 0%,#2A1A05 55%,#0D0A05 100%)",
      emoji: "𓂀",
    },
    {
      title: "أهرامات الجيزة — عجائب العالم القديم",
      sub: "ارتقِ إلى أسطورة الفراعنة واكتشف أسرار الهرم الأكبر الخالد",
      bg: "linear-gradient(135deg,#1A0D00 0%,#3D2000 55%,#1A0D00 100%)",
      emoji: "🔺",
    },
    {
      title: "وادي الملوك — مدينة الأبدية",
      sub: "نقوش آلاف السنين تحكي قصص الفراعنة العظماء في وادي الملوك",
      bg: "linear-gradient(135deg,#080812 0%,#18103A 55%,#080812 100%)",
      emoji: "⚱️",
    },
  ];

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % 3), 5000);
    return () => clearInterval(t);
  }, []);

  const s = slides[idx];
  return (
    <section
      id="hero"
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: s.bg,
        transition: "background .2s ease",
        position: "relative",
        overflow: "hidden",
        direction: "rtl",
      }}
    >
      {/* Floating hieroglyphs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {"𓀀𓀂𓀄𓀆𓀈𓁐𓂀𓂂𓃀𓄀𓅀𓆀𓇋𓈖𓉐𓊹𓋴𓌀𓍀𓎛".split("").map((h, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              left: `${(i * 9.7) % 96}%`,
              top: `${(i * 13.3) % 92}%`,
              color: theme.gold,
              opacity: 0.045,
              fontSize: `${20 + (i % 16)}px`,
              animation: `floatAnim ${7 + (i % 5)}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.45}s`,
              userSelect: "none",
            }}
          >
            {h}
          </span>
        ))}
      </div>

      {/* Content */}
      <div
        style={{
          width: "100%",
          maxWidth: 860,
          margin: "0 auto",
          padding: "120px 28px 80px",
          textAlign: "center",
          zIndex: 2,
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 84,
            lineHeight: 1,
            marginBottom: 22,
            filter: "drop-shadow(0 0 28px rgba(201,168,76,0.45))",
          }}
        >
          {s.emoji}
        </div>
        <h1
          style={{
            color: theme.gold,
            fontSize: "clamp(1.75rem,4.2vw,3.4rem)",
            fontWeight: 900,
            lineHeight: 1.35,
            marginBottom: 16,
            textShadow: "0 0 50px rgba(201,168,76,0.3)",
          }}
        >
          {s.title}
        </h1>
        <p
          style={{
            color: theme.sand,
            fontSize: "clamp(0.95rem,1.8vw,1.15rem)",
            lineHeight: 1.85,
            opacity: 0.85,
            marginBottom: 42,
          }}
        >
          {s.sub}
        </p>
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            className="btn-gold"
            style={{
              padding: "14px 38px",
              fontSize: 16,
              fontFamily: "'Noto Naskh Arabic',serif",
            }}
            onClick={() => goTo("temples")}
          >
            🗺️ استكشف الآن
          </button>
          <button
            className="btn-outline"
            style={{
              padding: "14px 38px",
              fontSize: 16,
              fontFamily: "'Noto Naskh Arabic',serif",
            }}
            onClick={() => goTo("booking")}
          >
            🏺 احجز رحلة
          </button>
        </div>
      </div>

      {/* Slide dots */}
      <div
        style={{
          position: "absolute",
          bottom: 48,
          display: "flex",
          gap: 8,
          zIndex: 3,
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            onClick={() => setIdx(i)}
            style={{
              width: i === idx ? 30 : 10,
              height: 10,
              borderRadius: 5,
              background: i === idx ? theme.gold : "#ffffff2e",
              cursor: "pointer",
              transition: "all 0.4s",
            }}
          />
        ))}
      </div>

      <div
        onClick={() => goTo("stats")}
        style={{
          position: "absolute",
          bottom: 86,
          left: "50%",
          color: theme.gold,
          opacity: 0.5,
          animation: "bounceY 2s infinite",
          fontSize: 22,
          cursor: "pointer",
        }}
      >
        ↓
      </div>
    </section>
  );
}

export default Hero;
