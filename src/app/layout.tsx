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
  title: "Igli Auto | Location de Voitures de Luxe & Prestige à Agadir",
  description: "Louez votre voiture de luxe à Agadir avec IGLI AUTO. Large choix de véhicules prestige et économiques. Livraison gratuite Aéroport Agadir Al Massira. Service 24/7. Contactez-nous : +212 669-866774.",
  keywords: ["location voiture agadir", "location voiture luxe agadir", "rent car agadir", "igli auto", "location voiture aéroport agadir", "car rental morocco"],
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
