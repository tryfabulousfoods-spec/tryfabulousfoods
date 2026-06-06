"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    background: scrolled ? "rgba(250,250,247,0.96)" : "#FAFAF7",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
    position: "sticky",
    top: 0,
    zIndex: 100,
    borderBottom: "1px solid #E8DFD0",
    transition: "background 0.3s ease, box-shadow 0.3s ease",
    boxShadow: scrolled ? "0 2px 20px rgba(30,59,47,0.07)" : "none",
  };

  const links = [
    { href: "/#about", label: "About" },
    { href: "/menu", label: "Menu" },
    { href: "/#videos", label: "Videos" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav style={navStyle}>
      <div style={{
        maxWidth: 1140,
        margin: "0 auto",
        padding: "0 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 80,
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.85rem" }}>
          <Image
            src="/logo.png"
            alt="Try Fabulous Foods Logo"
            width={64}
            height={64}
            style={{ objectFit: "contain", flexShrink: 0 }}
            priority
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
            <span style={{
              color: "#1E3B2F",
              fontFamily: "var(--font-display, 'Playfair Display', serif)",
              fontWeight: 800,
              fontSize: "1.45rem",
              letterSpacing: "0.01em",
            }}>
              Try Fabulous Foods
            </span>
            <span style={{
              color: "#B8852A",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              fontSize: "0.62rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}>
              Brick Oven Pizza & Seafood
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="desktop-nav">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              color: "#1C1C18",
              textDecoration: "none",
              fontSize: "0.82rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              fontWeight: 500,
              transition: "color 0.2s ease",
            }}>
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: "#1E3B2F", fontSize: "1.5rem", display: "none",
            padding: "0.25rem",
          }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div style={{
          background: "#FAFAF7",
          borderTop: "1px solid #E8DFD0",
          padding: "1.25rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }} className="mobile-nav">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} style={{
              color: "#1C1C18",
              textDecoration: "none",
              fontSize: "0.95rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              fontWeight: 500,
            }}>
              {label}
            </Link>
          ))}
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
