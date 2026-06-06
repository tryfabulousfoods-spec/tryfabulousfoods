import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const pizzaMenu = [
  {
    name: "Cheese Pizza",
    desc: "Classic brick oven cheese pizza — hot, melty, and crowd-pleasing.",
    price: "$10",
  },
  {
    name: "Garlic & Herb Pizza",
    desc: "Cheese pizza topped with roasted garlic and herb seasoning.",
    price: "$12",
  },
  {
    name: "Beer Brat Pizza",
    desc: "Cheese pizza topped with sweet Italian sausage and beer brat seasoning.",
    price: "$14",
  },
  {
    name: "Dill Pickle Pizza",
    desc: "Tangy dill pickles, creamy sauce, and mozzarella on a brick oven crust — salty, zesty, and addictive.",
    price: "$14",
  },
  {
    name: "Signature Fried Chicken Pizza",
    desc: "Crispy fried chicken pieces with mozzarella on a hot brick oven crust.",
    price: "$14",
  },
  {
    name: "Steak & Cheese Eggrolls",
    desc: "Crispy eggrolls stuffed with seasoned steak and melted cheese, served with fries and pizza dipping sauce.",
    price: "$14",
  },
];

const seafoodMenu = [
  {
    name: "Jumbo Steamed Shrimp (1 lb)",
    desc: "Steamed to order and seasoned for big, Chesapeake-style flavor. Choice of butter or house-made cocktail sauce.",
    price: "$18",
  },
  {
    name: "Crab Imperial Fries",
    desc: "Crispy Old Bay fries loaded with rich, savory crab meat and house-made imperial white sauce, topped with shredded mozzarella.",
    price: "$18",
  },
  {
    name: "Fried Oyster Platter",
    desc: "Golden-fried oysters, hot and crisp — served with a side of crispy fries.",
    price: "$18",
  },
  {
    name: "Two 4 oz Handmade Crab Cakes w/ Fries",
    desc: "Two handmade 4 oz crab cakes, steamed and served hot with a side of crispy, seasoned fries. A true Chesapeake favorite.",
    price: "$20",
  },
];

const sidesMenu = [
  { name: "Regular Fries", desc: "Hot and crispy.", price: "$6" },
  { name: "Boardwalk Fries", desc: "Malt vinegar and sea salt — a crowd favorite.", price: "$6" },
  { name: "Old Bay Fries", desc: "Dusted with Old Bay seasoning.", price: "$6" },
  { name: "Bottled Water", desc: "Ice-cold. Perfect with pizza or seafood.", price: "$2" },
];

