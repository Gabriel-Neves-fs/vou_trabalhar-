import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vou trabalhar?",
  description: "organize seus turnos de trabalho 12x36",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
