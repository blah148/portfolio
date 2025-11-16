"use client";

export default function SpotifyEmbed({ src }) {
  return (
    <div suppressHydrationWarning>
      <iframe
        src={src}
        width="100%"
        height="700"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: "12px" }}
      />
    </div>
  );
}

