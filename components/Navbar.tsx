"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ background: "#1A1A1A", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span style={{ color: "#D94F00", fontWeight: 800, fontSize: "1.15rem", letterSpacing: 1, textTransform: "uppercase" }}>Try Fabulous Foods</span>
          <span style={{ color: "#C8872B", fontSize: "0.65rem", letterSpacing: 3, textTransform: "uppercase" }}>Brick Oven Pizza & Seafood</span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desktop-nav">
          {["/#about", "/menu", "/#events", "/contact"].map((href, i) => {
            const labels = ["About", "Menu", "Find Us", "Contact"];
            return (
              <Link key={href} href={href} style={{ color: "#FDF6EC", textDecoration: "none", fontSize: "0.9rem", letterSpacing: 1, textTransform: "uppercase", fontFamily: "Georgia, serif" }}>
                {labels[i]}
              </Link>
            );
          })}
          <Link href="/contact" style={{
            background: "#D94F00", color: "#fff", padding: "0.5rem 1.2rem",
            borderRadius: 4, textDecoration: "none", fontSize: "0.85rem",
            letterSpacing: 1, textTransform: "uppercase", fontWeight: 700,
            fontFamily: "Georgia, serif"
          }}>
            Check Availability
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#FDF6EC", fontSize: "1.6rem", display: "none" }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div style={{ background: "#1A1A1A", borderTop: "1px solid #333", padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }} className="mobile-nav">
          {["/#about", "/menu", "/#events", "/contact"].map((href, i) => {
            const labels = ["About", "Menu", "Find Us", "Contact"];
            return (
              <Link key={href} href={href} onClick={() => setOpen(false)} style={{ color: "#FDF6EC", textDecoration: "none", fontSize: "1rem", letterSpacing: 1, textTransform: "uppercase" }}>
                {labels[i]}
              </Link>
            );
          })}
          <Link href="/contact" onClick={() => setOpen(false)} style={{
            background: "#D94F00", color: "#fff", padding: "0.75rem 1.2rem",
            borderRadius: 4, textDecoration: "none", fontSize: "0.9rem",
            letterSpacing: 1, textTransform: "uppercase", fontWeight: 700, textAlign: "center"
          }}>
            Check Availability
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
