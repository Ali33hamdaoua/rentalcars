"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-black/50 backdrop-blur-md border-b border-white/10 py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="font-black text-white tracking-widest uppercase font-inter flex flex-col items-center">
                    {/* Mockup for the Red/White/Black Logo */}
                    <span className="text-3xl leading-none">IGLI <span className="text-red-600">AUTO</span></span>
                    <span className="text-[10px] tracking-[0.3em] text-gray-400 mt-1">RENTAL CARS</span>
                </a>

                <div className="hidden md:flex gap-8">
                    <a href="#hero" className="text-sm font-bold text-white uppercase hover:text-red-600 transition-colors">Accueil</a>
                    <a href="#flotte" className="text-sm font-bold text-white uppercase hover:text-red-600 transition-colors">Flotte</a>
                    <a href="#reservation" className="text-sm font-bold text-white uppercase hover:text-red-600 transition-colors">Réserver</a>
                </div>

                <a
                    href="#reservation"
                    className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-full font-bold uppercase text-sm hover:bg-white hover:text-red-600 transition-colors shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                >
                    Disponibilité
                </a>

                {/* Mobile menu button could go here */}
            </div>
        </motion.nav>
    );
}
