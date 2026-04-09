"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

type Category = 'Luxe' | 'Semi-Luxe' | 'Economy';

const BookingSection = () => {
    const [selection, setSelection] = useState({
        category: 'Luxe' as Category,
        model: 'Range Rover',
        days: 1
    });

    const fleet: Record<Category, string[]> = {
        'Luxe': ['Audi Q5', 'Audi Q3', 'Volkswagen Touareg', 'Mercedes Classe A', 'Peugeot 208 GT Line'],
        'Semi-Luxe': ['Hyundai Elantra', 'Peugeot 208', 'Renault Clio 5', 'Volkswagen T-Roc', 'Kia Picanto GT'],
        'Economy': ['Dacia Logan', 'Dacia Sandero', 'Kia Picanto', 'Hyundai i10', 'Fiat 500']
    };

    const handleBooking = () => {
        const phone = "212669866774"; // Numéro Igli Auto
        const message = `Bonjour Igli Auto ! 👋%0A%0AJe souhaite réserver :%0A✨ *Catégorie* : ${selection.category}%0A🚗 *Modèle* : ${selection.model}%0A📅 *Durée* : ${selection.days} jour(s).%0A%0AEst-ce disponible ?`;
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    };

    return (
        <section className="py-24 px-6 bg-black relative" id="reservation">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-5xl mx-auto bg-black p-8 md:p-14 rounded-[3rem] border border-white/5 shadow-2xl relative"
            >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-12 font-inter uppercase tracking-tighter text-center">
                    IGLI <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">EXPRESS</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {/* SÉLECTEUR CATÉGORIE */}
                    <div className="flex flex-col">
                        <label className="text-gray-400 text-sm mb-3 ml-2 font-black uppercase tracking-widest font-inter">Catégorie</label>
                        <div className="relative group">
                            <select
                                className="w-full bg-[#111111] text-white p-5 rounded-2xl border border-white/10 ring-2 ring-transparent focus:ring-red-600 hover:border-white/20 outline-none transition-all font-bold appearance-none cursor-pointer"
                                value={selection.category}
                                onChange={(e) => {
                                    const cat = e.target.value as Category;
                                    setSelection({ ...selection, category: cat, model: fleet[cat][0] });
                                }}
                            >
                                {(Object.keys(fleet) as Category[]).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 text-white select-none">▼</div>
                        </div>
                    </div>

                    {/* SÉLECTEUR MODÈLE */}
                    <div className="flex flex-col">
                        <label className="text-gray-400 text-sm mb-3 ml-2 font-black uppercase tracking-widest font-inter">Modèle</label>
                        <div className="relative group">
                            <select
                                className="w-full bg-[#111111] text-white p-5 rounded-2xl border border-white/10 ring-2 ring-transparent focus:ring-red-600 hover:border-white/20 outline-none transition-all font-bold appearance-none cursor-pointer"
                                value={selection.model}
                                onChange={(e) => setSelection({ ...selection, model: e.target.value })}
                            >
                                {fleet[selection.category].map(car => <option key={car} value={car}>{car}</option>)}
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 text-white select-none">▼</div>
                        </div>
                    </div>

                    {/* DURÉE */}
                    <div className="flex flex-col">
                        <label className="text-gray-400 text-sm mb-3 ml-2 font-black uppercase tracking-widest font-inter">Durée (Jours)</label>
                        <input
                            type="number" min="1" value={selection.days}
                            className="w-full bg-[#111111] text-white p-5 rounded-2xl border border-white/10 ring-2 ring-transparent focus:ring-red-600 hover:border-white/20 outline-none transition-all font-bold"
                            onChange={(e) => setSelection({ ...selection, days: parseInt(e.target.value) || 1 })}
                        />
                    </div>
                </div>

                {/* BOUTON D'ACTION MASSIF */}
                <div className="mt-12 flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handleBooking}
                        className="relative overflow-hidden w-full md:w-3/4 py-6 md:py-8 bg-red-600 text-white font-black text-xl md:text-2xl rounded-[2rem] hover:shadow-[0_0_60px_rgba(220,38,38,0.7)] transition-all uppercase tracking-widest group"
                    >
                        <span className="absolute inset-0 w-full h-full bg-red-700 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
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
