"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ALL_CARS, CATEGORY_NAMES, CarModel } from "@/data/fleet";
import CarCard from "@/components/CarCard";

type CategoryFilter = "all" | "luxe" | "semi-luxe" | "economique";
type TransmissionFilter = "all" | "Manuel" | "Automatique";
type FuelFilter = "all" | "Diesel" | "Essence";

export default function FlottePage() {
    const [category, setCategory] = useState<CategoryFilter>("all");
    const [transmission, setTransmission] = useState<TransmissionFilter>("all");
    const [fuel, setFuel] = useState<FuelFilter>("all");

    const filtered = useMemo(() => {
        return ALL_CARS.filter((c: CarModel) => {
            if (category !== "all" && c.categorie !== category) return false;
            if (transmission !== "all" && !c.transmission.includes(transmission)) return false;
            if (fuel !== "all" && c.carburant !== fuel) return false;
            return true;
        });
    }, [category, transmission, fuel]);

    return (
        <main className="min-h-screen bg-black pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Back button */}
                <Link
                    href="/#flotte"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-12 group font-black text-sm tracking-widest uppercase font-inter"
                >
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Retour au Garage
                </Link>

                {/* Title */}
                <div className="mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white font-inter tracking-tighter uppercase relative inline-block"
                    >
                        NOTRE <span className="text-primary">FLOTTE</span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                            className="absolute -bottom-4 left-0 w-full h-3 lg:h-4 bg-primary origin-left shadow-[0_0_25px_rgba(220,38,38,0.6)]"
                        />
                    </motion.h1>
                </div>

                {/* Category filter */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                    {(["all", "luxe", "semi-luxe", "economique"] as CategoryFilter[]).map((f) => (
                        <button
                            key={f}
                            onClick={() => setCategory(f)}
                            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-widest transition-all ${
                                category === f
                                    ? "bg-primary text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                            }`}
                        >
                            {f === "all" ? "Toute la flotte" : CATEGORY_NAMES[f]}
                        </button>
                    ))}
                </div>

                {/* Transmission + Fuel filters */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {(["all", "Manuel", "Automatique"] as TransmissionFilter[]).map((t) => (
                        <button
                            key={t}
                            onClick={() => setTransmission(t)}
                            className={`px-3.5 py-2 rounded-lg font-bold uppercase text-[10px] sm:text-[11px] tracking-wider transition-all ${
                                transmission === t
                                    ? "bg-white text-black"
                                    : "bg-white/5 text-gray-500 border border-white/5 hover:text-gray-300"
                            }`}
                        >
                            {t === "all" ? "Boite" : t}
                        </button>
                    ))}
                    <span className="w-px bg-white/10 mx-1" />
                    {(["all", "Diesel", "Essence"] as FuelFilter[]).map((f) => (
                        <button
                            key={f}
                            onClick={() => setFuel(f)}
                            className={`px-3.5 py-2 rounded-lg font-bold uppercase text-[10px] sm:text-[11px] tracking-wider transition-all ${
                                fuel === f
                                    ? "bg-white text-black"
                                    : "bg-white/5 text-gray-500 border border-white/5 hover:text-gray-300"
                            }`}
                        >
                            {f === "all" ? "Carburant" : f}
                        </button>
                    ))}
                </div>

                {/* Results count */}
                <p className="text-gray-500 text-xs sm:text-sm font-bold uppercase tracking-widest mb-8">
                    {filtered.length} v&eacute;hicule{filtered.length > 1 ? "s" : ""} disponible{filtered.length > 1 ? "s" : ""}
                </p>

                {/* Cars grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((car, i) => (
                            <CarCard key={car.id} car={car} index={i} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty state */}
                {filtered.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-gray-500 font-bold uppercase tracking-widest">
                            Aucune voiture ne correspond &agrave; vos filtres.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}
