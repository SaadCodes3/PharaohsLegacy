import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "../styles/colors";
import { goTo } from "../utils/scroll";
import { SECTIONS, SECTION_IDS } from "../data/sections";

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar({ active, setActive, theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const nav = (sec) => {
    setActive(sec);
    setMobileOpen(false);
    goTo(SECTION_IDS[sec]);
  };

  // تحقق ذكي لمعرفة هل الثيم النشط حالياً هو الثيم الداكن أم الفاتح
  const isDark = theme === darkTheme;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,

        // ─── التحكم الديناميكي في تأثير الزجاج الضبابي ───
        // إذا قام المستخدم بعمل سكرول، يظهر التأثير الزجاجي بلون يتوافق مع الثيم (أبيض للـ Light وداكن للـ Dark)
        background: scrolled
          ? isDark 
            ? "rgba(13, 10, 5, 0.75)"   /* زجاج داكن للثيم الغامق */
            : "rgba(255, 255, 255, 0.75)" /* زجاج أبيض ناعم للثيم الفاتح */
          : "transparent", // يظل شفافاً تماماً في أعلى الصفحة قبل السكرول

        backdropFilter: scrolled ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",

        borderBottom: `1px solid ${
          scrolled
            ? isDark
              ? "rgba(201, 168, 76, 0.25)" // حدود ذهبية خفيفة جداً في الوضع الداكن
              : "rgba(0, 0, 0, 0.08)"      // حدود رمادية ناعمة تفصل البار في الوضع الفاتح
            : "transparent"
        }`,

        transition: "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.35s",
        direction: "rtl",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 28px",
          height: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          onClick={() => nav("الرئيسية")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 30, filter: isDark ? "none" : "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}>
            𓂀
          </span>

          <div>
            <div
              style={{
                color: theme.gold,
                fontSize: 20,
                letterSpacing: 2,
                fontWeight: 800,
              }}
            >
              PharaohsLegacy
            </div>
          </div>
        </div>

        {/* Desktop Links */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
          }}
        >
          {SECTIONS.map((s) => (
            <button
              key={s}
              className={`nav-btn${active === s ? " active" : ""}`}
              style={{
                fontFamily: "'Noto Naskh Arabic', serif",
                // ضبط تباين الألوان: إذا كان العنصر نشطاً يأخذ الذهبي، وإذا لم يكن، يقرأ لون النص التابع للثيم الحالي بدقة
                color: active === s ? theme.gold : theme.text,
                transition: "color 0.25s",
              }}
              onClick={() => nav(s)}
            >
              {s}
            </button>
          ))}

          {/* Theme Switcher Button */}
          <button
            onClick={() => setTheme(isDark ? lightTheme : darkTheme)}
            style={{
              background: "none",
              border: `1px solid ${theme.gold}`,
              color: theme.gold,
              padding: "4px 8px",
              borderRadius: 10,
              cursor: "pointer",
              marginRight: 12,
              fontSize: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* Booking Button */}
          <button
            className="btn-gold"
            onClick={() => nav("احجز رحلة")}
            style={{
              padding: "9px 22px",
              fontSize: 13,
              marginRight: 14,
              fontFamily: "'Noto Naskh Arabic', serif",
            }}
          >
            احجز الآن
          </button>
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          className="mobile-btn"
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: theme.gold,
            fontSize: 24,
            cursor: "pointer",
          }}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div
          style={{
            // يقرأ خلفية القائمة المنسدلة تلقائياً حسب نوع الثيم المفتوح لمنع اختفاء النصوص
            background: isDark ? "rgba(26, 20, 8, 0.96)" : "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(10px)",
            borderTop: `1px solid ${theme.gold}33`,
            padding: "12px 28px 20px",
            direction: "rtl",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        >
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => nav(s)}
              style={{
                display: "block",
                width: "100%",
                background: "none",
                border: "none",
                borderBottom: isDark ? `1px solid ${theme.gold}18` : "1px solid rgba(0,0,0,0.05)",
                color: active === s ? theme.gold : theme.text,
                fontFamily: "'Noto Naskh Arabic', serif",
                fontSize: 15,
                padding: "13px 0",
                textAlign: "right",
                cursor: "pointer",
                transition: "color 0.2s",
              }}
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;