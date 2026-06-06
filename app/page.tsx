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

        {/* HERO */}
        <section style={{
          background: "linear-gradient(135deg, #1A1A1A 0%, #2d1a0a 60%, #1A1A1A 100%)",
          minHeight: "90vh", display: "flex", alignItems: "center",
          position: "relative", overflow: "hidden", padding: "4rem 1.5rem"
        }}>
          {/* Flame accent */}
          <div style={{
            position: "absolute", right: "-80px", top: "-80px",
            width: 500, height: 500, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(217,79,0,0.25) 0%, transparent 70%)",
            pointerEvents: "none"
          }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", zIndex: 1, width: "100%" }}>
            <div style={{ maxWidth: 700 }}>
              <div style={{
                display: "inline-block", background: "#D94F00", color: "#fff",
                fontSize: "0.7rem", letterSpacing: 3, textTransform: "uppercase",
                padding: "0.4rem 1rem", borderRadius: 2, marginBottom: "1.5rem", fontWeight: 700
              }}>
                Virginia&apos;s #1 Event Food Truck
              </div>
              <h1 style={{
                color: "#FDF6EC", fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 900, lineHeight: 1.15, marginBottom: "1.5rem",
                letterSpacing: "-0.5px"
              }}>
                High-Volume Brick Oven Pizza &amp; Seafood<br />
                <span style={{ color: "#D94F00" }}>Built for Large Festivals &amp; Events</span>
              </h1>
              <p style={{
                color: "#c4b49a", fontSize: "clamp(1rem, 2vw, 1.2rem)",
                lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: 550
              }}>
                We cook fresh pizza in under 2 minutes and serve the freshest steamed seafood in Virginia — shrimp, snow crab legs, mussels, crawfish &amp; more.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" style={{
                  background: "#D94F00", color: "#fff", padding: "1rem 2rem",
                  borderRadius: 4, textDecoration: "none", fontWeight: 700,
                  fontSize: "1rem", letterSpacing: 1, textTransform: "uppercase"
                }}>
                  Check Availability
                </Link>
                <Link href="/menu" style={{
                  background: "transparent", color: "#FDF6EC", padding: "1rem 2rem",
                  borderRadius: 4, textDecoration: "none", fontWeight: 700,
                  fontSize: "1rem", letterSpacing: 1, textTransform: "uppercase",
                  border: "2px solid #C8872B"
                }}>
                  View Menu
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section style={{ background: "#D94F00", padding: "1.5rem 1.5rem" }}>
          <div style={{
            maxWidth: 1100, margin: "0 auto",
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem", textAlign: "center"
          }}>
            {[
              ["Pizza in", "Under 2 Min"],
              ["Serving", "All of Virginia"],
              ["Events", "Festivals, Corporate & Private"],
              ["Menu", "Pizza + Seafood"],
            ].map(([label, value]) => (
              <div key={label}>
                <div style={{ color: "#fff", fontWeight: 900, fontSize: "1.2rem" }}>{value}</div>
                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.75rem", letterSpacing: 2, textTransform: "uppercase" }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={{ padding: "5rem 1.5rem", background: "#FDF6EC" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <div style={{ color: "#D94F00", fontSize: "0.7rem", letterSpacing: 3, textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 700 }}>Who We Are</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 900, color: "#1A1A1A", marginBottom: "1.25rem", lineHeight: 1.2 }}>
                Virginia&apos;s First Gourmet Brick Oven Pizza &amp; Seafood Truck
              </h2>
              <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "1rem", fontSize: "1rem" }}>
                Try Fabulous Foods started with a vision: bring gourmet brick oven pizza and the freshest steamed seafood to events across Virginia.
              </p>
              <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "2rem", fontSize: "1rem" }}>
                We invested in a custom-made brick oven that cooks pizzas in under 2 minutes — making us the perfect choice for high-volume festivals and events where speed and quality both matter.
              </p>
              <Link href="/contact" style={{
                background: "#1A1A1A", color: "#fff", padding: "0.85rem 1.75rem",
                borderRadius: 4, textDecoration: "none", fontWeight: 700,
                fontSize: "0.9rem", letterSpacing: 1, textTransform: "uppercase"
              }}>
                Our History
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { icon: "🔥", title: "Brick Oven Speed", desc: "Pizza cooked fresh in under 2 minutes — perfect for high-volume events." },
                { icon: "🦞", title: "Fresh Seafood", desc: "Shrimp, snow crab, mussels, crawfish & rotating specials." },
                { icon: "🎪", title: "Event Ready", desc: "Equipped and experienced for festivals, fairs, and corporate events." },
                { icon: "⭐", title: "Virginia-Wide", desc: "We travel statewide to bring the experience to you." },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{
                  background: "#fff", borderRadius: 8, padding: "1.25rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #eddcc8"
                }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{icon}</div>
                  <div style={{ fontWeight: 700, color: "#1A1A1A", marginBottom: "0.4rem", fontSize: "0.9rem" }}>{title}</div>
                  <div style={{ color: "#777", fontSize: "0.82rem", lineHeight: 1.5 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MENU TEASER */}
        <section style={{ background: "#1A1A1A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
            <div style={{ color: "#C8872B", fontSize: "0.7rem", letterSpacing: 3, textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 700 }}>What We Serve</div>
            <h2 style={{ color: "#FDF6EC", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 900, marginBottom: "1rem" }}>
              Not Only Pizza — We Do Seafood, Too!
            </h2>
            <p style={{ color: "#888", maxWidth: 600, margin: "0 auto 3rem", lineHeight: 1.7, fontSize: "1rem" }}>
              In addition to our brick oven pizza, we offer the freshest in steamed seafood. Two full menus, one incredible truck.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
              {[
                { title: "Try Fabulous Foods Menu", subtitle: "Brick Oven Pizza", items: ["Cheese Pizza", "Pepperoni Pizza", "Veggie Pizza", "Specialty Pies", "Garlic Knots", "& More Delicious Goodies"], color: "#D94F00" },
                { title: "Salt Life Seafood Menu", subtitle: "Fresh Shellfish", items: ["Steamed Shrimp", "Snow Crab Legs", "Mussels", "Crawfish", "Soft Crab Sandwiches", "Seafood Gumbo & Oyster Chowder"], color: "#1B6B6B" },
              ].map(({ title, subtitle, items, color }) => (
                <div key={title} style={{
                  background: "#222", borderRadius: 8, padding: "2rem",
                  border: `2px solid ${color}`, textAlign: "left"
                }}>
                  <div style={{ color, fontSize: "0.7rem", letterSpacing: 3, textTransform: "uppercase", marginBottom: "0.5rem", fontWeight: 700 }}>{subtitle}</div>
                  <h3 style={{ color: "#FDF6EC", fontWeight: 800, fontSize: "1.2rem", marginBottom: "1.25rem" }}>{title}</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {items.map(item => (
                      <li key={item} style={{ color: "#aaa", fontSize: "0.9rem", padding: "0.35rem 0", borderBottom: "1px solid #333", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span style={{ color, fontSize: "0.6rem" }}>●</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link href="/menu" style={{
              background: "#D94F00", color: "#fff", padding: "1rem 2.5rem",
              borderRadius: 4, textDecoration: "none", fontWeight: 700,
              fontSize: "1rem", letterSpacing: 1, textTransform: "uppercase"
            }}>
              Full Menu
            </Link>
          </div>
        </section>

        {/* REVIEWS */}
        <section style={{ background: "#FDF6EC", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div style={{ color: "#D94F00", fontSize: "0.7rem", letterSpacing: 3, textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 700 }}>What People Say</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 900, color: "#1A1A1A" }}>Reviews From Our Customers</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
              {reviews.map(({ name, text, stars }) => (
                <div key={name} style={{
                  background: "#fff", borderRadius: 8, padding: "1.75rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #eddcc8"
                }}>
                  <div style={{ color: "#D94F00", fontSize: "1.1rem", marginBottom: "0.75rem" }}>{"★".repeat(stars)}</div>
                  <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1rem", fontStyle: "italic" }}>&ldquo;{text}&rdquo;</p>
                  <div style={{ fontWeight: 700, color: "#1A1A1A", fontSize: "0.85rem" }}>— {name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOCIAL / FIND US */}
        <section id="events" style={{ background: "#2d1a0a", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <div style={{ color: "#C8872B", fontSize: "0.7rem", letterSpacing: 3, textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 700 }}>Follow The Truck</div>
            <h2 style={{ color: "#FDF6EC", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 900, marginBottom: "1rem" }}>Find Us on Social Media</h2>
            <p style={{ color: "#aaa", lineHeight: 1.7, marginBottom: "2.5rem", fontSize: "1rem" }}>
              We post our schedule, upcoming events, and specials on Facebook, Instagram, and TikTok. Give us a follow to know where we&apos;ll be next!
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { label: "Facebook", href: "https://www.facebook.com", bg: "#1877F2" },
                { label: "Instagram", href: "https://www.instagram.com", bg: "#E1306C" },
                { label: "TikTok", href: "https://www.tiktok.com/@tryfabulousfoodsva", bg: "#010101" },
                { label: "Yelp", href: "https://www.yelp.com", bg: "#D32323" },
              ].map(({ label, href, bg }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                  background: bg, color: "#fff", padding: "0.75rem 1.5rem",
                  borderRadius: 4, textDecoration: "none", fontWeight: 700,
                  fontSize: "0.9rem", letterSpacing: 1
                }}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#D94F00", padding: "4rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, marginBottom: "1rem" }}>
              Ready to Book Try Fabulous Foods?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", marginBottom: "2rem", lineHeight: 1.7 }}>
              Whether it&apos;s a festival, corporate event, or private party — we bring the brick oven to you. Check availability today.
            </p>
            <Link href="/contact" style={{
              background: "#fff", color: "#D94F00", padding: "1rem 2.5rem",
              borderRadius: 4, textDecoration: "none", fontWeight: 800,
              fontSize: "1rem", letterSpacing: 1, textTransform: "uppercase"
            }}>
              Check Availability
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
