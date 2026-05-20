import { useState, useEffect } from "react";

import { darkTheme } from "./styles/colors";
import "./styles/global.css";

// ─── Data ────────────────────────────────────────────────────────────────────
import { pharaohs } from "./data/pharaohs";
import { temples } from "./data/temples";
import { museums } from "./data/museums";
import { SECTIONS, SECTION_IDS } from "./data/sections";

// ─── Components ──────────────────────────────────────────────────────────────
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Sec from "./components/Sec";

import PharaohCard from "./components/PharaohCard";
import TempleCard from "./components/TempleCard";
import MuseumCard from "./components/MuseumCard";

import Timeline from "./components/Timeline";
import Booking from "./components/Booking";
import Contact from "./components/Contact";

// ─── Utils ───────────────────────────────────────────────────────────────────
import { goTo } from "./utils/scroll";

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  // Active Navbar Section
  const [active, setActive] = useState("الرئيسية");

  // Theme State
  const [theme, setTheme] = useState(darkTheme);

  // Scroll Spy
  useEffect(() => {
    const fn = () => {
      for (const s of [...SECTIONS].reverse()) {
        const el = document.getElementById(SECTION_IDS[s]);

        if (
          el &&
          el.getBoundingClientRect().top <= 80
        ) {
          setActive(s);
          break;
        }
      }
    };

    window.addEventListener("scroll", fn, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div
      style={{
        background: theme.bg,
        minHeight: "100vh",
        width: "100%",
        direction: "rtl",

        fontFamily:
          "'Noto Naskh Arabic','Cairo',serif",

        overflowX: "hidden",

        color: theme.text,

        transition:
          "background 0.3s ease,color 0.3s ease",
      }}
    >
      {/* Navbar */}
      <Navbar
        active={active}
        setActive={setActive}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Hero */}
      <Hero theme={theme} />

      {/* Stats */}
      <Stats theme={theme} />

      {/* Pharaohs */}
      <Sec
        id="pharaohs"
        title="فراعنة مصر العظماء"
        subtitle="عبر التاريخ"
        bg={theme.section}
        theme={theme}
      >
        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit,minmax(290px,1fr))",

            gap: 18,
          }}
        >
          {pharaohs.map((p) => (
            <PharaohCard
              key={p.name}
              p={p}
              theme={theme}
            />
          ))}
        </div>
      </Sec>

      {/* Timeline */}
      <Sec
        title="الجدول الزمني للحضارة المصرية"
        subtitle="التاريخ العريق"
        bg={theme.bg}
        theme={theme}
      >
        <Timeline theme={theme} />
      </Sec>

      {/* Temples */}
      <Sec
        id="temples"
        title="أعظم المعابد المصرية"
        subtitle="المواقع الأثرية"
        bg={theme.section}
        theme={theme}
      >
        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit,minmax(290px,1fr))",

            gap: 18,
          }}
        >
          {temples.map((t) => (
            <TempleCard
              key={t.name}
              t={t}
              theme={theme}
            />
          ))}
        </div>
      </Sec>

      {/* Museums */}
      <Sec
        id="museums"
        title="المتاحف المصرية الكبرى"
        subtitle="اكتشف الكنوز"
        bg={theme.bg}
        theme={theme}
      >
        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit,minmax(270px,1fr))",

            gap: 18,
          }}
        >
          {museums.map((m) => (
            <MuseumCard
              key={m.name}
              m={m}
              theme={theme}
            />
          ))}
        </div>
      </Sec>

      {/* Booking */}
      <Sec
        id="booking"
        title="احجز رحلتك الآن"
        subtitle="رحلات سياحية"
        bg={theme.section}
        theme={theme}
      >
        <Booking theme={theme} />
      </Sec>

      {/* Contact */}
      <Sec
        id="contact"
        title="اتصل بنا"
        subtitle="نحن هنا لمساعدتك"
        bg={theme.bg}
        theme={theme}
      >
        <Contact theme={theme} />
      </Sec>

      {/* Footer */}
      <footer
        style={{
          width: "100%",

          background: theme.footer,

          borderTop: `1px solid ${theme.gold}20`,

          padding: "42px 28px",

          textAlign: "center",

          transition:
            "background 0.3s ease",
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
            © 2025 جميع الحقوق محفوظة —
            رحلة عبر آلاف السنين من التاريخ
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

                  fontFamily:
                    "'Noto Naskh Arabic',serif",

                  borderRadius: 4,

                  transition:
                    "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color =
                    theme.gold)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    theme.gray)
                }
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}