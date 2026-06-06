"use client";
import { useState } from "react";

interface VideoEmbedProps {
  src: string;
  title: string;
  platform?: "youtube" | "facebook";
  youtubeId?: string;
  allow?: string;
}

export default function VideoEmbed({
  src,
  title,
  platform = "youtube",
  youtubeId,
  allow,
}: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);

  const thumbnailUrl =
    platform === "youtube" && youtubeId
      ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
      : null;

  const iframeSrc =
    platform === "youtube" ? `${src}&autoplay=1` : src;

  const defaultAllow =
    platform === "youtube"
      ? "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      : "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share";

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "56.25%",
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 8px 40px rgba(30,59,47,0.13)",
        background: "#1C1C18",
      }}
    >
      {!playing ? (
        <div
          onClick={() => setPlaying(true)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            cursor: "pointer",
            background: thumbnailUrl
              ? `url(${thumbnailUrl}) center/cover no-repeat`
              : "#1C1C18",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Dark scrim so play button pops */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.25)",
            }}
          />
          {/* Play button */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: 72,
              height: 72,
              background: "rgba(0,0,0,0.72)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              transition: "transform 0.15s ease, background 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.background =
                "rgba(184,133,42,0.9)";
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.background =
                "rgba(0,0,0,0.72)";
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
            }}
          >
            {/* Triangle */}
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
          </div>
        </div>
      ) : (
        <iframe
          src={iframeSrc}
          title={title}
          allow={allow || defaultAllow}
          allowFullScreen
          scrolling={platform === "facebook" ? "no" : undefined}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
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
