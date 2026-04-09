"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Fuel, Users, Settings2 } from "lucide-react";
import BookingIconButton from "@/components/BookingIconButton";
import { ALL_CARS, CATEGORY_NAMES, CarModel } from "@/data/fleet";

type FilterOption = "all" | "economy" | "semi-luxe" | "luxe";

const CATEGORY_BADGE_STYLES: Record<string, string> = {
    economy: "bg-green-600/20 text-green-400 border-green-500/30",
    "semi-luxe": "bg-amber-600/20 text-amber-400 border-amber-500/30",
    luxe: "bg-red-600/20 text-red-400 border-red-500/30",
};

export default function FlottePage() {
    const [filter, setFilter] = useState<FilterOption>("all");

    const filtered = useMemo(() => {
        return filter === "all"
            ? [...ALL_CARS]
            : ALL_CARS.filter((c) => c.categorie === filter);
    }, [filter]);

    return (
        <main className="min-h-screen bg-black pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Back button */}
                <Link
                    href="/#flotte"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors mb-12 group font-black text-sm tracking-widest uppercase font-inter"
                >
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Retour
                </Link>

                {/* Title */}
                <div className="mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white font-inter tracking-tighter uppercase relative inline-block"
                    >
                        Notre Flotte
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                            className="absolute -bottom-4 left-0 w-full h-3 lg:h-4 bg-red-600 origin-left shadow-[0_0_25px_rgba(220,38,38,0.8)]"
                        />
                    </motion.h1>
                </div>

                {/* Category filters */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {(["all", "economy", "semi-luxe", "luxe"] as FilterOption[]).map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                                filter === f
                                    ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                            }`}
                        >
                            {f === "all" ? "Toutes" : CATEGORY_NAMES[f]}
                        </button>
                    ))}
                </div>

                {/* Results count */}
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-8">
                    {filtered.length} v&eacute;hicule{filtered.length > 1 ? "s" : ""}
                </p>

                {/* Cars grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-14">
                    {filtered.map((car: CarModel, i: number) => {
                        const badgeStyle = CATEGORY_BADGE_STYLES[car.categorie] || "";
                        const isLuxe = car.categorie === "luxe";

                        return (
                            <motion.div
                                key={car.id}
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className={`bg-[#0A0A0A] rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 lg:p-10 border border-white/5 hover:border-red-600/50 transition-colors duration-500 group flex flex-col shadow-2xl relative overflow-hidden ${
                                    isLuxe ? "ring-1 ring-white/5" : ""
                                }`}
                            >
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Best Value badge */}
                                {car.bestValue && (
                                    <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-30 px-3 py-1.5 bg-amber-500 text-black text-xs font-black uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                                        Best Value
                                    </div>
                                )}

                                {/* Category badge */}
                                <div className="relative z-10 mb-4">
                                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${badgeStyle}`}>
                                        {CATEGORY_NAMES[car.categorie]}
                                    </span>
                                </div>

                                {/* Car image */}
                                <div className="relative h-[180px] sm:h-[200px] w-full mb-6 pointer-events-none z-10 flex items-center justify-center">
                                    <Image
                                        src={car.img}
                                        alt={car.nom}
                                        fill
                                        className="object-contain object-center drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all duration-700 ease-out group-hover:scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Car name */}
                                <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-inter tracking-tighter mb-3 group-hover:text-red-600 transition-colors relative z-10">
                                    {car.nom}
                                </h3>

                                {/* Features */}
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 relative z-10">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 border border-white/10 rounded-full text-[10px] sm:text-[11px] font-bold text-gray-300 bg-white/5">
                                        <Fuel size={12} />
                                        {car.moteur}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 border border-white/10 rounded-full text-[10px] sm:text-[11px] font-bold text-gray-300 bg-white/5">
                                        <Settings2 size={12} />
                                        {car.transmission}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 border border-white/10 rounded-full text-[10px] sm:text-[11px] font-bold text-gray-300 bg-white/5">
                                        <Users size={12} />
                                        {car.places} places
                                    </span>
                                </div>

                                {/* Price + CTA */}
                                <div className="flex items-end justify-between mt-auto relative z-10">
                                    <div>
                                        <p className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider">
                                            &Agrave; partir de
                                        </p>
                                        <p className={`text-2xl sm:text-3xl font-black font-inter tracking-tighter ${
                                            isLuxe
                                                ? "text-gold group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_15px_rgba(253,224,71,0.5)]"
                                                : "text-white group-hover:text-red-600 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                                        } transition-all`}>
                                            {car.prix} <span className="text-base sm:text-lg">DH/jour</span>
                                        </p>
                                    </div>

                                    <div className="shrink-0">
                                        <BookingIconButton carName={car.nom} />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
