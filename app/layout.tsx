// app/layout.tsx
export const metadata = {
  title: "SOLYON Technologies",
  description: "Luxury from Consciousness — Innovación, inteligencia y propósito humano.",
  icons: {
    icon: "/solyon-logo.png",           // usa PNG como favicon si no tienes .ico
    apple: "/solyon-logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Montserrat:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Fallback para navegadores que no consumen metadata.icons */}
        <link rel="icon" href="/solyon-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/solyon-logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
