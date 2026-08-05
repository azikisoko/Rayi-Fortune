// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { SITE_NAME } from "../lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE_NAME} — Full-Stack Developer & ML Engineer`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#020617",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(59,130,246,0.35), transparent 50%), radial-gradient(circle at 75% 75%, rgba(56,189,248,0.25), transparent 50%)",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, color: "#f1f5f9", display: "flex" }}>
          {SITE_NAME}
        </div>
        <div style={{ fontSize: 32, color: "#94a3b8", marginTop: 20, display: "flex" }}>
          Full-Stack Developer & ML Engineer
        </div>
      </div>
    ),
    { ...size }
  );
}