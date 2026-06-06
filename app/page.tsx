import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const reviews = [
  { name: "Sarah M.", text: "Best pizza I've ever had at a festival! The brick oven makes all the difference — hot, fresh, incredible crust in under 2 minutes.", stars: 5 },
  { name: "James T.", text: "Hired them for our corporate event and they knocked it out of the park. The seafood was unbelievably fresh. Will book again!", stars: 5 },
  { name: "Keisha R.", text: "Snow crab legs at a food truck?! I didn't believe it til I tried it. Absolutely fabulous — lives up to the name.", stars: 5 },
  { name: "Mike D.", text: "They served 500 people at our county fair and never missed a beat. Fast, friendly, and the food was outstanding.", stars: 5 },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section style={{
          background: "#FAFAF7",
          minHeight: "92vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          maxWidth: "100%",
          overflow: "hidden",
          position: "relative",
        }}>
          {/* Left: Content */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "5rem 3rem 5rem 8%",
            gap: "1.5rem",
          }}>
            <span className="section-label">Virginia&apos;s #1 Event Food Truck</span>

            <h1 style={{
              fontFamily: "var(--font-display, 'Playfair Display', serif)",
              fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
              fontWeight: 900,
              color: "#1C1C18",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}>
              High-Volume<br />
              Brick Oven Pizza<br />
              <em style={{ color: "#C94E2A", fontStyle: "italic" }}>&amp; Seafood</em>
            </h1>

            <p style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "#6B6860",
              maxWidth: 440,
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
            }}>
              We cook fresh pizza in under 2 minutes and serve the freshest steamed seafood in Virginia — shrimp, snow crab legs, mussels, crawfish &amp; more.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
              <Link href="/menu" className="btn-primary">View Menu</Link>
            </div>

            {/* Trust signals */}
            <div style={{
              display: "flex",
              gap: "2rem",
              marginTop: "1.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid #E8DFD0",
              flexWrap: "wrap",
            }}>
              {[
                ["4+", "Years Serving VA"],
                ["500+", "Events & Festivals"],
                ["2 min", "Pizza Cook Time"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div style={{
                    fontFamily: "var(--font-display, 'Playfair Display', serif)",
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    color: "#1E3B2F",
                    lineHeight: 1,
                  }}>{num}</div>
                  <div style={{
                    fontSize: "0.72rem",
                    color: "#6B6860",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginTop: "0.25rem",
                    fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                  }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Block */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            {/* Forest green decorative panel */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "#1E3B2F",
              clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)",
            }} />
            {/* Gold accent */}
            <div style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "60%",
              height: "40%",
              background: "#B8852A",
              clipPath: "polygon(30% 100%, 100% 60%, 100% 100%)",
              opacity: 0.9,
            }} />
            {/* Terracotta spot */}
            <div style={{
              position: "absolute",
              top: "12%",
              right: "10%",
              width: 160,
              height: 160,
              borderRadius: "50%",
              background: "#C94E2A",
              opacity: 0.12,
            }} />
            {/* Center content inside the green panel */}
            <div style={{
              position: "relative",
              zIndex: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "4rem 3rem 4rem 5rem",
              gap: "2rem",
            }}>
              {/* Feature cards */}
              {[
                { icon: "🔥", label: "Brick Oven", desc: "Pizza cooked fresh in under 2 minutes" },
                { icon: "🦞", label: "Fresh Shellfish", desc: "Crab legs, shrimp, mussels & more" },
                { icon: "🎪", label: "Festival Ready", desc: "High-volume, all of Virginia" },
              ].map(({ icon, label, desc }) => (
                <div key={label} style={{
                  background: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 8,
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                }}>
                  <span style={{ fontSize: "1.75rem" }}>{icon}</span>
                  <div>
                    <div style={{
                      color: "#FAFAF7",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                    }}>{label}</div>
                    <div style={{
                      color: "#9EB5A8",
                      fontSize: "0.8rem",
                      marginTop: "0.2rem",
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                    }}>{desc}</div>
                  </div>
                </div>
              ))}

              {/* Gold tagline block */}
              <div style={{
                background: "#B8852A",
                borderRadius: 6,
                padding: "1.25rem 1.5rem",
              }}>
                <div style={{
                  color: "#fff",
                  fontFamily: "var(--font-display, 'Playfair Display', serif)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  fontStyle: "italic",
                }}>
                  &ldquo;Two full menus.<br />One incredible truck.&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* Mobile hero fallback */}
          <style>{`
            @media (max-width: 768px) {
              section:first-of-type {
                grid-template-columns: 1fr !important;
                min-height: auto !important;
              }
              section:first-of-type > div:last-child {
                display: none !important;
              }
              section:first-of-type > div:first-child {
                padding: 3rem 1.5rem !important;
              }
            }
          `}</style>
        </section>

        {/* ── MARQUEE STRIP ── */}
        <section style={{
          background: "#C94E2A",
          padding: "1.1rem 0",
          overflow: "hidden",
        }}>
          <div style={{
            display: "flex",
            gap: "3rem",
            animation: "none",
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: 1140,
            margin: "0 auto",
            padding: "0 1.5rem",
          }}>
            {[
              "🔥 Brick Oven Pizza in Under 2 Minutes",
              "🦞 Freshest Steamed Seafood in Virginia",
              "🎪 Festivals · Fairs · Corporate Events",
              "📍 Serving All of Virginia",
              "⭐ 4+ Years of Experience",
            ].map((item) => (
              <span key={item} style={{
                color: "#fff",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              }}>
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" style={{ padding: "6rem 1.5rem", background: "#FAFAF7" }}>
          <div style={{
            maxWidth: 1140,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}>
            <div>
              <span className="section-label">Who We Are</span>
              <h2 style={{
                fontFamily: "var(--font-display, 'Playfair Display', serif)",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                color: "#1C1C18",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}>
                Virginia&apos;s First Gourmet<br />
                <em style={{ color: "#1E3B2F", fontStyle: "italic" }}>Brick Oven Pizza</em><br />
                &amp; Seafood Truck
              </h2>
              <p style={{ color: "#6B6860", lineHeight: 1.8, marginBottom: "1rem", fontSize: "1rem" }}>
                Try Fabulous Foods started with a vision: bring gourmet brick oven pizza and the freshest steamed seafood to events across Virginia.
              </p>
              <p style={{ color: "#6B6860", lineHeight: 1.8, marginBottom: "2.5rem", fontSize: "1rem" }}>
                We invested in a custom-made brick oven that cooks pizzas in under 2 minutes — making us the perfect choice for high-volume festivals where speed and quality both matter.
              </p>
              <Link href="/contact" className="btn-outline">Book an Event</Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { icon: "🔥", title: "Brick Oven Speed", desc: "Pizza fresh in under 2 minutes — perfect for high-volume events with thousands of guests." },
                { icon: "🦞", title: "Fresh Seafood Daily", desc: "Shrimp, snow crab, mussels, crawfish & rotating seasonal specials." },
                { icon: "🎪", title: "Event Specialists", desc: "Built and equipped for large festivals, fairs, corporate events & private parties." },
                { icon: "🗺️", title: "Virginia-Wide", desc: "We travel statewide to bring the full experience directly to your event." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="card" style={{ padding: "1.5rem 1.25rem" }}>
                  <div style={{ fontSize: "1.6rem", marginBottom: "0.75rem" }}>{icon}</div>
                  <div style={{
                    fontWeight: 700,
                    color: "#1C1C18",
                    marginBottom: "0.5rem",
                    fontSize: "0.92rem",
                    fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                  }}>{title}</div>
                  <div style={{ color: "#6B6860", fontSize: "0.82rem", lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MENU TEASER ── */}
        <section style={{ background: "#F2EDE3", padding: "6rem 1.5rem" }}>
          <div style={{ maxWidth: 1140, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span className="section-label">What We Serve</span>
              <h2 style={{
                fontFamily: "var(--font-display, 'Playfair Display', serif)",
                fontSize: "clamp(1.9rem, 3vw, 2.75rem)",
                fontWeight: 800,
                color: "#1C1C18",
                marginBottom: "1rem",
              }}>
                Not Only Pizza — We Do Seafood, Too.
              </h2>
              <p style={{ color: "#6B6860", maxWidth: 560, margin: "0 auto", lineHeight: 1.75, fontSize: "1rem" }}>
                Two full menus, one incredible truck. Choose one or let us serve both at your event.
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}>
              {[
                {
                  title: "Try Fabulous Foods Menu",
                  subtitle: "Brick Oven Pizza",
                  accent: "#C94E2A",
                  items: ["Cheese Pizza", "Pepperoni Pizza", "Veggie Pizza", "Specialty Pies", "Garlic Knots", "& More Delicious Goodies"],
                },
                {
                  title: "Salt Life Seafood Menu",
                  subtitle: "Fresh Shellfish",
                  accent: "#1B5E52",
                  items: ["Steamed Shrimp", "Snow Crab Legs", "Mussels", "Crawfish", "Soft Crab Sandwiches", "Seafood Gumbo & Oyster Chowder"],
                },
              ].map(({ title, subtitle, accent, items }) => (
                <div key={title} style={{
                  background: "#FAFAF7",
                  borderRadius: 8,
                  overflow: "hidden",
                  border: "1px solid #E8DFD0",
                  boxShadow: "0 4px 24px rgba(30,59,47,0.06)",
                }}>
                  {/* Top color bar */}
                  <div style={{ background: accent, height: 5 }} />
                  <div style={{ padding: "2rem 1.75rem" }}>
                    <div style={{
                      color: accent,
                      fontSize: "0.68rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      marginBottom: "0.4rem",
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                    }}>{subtitle}</div>
                    <h3 style={{
                      fontFamily: "var(--font-display, 'Playfair Display', serif)",
                      color: "#1C1C18",
                      fontWeight: 800,
                      fontSize: "1.25rem",
                      marginBottom: "1.5rem",
                    }}>{title}</h3>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {items.map(item => (
                        <li key={item} style={{
                          color: "#6B6860",
                          fontSize: "0.92rem",
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #EDE8E0",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.6rem",
                          fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                        }}>
                          <span style={{ color: accent, fontSize: "0.5rem", flexShrink: 0 }}>◆</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center" }}>
              <Link href="/menu" className="btn-primary">See Full Menu</Link>
            </div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section style={{ background: "#FAFAF7", padding: "6rem 1.5rem" }}>
          <div style={{ maxWidth: 1140, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span className="section-label">What People Say</span>
              <h2 style={{
                fontFamily: "var(--font-display, 'Playfair Display', serif)",
                fontSize: "clamp(1.9rem, 3vw, 2.75rem)",
                fontWeight: 800,
                color: "#1C1C18",
              }}>
                Reviews from Our Customers
              </h2>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
            }}>
              {reviews.map(({ name, text, stars }) => (
                <div key={name} className="card" style={{ padding: "1.75rem" }}>
                  <div style={{ color: "#C94E2A", fontSize: "1rem", marginBottom: "1rem", letterSpacing: "0.1em" }}>
                    {"★".repeat(stars)}
                  </div>
                  <p style={{
                    color: "#4A4A44",
                    fontSize: "0.92rem",
                    lineHeight: 1.75,
                    marginBottom: "1.25rem",
                    fontStyle: "italic",
                    fontFamily: "var(--font-display, 'Playfair Display', serif)",
                  }}>
                    &ldquo;{text}&rdquo;
                  </p>
                  <div style={{
                    fontWeight: 700,
                    color: "#1C1C18",
                    fontSize: "0.82rem",
                    letterSpacing: "0.05em",
                    fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                  }}>
                    — {name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FIND US (Social) ── */}
        <section id="events" style={{ background: "#1E3B2F", padding: "6rem 1.5rem" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <span style={{ ...({} as object), display: "block", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8852A", marginBottom: "0.75rem", fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}>
              Follow The Truck
            </span>
            <h2 style={{
              fontFamily: "var(--font-display, 'Playfair Display', serif)",
              color: "#FAFAF7",
              fontSize: "clamp(1.9rem, 3vw, 2.75rem)",
              fontWeight: 800,
              marginBottom: "1.25rem",
            }}>
              Find Us on Social Media
            </h2>
            <p style={{ color: "#7A9E90", lineHeight: 1.8, marginBottom: "2.5rem", fontSize: "1rem", fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}>
              We post our schedule, upcoming events, and specials on Facebook, Instagram, and TikTok. Follow us to know where we&apos;ll be next!
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { label: "Facebook", href: "https://www.facebook.com", bg: "#2C5F8A" },
                { label: "Instagram", href: "https://www.instagram.com", bg: "#9B3A6E" },
                { label: "TikTok", href: "https://www.tiktok.com/@tryfabulousfoodsva", bg: "#2C3E2D" },
                { label: "Yelp", href: "https://www.yelp.com", bg: "#8B2B1A" },
              ].map(({ label, href, bg }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                  background: bg,
                  color: "#fff",
                  padding: "0.75rem 1.75rem",
                  borderRadius: 4,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  transition: "transform 0.2s ease",
                }}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOOKING CTA ── */}
        <section style={{ background: "#F2EDE3", padding: "6rem 1.5rem" }}>
          <div style={{
            maxWidth: 1140,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}>
            <div>
              <span className="section-label">Ready to Book?</span>
              <h2 style={{
                fontFamily: "var(--font-display, 'Playfair Display', serif)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 800,
                color: "#1C1C18",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}>
                Bring Try Fabulous Foods<br />
                <em style={{ color: "#C94E2A", fontStyle: "italic" }}>to Your Event</em>
              </h2>
              <p style={{ color: "#6B6860", lineHeight: 1.8, marginBottom: "2rem", fontSize: "1rem", maxWidth: 440 }}>
                Whether it&apos;s a festival, corporate event, or private party — we bring the brick oven to you. Serving all of Virginia.
              </p>

            </div>

            {/* Feature grid */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                ["🎪", "Large Festivals & Fairs", "High-volume service built to feed thousands"],
                ["🏢", "Corporate Events", "Professional setup, reliable execution"],
                ["🎉", "Private Parties", "Customizable menus for any occasion"],
              ].map(([icon, title, desc]) => (
                <div key={title as string} style={{
                  background: "#FAFAF7",
                  borderRadius: 6,
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  border: "1px solid #E8DFD0",
                }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
                  <div>
                    <div style={{
                      fontWeight: 700,
                      color: "#1C1C18",
                      fontSize: "0.95rem",
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                    }}>{title}</div>
                    <div style={{
                      color: "#6B6860",
                      fontSize: "0.82rem",
                      marginTop: "0.2rem",
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                    }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
