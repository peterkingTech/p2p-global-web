import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// MOCK/TEMPORARY — a generated wordmark standing in for the real P2P logo.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0c0a",
          color: "#ddc07d",
          fontSize: 26,
          fontWeight: 600,
          letterSpacing: 1,
        }}
      >
        P2P
      </div>
    ),
    { ...size }
  );
}
