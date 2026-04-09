import { Facebook, Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black pt-20 pb-0 relative overflow-hidden border-t border-red-600/20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 mb-10 lg:mb-20">

                {/* Infos Section */}
                <div className="flex flex-col">
                    {/* Fausse image logo / texte */}
                    <div className="flex flex-col mb-6">
                        <span className="text-3xl font-black uppercase font-inter leading-none text-white tracking-widest">
                            IGLI <span className="text-red-600">AUTO</span>
                        </span>
                        <span className="text-[10px] tracking-[0.3em] text-gray-500 mt-1 font-bold">RENTAL CARS</span>
                    </div>
                    <p className="text-gray-400 font-bold leading-relaxed mb-8 max-w-sm text-sm uppercase tracking-widest">
                        Confiance. Qualité. Performance.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="https://www.instagram.com/igli_auto/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-red-600 hover:text-white hover:bg-red-600 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] transition-all duration-300 bg-[#111]"
                        >
                            <Instagram size={20} />
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61572664599756"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-red-600 hover:text-white hover:bg-red-600 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] transition-all duration-300 bg-[#111]"
                        >
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>

                {/* Liens Rapides Section */}
                <div className="flex flex-col">
                    <h4 className="text-white text-lg font-black uppercase font-inter mb-6 tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Liens Rapides</h4>
                    <ul className="space-y-4 font-bold">
                        <li>
                            <a href="#hero" className="text-gray-400 hover:text-red-600 transition-colors uppercase text-sm tracking-wider">Accueil</a>
                        </li>
                        <li>
                            <a href="#flotte" className="text-gray-400 hover:text-red-600 transition-colors uppercase text-sm tracking-wider">Notre Flotte Haute Performance</a>
                        </li>
                        <li>
                            <a href="#reservation" className="text-gray-400 hover:text-red-600 transition-colors uppercase text-sm tracking-wider">Formulaire Express</a>
                        </li>
                        <li>
                            <a href="#location" className="text-gray-400 hover:text-red-600 transition-colors uppercase text-sm tracking-wider">Où Nous Trouver ?</a>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col">
                    <h4 className="text-red-600 text-lg font-black uppercase font-inter mb-6 tracking-widest drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">Contact</h4>
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4 text-gray-400 font-black group">
                            <Phone className="text-red-600 shrink-0 group-hover:animate-pulse" size={24} />
                            <a href="tel:+212669866774" className="hover:text-white transition-colors text-xl tracking-widest">
                                +212 669-866774
                            </a>
                        </li>
                        <li className="flex items-center gap-4 text-gray-400 font-bold group">
                            <Mail className="text-red-600 shrink-0 group-hover:animate-pulse" size={24} />
                            <a href="mailto:hibaigli5@gmail.com" className="hover:text-white transition-colors tracking-widest text-sm uppercase">
                                hibaigli5@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Signature & Copyright */}
            <div className="text-center py-6 border-t border-white/5 relative z-10 w-full max-w-7xl mx-auto px-6">
                <p className="text-gray-600 font-bold text-xs tracking-[0.2em] uppercase">
                    © 2024 Igli Auto - Location de voitures de prestige
                </p>
            </div>

            {/* Signature Massive */}
            <div className="w-full flex justify-center mt-4 -mb-[5vw] pointer-events-none select-none overflow-hidden relative z-0">
                <span className="text-[17vw] font-black uppercase text-white opacity-5 font-inter tracking-tighter whitespace-nowrap">
                    IGLI AUTO
                </span>
            </div>
        </footer>
    );
}
