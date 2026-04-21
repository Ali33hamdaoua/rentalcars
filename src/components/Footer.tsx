"use client";

import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black pt-20 pb-0 relative overflow-hidden border-t border-primary/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 mb-10 lg:mb-20">

                {/* Infos Section */}
                <div className="flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-16 h-16">
                            <Image 
                                src="/logo.png" 
                                alt="IGLI AUTO Logo" 
                                fill 
                                className="object-contain"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }}
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-black uppercase font-inter leading-none text-white tracking-widest">
                                IGLI <span className="text-primary">AUTO</span>
                            </span>
                            <span className="text-[10px] tracking-[0.3em] text-gray-500 mt-1 font-bold">RENTAL CARS</span>
                        </div>
                    </div>
                    <p className="text-gray-400 font-bold leading-relaxed mb-8 max-w-sm text-sm uppercase tracking-widest">
                        Confiance. Qualité. Performance. Votre partenaire de route à Agadir.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="https://www.instagram.com/igli_auto/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-primary hover:text-white hover:bg-primary hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] transition-all duration-300 bg-[#111]"
                        >
                            <Instagram size={20} />
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61572664599756"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-primary hover:text-white hover:bg-primary hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] transition-all duration-300 bg-[#111]"
                        >
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>

                {/* Liens Rapides Section */}
                <div className="flex flex-col">
                    <h4 className="text-white text-lg font-black uppercase font-inter mb-6 tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Navigation</h4>
                    <ul className="space-y-4 font-bold">
                        <li>
                            <a href="#hero" className="text-gray-400 hover:text-primary transition-colors uppercase text-sm tracking-wider">Accueil</a>
                        </li>
                        <li>
                            <a href="#flotte" className="text-gray-400 hover:text-primary transition-colors uppercase text-sm tracking-wider">Le Garage</a>
                        </li>
                        <li>
                            <a href="#reservation" className="text-gray-400 hover:text-primary transition-colors uppercase text-sm tracking-wider">Réservation</a>
                        </li>
                        <li>
                            <a href="#location" className="text-gray-400 hover:text-primary transition-colors uppercase text-sm tracking-wider">Contact & Agence</a>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col">
                    <h4 className="text-primary text-lg font-black uppercase font-inter mb-6 tracking-widest drop-shadow-[0_0_10px_rgba(220,38,38,0.3)]">Contact</h4>
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4 text-gray-400 font-black group">
                            <Phone className="text-primary shrink-0 group-hover:animate-pulse" size={24} />
                            <a href="tel:+212694449069" className="hover:text-white transition-colors text-xl tracking-widest">
                                +212 694-449069
                            </a>
                        </li>
                        <li className="flex items-center gap-4 text-gray-400 font-bold group">
                            <Mail className="text-primary shrink-0 group-hover:animate-pulse" size={24} />
                            <a href="mailto:autoigli5@gmail.com" className="hover:text-white transition-colors tracking-widest text-sm uppercase">
                                autoigli5@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Signature & Copyright */}
            <div className="text-center py-6 border-t border-white/5 relative z-10 w-full max-w-7xl mx-auto px-6">
                <p className="text-gray-600 font-bold text-xs tracking-[0.2em] uppercase">
                    © 2024 Igli Auto Agadir - All Rights Reserved
                </p>
            </div>

            {/* Signature Massive */}
            <div className="w-full flex justify-center mt-4 -mb-[5vw] pointer-events-none select-none overflow-hidden relative z-0">
                <span className="text-[17vw] font-black uppercase text-white opacity-5 font-inter tracking-tighter whitespace-nowrap">
                    IGLI AUTO
                </span>
            </div>
        </footer>
    );
}
