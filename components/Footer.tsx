import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1A1A1A", color: "#aaa", padding: "3rem 1.5rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "2rem" }}>
          {/* Brand */}
          <div>
            <div style={{ color: "#D94F00", fontWeight: 800, fontSize: "1.1rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.5rem" }}>Try Fabulous Foods</div>
            <div style={{ color: "#C8872B", fontSize: "0.7rem", letterSpacing: 3, textTransform: "uppercase", marginBottom: "1rem" }}>Brick Oven Pizza & Seafood</div>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "#888" }}>
              Virginia&apos;s first gourmet brick oven pizza &amp; seafood truck — built for large festivals &amp; events.
            </p>
          </div>

          {/* Links */}
          <div>
            <div style={{ color: "#FDF6EC", fontWeight: 700, marginBottom: "1rem", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: 2 }}>Quick Links</div>
            {[["/#about", "About Us"], ["/menu", "Our Menu"], ["/#events", "Find Us"], ["/contact", "Contact"]].map(([href, label]) => (
              <div key={href} style={{ marginBottom: "0.5rem" }}>
                <Link href={href} style={{ color: "#888", textDecoration: "none", fontSize: "0.9rem" }}>{label}</Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: "#FDF6EC", fontWeight: 700, marginBottom: "1rem", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: 2 }}>Get In Touch</div>
            <p style={{ fontSize: "0.85rem", color: "#888", marginBottom: "0.5rem" }}>
              <a href="mailto:tryfabulousfoods@gmail.com" style={{ color: "#C8872B", textDecoration: "none" }}>tryfabulousfoods@gmail.com</a>
            </p>
            <p style={{ fontSize: "0.85rem", color: "#888", marginBottom: "1rem" }}>PO Box 662, Orange, VA 22960</p>
            <div style={{ display: "flex", gap: "1rem" }}>
              {[
                ["https://www.facebook.com", "FB"],
                ["https://www.instagram.com", "IG"],
                ["https://www.tiktok.com/@tryfabulousfoodsva", "TT"],
              ].map(([href, label]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                  background: "#333", color: "#FDF6EC", padding: "0.4rem 0.7rem",
                  borderRadius: 4, fontSize: "0.75rem", fontWeight: 700, textDecoration: "none"
                }}>{label}</a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #333", paddingTop: "1.5rem", textAlign: "center", fontSize: "0.8rem", color: "#555" }}>
          © {new Date().getFullYear()} Try Fabulous Foods. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
