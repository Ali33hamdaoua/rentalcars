"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Car, ArrowRight, Settings2, Fuel, Calendar } from "lucide-react";
import { CarModel, CATEGORY_NAMES } from "@/data/fleet";

type Props = {
    car: CarModel;
    index?: number;
    showCategory?: boolean;
};

export default function CarCard({ car, index = 0, showCategory = true }: Props) {
    const whatsappHref = `https://wa.me/212669866774?text=${encodeURIComponent(
        `Bonjour Igli Auto, je souhaite réserver la ${car.nom} (${car.annee}).`
    )}`;

    // JPEG photos generally have a non-transparent background — use white
    // to make them blend cleanly. PNG/WebP can keep the dark container.
    const isJpeg = /\.jpe?g$/i.test(car.img);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8 }}
            className="bg-dark-card group rounded-[2.5rem] p-6 border border-white/5 border-b-primary/20 hover:border-primary/30 transition-all flex flex-col shadow-2xl relative overflow-hidden"
        >
            {/* Top row: category badge */}
            {showCategory && (
                <div className="relative z-10 mb-4 flex justify-start">
                    <span className="bg-black/50 backdrop-blur-md text-[10px] text-gray-400 px-3 py-1 rounded-full border border-white/5 uppercase font-bold tracking-widest">
                        {CATEGORY_NAMES[car.categorie]}
                    </span>
                </div>
            )}

            {/* Image / placeholder */}
            <div className={`aspect-[4/3] rounded-[2rem] border border-white/5 mb-5 relative overflow-hidden flex items-center justify-center transition-colors ${
                isJpeg
                    ? "bg-white"
                    : "bg-black/40 group-hover:bg-black/60"
            }`}>
                {car.img ? (
                    <Image
                        src={car.img}
                        alt={car.nom}
                        fill
                        className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                ) : (
                    <Car size={64} className="text-white/5 group-hover:text-primary/10 transition-colors" />
                )}
                {!isJpeg && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
            </div>

            {/* Name */}
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-inter tracking-tight mb-3">
                {car.nom}
            </h3>

            {/* Specs row: transmission · fuel · year */}
            <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-white/10 rounded-lg text-[10px] sm:text-[11px] font-bold text-gray-300 bg-white/5">
                    <Settings2 size={12} className="text-primary" />
                    {car.transmission}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-white/10 rounded-lg text-[10px] sm:text-[11px] font-bold text-gray-300 bg-white/5">
                    <Fuel size={12} className="text-primary" />
                    {car.carburant}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-primary/30 bg-primary/10 rounded-lg text-[10px] sm:text-[11px] font-black text-primary uppercase tracking-wider">
                    <Calendar size={12} />
                    Mod&egrave;le {car.annee}
                </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-1 mt-auto">
                <span className="text-3xl font-black text-primary font-inter">{car.prix}</span>
                <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">DH / Jour</span>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/5 my-5" />

            {/* CTA */}
            <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-black py-3.5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all shadow-sm"
            >
                Réserver
                <ArrowRight size={16} />
            </a>
        </motion.div>
    );
}
