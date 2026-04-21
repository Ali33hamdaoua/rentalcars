"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Car } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Accueil", href: "#hero" },
        { name: "Garage", href: "#flotte" },
        { name: "Réserver", href: "#reservation" },
        { name: "Contact", href: "#location" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                        ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
                        : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <a href="#" className="flex items-center gap-3">
                        <div className="relative w-12 h-12 md:w-16 md:h-16">
                             {/* Use the logo.png if it exists, fallback to text if not */}
                            <Image 
                                src="/logo.png" 
                                alt="IGLI AUTO Logo" 
                                fill 
                                className="object-contain"
                                priority
                                onError={(e) => {
                                    // Fallback UI if logo.png is missing
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                }}
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-black text-white tracking-widest uppercase font-inter leading-none">
                                IGLI <span className="text-primary">AUTO</span>
                            </span>
                            <span className="text-[8px] md:text-[10px] tracking-[0.3em] text-gray-400 mt-1 font-bold">RENTAL CARS</span>
                        </div>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold text-white uppercase hover:text-primary transition-colors tracking-widest"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#reservation"
                            className="bg-primary text-white px-6 py-2 rounded-full font-bold uppercase text-sm hover:bg-white hover:text-primary transition-colors shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                        >
                            Disponibilité
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-dark border-r border-white/10 z-[70] shadow-2xl flex flex-col p-8"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-black text-white uppercase font-inter tracking-[0.2em]">
                                        IGLI <span className="text-primary">AUTO</span>
                                    </span>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-black text-white uppercase tracking-widest hover:text-primary transition-colors flex items-center justify-between group"
                                    >
                                        {link.name}
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.2 }}
                                            className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <Car size={24} />
                                        </motion.div>
                                    </a>
                                ))}
                            </nav>

                            <div className="mt-auto">
                                <a
                                    href="#reservation"
                                    onClick={() => setIsOpen(false)}
                                    className="block text-center bg-primary text-white py-4 rounded-xl font-black uppercase tracking-widest shadow-[0_10px_20px_rgba(220,38,38,0.2)]"
                                >
                                    Réserver Maintenant
                                </a>
                                <p className="text-center text-gray-500 text-[10px] mt-6 tracking-[0.3em] font-bold">
                                    EST. 2024 | AGADIR, MAROC
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
