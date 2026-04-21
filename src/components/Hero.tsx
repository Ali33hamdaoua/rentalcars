"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    const scrollToFleet = () => {
        const fleetSection = document.getElementById('flotte');
        if (fleetSection) {
            fleetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">

            {/* Background Video - High contrast night/circuit vibe */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 filter contrast-125 saturate-150"
            >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                {/* Recommend changing to a dark city driving or race track video */}
            </video>

            {/* Black Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            {/* Content */}
            <div className="relative z-20 text-center px-4 flex flex-col items-center justify-center h-full">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black font-inter uppercase leading-tight text-white tracking-tighter"
                >
                    LOUER <br className="md:hidden" />
                    <span className="text-primary drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">L'EXCELLENCE</span>
                </motion.h1>

                {/* Glow Primary Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="mt-12"
                >
                    <button
                        onClick={scrollToFleet}
                        className="relative group overflow-hidden bg-primary text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-lg shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-300 transform hover:scale-105"
                    >
                        {/* Hover fill animation */}
                        <span className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">Parcourir le garage</span>
                    </button>
                </motion.div>

                {/* Scroll down indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="absolute bottom-12 flex flex-col items-center cursor-pointer group"
                    onClick={scrollToFleet}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="p-3 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm group-hover:border-primary/50 transition-colors"
                    >
                        <ChevronDown className="text-white group-hover:text-primary transition-colors" size={24} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
