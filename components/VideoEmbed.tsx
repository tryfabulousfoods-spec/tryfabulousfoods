"use client";
import { useState } from "react";

interface VideoEmbedProps {
  src: string;
  title: string;
  platform?: "youtube" | "facebook";
  youtubeId?: string;
  /**
   * CSS aspect-ratio value, e.g. "16 / 9" (landscape, default for YouTube),
   * "9 / 16" (portrait, for phone-shot Facebook videos), "4 / 3", etc.
   */
  ratio?: string;
}

export default function VideoEmbed({
  src,
  title,
  platform = "youtube",
  youtubeId,
  ratio = "16 / 9",
}: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);

  // Use hqdefault — reliably exists for all YouTube videos (maxresdefault can 404)
  const thumbnailUrl =
    platform === "youtube" && youtubeId
      ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
      : null;

  // Append autoplay for YouTube; Facebook URL used as-is
  const iframeSrc =
    platform === "youtube" ? `${src}&autoplay=1` : src;

  const defaultAllow =
    platform === "youtube"
      ? "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      : "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share";

  return (
    <div
      style={{
        // CSS aspect-ratio is simpler and more reliable than the padding-top hack
        position: "relative",
        width: "100%",
        aspectRatio: ratio,
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 8px 40px rgba(30,59,47,0.13)",
        background: "#1C1C18",
      }}
    >
      {!playing ? (
        /* ── Thumbnail / play button overlay ── */
        <div
          onClick={() => setPlaying(true)}
          style={{
            position: "absolute",
            inset: 0,
            cursor: "pointer",
            background: thumbnailUrl
              ? `url(${thumbnailUrl}) center / cover no-repeat`
              : "#2a2a24",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* dark scrim */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.28)",
            }}
          />
          {/* play button */}
          <button
            aria-label={`Play ${title}`}
            style={{
              position: "relative",
              zIndex: 2,
              width: 72,
              height: 72,
              background: "rgba(0,0,0,0.72)",
              border: "none",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 24px rgba(0,0,0,0.45)",
              transition: "transform 0.15s ease, background 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(184,133,42,0.9)";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0,0,0,0.72)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {/* triangle */}
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "13px solid transparent",
                borderBottom: "13px solid transparent",
                borderLeft: "22px solid white",
                marginLeft: 6,
              }}
            />
          </button>
        </div>
      ) : (
        /* ── Active player ── */
        <iframe
          src={iframeSrc}
          title={title}
          allow={defaultAllow}
          allowFullScreen
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
          }}
        />
      )}
    </div>
  );
}
