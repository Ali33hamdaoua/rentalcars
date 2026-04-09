"use client";

import { motion } from "framer-motion";
import { Key } from "lucide-react";

export default function BookingIconButton({ carName }: { carName: string }) {
    const handleBooking = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigating if this was inside a Link
        const phone = "212669866774";
        const message = `Bonjour Igli Auto, je souhaite réserver la ${carName} vue sur le site.`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleBooking}
            className="w-[50px] h-[50px] rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_30px_rgba(220,38,38,0.8)] transition-shadow relative overflow-hidden group/btn"
            aria-label={`Réserver ${carName}`}
        >
            <span className="absolute inset-0 w-full h-full bg-red-700 origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 ease-out" />
            <Key className="text-white relative z-10" size={20} />
        </motion.button>
    );
}
