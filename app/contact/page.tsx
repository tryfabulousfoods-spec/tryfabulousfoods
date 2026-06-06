import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ background: "#1A1A1A", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
          <div style={{ color: "#D94F00", fontSize: "0.7rem", letterSpacing: 3, textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 700 }}>Book Us</div>
          <h1 style={{ color: "#FDF6EC", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: "1rem" }}>Check Availability</h1>
          <p style={{ color: "#888", maxWidth: 560, margin: "0 auto", lineHeight: 1.7, fontSize: "1rem" }}>
            Tell us about your event and we&apos;ll get back to you quickly to confirm availability and pricing.
          </p>
        </section>

        <section style={{ background: "#FDF6EC", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            {/* Contact info cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
              {[
                { icon: "📧", label: "Email", value: "tryfabulousfoods@gmail.com", href: "mailto:tryfabulousfoods@gmail.com" },
                { icon: "📍", label: "Based In", value: "Orange, VA 22960", href: null },
                { icon: "🌐", label: "Service Area", value: "All of Virginia", href: null },
              ].map(({ icon, label, value, href }) => (
                <div key={label} style={{ background: "#fff", borderRadius: 8, padding: "1.5rem", border: "1px solid #eddcc8", textAlign: "center" }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{icon}</div>
                  <div style={{ fontSize: "0.7rem", letterSpacing: 2, textTransform: "uppercase", color: "#999", marginBottom: "0.4rem" }}>{label}</div>
                  {href ? (
                    <a href={href} style={{ color: "#D94F00", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none" }}>{value}</a>
                  ) : (
                    <div style={{ color: "#1A1A1A", fontWeight: 700, fontSize: "0.9rem" }}>{value}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Form */}
            <div style={{ background: "#fff", borderRadius: 8, padding: "2.5rem", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #eddcc8" }}>
              <h2 style={{ fontWeight: 900, color: "#1A1A1A", fontSize: "1.4rem", marginBottom: "1.75rem" }}>Request Availability</h2>
              <form action="mailto:tryfabulousfoods@gmail.com" method="get" encType="text/plain">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#555", marginBottom: "0.4rem", letterSpacing: 1, textTransform: "uppercase" }}>Your Name *</label>
                    <input name="name" required style={{ width: "100%", padding: "0.75rem", border: "1px solid #ddd", borderRadius: 4, fontSize: "0.95rem", fontFamily: "Georgia, serif" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#555", marginBottom: "0.4rem", letterSpacing: 1, textTransform: "uppercase" }}>Email *</label>
                    <input name="email" type="email" required style={{ width: "100%", padding: "0.75rem", border: "1px solid #ddd", borderRadius: 4, fontSize: "0.95rem", fontFamily: "Georgia, serif" }} />
                  </div>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#555", marginBottom: "0.4rem", letterSpacing: 1, textTransform: "uppercase" }}>Event Date *</label>
                  <input name="event_date" type="date" required style={{ width: "100%", padding: "0.75rem", border: "1px solid #ddd", borderRadius: 4, fontSize: "0.95rem", fontFamily: "Georgia, serif" }} />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#555", marginBottom: "0.4rem", letterSpacing: 1, textTransform: "uppercase" }}>Event Location</label>
                  <input name="location" style={{ width: "100%", padding: "0.75rem", border: "1px solid #ddd", borderRadius: 4, fontSize: "0.95rem", fontFamily: "Georgia, serif" }} placeholder="City, VA" />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#555", marginBottom: "0.4rem", letterSpacing: 1, textTransform: "uppercase" }}>Expected Attendance</label>
                  <select name="attendance" style={{ width: "100%", padding: "0.75rem", border: "1px solid #ddd", borderRadius: 4, fontSize: "0.95rem", fontFamily: "Georgia, serif", background: "#fff" }}>
                    <option value="">Select range</option>
                    <option>Under 100</option>
                    <option>100 – 500</option>
                    <option>500 – 1,000</option>
                    <option>1,000 – 5,000</option>
                    <option>5,000+</option>
                  </select>
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#555", marginBottom: "0.4rem", letterSpacing: 1, textTransform: "uppercase" }}>Tell Us About Your Event</label>
                  <textarea name="body" rows={5} style={{ width: "100%", padding: "0.75rem", border: "1px solid #ddd", borderRadius: 4, fontSize: "0.95rem", fontFamily: "Georgia, serif", resize: "vertical" }} placeholder="Festival, corporate event, private party... any details help!" />
                </div>
                <button type="submit" style={{
                  background: "#D94F00", color: "#fff", padding: "1rem 2rem",
                  border: "none", borderRadius: 4, fontWeight: 700, fontSize: "1rem",
                  letterSpacing: 1, textTransform: "uppercase", cursor: "pointer", width: "100%",
                  fontFamily: "Georgia, serif"
                }}>
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
