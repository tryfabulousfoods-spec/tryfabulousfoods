import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const pizzaMenu = [
  { name: "Classic Cheese", desc: "Fresh mozzarella, house tomato sauce, basil", price: "Market" },
  { name: "Pepperoni", desc: "Classic pepperoni, mozzarella, tomato sauce", price: "Market" },
  { name: "Veggie Supreme", desc: "Bell peppers, onions, mushrooms, olives, mozzarella", price: "Market" },
  { name: "Margherita", desc: "Fresh mozzarella, tomato, basil, olive oil drizzle", price: "Market" },
  { name: "BBQ Chicken", desc: "Grilled chicken, BBQ sauce, red onion, cheddar blend", price: "Market" },
  { name: "Specialty Pies", desc: "Ask about our rotating specialty creations!", price: "Market" },
  { name: "Garlic Knots", desc: "House-made, garlic butter, parmesan", price: "Market" },
];

const seafoodMenu = [
  { name: "Steamed Shrimp", desc: "Old Bay seasoned, served with cocktail sauce", price: "Market" },
  { name: "Snow Crab Legs", desc: "Fresh, steamed to order", price: "Market" },
  { name: "Blue Mussels", desc: "Steamed with garlic butter broth", price: "Market" },
  { name: "Crawfish", desc: "Cajun-spiced, Louisiana-style", price: "Market" },
  { name: "Soft Crab Sandwich", desc: "Seasonal soft-shell crab, dressed bun", price: "Market" },
  { name: "Seafood Gumbo", desc: "Rich, flavorful gumbo with mixed shellfish", price: "Market" },
  { name: "Oyster Chowder", desc: "Creamy oyster chowder, fresh catch", price: "Market" },
];

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section style={{ background: "#1A1A1A", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
          <div style={{ color: "#D94F00", fontSize: "0.7rem", letterSpacing: 3, textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 700 }}>What We Serve</div>
          <h1 style={{ color: "#FDF6EC", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: "1rem" }}>Our Menus</h1>
          <p style={{ color: "#888", maxWidth: 560, margin: "0 auto", lineHeight: 1.7, fontSize: "1rem" }}>
            In addition to our brick oven pizza, we offer the freshest in steamed seafood. Check out both of our menus!
          </p>
        </section>

        {/* Menus */}
        <section style={{ background: "#FDF6EC", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
            {/* Pizza */}
            <div>
              <div style={{ background: "#D94F00", color: "#fff", fontSize: "0.65rem", letterSpacing: 3, textTransform: "uppercase", padding: "0.5rem 1rem", borderRadius: "4px 4px 0 0", fontWeight: 700, display: "inline-block" }}>
                Try Fabulous Foods
              </div>
              <div style={{ background: "#fff", border: "2px solid #D94F00", borderRadius: "0 4px 4px 4px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                <div style={{ padding: "1.5rem 1.5rem 0.5rem", borderBottom: "1px solid #f0e0d0" }}>
                  <h2 style={{ color: "#1A1A1A", fontWeight: 900, fontSize: "1.4rem", margin: 0 }}>🔥 Brick Oven Pizza</h2>
                  <p style={{ color: "#888", fontSize: "0.85rem", marginTop: "0.5rem" }}>Cooked fresh in under 2 minutes</p>
                </div>
                <div style={{ padding: "1rem 1.5rem" }}>
                  {pizzaMenu.map(({ name, desc }) => (
                    <div key={name} style={{ padding: "0.85rem 0", borderBottom: "1px solid #f5ece2" }}>
                      <div style={{ fontWeight: 700, color: "#1A1A1A", marginBottom: "0.2rem", fontSize: "0.95rem" }}>{name}</div>
                      <div style={{ color: "#888", fontSize: "0.82rem" }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Seafood */}
            <div>
              <div style={{ background: "#1B6B6B", color: "#fff", fontSize: "0.65rem", letterSpacing: 3, textTransform: "uppercase", padding: "0.5rem 1rem", borderRadius: "4px 4px 0 0", fontWeight: 700, display: "inline-block" }}>
                Salt Life Seafood
              </div>
              <div style={{ background: "#fff", border: "2px solid #1B6B6B", borderRadius: "0 4px 4px 4px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                <div style={{ padding: "1.5rem 1.5rem 0.5rem", borderBottom: "1px solid #d0e8e8" }}>
                  <h2 style={{ color: "#1A1A1A", fontWeight: 900, fontSize: "1.4rem", margin: 0 }}>🦞 Fresh Shellfish</h2>
                  <p style={{ color: "#888", fontSize: "0.85rem", marginTop: "0.5rem" }}>The freshest steamed seafood in Virginia</p>
                </div>
                <div style={{ padding: "1rem 1.5rem" }}>
                  {seafoodMenu.map(({ name, desc }) => (
                    <div key={name} style={{ padding: "0.85rem 0", borderBottom: "1px solid #e8f5f5" }}>
                      <div style={{ fontWeight: 700, color: "#1A1A1A", marginBottom: "0.2rem", fontSize: "0.95rem" }}>{name}</div>
                      <div style={{ color: "#888", fontSize: "0.82rem" }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Note */}
        <section style={{ background: "#2d1a0a", padding: "3rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <p style={{ color: "#C8872B", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Menu items and pricing vary by event. Contact us for a full pricing sheet or to discuss a custom menu package for your event.
            </p>
            <Link href="/contact" style={{
              background: "#D94F00", color: "#fff", padding: "0.85rem 2rem",
              borderRadius: 4, textDecoration: "none", fontWeight: 700,
              fontSize: "0.9rem", letterSpacing: 1, textTransform: "uppercase"
            }}>
              Get a Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
