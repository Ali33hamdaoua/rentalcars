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
  title: "Location de Voitures Agadir | IGLI AUTO",
  description: "IGLI AUTO - Location de voitures à Agadir. Service rapide, prix compétitifs et large choix de véhicules. Livraison gratuite à l'aéroport et au centre-ville. Contact : autoigli5@gmail.com | +212 694-449069.",
  keywords: ["location voiture agadir", "rental car morocco", "cheap car agadir", "igli auto", "location voiture aéroport agadir"],
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
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
