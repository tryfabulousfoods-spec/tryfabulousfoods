import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const pizzaItems = [
  "Cheese Pizza",
  "Pepperoni Pizza",
  "Veggie Pizza",
  "Specialty Pies",
  "Garlic Knots",
  "& More Delicious Goodies",
];

const seafoodItems = [
  "Steamed Shrimp",
  "Snow Crab Legs",
  "Mussels",
  "Crawfish",
  "Soft Crab Sandwiches",
  "Seafood Gumbo & Oyster Chowder",
];

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section style={{ background: "#1E3B2F", padding: "4.5rem 1.5rem 3.5rem", textAlign: "center" }}>
          <div style={{
            color: "#B8852A", fontSize: "0.7rem", letterSpacing: "0.2em",
            textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 700,
            fontFamily: "var(--font-body, 'DM Sans', sans-serif)"
          }}>
            What We Serve
          </div>
          <h1 style={{
            color: "#FAFAF7", fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800, marginBottom: "1rem",
            fontFamily: "var(--font-display, 'Playfair Display', serif)"
          }}>
            Our Menu
          </h1>
          <p style={{ color: "#7A9E90", maxWidth: 560, margin: "0 auto", lineHeight: 1.75, fontSize: "1rem" }}>
            Brick oven pizza fresh off the stone — plus premium fresh shellfish steamed and prepared to order. Two full concepts, one truck.
          </p>
        </section>

        {/* Two menus side by side */}
        <section style={{ background: "#FAFAF7", padding: "5rem 1.5rem" }}>
          <div style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
          }}>

            {/* Pizza */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {/* Tab label */}
              <div style={{
                background: "#1E3B2F", color: "#FAFAF7",
                fontSize: "0.63rem", letterSpacing: "0.18em", textTransform: "uppercase",
                padding: "0.55rem 1.2rem", borderRadius: "5px 5px 0 0",
                fontWeight: 700, display: "inline-block", alignSelf: "flex-start",
                fontFamily: "var(--font-body, 'DM Sans', sans-serif)"
              }}>
                Try Fabulous Foods
              </div>

              <div style={{
                background: "#fff",
                border: "2px solid #1E3B2F",
                borderRadius: "0 8px 8px 8px",
                boxShadow: "0 6px 28px rgba(30,59,47,0.1)",
                flex: 1,
                overflow: "hidden",
              }}>
                {/* Section heading */}
                <div style={{
                  background: "#1E3B2F",
                  padding: "1.6rem 1.75rem",
                  textAlign: "center",
                }}>
                  <div style={{
                    color: "#B8852A",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginBottom: "0.4rem",
                    fontFamily: "var(--font-body, 'DM Sans', sans-serif)"
                  }}>
                    Brick Oven Pizza
                  </div>
                  <h2 style={{
                    color: "#FAFAF7",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    margin: 0,
                    fontFamily: "var(--font-display, 'Playfair Display', serif)"
                  }}>
                    Pizza Menu
                  </h2>
                </div>

                {/* Items */}
                <ul style={{ listStyle: "none", margin: 0, padding: "1.25rem 1.75rem 1.5rem" }}>
                  {pizzaItems.map((item) => (
                    <li key={item} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                      padding: "0.85rem 0",
                      borderBottom: "1px solid #eef1ee",
                      color: "#1C1C18",
                      fontWeight: item.startsWith("&") ? 600 : 700,
                      fontSize: "1rem",
                      fontStyle: item.startsWith("&") ? "italic" : "normal",
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                    }}>
                      <span style={{
                        color: "#1E3B2F",
                        fontSize: "0.65rem",
                        flexShrink: 0,
                        opacity: 0.7,
                      }}>◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Seafood */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {/* Tab label */}
              <div style={{
                background: "#C94E2A", color: "#fff",
                fontSize: "0.63rem", letterSpacing: "0.18em", textTransform: "uppercase",
                padding: "0.55rem 1.2rem", borderRadius: "5px 5px 0 0",
                fontWeight: 700, display: "inline-block", alignSelf: "flex-start",
                fontFamily: "var(--font-body, 'DM Sans', sans-serif)"
              }}>
                Salt Life Seafood
              </div>

              <div style={{
                background: "#fff",
                border: "2px solid #C94E2A",
                borderRadius: "0 8px 8px 8px",
                boxShadow: "0 6px 28px rgba(201,78,42,0.1)",
                flex: 1,
                overflow: "hidden",
              }}>
                {/* Section heading */}
                <div style={{
                  background: "#C94E2A",
                  padding: "1.6rem 1.75rem",
                  textAlign: "center",
                }}>
                  <div style={{
                    color: "#fff",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginBottom: "0.4rem",
                    fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                    opacity: 0.85,
                  }}>
                    Fresh Shellfish
                  </div>
                  <h2 style={{
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    margin: 0,
                    fontFamily: "var(--font-display, 'Playfair Display', serif)"
                  }}>
                    Seafood Menu
                  </h2>
                </div>

                {/* Items */}
                <ul style={{ listStyle: "none", margin: 0, padding: "1.25rem 1.75rem 1.5rem" }}>
                  {seafoodItems.map((item) => (
                    <li key={item} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                      padding: "0.85rem 0",
                      borderBottom: "1px solid #fdf0ec",
                      color: "#1C1C18",
                      fontWeight: 700,
                      fontSize: "1rem",
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                    }}>
                      <span style={{
                        color: "#C94E2A",
                        fontSize: "0.65rem",
                        flexShrink: 0,
                        opacity: 0.7,
                      }}>◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Pricing note */}
          <p style={{
            textAlign: "center",
            color: "#8B8880",
            fontSize: "0.85rem",
            marginTop: "2.5rem",
            fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
            lineHeight: 1.7,
          }}>
            Menu items and pricing may vary by event.{" "}
            <Link href="/contact" style={{ color: "#1E3B2F", fontWeight: 600, textDecoration: "none" }}>
              Contact us
            </Link>{" "}
            for pricing or to book us for your event.
          </p>
        </section>

        {/* CTA */}
        <section style={{ background: "#1E3B2F", padding: "3.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{
              color: "#FAFAF7", fontWeight: 800,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              marginBottom: "1rem",
              fontFamily: "var(--font-display, 'Playfair Display', serif)"
            }}>
              Book Us for Your Event
            </h2>
            <p style={{ color: "#7A9E90", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.75rem" }}>
              We bring the full experience — brick oven pizza and fresh shellfish — straight to your festival, private event, or corporate gathering.
            </p>
            <Link href="/contact" style={{
              background: "#B8852A", color: "#fff",
              padding: "0.9rem 2.25rem", borderRadius: 4,
              textDecoration: "none", fontWeight: 700,
              fontSize: "0.88rem", letterSpacing: "0.08em", textTransform: "uppercase",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)"
            }}>
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
