import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frases Estoicas",
  description: "Frases sobre o Estoicismo, e seus maiores pensadores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
