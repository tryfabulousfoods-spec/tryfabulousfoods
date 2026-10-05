"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Gate() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);
    const res = await fetch("/api/gate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError(true);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#1C1C18",
        padding: "1.5rem",
        fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
      }}
    >
      <form
        onSubmit={submit}
        style={{
          background: "#FAFAF7",
          borderRadius: 12,
          padding: "2.5rem 2rem",
          maxWidth: 380,
          width: "100%",
          textAlign: "center",
          boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display, 'Playfair Display', serif)",
            fontSize: "1.6rem",
            fontWeight: 800,
            color: "#1C1C18",
            marginBottom: "0.5rem",
          }}
        >
          Try Fabulous Foods
        </h1>
        <p style={{ color: "#6B6860", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
          This site is private. Enter the password to continue.
        </p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoFocus
          style={{
            width: "100%",
            padding: "0.8rem 1rem",
            fontSize: "1rem",
            borderRadius: 8,
            border: "1px solid #ddd",
            marginBottom: "1rem",
            boxSizing: "border-box",
          }}
        />
        {error && (
          <p style={{ color: "#C94E2A", fontSize: "0.85rem", marginBottom: "1rem" }}>
            Wrong password — try again.
          </p>
        )}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.85rem",
            fontSize: "1rem",
            fontWeight: 700,
            color: "#FAFAF7",
            background: "#1C1C18",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          Enter
        </button>
      </form>
    </main>
  );
}
