"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { CarModel, CATEGORY_NAMES } from "@/data/fleet";
import CarCard from "@/components/CarCard";

type TransmissionFilter = "all" | "Manuel" | "Automatique";
type FuelFilter = "all" | "Diesel" | "Essence";

export default function CategoryClient({
    categoryName,
    categoryId,
    cars,
}: {
    categoryName: string;
    categoryId: string;
    cars: CarModel[];
}) {
    const [transmission, setTransmission] = useState<TransmissionFilter>("all");
    const [fuel, setFuel] = useState<FuelFilter>("all");

    const isLuxe = categoryId === "luxe";
    const isSemiLuxe = categoryId === "semi-luxe";

    const filtered = useMemo(() => {
        return cars.filter((c) => {
            if (transmission !== "all" && !c.transmission.includes(transmission)) return false;
            if (fuel !== "all" && !c.carburant.includes(fuel)) return false;
            return true;
        });
    }, [cars, transmission, fuel]);

    return (
        <main className="min-h-screen bg-black pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
            {/* Premium ambient glow for Luxe */}
            {isLuxe && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            )}

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
                <div className="mb-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white font-inter tracking-tighter uppercase relative inline-block"
                    >
                        {categoryName}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                            className="absolute -bottom-4 left-0 w-full h-3 lg:h-4 bg-primary origin-left shadow-[0_0_25px_rgba(220,38,38,0.6)]"
                        />
                    </motion.h1>
                </div>

                {isSemiLuxe && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full"
                    >
                        <span className="text-amber-400 text-sm font-bold uppercase tracking-wider">Recommand&eacute;</span>
                    </motion.div>
                )}

                {/* Category navigation */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {Object.entries(CATEGORY_NAMES).map(([id, name]) => (
                        <Link
                            key={id}
                            href={`/flotte/${id}`}
                            className={`px-4 sm:px-5 py-2.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-widest transition-all ${
                                id === categoryId
                                    ? "bg-primary text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                            }`}
                        >
                            {name}
                        </Link>
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

                {/* Cars grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((car, i) => (
                            <CarCard key={car.id} car={car} index={i} showCategory={false} />
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
