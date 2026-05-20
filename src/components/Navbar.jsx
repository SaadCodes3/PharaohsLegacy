import { useState, useEffect } from "react";

import { darkTheme, lightTheme } from "../styles/colors";

import { goTo } from "../utils/scroll";

import {
  SECTIONS,
  SECTION_IDS,
} from "../data/sections";

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

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,

        background: scrolled
          ? theme.bg
          : `${theme.bg}CC`,

        backdropFilter: "blur(14px)",

        borderBottom: `1px solid ${
          scrolled
            ? theme.gold + "44"
            : "transparent"
        }`,

        transition: "all 0.35s",

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
          <span style={{ fontSize: 30 }}>
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

        {/* Desktop */}
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
              className={`nav-btn${
                active === s ? " active" : ""
              }`}
              style={{
                fontFamily:
                  "'Noto Naskh Arabic',serif",

                color:
                  active === s
                    ? theme.gold
                    : theme.text,
              }}
              onClick={() => nav(s)}
            >
              {s}
            </button>
          ))}

          {/* Theme Button */}
          <button
            onClick={() =>
              setTheme(
                theme === darkTheme
                  ? lightTheme
                  : darkTheme
              )
            }
            style={{
              background: "none",

              border: `1px solid ${theme.gold}`,

              color: theme.gold,

              padding: "4px 6px",

              borderRadius: 10,

              cursor: "pointer",

              marginRight: 12,

              fontSize: 18,
            }}
          >
            {theme === darkTheme
              ? "☀️"
              : "🌙"}
          </button>

          {/* Booking */}
          <button
            className="btn-gold"
            onClick={() => nav("احجز رحلة")}
            style={{
              padding: "9px 22px",
              fontSize: 13,
              marginRight: 14,

              fontFamily:
                "'Noto Naskh Arabic',serif",
            }}
          >
            احجز الآن
          </button>
        </div>

        {/* Mobile burger */}
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
          onClick={() =>
            setMobileOpen((o) => !o)
          }
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            background: theme.bg,

            borderTop: `1px solid ${theme.gold}33`,

            padding: "12px 28px 20px",

            direction: "rtl",
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

                borderBottom: `1px solid ${theme.gold}18`,

                color:
                  active === s
                    ? theme.gold
                    : theme.textSecondary,

                fontFamily:
                  "'Noto Naskh Arabic',serif",

                fontSize: 15,

                padding: "13px 0",

                textAlign: "right",

                cursor: "pointer",
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