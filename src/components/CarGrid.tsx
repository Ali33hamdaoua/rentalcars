"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FLOTTE, CATEGORY_NAMES, CarModel } from "@/data/fleet";
import { Car, ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import Image from "next/image";

export default function CarGrid() {
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState("");

    const allCars = [
        ...FLOTTE["luxe"],
        ...FLOTTE["semi-luxe"],
        ...FLOTTE["economique"]
    ];

    const filteredCars = (activeCategory === "all" ? allCars : FLOTTE[activeCategory as keyof typeof FLOTTE])
        .filter(car => car.nom.toLowerCase().includes(searchQuery.toLowerCase()));

    const categories = [
        { id: "all", name: "Toute la flotte" },
        { id: "luxe", name: "💎 Luxe" },
        { id: "semi-luxe", name: "✨ Semi-luxe" },
        { id: "economique", name: "🚙 Économique" }
    ];

    return (
        <section className="py-24 bg-black min-h-screen" id="flotte">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header & Controls */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="flex flex-col">
                        <motion.h2 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black text-white uppercase font-inter tracking-tighter leading-none"
                        >
                            NOTRE <span className="text-primary">GARAGE</span>
                        </motion.h2>
                        <p className="text-gray-500 mt-4 font-bold uppercase tracking-widest text-sm">
                            Choisissez l'excellence pour votre séjour à Agadir
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" size={20} />
                            <input 
                                type="text"
                                placeholder="Rechercher une voiture..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-dark-card border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:outline-none focus:border-primary/50 transition-all w-full sm:w-64"
                            />
                        </div>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-widest transition-all ${
                                activeCategory === cat.id 
                                    ? "bg-primary text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]" 
                                    : "bg-dark-card text-gray-400 border border-white/5 hover:border-white/20"
                            }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredCars.map((car) => (
                            <motion.div
                                layout
                                key={car.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="bg-dark-card group rounded-[2.5rem] p-6 border border-white/5 border-b-primary/20 hover:border-primary/30 transition-all flex flex-col shadow-2xl relative overflow-hidden"
                            >
                                {/* Category Badge */}
                                <div className="absolute top-6 right-6 z-20">
                                    <span className="bg-black/50 backdrop-blur-md text-[10px] text-gray-400 px-3 py-1 rounded-full border border-white/5 uppercase font-bold tracking-widest">
                                        {CATEGORY_NAMES[car.categorie as keyof typeof CATEGORY_NAMES]}
                                    </span>
                                </div>

                                {/* Image Container */}
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
                                    <h3 className="text-2xl font-black text-white uppercase font-inter tracking-tight mb-2">
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
                                    href="#reservation"
                                    className="w-full bg-white text-black py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all shadow-sm"
                                >
                                    Réserver
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredCars.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-gray-500 font-bold uppercase tracking-widest">Aucune voiture ne correspond à votre recherche.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
