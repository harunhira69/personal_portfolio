import { ImageResponse } from "next/og";

export const alt = "Harun Or Rashid - Frontend Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
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
          background: "#09090b",
          color: "white",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
          }}
        >
          Harun Or Rashid
        </div>

        <div
          style={{
            fontSize: 36,
            marginTop: 24,
            color: "#a1a1aa",
          }}
        >
          Frontend Developer
        </div>

        <div
          style={{
            fontSize: 24,
            marginTop: 32,
            color: "#71717a",
          }}
        >
          React · Next.js · TypeScript · Modern Web Development
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
