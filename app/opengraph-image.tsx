import { ImageResponse } from "next/og";
import { SITE } from "@/lib/content";

export const alt = SITE.ogTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(60% 60% at 25% 25%, #DCE6DF 0%, transparent 70%), radial-gradient(60% 60% at 85% 80%, #ECE7DD 0%, transparent 70%), #F5F2EC",
          color: "#23262B",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "40px", height: "2px", background: "#6E8F7D" }} />
          <div style={{ fontSize: "26px", letterSpacing: "0.18em", color: "#5A6168" }}>
            SEMINARE · COACHING · FORTBILDUNGEN
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "150px", letterSpacing: "0.06em", lineHeight: 1 }}>
            {SITE.brand}
          </div>
          <div style={{ fontSize: "44px", color: "#566F62", marginTop: "16px" }}>
            {SITE.claim}
          </div>
        </div>

        <div style={{ fontSize: "26px", color: "#5A6168" }}>
          Beratungs- &amp; Kommunikationskompetenz · Stresskompetenz
        </div>
      </div>
    ),
    { ...size },
  );
}
