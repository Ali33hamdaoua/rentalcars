export type CarModel = {
    id: number;
    nom: string;
    moteur: string;        // "Diesel" | "Essence"
    transmission: string;  // "Manuelle" | "Automatique"
    places: number;
    prix: number;          // DH per day
    img: string;
    categorie: string;     // "economy" | "semi-luxe" | "luxe"
    bestValue?: boolean;
};

export const FLOTTE: Record<string, CarModel[]> = {
    "economy": [
        { id: 1, nom: "Dacia Logan", moteur: "Diesel", transmission: "Manuelle", places: 5, prix: 200, img: "/dacia.jpeg", categorie: "economy" },
        { id: 2, nom: "Dacia Sandero", moteur: "Essence", transmission: "Manuelle", places: 5, prix: 220, img: "/dacia.jpeg", categorie: "economy" },
        { id: 3, nom: "Kia Picanto", moteur: "Essence", transmission: "Manuelle", places: 4, prix: 250, img: "/kiapicanto.jpeg", categorie: "economy" },
        { id: 4, nom: "Hyundai i10", moteur: "Essence", transmission: "Manuelle", places: 4, prix: 230, img: "/i10.jpeg", categorie: "economy" },
        { id: 5, nom: "Fiat 500", moteur: "Essence", transmission: "Automatique", places: 4, prix: 300, img: "/daciafiat.jpeg", categorie: "economy" },
    ],
    "semi-luxe": [
        { id: 6, nom: "Hyundai Accent", moteur: "Diesel", transmission: "Automatique", places: 5, prix: 450, img: "/accent.jpeg", categorie: "semi-luxe", bestValue: true },
        { id: 7, nom: "Peugeot 208", moteur: "Essence", transmission: "Automatique", places: 5, prix: 380, img: "/p208.jpeg", categorie: "semi-luxe" },
        { id: 8, nom: "Renault Clio 5", moteur: "Essence", transmission: "Manuelle", places: 5, prix: 350, img: "/clio.jpeg", categorie: "semi-luxe" },
        { id: 9, nom: "Volkswagen T-Roc", moteur: "Diesel", transmission: "Automatique", places: 5, prix: 550, img: "/tiquanaudi.jpeg", categorie: "semi-luxe", bestValue: true },
        { id: 10, nom: "Kia Picanto GT", moteur: "Essence", transmission: "Automatique", places: 4, prix: 400, img: "/kiapicanto.jpeg", categorie: "semi-luxe" },
    ],
    "luxe": [
        { id: 11, nom: "Audi Q5", moteur: "Diesel", transmission: "Automatique", places: 5, prix: 1200, img: "/audi.jpeg", categorie: "luxe" },
        { id: 12, nom: "Audi Q3", moteur: "Diesel", transmission: "Automatique", places: 5, prix: 900, img: "/audiq3.jpeg", categorie: "luxe" },
        { id: 13, nom: "Volkswagen Touareg", moteur: "Diesel", transmission: "Automatique", places: 5, prix: 1500, img: "/touareg.jpeg", categorie: "luxe" },
        { id: 14, nom: "Mercedes Classe A", moteur: "Diesel", transmission: "Automatique", places: 5, prix: 1000, img: "/mercedes.jpeg", categorie: "luxe" },
        { id: 15, nom: "Peugeot 208 GT Line", moteur: "Essence", transmission: "Automatique", places: 5, prix: 800, img: "/p208.jpeg", categorie: "luxe" },
    ]
};

export const ALL_CARS: CarModel[] = [
    ...FLOTTE["economy"],
    ...FLOTTE["semi-luxe"],
    ...FLOTTE["luxe"],
];

export const CATEGORY_NAMES: Record<string, string> = {
    "luxe": "Luxe",
    "semi-luxe": "Semi-Luxe",
    "economy": "Economy"
};

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
    "economy": "Petit budget, grande fiabilit\u00e9. Id\u00e9al pour la ville et les trajets quotidiens.",
    "semi-luxe": "Le confort moderne \u00e0 prix accessible. L'\u00e9quilibre parfait.",
    "luxe": "L'exp\u00e9rience premium. Pour les clients exigeants et les occasions sp\u00e9ciales.",
};
