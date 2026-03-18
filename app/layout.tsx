import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Johnny & Jugnu",
  description: "Bold Flavors, Big Heart – Pakistan's proudly homegrown fast food brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
