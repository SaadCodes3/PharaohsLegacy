import { useState } from "react";
import { packages } from "../data/packages";

// ─── Booking ──────────────────────────────────────────────────────────────────
function Booking({ theme }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    pkg: "",
    guests: "1",
    notes: "",
  });
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErr("");
  };

  const submit = () => {
    if (!form.name.trim()) return setErr("يرجى إدخال الاسم الكامل");
    if (!form.email.trim() || !form.email.includes("@"))
      return setErr("يرجى إدخال بريد إلكتروني صحيح");
    if (!form.date) return setErr("يرجى اختيار تاريخ الرحلة");
    if (!form.pkg) return setErr("يرجى اختيار باقة سياحية أولاً");
    setErr("");
    setSent(true);
  };

  const inp = {
    background: `linear-gradient(
         135deg,
          ${theme.card},
       ${theme.section}
      )`,
    border: `1px solid ${theme.gold}40`,
    borderRadius: 8,
    padding: "12px 15px",
    color: theme.text,
    fontSize: 14,
    width: "100%",
    outline: "none",
    transition: "border-color 0.25s",
  };
  const focus = (e) => {
    e.target.style.borderColor = theme.text;
  };
  const blur = (e) => {
    e.target.style.borderColor = theme.gold + "40";
  };

  if (sent)
    return (
      <div
        style={{
          textAlign: "center",
          padding: "56px 20px",
          animation: "fadeUp 0.5s ease",
        }}
      >
        <div style={{ fontSize: 68, marginBottom: 18 }}>✅</div>
        <h3 style={{ color: theme.gold, fontSize: 24, marginBottom: 12 }}>
          تم إرسال حجزك بنجاح!
        </h3>
        <p
          style={{
            color: theme.sand,
            fontSize: 14,
            opacity: 0.8,
            lineHeight: 1.85,
          }}
        >
          سيتواصل معك فريقنا خلال 24 ساعة لتأكيد الحجز وتفاصيل الرحلة.
          <br />
          شكراً لاختيارك كنوز مصر 🏺
        </p>
        <button
          className="btn-gold"
          style={{
            marginTop: 26,
            padding: "12px 34px",
            fontSize: 14,
            fontFamily: "'Noto Naskh Arabic',serif",
          }}
          onClick={() => {
            setSent(false);
            setForm({
              name: "",
              email: "",
              phone: "",
              date: "",
              pkg: "",
              guests: "1",
              notes: "",
            });
          }}
        >
          حجز رحلة أخرى
        </button>
      </div>
    );

  return (
    <div style={{ maxWidth: 940, margin: "0 auto" }}>
      {/* Step 1: packages */}
      <h3
        style={{
          color: theme.textSecondary,
          fontSize: 17,
          marginBottom: 18,
          textAlign: "center",
        }}
      >
        ① اختر باقتك السياحية
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(195px,1fr))",
          gap: 13,
          marginBottom: 40,
        }}
      >
        {packages.map((p) => (
          <div
            key={p.title}
            onClick={() => set("pkg", p.title)}
            style={{
              border: `2px solid ${form.pkg === p.title ? theme.gold : theme.gold + "30"}`,
              borderRadius: 11,
              padding: "17px 15px",
              cursor: "pointer",
              background: `linear-gradient(
              135deg,
              ${theme.card},
              ${theme.section}
              )`,
              transition: "all 0.28s",
            }}
          >
            <div
              style={{
                color: p.color,
                fontSize: 11,
                fontWeight: 700,
                marginBottom: 6,
              }}
            >
              {p.duration}
            </div>
            <div
              style={{
                color: theme.text,
                fontWeight: 700,
                fontSize: 13,
                lineHeight: 1.4,
                marginBottom: 5,
              }}
            >
              {p.title}
            </div>
            <div
              style={{
                color: theme.textSecondary,
                fontSize: 11,
                marginBottom: 9,
              }}
            >
              📍 {p.city}
            </div>
            <div style={{ color: theme.text, fontWeight: 800, fontSize: 15 }}>
              {p.price.toLocaleString()}{" "}
              <span style={{ fontSize: 11, fontWeight: 400 }}>جنيه</span>
            </div>
            {form.pkg === p.title && (
              <div
                style={{
                  marginTop: 9,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 4,
                }}
              >
                {p.includes.map((inc) => (
                  <span
                    key={inc}
                    style={{
                      background: `${theme.text}20`,
                      color: theme.text,
                      fontSize: 10,
                      padding: "2px 8px",
                      borderRadius: 10,
                    }}
                  >
                    {inc}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Step 2: form */}
      <h3
        style={{
          color: theme.textSecondary,
          fontSize: 17,
          marginBottom: 18,
          textAlign: "center",
        }}
      >
        ② أدخل بياناتك
      </h3>
      <div
        style={{
          background: theme.bg,
          border: `1px solid ${theme.text}40`,
          borderRadius: 16,
          padding: "34px 30px",
        }}
      >
        <div
          className="grid-auto"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: 17,
            marginBottom: 17,
          }}
        >
          {[
            {
              label: "الاسم الكامل *",
              key: "name",
              ph: "أدخل اسمك الكامل",
              type: "text",
            },
            {
              label: "البريد الإلكتروني *",
              key: "email",
              ph: "example@email.com",
              type: "email",
            },
            {
              label: "رقم الهاتف",
              key: "phone",
              ph: "+20 xxx xxx xxxx",
              type: "text",
            },
            { label: "تاريخ الرحلة *", key: "date", ph: "", type: "date" },
          ].map((f) => (
            <div key={f.key}>
              <label
                style={{
                  color: theme.text,
                  fontSize: 12,
                  display: "block",
                  marginBottom: 7,
                }}
              >
                {f.label}
              </label>
              <input
                style={inp}
                type={f.type}
                value={form[f.key]}
                placeholder={f.ph}
                onChange={(e) => set(f.key, e.target.value)}
                onFocus={focus}
                onBlur={blur}
              />
            </div>
          ))}
          <div>
            <label
              style={{
                color: theme.gold,
                fontSize: 12,
                display: "block",
                marginBottom: 7,
              }}
            >
              عدد الأشخاص
            </label>
            <select
              style={inp}
              value={form.guests}
              onChange={(e) => set("guests", e.target.value)}
              onFocus={focus}
              onBlur={blur}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "شخص" : "أشخاص"}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              style={{
                color: theme.gold,
                fontSize: 12,
                display: "block",
                marginBottom: 7,
              }}
            >
              الباقة المختارة
            </label>
            <div
              style={{
                ...inp,
                opacity: 0.65,
                cursor: "default",
                display: "flex",
                alignItems: "center",
              }}
            >
              {form.pkg || "— اختر باقة من الأعلى —"}
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 18 }}>
          <label
            style={{
              color: theme.gold,
              fontSize: 12,
              display: "block",
              marginBottom: 7,
            }}
          >
            ملاحظات إضافية
          </label>
          <textarea
            style={{ ...inp, height: 92, resize: "vertical" }}
            value={form.notes}
            placeholder="أي طلبات خاصة أو معلومات إضافية..."
            onChange={(e) => set("notes", e.target.value)}
            onFocus={focus}
            onBlur={blur}
          />
        </div>
        {err && (
          <div
            style={{
              color: theme.textSecondary,
              fontSize: 13,
              marginBottom: 15,
              padding: "10px 14px",
              background: "#ff000010",
              borderRadius: 8,
              border: "1px solid #ff000030",
            }}
          >
            ⚠️ {err}
          </div>
        )}
        <button
          className="btn-gold"
          style={{
            width: "100%",
            padding: "15px",
            fontSize: 16,
            fontFamily: "'Noto Naskh Arabic',serif",
          }}
          onClick={submit}
        >
          🏺 أكمل الحجز الآن
        </button>
      </div>
    </div>
  );
}

export default Booking;
