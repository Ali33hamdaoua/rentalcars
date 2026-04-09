import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Igli Auto | Location de Voitures de Luxe",
  description: "Agence de location de voitures de luxe et économiques. Choisissez Igli Auto pour une expérience premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans bg-dark text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
