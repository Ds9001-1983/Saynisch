"use client";

// Ersetzt bei einem Crash im Root-Layout die komplette Seite — Tailwind ist
// hier nicht garantiert, deshalb Inline-Styles.
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="de">
      <body
        style={{
          margin: 0,
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 1.5rem",
          backgroundColor: "#f5f2ec",
          color: "#22262a",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            fontSize: "0.75rem",
            color: "#566f62",
          }}
        >
          Fehler
        </p>
        <h1 style={{ fontWeight: 300, fontSize: "2.5rem", margin: "1rem 0 0" }}>
          Kurz durchatmen.
        </h1>
        <p style={{ maxWidth: "42ch", marginTop: "1.5rem", color: "#5a6168" }}>
          Da ist etwas schiefgelaufen. Ein neuer Versuch hilft meistens.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: "2.5rem",
            minHeight: 44,
            padding: "0.875rem 1.75rem",
            borderRadius: 10,
            border: "none",
            backgroundColor: "#566f62",
            color: "#ffffff",
            fontSize: "0.875rem",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Erneut versuchen
        </button>
      </body>
    </html>
  );
}
