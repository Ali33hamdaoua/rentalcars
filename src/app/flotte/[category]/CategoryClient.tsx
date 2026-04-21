"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Fuel, Users, Settings2, Car } from "lucide-react";
import BookingIconButton from "@/components/BookingIconButton";
import { CarModel, CATEGORY_NAMES } from "@/data/fleet";

const CATEGORY_STYLES: Record<string, { badge: string; cardAccent: string }> = {
    economy: {
        badge: "bg-green-600/20 text-green-400 border-green-500/30",
        cardAccent: "hover:border-green-600/50",
    },
    "semi-luxe": {
        badge: "bg-amber-600/20 text-amber-400 border-amber-500/30",
        cardAccent: "hover:border-amber-500/50",
    },
    luxe: {
        badge: "bg-primary/20 text-primary border-primary/30",
        cardAccent: "hover:border-primary/50",
    },
};

export default function CategoryClient({
    categoryName,
    categoryId,
    cars,
}: {
    categoryName: string;
    categoryId: string;
    cars: CarModel[];
}) {
    const styles = CATEGORY_STYLES[categoryId] || CATEGORY_STYLES.economy;
    const isLuxe = categoryId === "luxe";
    const isSemiLuxe = categoryId === "semi-luxe";

    return (
        <main className="min-h-screen bg-black pt-32 pb-24 px-6 relative overflow-hidden">
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

                {/* Title + Category description */}
                <div className="mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black text-white font-inter tracking-tighter uppercase relative inline-block"
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
                        className="mb-10 inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full"
                    >
                        <span className="text-amber-400 text-sm font-bold uppercase tracking-wider">Recommand&eacute;</span>
                    </motion.div>
                )}

                {/* Category filter */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {Object.entries(CATEGORY_NAMES).map(([id, name]) => (
                        <Link
                            key={id}
                            href={`/flotte/${id}`}
                            className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                                id === categoryId
                                ? "bg-primary text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                            }`}
                        >
                            {name}
                        </Link>
                    ))}
                </div>

                {/* Cars grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
                    {cars.map((car: CarModel, i: number) => (
                        <motion.div
                            key={car.id}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className={`bg-[#0A0A0A] rounded-[3rem] p-8 lg:p-10 border border-white/5 ${styles.cardAccent} transition-colors duration-500 group flex flex-col shadow-2xl relative overflow-hidden ${
                                isLuxe ? "ring-1 ring-white/5" : ""
                            }`}
                        >
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Best Value badge */}
                            {car.bestValue && (
                                <div className="absolute top-6 right-6 z-30 px-3 py-1.5 bg-amber-500 text-black text-xs font-black uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                                    Best Value
                                </div>
                            )}

                            {/* Category badge */}
                            <div className="relative z-10 mb-4">
                                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${styles.badge}`}>
                                    {CATEGORY_NAMES[categoryId]}
                                </span>
                            </div>

                            {/* Car image */}
                            <div className="relative h-[220px] w-full mb-6 pointer-events-none z-10 flex items-center justify-center">
                                {car.img ? (
                                    <Image
                                        src={car.img}
                                        alt={car.nom}
                                        fill
                                        className="object-contain object-center drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all duration-700 ease-out group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                ) : (
                                    <Car size={80} className="text-white/5 group-hover:text-primary/10 transition-colors" />
                                )}
                            </div>

                            {/* Car name */}
                            <h3 className="text-2xl font-black text-white uppercase font-inter tracking-tighter mb-3 group-hover:text-primary transition-colors relative z-10">
                                {car.nom}
                            </h3>

                            {/* Features row */}
                            <div className="flex flex-wrap gap-2 mb-5 relative z-10">
                                {car.moteur && (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-full text-[11px] font-bold text-gray-300 bg-white/5">
                                        <Fuel size={12} />
                                        {car.moteur}
                                    </span>
                                )}
                                {car.transmission && (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-full text-[11px] font-bold text-gray-300 bg-white/5">
                                        <Settings2 size={12} />
                                        {car.transmission}
                                    </span>
                                )}
                                {car.places && (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-full text-[11px] font-bold text-gray-300 bg-white/5">
                                        <Users size={12} />
                                        {car.places} places
                                    </span>
                                )}
                            </div>

                            {/* Price + CTA */}
                            <div className="flex items-end justify-between mt-auto relative z-10">
                                <div>
                                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">
                                        &Agrave; partir de
                                    </p>
                                    <p className={`text-3xl font-black font-inter tracking-tighter ${
                                        isLuxe
                                            ? "text-primary group-hover:text-red-500 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                                            : "text-white group-hover:text-primary transition-all duration-300"
                                    }`}>
                                        {car.prix} <span className="text-lg">DH/jour</span>
                                    </p>
                                </div>

                                <div className="shrink-0">
                                    <BookingIconButton carName={car.nom} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </main>
    );
}
