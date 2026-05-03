"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { ALL_CARS, CATEGORY_NAMES, CarModel } from "@/data/fleet";
import CarCard from "@/components/CarCard";

type CategoryFilter = "all" | "luxe" | "semi-luxe" | "economique";
type TransmissionFilter = "all" | "Manuel" | "Automatique";
type FuelFilter = "all" | "Diesel" | "Essence";

export default function CarGrid() {
    const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
    const [transmission, setTransmission] = useState<TransmissionFilter>("all");
    const [fuel, setFuel] = useState<FuelFilter>("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCars = useMemo(() => {
        return ALL_CARS.filter((c: CarModel) => {
            if (activeCategory !== "all" && c.categorie !== activeCategory) return false;
            if (transmission !== "all" && !c.transmission.includes(transmission)) return false;
            if (fuel !== "all" && c.carburant !== fuel) return false;
            if (searchQuery && !c.nom.toLowerCase().includes(searchQuery.toLowerCase())) return false;
            return true;
        });
    }, [activeCategory, transmission, fuel, searchQuery]);

    const categories: { id: CategoryFilter; name: string }[] = [
        { id: "all", name: "Toute la flotte" },
        { id: "luxe", name: CATEGORY_NAMES["luxe"] },
        { id: "semi-luxe", name: CATEGORY_NAMES["semi-luxe"] },
        { id: "economique", name: CATEGORY_NAMES["economique"] },
    ];

    return (
        <section className="py-24 bg-black min-h-screen" id="flotte">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header & Search */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="flex flex-col">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase font-inter tracking-tighter leading-none"
                        >
                            NOTRE <span className="text-primary">GARAGE</span>
                        </motion.h2>
                        <p className="text-gray-500 mt-4 font-bold uppercase tracking-widest text-xs sm:text-sm">
                            Choisissez l&apos;excellence pour votre s&eacute;jour &agrave; Agadir
                        </p>
                    </div>

                    <div className="relative group w-full sm:w-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Rechercher une voiture..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-dark-card border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:outline-none focus:border-primary/50 transition-all w-full sm:w-72"
                        />
                    </div>
                </div>

                {/* Category filter */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold uppercase text-[11px] sm:text-xs tracking-widest transition-all ${
                                activeCategory === cat.id
                                    ? "bg-primary text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                                    : "bg-dark-card text-gray-400 border border-white/5 hover:border-white/20"
                            }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Transmission + Fuel filters */}
                <div className="flex flex-wrap gap-2 mb-12">
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
                            {t === "all" ? "Tous" : t}
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

                {/* Result count */}
                <p className="text-gray-500 text-xs sm:text-sm font-bold uppercase tracking-widest mb-6">
                    {filteredCars.length} v&eacute;hicule{filteredCars.length > 1 ? "s" : ""}
                </p>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredCars.map((car, i) => (
                            <CarCard key={car.id} car={car} index={i} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty state */}
                {filteredCars.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-gray-500 font-bold uppercase tracking-widest">
                            Aucune voiture ne correspond &agrave; votre recherche.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
