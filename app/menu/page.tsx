import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const pizzaItems = [
  { name: "Cheese Pizza", price: "$10", note: "" },
  { name: "Garlic & Herb Pizza", price: "$12", note: "" },
  { name: "Beer Brat Pizza", price: "$14", note: "" },
  { name: "Dill Pickle Pizza", price: "$14", note: "Customer favorite — bold, tangy, and always a conversation starter", star: true },
  { name: "Signature Fried Chicken Pizza", price: "$14", note: "" },
  { name: "Chimi Steak & Cheese Crunch Wrap", price: "$14", note: "Served with fries and pizza dipping sauce" },
];

const toppings = ["Sweet Italian Sausage", "Pepperoni", "Smoked Bacon", "Pineapple", "Seasoned Mushrooms", "Green Olives"];

const sidesItems = [
  { name: "Regular Fries", price: "$6", note: "" },
  { name: "Boardwalk Fries", price: "$6", note: "Malt vinegar and sea salt" },
  { name: "Old Bay Fries", price: "$6", note: "" },
  { name: "Bottled Water", price: "$2", note: "" },
];

const seafoodItems = [
  { name: "Jumbo Steamed Shrimp (1 lb)", price: "$18", note: "Choice of butter or house-made cocktail sauce" },
  { name: "Crab Imperial Fries", price: "$18", note: "Old Bay fries + crab + imperial white sauce + shredded mozzarella" },
  { name: "Fried Oyster Platter", price: "$18", note: "Served with fries" },
  { name: "Two 4 oz Handmade Crab Cakes w/ Fries", price: "$20", note: "Steamed" },
];

function MenuItem({ name, price, note, star }: { name: string; price: string; note?: string; star?: boolean }) {
  return (
    <li style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "1rem",
      padding: "0.95rem 0",
      borderBottom: "1px solid #eef1ee",
    }}>
      <div style={{ flex: 1 }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "0.5rem",
          color: "#1C1C18", fontWeight: 700, fontSize: "0.97rem",
          fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
        }}>
          {star && <span style={{ color: "#B8852A", fontSize: "0.85rem" }}>★</span>}
          {name}
        </div>
        {note && (
          <div style={{
            color: "#7A9E90", fontSize: "0.78rem", marginTop: "0.25rem",
            fontStyle: "italic", fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
          }}>
            {note}
          </div>
        )}
      </div>
      <div style={{
        color: "#B8852A", fontWeight: 800, fontSize: "0.95rem", flexShrink: 0,
        fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
      }}>
        {price}
      </div>
    </li>
  );
}

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
            Brick oven pizza made fresh to order, plus premium steamed seafood. Two full menus, one truck.
          </p>
        </section>

        <section style={{ background: "#FAFAF7", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", flexDirection: "column", gap: "3rem" }}>

            {/* PIZZA */}
            <div style={{ background: "#fff", borderRadius: 10, overflow: "hidden", boxShadow: "0 4px 24px rgba(30,59,47,0.08)", border: "1px solid #E8DFD0" }}>
              <div style={{ background: "#1E3B2F", padding: "1.6rem 2rem" }}>
                <div style={{ color: "#B8852A", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.3rem", fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}>Brick Oven</div>
                <h2 style={{ color: "#FAFAF7", fontWeight: 800, fontSize: "1.5rem", margin: 0, fontFamily: "var(--font-display, 'Playfair Display', serif)" }}>Pizza (10")</h2>
                <div style={{ color: "#7A9E90", fontSize: "0.78rem", marginTop: "0.5rem", fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}>
                  Additional toppings $1 each: {toppings.join(", ")}
                </div>
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: "0.5rem 2rem 1rem" }}>
                {pizzaItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </ul>
            </div>

            {/* SIDES */}
            <div style={{ background: "#fff", borderRadius: 10, overflow: "hidden", boxShadow: "0 4px 24px rgba(30,59,47,0.08)", border: "1px solid #E8DFD0" }}>
              <div style={{ background: "#4A6741", padding: "1.6rem 2rem" }}>
                <div style={{ color: "#D4B483", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.3rem", fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}>Extras</div>
                <h2 style={{ color: "#FAFAF7", fontWeight: 800, fontSize: "1.5rem", margin: 0, fontFamily: "var(--font-display, 'Playfair Display', serif)" }}>Sides & Drinks</h2>
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: "0.5rem 2rem 1rem" }}>
                {sidesItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </ul>
            </div>

            {/* SEAFOOD */}
            <div style={{ background: "#fff", borderRadius: 10, overflow: "hidden", boxShadow: "0 4px 24px rgba(201,78,42,0.1)", border: "1px solid #F0DDD8" }}>
              <div style={{ background: "#C94E2A", padding: "1.6rem 2rem" }}>
                <div style={{ color: "#FFD9CC", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.3rem", fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}>Premium</div>
                <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.5rem", margin: 0, fontFamily: "var(--font-display, 'Playfair Display', serif)" }}>Steamed Seafood</h2>
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: "0.5rem 2rem 1rem" }}>
                {seafoodItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </ul>
            </div>

            <p style={{
              textAlign: "center", color: "#8B8880", fontSize: "0.82rem",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)", lineHeight: 1.7, margin: 0
            }}>
              Menu and pricing may vary by event.{" "}
              <Link href="/contact" style={{ color: "#1E3B2F", fontWeight: 600, textDecoration: "none" }}>Contact us</Link>{" "}
              for booking or catering inquiries.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#1E3B2F", padding: "3.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{
              color: "#FAFAF7", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)",
              marginBottom: "1rem", fontFamily: "var(--font-display, 'Playfair Display', serif)"
            }}>
              Book Us for Your Event
            </h2>
            <p style={{ color: "#7A9E90", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.75rem" }}>
              We bring brick oven pizza and fresh steamed seafood straight to your festival, private event, or corporate gathering.
            </p>
            <Link href="/contact" style={{
              background: "#B8852A", color: "#fff", padding: "0.9rem 2.25rem", borderRadius: 4,
              textDecoration: "none", fontWeight: 700, fontSize: "0.88rem",
              letterSpacing: "0.08em", textTransform: "uppercase",
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
