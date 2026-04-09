"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Location() {
    return (
        <section className="py-24 px-6 bg-black relative" id="location">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-black rounded-[3rem] p-10 flex flex-col justify-center border border-white/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-[50px] pointer-events-none" />

                        <div className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 w-fit mb-8 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] font-black uppercase">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_rgba(220,38,38,1)]" />
                            <span className="text-xs tracking-widest">OUVERT 24/7</span>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-black text-white font-inter uppercase tracking-tighter mb-4">
                            VOTRE AGENCE <br />
                            <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.4)]">À AGADIR</span>
                        </h3>

                        <p className="text-gray-400 text-lg font-medium mb-8">
                            Disponible à Agadir & livraison partout au Maroc.
                        </p>

                        <div className="flex items-center gap-4 text-white">
                            <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center shrink-0">
                                <MapPin className="text-red-600" size={24} />
                            </div>
                            <p className="font-bold opacity-80">
                                Agadir, 80000<br />
                                Maroc
                            </p>
                        </div>
                    </motion.div>

                    {/* Map Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 bg-[#050505] rounded-[3rem] overflow-hidden border border-white/5 relative h-[400px] lg:h-auto"
                    >
                        {/* Google Maps iFrame */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108428.16709841804!2d-9.684534720173715!3d30.41999903998592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e9eaa124b3%3A0xab7eb0adf65eec6f!2sAgadir%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1700000000000!5m2!1sen!2sfr"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(150%)" }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Dark overlay to make it blend perfectly with the site */}
                        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

                        {/* Pulsing Dot in the center */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="relative flex items-center justify-center">
                                {/* Core dot */}
                                <div className="w-6 h-6 bg-red-600 rounded-full z-20 shadow-[0_0_20px_rgba(220,38,38,1)]" />
                                {/* Pulse ring */}
                                <span className="absolute w-6 h-6 bg-red-600 rounded-full animate-ping opacity-75 z-10 duration-1000" style={{ transform: "scale(3.5)" }} />
                                {/* Expanded soft glow */}
                                <div className="absolute w-32 h-32 border border-red-600/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] z-0" />
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
