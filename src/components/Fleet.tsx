"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

type FleetCategory = {
    id: string;
    name: string;
    image: string;
    description: string;
    price: string;
    colSpan: string;
    imageContainerClasses: string;
};

const categories: FleetCategory[] = [
    {
        id: "luxe",
        name: "Luxe",
        image: "/luxury_car.png",
        description: "Le summum du confort, du prestige et de la puissance \u00e0 l'\u00e9tat pur. Pour ceux qui ne font aucun compromis.",
        price: "800 DH / jour",
        colSpan: "md:col-span-2 md:row-span-2",
        imageContainerClasses: "w-[120%] md:w-[90%] h-[120%] absolute -right-10 md:-right-20 bottom-10 md:bottom-0",
    },
    {
        id: "semi-luxe",
        name: "Semi-Luxe",
        image: "/suv_car.png",
        description: "L'\u00e9quilibre parfait entre prestige et polyvalence pour explorer la ville.",
        price: "350 DH / jour",
        colSpan: "md:col-span-1 md:row-span-1",
        imageContainerClasses: "w-[140%] h-[150%] absolute -right-16 -bottom-16 md:-right-10 md:-bottom-10",
    },
    {
        id: "economy",
        name: "Economy",
        image: "/suv_car.png",
        description: "Abordable, styl\u00e9e et r\u00e9active. La praticit\u00e9 avant tout.",
        price: "200 DH / jour",
        colSpan: "md:col-span-1 md:row-span-1",
        imageContainerClasses: "w-[140%] h-[150%] absolute -right-16 -bottom-16 md:-right-10 md:-bottom-10",
    }
];

export default function Fleet() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, scale: 0.96, y: 30 },
        visible: {
            opacity: 1, scale: 1, y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden" id="flotte">
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full overflow-visible">

                <div className="mb-16 md:mb-24 flex items-end justify-between">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl lg:text-[7rem] font-black font-outfit uppercase text-white tracking-tighter leading-none"
                    >
                        NOTRE<br />
                        <span className="text-gold">FLOTTE</span>
                    </motion.h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[450px] md:auto-rows-[400px] w-full"
                >
                    {categories.map((category) => (
                        <motion.div
                            key={category.id}
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className={`bg-[#141414] rounded-3xl relative p-8 md:p-12 group flex flex-col justify-between border border-white/5 shadow-2xl ${category.colSpan}`}
                        >
                            <div className="relative z-20 max-w-[70%] md:max-w-[60%] flex flex-col h-full pointer-events-none">
                                <div>
                                    <h3 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase font-outfit tracking-wider">
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-400 font-sans text-sm md:text-lg leading-relaxed mix-blend-lighten max-w-sm">
                                        {category.description}
                                    </p>
                                </div>

                                <div className="mt-8 mb-4">
                                    <p className="text-gold font-bold font-mono text-xl md:text-2xl tracking-widest uppercase transition-all duration-300 group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_25px_rgba(253,224,71,0.8)]">
                                        \u00c0 partir de<br />
                                        <span className="text-3xl md:text-4xl text-white group-hover:text-yellow-400 transition-colors drop-shadow-none xl:mt-2 block">{category.price}</span>
                                    </p>
                                </div>
                            </div>

                            {/* The Overflowing Image */}
                            <div className="absolute inset-0 pointer-events-none z-10" style={{ overflow: "visible" }}>
                                <div className={`transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110 group-hover:-translate-x-3 group-hover:-translate-y-3 ${category.imageContainerClasses}`}>
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-contain object-right-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.9)] mix-blend-lighten"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
