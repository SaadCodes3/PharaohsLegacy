import { useState, useEffect } from "react";
import { goTo } from "../utils/scroll";
import { SECTIONS, SECTION_IDS } from "../data/sections";

import heroImg1 from "../assets/background/hero1.webp";
import heroImg2 from "../assets/background/hero2.webp";
import heroImg3 from "../assets/background/hero3.webp";
function Hero({ theme }) {
  const [idx, setIdx] = useState(0);
  
  const slides = [
    {
      title: "اكتشف أسرار الحضارة الفرعونية",
      sub: "رحلة عبر آلاف السنين من التاريخ والحضارة المصرية العريقة",
      img: heroImg1, 
    },
    {
      title: "أهرامات الجيزة — عجائب العالم القديم",
      sub: "ارتقِ إلى أسطورة الفراعنة واكتشف أسرار الهرم الأكبر الخالد",
      img: heroImg2, 
    },
    {
      title: "وادي الملوك — مدينة الأبدية",
      sub: "نقوش آلاف السنين تحكي قصص الفراعنة العظماء في وادي الملوك",
      img: heroImg3,
    },
  ];

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
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
        // ─── تحسين الخلفية ───
        backgroundImage: `linear-gradient(to bottom, rgba(13, 10, 5, 0.85), rgba(20, 13, 5, 0.75)), url(${s.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // تأثير البارالاكس السينمائي أثناء السكرول
        transition: "background-image 0.8s ease-in-out", // حركة ناعمة جداً عند تبدل الصور
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
          zIndex: 1,
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
              opacity: 0.035, // تقليل الشفافية قليلاً لتندمج مع تفاصيل الصور الجديدة
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
            fontSize: 74, // تصغير بسيط ليناسب تباين الخلفية الجديدة
            lineHeight: 1,
            marginBottom: 22,
            filter: "drop-shadow(0 0 20px rgba(201,168,76,0.6))",
          }}
        >
          {s.emoji}
        </div>
        
        <h1
          style={{
            color: theme.gold,
            fontSize: "clamp(1.85rem, 4.5vw, 3.6rem)",
            fontWeight: 900,
            lineHeight: 1.35,
            marginBottom: 20,
            textShadow: "2px 4px 15px rgba(0, 0, 0, 0.9)", // تباين قوي ومحمي ضد تفاصيل الخلفية
          }}
        >
          {s.title}
        </h1>
        
        <p
          style={{
            color: "#f5ebd5", // درجة رملية فاتحة ومضيئة ومقروءة تماماً
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            lineHeight: 1.85,
            fontWeight: "500",
            marginBottom: 42,
            textShadow: "1px 2px 8px rgba(0, 0, 0, 0.9)",
          }}
        >
          {s.sub}
        </p>

        {/* ─── تحسين الـ UI للأزرار وتفادي التداخل ─── */}
        <div
          style={{
            display: "flex",
            gap: 18, // زيادة المسافة لمنع أي تداخل نهائياً
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            className="btn-gold"
            style={{
              padding: "14px 42px",
              fontSize: 16,
              fontWeight: "700",
              fontFamily: "'Noto Naskh Arabic',serif",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(201,168,76,0.3)",
            }}
            onClick={() => goTo("temples")}
          >
            🗺️ استكشف الآن
          </button>
          
          <button
            className="btn-outline"
            style={{
              padding: "14px 42px",
              fontSize: 16,
              fontWeight: "700",
              fontFamily: "'Noto Naskh Arabic',serif",
              cursor: "pointer",
              background: "transparent",
              backdropFilter: "blur(4px)", // تأثير زجاجي ناعم خلف الزر المفرغ
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
          gap: 10,
          zIndex: 3,
        }}
      >
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIdx(i)}
            style={{
              width: i === idx ? 35 : 12, // زيادة العرض للـ active لتأثير تصفح مرن ومميز
              height: 8,
              borderRadius: 4,
              background: i === idx ? theme.gold : "rgba(255, 255, 255, 0.35)",
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        ))}
      </div>

      {/* سهم الهبوط المفصل بعيداً عن أزرار التحكم لقراءة أسهل */}
      <div
        onClick={() => goTo("stats")}
        style={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          color: theme.gold,
          opacity: 0.7,
          animation: "bounceY 2s infinite",
          fontSize: 26,
          cursor: "pointer",
          zIndex: 3,
          userSelect: "none"
        }}
      >
        ↓
      </div>
    </section>
  );
}

export default Hero;