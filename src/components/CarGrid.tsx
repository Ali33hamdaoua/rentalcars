"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Car = {
    id: string;
    category: string;
    name: string;
    image: string;
    price: string;
    colSpan: string;
    imageContainerStyle: string;
    imageWidth: number;
    imageHeight: number;
};

const cars: Car[] = [
    {
        id: "luxe",
        category: "Luxe",
        name: "Audi Q5",
        image: "/luxury_car.png",
        price: "1200 DH / jour",
        colSpan: "md:col-span-2 md:row-span-2",
        imageContainerStyle: "absolute -right-8 bottom-0 w-[110%] md:w-[90%] md:h-[110%]",
        imageWidth: 800,
        imageHeight: 500,
    },
    {
        id: "semi-luxe",
        category: "Semi-Luxe",
        name: "Volkswagen T-Roc",
        image: "/suv_car.png",
        price: "550 DH / jour",
        colSpan: "md:col-span-1 md:row-span-1",
        imageContainerStyle: "absolute -right-12 -bottom-8 w-[140%] h-[120%]",
        imageWidth: 500,
        imageHeight: 300,
    },
    {
        id: "economy",
        category: "Economy",
        name: "Dacia Logan",
        image: "/suv_car.png",
        price: "200 DH / jour",
        colSpan: "md:col-span-1 md:row-span-1",
        imageContainerStyle: "absolute -right-12 -bottom-8 w-[140%] h-[120%]",
        imageWidth: 500,
        imageHeight: 300,
    }
];

export default function CarGrid() {
    return (
        <section className="py-32 bg-black relative w-full overflow-hidden" id="flotte">
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full overflow-visible">

                <h2 className="text-4xl md:text-5xl font-black text-white mb-20 font-inter uppercase tracking-tighter">
                    NOTRE <span className="text-red-600">GARAGE</span>
                </h2>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 auto-rows-[450px] md:auto-rows-[400px]">
                    {cars.map((car, idx) => (
                        <Link href={`/flotte/${car.id}`} key={idx} className={`block ${car.colSpan}`}>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="w-full h-full bg-black rounded-[3rem] relative p-12 flex flex-col justify-between border border-transparent hover:border-red-600 transition-colors duration-300 shadow-2xl overflow-visible group cursor-pointer"
                            >
                                {/* Force black background instead of transparent dark grey */}
                                <div className="absolute inset-0 bg-black rounded-[3rem] z-0" />

                                {/* Text content stays above the background layers */}
                                <div className="relative z-20 flex flex-col h-full justify-between pointer-events-none w-full max-w-[65%]">
                                    <div>
                                        <span className="text-gray-400 font-bold tracking-widest uppercase text-sm mb-2 block group-hover:text-red-600 transition-colors">
                                            {car.category}
                                        </span>
                                        <h3 className="text-4xl md:text-5xl font-black text-white uppercase font-inter tracking-tighter">
                                            {car.name}
                                        </h3>
                                    </div>

                                    <div className="mt-auto pointer-events-auto">
                                        <p className="font-black font-inter text-2xl md:text-3xl tracking-tighter text-white transition-all duration-300 group-hover:text-red-600 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">
                                            {car.price}
                                        </p>
                                    </div>
                                </div>

                                {/* Overflow image container */}
                                <div className="absolute inset-0 pointer-events-none z-10 overflow-visible">
                                    <motion.div
                                        className={`transition-all duration-[600ms] ease-[0.16,1,0.3,1] ${car.imageContainerStyle}`}
                                        whileHover={{ scale: 1.1, x: -10, y: -10 }}
                                    >
                                        <Image
                                            src={car.image}
                                            alt={car.name}
                                            width={car.imageWidth}
                                            height={car.imageHeight}
                                            className="object-contain object-right-bottom drop-shadow-[30px_30px_40px_rgba(0,0,0,0.9)] group-hover:drop-shadow-[0_0_40px_rgba(220,38,38,0.6)] mix-blend-lighten w-full h-full transition-all duration-500"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
