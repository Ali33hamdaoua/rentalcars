"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="h-screen w-full bg-black flex items-center justify-center flex-col fixed inset-0 z-50">
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-4xl md:text-5xl font-black text-white font-inter tracking-widest uppercase mb-6 flex items-center gap-2"
            >
                IGLI <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">AUTO</span>
            </motion.div>
            <div className="w-16 h-1 bg-red-600 rounded-full animate-pulse shadow-[0_0_20px_rgba(220,38,38,0.8)]" />
        </div>
    );
}
