import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1E3B2F", color: "#9EB5A8", padding: "4rem 1.5rem 2.5rem" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2.5rem",
          marginBottom: "3rem",
        }}>
          {/* Brand */}
          <div>
            <div style={{
              color: "#FAFAF7",
              fontFamily: "var(--font-display, 'Playfair Display', serif)",
              fontWeight: 800,
              fontSize: "1.2rem",
              marginBottom: "0.4rem",
            }}>
              Try Fabulous Foods
            </div>
            <div style={{
              color: "#B8852A",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 500,
              marginBottom: "1.25rem",
            }}>
              Brick Oven Pizza & Seafood
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "#7A9E90" }}>
              Virginia&apos;s first gourmet brick oven pizza &amp; seafood truck — built for large festivals &amp; events.
            </p>
          </div>

          {/* Links */}
          <div>
            <div style={{
              color: "#FAFAF7",
              fontWeight: 600,
              marginBottom: "1.25rem",
              textTransform: "uppercase",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
            }}>
              Quick Links
            </div>
            {[
              ["/#about", "About Us"],
              ["/menu", "Our Menu"],
              ["/#events", "Find Us"],
              ["/contact", "Book an Event"],
            ].map(([href, label]) => (
              <div key={href} style={{ marginBottom: "0.65rem" }}>
                <Link href={href} style={{ color: "#7A9E90", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}>
                  {label}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{
              color: "#FAFAF7",
              fontWeight: 600,
              marginBottom: "1.25rem",
              textTransform: "uppercase",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
            }}>
              Get In Touch
            </div>
            <p style={{ fontSize: "0.88rem", marginBottom: "0.5rem" }}>
              <a href="mailto:tryfabulousfoods@gmail.com" style={{ color: "#B8852A", textDecoration: "none" }}>
                tryfabulousfoods@gmail.com
              </a>
            </p>
            <p style={{ fontSize: "0.88rem", color: "#7A9E90", marginBottom: "1.5rem" }}>
              PO Box 662, Orange, VA 22960
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                ["https://www.facebook.com", "Facebook"],
                ["https://www.instagram.com", "Instagram"],
                ["https://www.tiktok.com/@tryfabulousfoodsva", "TikTok"],
              ].map(([href, label]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "#FAFAF7",
                    padding: "0.4rem 0.75rem",
                    borderRadius: 3,
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.12)",
                    transition: "background 0.2s ease",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "1.5rem",
          textAlign: "center",
          fontSize: "0.78rem",
          color: "#4F7A6B",
        }}>
          © {new Date().getFullYear()} Try Fabulous Foods. All rights reserved. · Virginia&apos;s Premier Event Food Truck
        </div>
      </div>
    </footer>
  );
}
