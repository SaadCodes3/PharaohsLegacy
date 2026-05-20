import { useState } from "react";

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact({ theme }) {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

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
    fontSize: 13,
    width: "100%",
    outline: "none",
    transition: "border-color 0.25s",
  };
  const focus = (e) => {
    e.target.style.borderColor = theme.gold;
  };
  const blur = (e) => {
    e.target.style.borderColor = theme.text + "40";
  };

  const send = () => {
    if (!form.name.trim() || !form.email.trim() || !form.msg.trim()) {
      alert("يرجى ملء جميع الحقول");
      return;
    }
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", msg: "" });
    }, 3000);
  };

  const contacts = [
    { icon: "📞", label: "الهاتف", val: "+20 2 2345 6789" },
    { icon: "📧", label: "البريد الإلكتروني", val: "info@egyptheritage.com" },
    { icon: "📍", label: "العنوان", val: "القاهرة، مصر — شارع النيل" },
    { icon: "⏰", label: "أوقات العمل", val: "السبت — الخميس، 9ص — 6م" },
  ];

  return (
    <div
      className="grid-auto"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
        gap: 44,
        maxWidth: 980,
        margin: "0 auto",
      }}
    >
      <div>
        <h3 style={{ color: theme.text, fontSize: 19, marginBottom: 22 }}>
          أرسل لنا رسالة
        </h3>
        {sent ? (
          <div
            style={{
              background: `${theme.text}10`,
              border: `1px solid ${theme.border}40`,
              borderRadius: 12,
              padding: 28,
              textAlign: "center",
              animation: "fadeUp 0.4s ease",
            }}
          >
            <div style={{ fontSize: 44, marginBottom: 10 }}>✉️</div>
            <div style={{ color: theme.text, fontWeight: 700, fontSize: 16 }}>
              تم إرسال رسالتك بنجاح!
            </div>
            <div
              style={{
                color: theme.textSecondary,
                fontSize: 13,
                marginTop: 7,
                opacity: 0.7,
              }}
            >
              سنرد عليك في أقرب وقت ممكن
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
            {[
              { label: "الاسم", key: "name", ph: "اسمك الكامل" },
              {
                label: "البريد الإلكتروني",
                key: "email",
                ph: "بريدك الإلكتروني",
              },
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
                  value={form[f.key]}
                  placeholder={f.ph}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, [f.key]: e.target.value }))
                  }
                  onFocus={focus}
                  onBlur={blur}
                />
              </div>
            ))}
            <div>
              <label
                style={{
                  color: theme.text,
                  fontSize: 12,
                  display: "block",
                  marginBottom: 7,
                }}
              >
                رسالتك
              </label>
              <textarea
                style={{ ...inp, height: 128, resize: "vertical" }}
                value={form.msg}
                placeholder="كيف يمكننا مساعدتك؟"
                onChange={(e) =>
                  setForm((p) => ({ ...p, msg: e.target.value }))
                }
                onFocus={focus}
                onBlur={blur}
              />
            </div>
            <button
              className="btn-gold"
              style={{
                padding: "13px",
                fontSize: 14,
                fontFamily: "'Noto Naskh Arabic',serif",
              }}
              onClick={send}
            >
              إرسال الرسالة ✉️
            </button>
          </div>
        )}
      </div>

      <div>
        <h3 style={{ color: theme.text, fontSize: 19, marginBottom: 22 }}>
          معلومات التواصل
        </h3>
        {contacts.map((c) => (
          <div
            key={c.label}
            style={{
              display: "flex",
              gap: 13,
              alignItems: "flex-start",
              marginBottom: 22,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                flexShrink: 0,
                background: `${theme.text}20`,
                border: `1px solid ${theme.text}40`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 19,
              }}
            >
              {c.icon}
            </div>
            <div>
              <div style={{ color: theme.gray, fontSize: 11, marginBottom: 3 }}>
                {c.label}
              </div>
              <div style={{ color: theme.textSecondary, fontSize: 14, fontWeight: 600 }}>
                {c.val}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            background: `linear-gradient(
            135deg,
            ${theme.card},
            ${theme.section}
             )`,
            border: `1px solid ${theme.text}28`,
            borderRadius: 12,
            padding: 24,
            textAlign: "center",
            marginTop: 6,
          }}
        >
          <div style={{ fontSize: 34, marginBottom: 9 }}>🗺️</div>
          <div
            style={{
              color: theme.text,
              fontWeight: 700,
              marginBottom: 5,
              fontSize: 15,
            }}
          >
            القاهرة، مصر
          </div>
          <div style={{ color: theme.gray, fontSize: 12 }}>
            شارع النيل — برج النيل، الطابق 12
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
