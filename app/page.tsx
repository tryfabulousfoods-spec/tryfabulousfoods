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

          {/* Right: Food Truck Photo */}
          <div className="hero-photo-col" style={{ position: "relative", overflow: "hidden" }}>
            {/* Actual food truck photo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://drive.google.com/thumbnail?id=1fyukySt9UNUJffQzysbLi552r9_H3B8c&sz=w1200"
              alt="Try Fabulous Foods food truck at an event in Virginia"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            />
            {/* Green overlay — keeps brand feel, improves text legibility */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(160deg, rgba(30,59,47,0.65) 0%, rgba(30,59,47,0.25) 60%, rgba(30,59,47,0.55) 100%)",
              clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)",
            }} />
            {/* Content anchored to bottom */}
            <div style={{
              position: "relative",
              zIndex: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "4rem 3rem 3.5rem 5rem",
            }}>
              {/* Gold tagline block */}
              <div style={{
                background: "rgba(184,133,42,0.95)",
                borderRadius: 6,
                padding: "1.25rem 1.5rem",
                maxWidth: 360,
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
              .hero-photo-col {
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

        {/* ── VIDEOS ── */}
        <section id="videos" style={{ background: "#F2EDE3", padding: "6rem 1.5rem" }}>
          <div style={{ maxWidth: 1140, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span className="section-label">See Us in Action</span>
              <h2 style={{
                fontFamily: "var(--font-display, 'Playfair Display', serif)",
                fontSize: "clamp(1.9rem, 3vw, 2.75rem)",
                fontWeight: 800,
                color: "#1C1C18",
                marginBottom: "1rem",
              }}>
                Watch. Taste. Experience.
              </h2>
              <p style={{ color: "#6B6860", maxWidth: 600, margin: "0 auto", lineHeight: 1.75, fontSize: "1rem" }}>
                From festivals across Virginia to fresh food straight off the brick oven — here&apos;s what we&apos;re all about.
              </p>
            </div>

            {/* Featured video: Live at a Virginia Event */}
            <div style={{ marginBottom: "2.5rem" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}>
                <span style={{ background: "#C94E2A", width: 4, height: 22, borderRadius: 2, flexShrink: 0, display: "block" }} />
                <span style={{
                  fontFamily: "var(--font-display, 'Playfair Display', serif)",
                  fontWeight: 700,
                  color: "#1C1C18",
                  fontSize: "1.05rem",
                }}>Live at a Virginia Event</span>
              </div>
              <div style={{
                borderRadius: 8,
                boxShadow: "0 8px 40px rgba(30,59,47,0.13)",
                overflow: "hidden",
                width: "100%",
              }}>
                <iframe
                  src="https://www.youtube.com/embed/wpktzN7mdAk?rel=0&modestbranding=1"
                  title="Virginia's First Brick Oven Food Truck at a Live Event"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    display: "block",
                    width: "100%",
                    aspectRatio: "16/9",
                    border: "none",
                  }}
                />
              </div>
              <p style={{
                color: "#6B6860",
                fontSize: "0.88rem",
                marginTop: "0.85rem",
                lineHeight: 1.65,
                fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              }}>
                Virginia&apos;s first brick oven food truck, fully operational at a live event — 80 to 110 fresh pizzas per hour, dual windows, zero slowdown.
              </p>
            </div>

            {/* Behind the Scenes */}
            <div style={{ marginBottom: "3rem" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}>
                <span style={{ background: "#B8852A", width: 4, height: 22, borderRadius: 2, flexShrink: 0, display: "block" }} />
                <span style={{
                  fontFamily: "var(--font-display, 'Playfair Display', serif)",
                  fontWeight: 700,
                  color: "#1C1C18",
                  fontSize: "1.05rem",
                }}>Behind the Scenes</span>
              </div>
              <div style={{
                borderRadius: 8,
                boxShadow: "0 8px 40px rgba(30,59,47,0.13)",
                overflow: "hidden",
                width: "100%",
              }}>
                <iframe
                  src="https://www.youtube.com/embed/g4umNXvAWiw?rel=0&modestbranding=1"
                  title="Mobile Brick Oven Pizza Truck in Virginia — Behind the Scenes"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    display: "block",
                    width: "100%",
                    aspectRatio: "16/9",
                    border: "none",
                  }}
                />
              </div>
              <p style={{
                color: "#6B6860",
                fontSize: "0.88rem",
                marginTop: "0.85rem",
                lineHeight: 1.65,
                fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              }}>
                Go behind the scenes — watch our team handle a full service operation, from firing up the brick oven to plating fresh seafood orders on the fly.
              </p>
            </div>

            {/* View all on YouTube */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <a
                href="https://www.youtube.com/@tryfabulousfoods"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                View All Videos on YouTube
              </a>
            </div>

            {/* ── Fans, Foodies & Bloggers ── */}
            <div style={{ borderTop: "1px solid rgba(184,133,42,0.25)", paddingTop: "2.5rem" }}>
              <h3 style={{
                fontFamily: "var(--font-display, 'Playfair Display', serif)",
                fontWeight: 700,
                fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                color: "#1C1C18",
                textAlign: "center",
                marginBottom: "0.5rem",
              }}>
                Fans, Foodies &amp; Bloggers
              </h3>
              <p style={{ textAlign: "center", color: "#6B6860", fontSize: "0.9rem", marginBottom: "2rem", fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}>
                Real people. Real reactions. Straight from the truck.
              </p>

              {/* Tray — Customer Testimonial */}
              <div style={{ marginBottom: "2rem" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}>
                  <span style={{ background: "#C94E2A", width: 4, height: 22, borderRadius: 2, flexShrink: 0, display: "block" }} />
                  <span style={{
                    fontFamily: "var(--font-display, 'Playfair Display', serif)",
                    fontWeight: 700,
                    color: "#1C1C18",
                    fontSize: "1.05rem",
                  }}>Tray&apos;s Testimonial</span>
                </div>
                <div style={{
                  borderRadius: 8,
                  boxShadow: "0 8px 40px rgba(30,59,47,0.13)",
                  overflow: "hidden",
                  width: "100%",
                  position: "relative",
                  paddingTop: "56.25%",
                }}>
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2FHAfRK086YG%2F&show_text=false&width=560"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <p style={{ color: "#6B6860", fontSize: "0.88rem", marginTop: "0.85rem", lineHeight: 1.65, fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}>
                  Hear it straight from Tray — a loyal customer sharing his honest experience with our food.
                </p>
              </div>

              {/* Culpeper Rodeo 2025 */}
              <div style={{ marginBottom: "2rem" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}>
                  <span style={{ background: "#B8852A", width: 4, height: 22, borderRadius: 2, flexShrink: 0, display: "block" }} />
                  <span style={{
                    fontFamily: "var(--font-display, 'Playfair Display', serif)",
                    fontWeight: 700,
                    color: "#1C1C18",
                    fontSize: "1.05rem",
                  }}>Live at Culpeper Rodeo 2025</span>
                </div>
                <div style={{
                  borderRadius: 8,
                  boxShadow: "0 8px 40px rgba(30,59,47,0.13)",
                  overflow: "hidden",
                  width: "100%",
                  position: "relative",
                  paddingTop: "56.25%",
                }}>
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2FHAfTf67wLW%2F&show_text=false&width=560"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <p style={{ color: "#6B6860", fontSize: "0.88rem", marginTop: "0.85rem", lineHeight: 1.65, fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}>
                  Catch us live at the Culpeper Rodeo 2025 — fresh pizza and steamed seafood right at the event.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── PHOTO GALLERY ── */}
        <section id="gallery" style={{ background: "#1C1C18", padding: "5.5rem 1.5rem" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{ display: "block", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8852A", marginBottom: "0.75rem", fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}>
                Food & Moments
              </span>
              <h2 style={{ fontFamily: "var(--font-display, 'Playfair Display', serif)", fontWeight: 800, fontSize: "clamp(1.9rem, 3vw, 2.75rem)", color: "#FAFAF7", marginBottom: "1rem" }}>
                See It for Yourself
              </h2>
              <p style={{ color: "#7A9E90", maxWidth: 520, margin: "0 auto", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}>
                Real food. Real events. Real moments from the road across Virginia.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "0.5rem" }}>
              {[
                "1AH-RbkVvnCJ9gxNwVCyqxMcqT7-i2S7j",
                "1y2aOXeV7utzY85ppiP_yLtpoMOvua53I",
                "1ONrj20oaDDc_gbNtE3ufWXxBoIwDA353",
                "1zatuXBmLUR3ZLGqGZAClsZ1iCIgu6INr",
                "1Xr4uiX8eBmv89MEzevLKbQAtpW6aQA0B",
                "1TPIY0YsIrkx7Ye0jBxtbIMwtVA_Se1QN",
                "1YtMhz2VE-5S8bQX-47nwYBfzwzem_ATE",
                "1hlQU0pIuPCkYUk7NahNGJtoW1rrhLo38",

                "1M8JAawecXkmNGG7RlcaVDaopuuWHuYcq",
                "1STavrXPsP-rzvz45kUpzcqqIC-SQhTSo",
                "11UhiovE6Hsa7DzOtN_7o_T9yJRX5dzvH",
                "1lTfIp46-wgmdtlTDY9y5hNWa_0Vojbyh",
                "1HOw2gorDdmh2Ja8TMZi2cbMGVM4-ZQ4k",
                "1waVlfp490LUtGX7ThSh3GigzrOhoMul_",
                "1NGWyMh-0n-PIy1TYCUU98gldVzDNXtGw",
                "1NQ64Rya1OXdzp7DpnCiuWJif2oz32M8Z",
                "1dPq_mv67jP_5WCzACrZUU1Bi2nE_mnQs",
                "17qtJq4L-WiGSr-8kZDORoeCov2GBpjxQ",
                "1bh7DlKWePwVi0ZxlusHlMnK4vqYXmHSs",
                "1ULRC_Jih1SkKOjz2TEsGB0swby1eGreK",
              ].map((id, i) => (
                <div key={id} style={{ aspectRatio: "1 / 1", overflow: "hidden", borderRadius: 3, background: "#2A2A26" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://drive.google.com/thumbnail?id=${id}&sz=w600`}
                    alt={`Try Fabulous Foods — photo ${i + 1}`}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
              ))}
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

        {/* ── TRUST & ACCREDITATION ── */}
        <section style={{ background: "#F2EDE3", padding: "5.5rem 1.5rem" }}>
          <div style={{ maxWidth: 1140, margin: "0 auto", textAlign: "center" }}>
            <span className="section-label">Accredited &amp; Verified</span>
            <h2 style={{
              fontFamily: "var(--font-display, 'Playfair Display', serif)",
              fontSize: "clamp(1.9rem, 3vw, 2.6rem)",
              fontWeight: 800,
              color: "#1C1C18",
              marginBottom: "0.85rem",
            }}>
              You Can Trust What You Order
            </h2>
            <p style={{ color: "#6B6860", maxWidth: 520, margin: "0 auto 1.5rem", lineHeight: 1.8, fontSize: "0.98rem", fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}>
              We hold ourselves to the highest standards — from the food we serve to the way we run our business.
            </p>

            {/* ── Distinction Banner ── */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.65rem",
              background: "#1E3B2F",
              color: "#F5E6C8",
              borderRadius: 50,
              padding: "0.6rem 1.5rem",
              marginBottom: "3rem",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              boxShadow: "0 4px 18px rgba(30,59,47,0.18)",
            }}>
              <span style={{ color: "#B8852A", fontSize: "1rem" }}>★</span>
              First &amp; Only BBB-Accredited Food Truck in Virginia
              <span style={{ color: "#B8852A", fontSize: "1rem" }}>★</span>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              maxWidth: 760,
              margin: "0 auto",
            }}>

              {/* ── BBB Accredited Business ── */}
              <a href="https://www.bbb.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={{
                  background: "#fff",
                  border: "2px solid #E8DFD0",
                  borderRadius: 12,
                  padding: "2.5rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1.1rem",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                }}>
                  {/* BBB Seal */}
                  <div style={{
                    width: 88,
                    height: 88,
                    background: "#003F87",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 4px 16px rgba(0,63,135,0.25)",
                  }}>
                    <span style={{
                      color: "#fff",
                      fontWeight: 900,
                      fontSize: "1.75rem",
                      fontFamily: "serif",
                      letterSpacing: "-0.04em",
                    }}>BBB</span>
                  </div>
                  <div>
                    <div style={{
                      fontWeight: 800,
                      color: "#003F87",
                      fontSize: "1.05rem",
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                      marginBottom: "0.3rem",
                    }}>
                      BBB Accredited Business
                    </div>
                    <div style={{
                      color: "#6B6860",
                      fontSize: "0.82rem",
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                    }}>
                      Better Business Bureau
                    </div>
                  </div>
                  <div style={{
                    fontSize: "0.75rem",
                    color: "#003F87",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                    opacity: 0.7,
                  }}>
                    Accredited ✓
                  </div>
                </div>
              </a>

              {/* ── BOB Verified ── */}
              <a href="https://bobverified.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={{
                  background: "#fff",
                  border: "2px solid #E8DFD0",
                  borderRadius: 12,
                  padding: "2.5rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1.1rem",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                }}>
                  {/* BOB Seal */}
                  <div style={{
                    width: 88,
                    height: 88,
                    background: "#1E3B2F",
                    borderRadius: "50%",
                    border: "3px solid #B8852A",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 4px 16px rgba(30,59,47,0.25)",
                    gap: "0.1rem",
                  }}>
                    <span style={{
                      color: "#B8852A",
                      fontWeight: 900,
                      fontSize: "1.3rem",
                      fontFamily: "serif",
                      lineHeight: 1,
                    }}>BOB</span>
                    <span style={{
                      color: "#FAFAF7",
                      fontSize: "0.48rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                    }}>VERIFIED</span>
                  </div>
                  <div>
                    <div style={{
                      fontWeight: 800,
                      color: "#1E3B2F",
                      fontSize: "1.05rem",
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                      marginBottom: "0.3rem",
                    }}>
                      Best.Of.Best <span style={{ color: "#B8852A" }}>Verified ✓</span>
                    </div>
                    <div style={{
                      color: "#6B6860",
                      fontSize: "0.82rem",
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                    }}>
                      Virginia&apos;s Mobile Food Vendor Platform
                    </div>
                  </div>
                  <div style={{
                    fontSize: "0.75rem",
                    color: "#1E3B2F",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                    opacity: 0.7,
                  }}>
                    Member Since 2025
                  </div>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* ── FOLLOW US ── */}
        <section style={{ background: "#1E3B2F", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
            <span style={{ display: "block", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8852A", marginBottom: "0.75rem", fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}>
              Stay Connected
            </span>
            <h2 style={{
              fontFamily: "var(--font-display, 'Playfair Display', serif)",
              color: "#FAFAF7",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 800,
              marginBottom: "1.25rem",
            }}>
              Want to Know Where We&apos;ll Be?
            </h2>
            <p style={{ color: "#7A9E90", lineHeight: 1.85, marginBottom: "2.5rem", fontSize: "1rem", fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}>
              Stay tuned to our Facebook and Instagram pages — we update them every week with where we&apos;ll be. Give us a follow and we&apos;ll keep you in the loop!
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://www.facebook.com/tryfabulousfoods" target="_blank" rel="noopener noreferrer" style={{
                background: "#2C5F8A",
                color: "#fff",
                padding: "0.85rem 2rem",
                borderRadius: 4,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.88rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              }}>
                Follow on Facebook
              </a>
              <a href="https://www.instagram.com/tryfabulousfoods" target="_blank" rel="noopener noreferrer" style={{
                background: "#9B3A6E",
                color: "#fff",
                padding: "0.85rem 2rem",
                borderRadius: 4,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.88rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              }}>
                Follow on Instagram
              </a>
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
