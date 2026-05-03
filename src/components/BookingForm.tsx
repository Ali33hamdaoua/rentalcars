"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FLOTTE, CATEGORY_NAMES } from '@/data/fleet';

type CategoryId = "luxe" | "semi-luxe" | "economique";

const BookingSection = () => {
    const [selection, setSelection] = useState({
        category: 'luxe' as CategoryId,
        model: FLOTTE['luxe'][0]?.nom ?? '',
        days: 1,
    });

    const handleBooking = () => {
        const phone = "212669866774";
        const message = `Bonjour Igli Auto ! 👋%0A%0AJe souhaite réserver :%0A✨ *Catégorie* : ${CATEGORY_NAMES[selection.category]}%0A🚗 *Modèle* : ${selection.model}%0A📅 *Durée* : ${selection.days} jour(s).%0A%0AEst-ce disponible ?`;
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    };

    const categoryIds: CategoryId[] = ['luxe', 'semi-luxe', 'economique'];

    return (
        <section className="py-24 px-6 bg-black relative" id="reservation">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-5xl mx-auto bg-black p-8 md:p-14 rounded-[3rem] border border-white/5 shadow-2xl relative"
            >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-12 font-inter uppercase tracking-tighter text-center">
                    IGLI <span className="text-primary drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">EXPRESS</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {/* CATEGORY */}
                    <div className="flex flex-col">
                        <label className="text-gray-400 text-sm mb-3 ml-2 font-black uppercase tracking-widest font-inter">Catégorie</label>
                        <div className="relative group">
                            <select
                                className="w-full bg-[#111111] text-white p-5 rounded-2xl border border-white/10 ring-2 ring-transparent focus:ring-primary hover:border-white/20 outline-none transition-all font-bold appearance-none cursor-pointer"
                                value={selection.category}
                                onChange={(e) => {
                                    const cat = e.target.value as CategoryId;
                                    setSelection({ ...selection, category: cat, model: FLOTTE[cat][0].nom });
                                }}
                            >
                                {categoryIds.map(cat => (
                                    <option key={cat} value={cat}>{CATEGORY_NAMES[cat]}</option>
                                ))}
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 text-white select-none">▼</div>
                        </div>
                    </div>

                    {/* MODEL */}
                    <div className="flex flex-col">
                        <label className="text-gray-400 text-sm mb-3 ml-2 font-black uppercase tracking-widest font-inter">Modèle</label>
                        <div className="relative group">
                            <select
                                className="w-full bg-[#111111] text-white p-5 rounded-2xl border border-white/10 ring-2 ring-transparent focus:ring-primary hover:border-white/20 outline-none transition-all font-bold appearance-none cursor-pointer"
                                value={selection.model}
                                onChange={(e) => setSelection({ ...selection, model: e.target.value })}
                            >
                                {FLOTTE[selection.category].map(c => (
                                    <option key={c.id} value={c.nom}>{c.nom}</option>
                                ))}
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 text-white select-none">▼</div>
                        </div>
                    </div>

                    {/* DURATION */}
                    <div className="flex flex-col">
                        <label className="text-gray-400 text-sm mb-3 ml-2 font-black uppercase tracking-widest font-inter">Durée (Jours)</label>
                        <input
                            type="number" min="1" value={selection.days}
                            className="w-full bg-[#111111] text-white p-5 rounded-2xl border border-white/10 ring-2 ring-transparent focus:ring-primary hover:border-white/20 outline-none transition-all font-bold"
                            onChange={(e) => setSelection({ ...selection, days: parseInt(e.target.value) || 1 })}
                        />
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handleBooking}
                        className="relative overflow-hidden w-full md:w-3/4 py-6 md:py-8 bg-primary text-white font-black text-xl md:text-2xl rounded-[2rem] hover:shadow-[0_0_60px_rgba(220,38,38,0.5)] transition-all uppercase tracking-widest group"
                    >
                        <span className="absolute inset-0 w-full h-full bg-primary-dark origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Vérifier la disponibilité
                        </span>
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default BookingSection;
