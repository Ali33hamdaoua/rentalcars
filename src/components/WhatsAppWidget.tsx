"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
    const [showMessage, setShowMessage] = useState(false);
    const phoneNumber = "212669866774"; // Numéro Igli Auto

    useEffect(() => {
        // Affiche le message après 5 secondes
        const timer = setTimeout(() => {
            setShowMessage(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
            <AnimatePresence>
                {showMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                        }}
                        className="mb-4 mr-2 bg-black border border-red-600/30 px-5 py-3 rounded-2xl rounded-br-none shadow-2xl relative"
                    >
                        <span className="text-white font-bold text-sm">
                            Besoin d'une voiture ? 👋
                        </span>
                        {/* Petit triangle pour la bulle de discussion */}
                        <div className="absolute -bottom-2 right-4 border-t-8 border-t-black border-l-8 border-l-transparent border-r-8 border-r-transparent drop-shadow-md" />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.a
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }}
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white w-16 h-16 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.5)] flex items-center justify-center relative group"
                aria-label="Contactez-nous sur WhatsApp"
            >
                <MessageCircle size={32} strokeWidth={2.5} className="relative z-10" />
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-red-600 blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
            </motion.a>
        </div>
    );
}