const toppings = ["Sweet Italian Sausage", "Pepperoni", "Smoked Bacon", "Pineapple", "Seasoned Mushrooms", "Green Olives"];

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
            Brick oven pizza fresh off the stone — plus premium Chesapeake-style seafood steamed and fried to order. Two full concepts, one truck.
          </p>
        </section>

        {/* Pizza + Seafood side by side */}
        <section style={{ background: "#FAFAF7", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>

            {/* Pizza */}
            <div>
              <div style={{
                background: "#1E3B2F", color: "#FAFAF7",
                fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase",
                padding: "0.55rem 1.1rem", borderRadius: "5px 5px 0 0",
                fontWeight: 700, display: "inline-block",
                fontFamily: "var(--font-body, 'DM Sans', sans-serif)"
              }}>
                Try Fabulous Foods
              </div>
              <div style={{
                background: "#fff", border: "2px solid #1E3B2F",
                borderRadius: "0 5px 5px 5px", overflow: "hidden",
                boxShadow: "0 6px 24px rgba(30,59,47,0.1)"
              }}>
                <div style={{ padding: "1.5rem 1.5rem 0.75rem", borderBottom: "1px solid #e8ede9" }}>
                  <h2 style={{
                    color: "#1C1C18", fontWeight: 800, fontSize: "1.35rem", margin: 0,
                    fontFamily: "var(--font-display, 'Playfair Display', serif)"
                  }}>
                    🔥 Brick Oven Pizza (10&quot;)
                  </h2>
                  <p style={{ color: "#6B6860", fontSize: "0.83rem", marginTop: "0.5rem", lineHeight: 1.6 }}>
                    Ready in under 2 minutes. Additional toppings <strong>$1 each</strong>:{" "}
                    {toppings.join(", ")}.
                  </p>
                </div>
                <div style={{ padding: "0.5rem 1.5rem 1rem" }}>
                  {pizzaMenu.map(({ name, desc, price }) => (
                    <div key={name} style={{ padding: "0.9rem 0", borderBottom: "1px solid #f0ede8", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, color: "#1C1C18", marginBottom: "0.2rem", fontSize: "0.95rem" }}>{name}</div>
                        <div style={{ color: "#6B6860", fontSize: "0.81rem", lineHeight: 1.5 }}>{desc}</div>
                      </div>
                      <div style={{ fontWeight: 800, color: "#1E3B2F", fontSize: "0.95rem", whiteSpace: "nowrap" }}>{price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Seafood */}
            <div>
              <div style={{
                background: "#C94E2A", color: "#fff",
                fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase",
                padding: "0.55rem 1.1rem", borderRadius: "5px 5px 0 0",
                fontWeight: 700, display: "inline-block",
                fontFamily: "var(--font-body, 'DM Sans', sans-serif)"
              }}>
                Chesapeake Seafood
              </div>
              <div style={{
                background: "#fff", border: "2px solid #C94E2A",
                borderRadius: "0 5px 5px 5px", overflow: "hidden",
                boxShadow: "0 6px 24px rgba(201,78,42,0.1)"
              }}>
                <div style={{ padding: "1.5rem 1.5rem 0.75rem", borderBottom: "1px solid #f5e8e4" }}>
                  <h2 style={{
                    color: "#1C1C18", fontWeight: 800, fontSize: "1.35rem", margin: 0,
                    fontFamily: "var(--font-display, 'Playfair Display', serif)"
                  }}>
                    🦀 Premium Steamed & Fried
                  </h2>
                  <p style={{ color: "#6B6860", fontSize: "0.83rem", marginTop: "0.5rem", lineHeight: 1.6 }}>
                    Steamed and fried to order. Fresh, bold, Chesapeake-style.
                  </p>
                </div>
                <div style={{ padding: "0.5rem 1.5rem 1rem" }}>
                  {seafoodMenu.map(({ name, desc, price }) => (
                    <div key={name} style={{ padding: "0.9rem 0", borderBottom: "1px solid #faf0ed", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, color: "#1C1C18", marginBottom: "0.2rem", fontSize: "0.95rem" }}>{name}</div>
                        <div style={{ color: "#6B6860", fontSize: "0.81rem", lineHeight: 1.5 }}>{desc}</div>
                      </div>
                      <div style={{ fontWeight: 800, color: "#C94E2A", fontSize: "0.95rem", whiteSpace: "nowrap" }}>{price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sides & Drinks */}
          <div style={{ maxWidth: 600, margin: "3rem auto 0" }}>
            <div style={{
              background: "#B8852A", color: "#fff",
              fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase",
              padding: "0.55rem 1.1rem", borderRadius: "5px 5px 0 0",
              fontWeight: 700, display: "inline-block",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)"
            }}>
              Sides & Drinks
            </div>
            <div style={{
              background: "#fff", border: "2px solid #B8852A",
              borderRadius: "0 5px 5px 5px", overflow: "hidden",
              boxShadow: "0 6px 24px rgba(184,133,42,0.1)"
            }}>
              <div style={{ padding: "0.5rem 1.5rem 1rem" }}>
                {sidesMenu.map(({ name, desc, price }) => (
                  <div key={name} style={{ padding: "0.9rem 0", borderBottom: "1px solid #faf5e8", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, color: "#1C1C18", marginBottom: "0.2rem", fontSize: "0.95rem" }}>{name}</div>
                      <div style={{ color: "#6B6860", fontSize: "0.81rem", lineHeight: 1.5 }}>{desc}</div>
                    </div>
                    <div style={{ fontWeight: 800, color: "#B8852A", fontSize: "0.95rem", whiteSpace: "nowrap" }}>{price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ background: "#1E3B2F", padding: "3.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <p style={{ color: "#7A9E90", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.75rem" }}>
              Menu items and pricing may vary by event. Contact us for a full pricing sheet or to discuss a custom menu package for your private event or festival.
            </p>
            <Link href="/contact" style={{
              background: "#B8852A", color: "#fff",
              padding: "0.9rem 2.25rem", borderRadius: 4,
              textDecoration: "none", fontWeight: 700,
              fontSize: "0.88rem", letterSpacing: "0.08em", textTransform: "uppercase",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)"
            }}>
              Book Us for Your Event
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
