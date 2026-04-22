"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Car, ArrowRight } from "lucide-react";
import { ALL_CARS, CATEGORY_NAMES, CarModel } from "@/data/fleet";

type FilterOption = "all" | "economique" | "semi-luxe" | "luxe";

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
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-gold transition-colors mb-12 group font-black text-sm tracking-widest uppercase font-inter"
                >
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Retour au Garage
                </Link>

                {/* Title */}
                <div className="mb-16">
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

                {/* Category filters */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {(["all", "economique", "semi-luxe", "luxe"] as FilterOption[]).map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                                filter === f
                                    ? "bg-primary text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                            }`}
                        >
                            {f === "all" ? "Toute la flotte" : CATEGORY_NAMES[f]}
                        </button>
                    ))}
                </div>

                {/* Results count */}
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-8">
                    {filtered.length} v&eacute;hicule{filtered.length > 1 ? "s" : ""} disponible{filtered.length > 1 ? "s" : ""}
                </p>

                {/* Cars grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filtered.map((car: CarModel, i: number) => {
                        return (
                            <motion.div
                                key={car.id}
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: -10 }}
                                className="bg-dark-card rounded-[2.5rem] p-6 border border-white/5 border-b-primary/20 hover:border-primary/30 transition-all flex flex-col shadow-2xl relative overflow-hidden group"
                            >
                                {/* Category badge */}
                                <div className="relative z-10 mb-4 flex justify-between items-start">
                                    <span className="bg-black/50 backdrop-blur-md text-[10px] text-gray-400 px-3 py-1 rounded-full border border-white/5 uppercase font-bold tracking-widest">
                                        {CATEGORY_NAMES[car.categorie]}
                                    </span>
                                </div>

                                {/* Car image placeholder */}
                                <div className="aspect-[4/3] rounded-[2rem] bg-black/40 border border-white/5 mb-6 relative overflow-hidden flex items-center justify-center group-hover:bg-black/60 transition-colors">
                                    {car.img ? (
                                        <Image 
                                            src={car.img} 
                                            alt={car.nom} 
                                            fill 
                                            className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    ) : (
                                        <Car size={64} className="text-white/5 group-hover:text-primary/10 transition-colors" />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                {/* Info */}
                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-xl font-black text-white uppercase font-inter tracking-tight mb-2">
                                        {car.nom}
                                    </h3>
                                    <div className="flex items-baseline gap-1 mt-auto">
                                        <span className="text-3xl font-black text-primary font-inter">{car.prix}</span>
                                        <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">DH / Jour</span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-white/5 my-6" />

                                {/* Action Button */}
                                <a
                                    href={`https://wa.me/212669866774?text=Bonjour, je souhaite réserver la ${car.nom}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-white text-black py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all shadow-sm"
                                >
                                    Réserver
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
