"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

export default function Location() {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3441.6395241119412!2d-9.557198!3d30.3895924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b7001f73c589%3A0xe7817cca527acba!2sIGLI%20AUTO%20%3A%20Location%20voiture%20Agadir%20Centre%20%26%20A%C3%A9roport%20-%20Car%20Rental%20Agadir%20Airport%20.!5e0!3m2!1sfr!2sch!4v1776795541922!5m2!1sfr!2sch";
    const googleMapsLink = "https://www.google.com/maps/place/IGLI+AUTO+:+Location+voiture+Agadir+Centre+%26+A%C3%A9roport+-+Car+Rental+Agadir+Airport+.+/@30.3895924,-9.557198,17z";

    return (
        <section className="py-24 px-6 bg-black relative" id="location">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-dark-card rounded-[3rem] p-10 flex flex-col justify-center border border-white/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] pointer-events-none" />

                        <div className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 w-fit mb-8 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] font-black uppercase">
                            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(220,38,38,1)]" />
                            <span className="text-xs tracking-widest text-black">SUR PLACE OU LIVRAISON</span>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-black text-white font-inter uppercase tracking-tighter mb-4">
                            NOTRE <br />
                            <span className="text-primary drop-shadow-[0_0_15px_rgba(220,38,38,0.4)]">AGENCE</span>
                        </h3>

                        <p className="text-gray-400 text-lg font-medium mb-8">
                            Idéalement situé au centre d'Agadir, nous livrons également à l'aéroport et dans toute la région.
                        </p>

                        <div className="flex items-center gap-4 text-white mb-8">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <MapPin className="text-primary" size={24} />
                            </div>
                            <p className="font-bold opacity-80 uppercase tracking-wider text-sm">
                                Avenue El Yakouti, Agadir 80000<br />
                                Maroc
                            </p>
                        </div>

                        <a 
                            href={googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-primary text-white font-black uppercase py-4 rounded-2xl hover:bg-white hover:text-primary shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all group"
                        >
                            Voir sur Google Maps
                            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
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
                            src={mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(150%)" }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Dark overlay to make it blend perfectly with the site */}
                        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

                        {/* Pulsing Dot at location */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="relative flex items-center justify-center translate-y-4">
                                <div className="w-6 h-6 bg-primary rounded-full z-20 shadow-[0_0_20px_rgba(220,38,38,1)]" />
                                <span className="absolute w-6 h-6 bg-primary rounded-full animate-ping opacity-75 z-10 duration-1000" style={{ transform: "scale(3.5)" }} />
                                <div className="absolute w-32 h-32 border border-primary/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] z-0" />
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
