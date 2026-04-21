export type CarModel = {
    id: number;
    nom: string;
    prix: number;          // DH per day
    img: string;           // Keeping empty placeholder as requested
    categorie: string;     // "luxe" | "semi-luxe" | "economique"
};

export const FLOTTE: Record<string, CarModel[]> = {
    "luxe": [
        { id: 101, nom: "Mercedes GLC", prix: 2200, img: "/glc2024.webp", categorie: "luxe" },
        { id: 102, nom: "Mercedes Classe A", prix: 900, img: "/classea2023.jpg", categorie: "luxe" },
        { id: 103, nom: "Mercedes CLA", prix: 1200, img: "/cla.png", categorie: "luxe" },
        { id: 104, nom: "BMW Série 3", prix: 1000, img: "/serie3.png", categorie: "luxe" },
        { id: 105, nom: "BMW Série 5", prix: 2000, img: "/serie5.png", categorie: "luxe" },
        { id: 106, nom: "Audi A3", prix: 900, img: "/a3.png", categorie: "luxe" },
        { id: 107, nom: "Audi Q3", prix: 1100, img: "/q3.png", categorie: "luxe" },
        { id: 108, nom: "Range Rover Evoque", prix: 1000, img: "/evoque.png", categorie: "luxe" },
        { id: 109, nom: "Volkswagen Touareg", prix: 1200, img: "/touareg2024.jpeg", categorie: "luxe" },
        { id: 110, nom: "Audi Q8", prix: 2200, img: "/audiq8.png", categorie: "luxe" },
        { id: 111, nom: "Range Rover Sport", prix: 2200, img: "/rangerover2024.png", categorie: "luxe" },
        { id: 112, nom: "Porsche Macan", prix: 2200, img: "/macan.png", categorie: "luxe" },
    ],
    "semi-luxe": [
        { id: 201, nom: "Hyundai Tucson", prix: 600, img: "/tucson2023.png", categorie: "semi-luxe" },
        { id: 202, nom: "Kia Sportage", prix: 600, img: "/sportage2024.png", categorie: "semi-luxe" },
        { id: 203, nom: "Peugeot 3008", prix: 600, img: "/3008gt2023.png", categorie: "semi-luxe" },
        { id: 204, nom: "Hyundai Accent", prix: 350, img: "/accent2023.png", categorie: "semi-luxe" },
        { id: 205, nom: "Dacia Duster (new)", prix: 450, img: "/duster2024.png", categorie: "semi-luxe" },
        { id: 206, nom: "Volkswagen Golf 8", prix: 700, img: "/golf8.png", categorie: "semi-luxe" },
        { id: 207, nom: "Skoda Octavia", prix: 550, img: "/octavia2023.png", categorie: "semi-luxe" },
        { id: 208, nom: "Seat Leon", prix: 700, img: "/leon2023.jpeg", categorie: "semi-luxe" },
        { id: 209, nom: "Hyundai i20", prix: 350, img: "/i20 2023.png", categorie: "semi-luxe" },
        { id: 210, nom: "Renault Megane 4", prix: 500, img: "/megane4.png", categorie: "semi-luxe" },
        { id: 211, nom: "Cupra Formentor", prix: 900, img: "/cupraformentor.png", categorie: "semi-luxe" },
        { id: 212, nom: "Dacia Jogger", prix: 400, img: "/jogger.jpg", categorie: "semi-luxe" },
        { id: 213, nom: "Volkswagen T-Roc", prix: 600, img: "/troc.jpeg", categorie: "semi-luxe" },
    ],
    "economique": [
        { id: 301, nom: "Dacia Logan", prix: 280, img: "/logan.png", categorie: "economique" },
        { id: 302, nom: "Dacia Sandero", prix: 280, img: "/sandero.png", categorie: "economique" },
        { id: 303, nom: "Dacia Sandero Stepway", prix: 300, img: "/sanderostepway.png", categorie: "economique" },
        { id: 304, nom: "Hyundai i10", prix: 250, img: "/hyundaii10.png", categorie: "economique" },
        { id: 305, nom: "Kia Picanto", prix: 260, img: "/picanto.png", categorie: "economique" },
        { id: 306, nom: "Renault Clio 5", prix: 300, img: "/clio5.png", categorie: "economique" },
        { id: 307, nom: "Peugeot 208", prix: 300, img: "/208.png", categorie: "economique" },
        { id: 308, nom: "Citroën C3", prix: 300, img: "/c3.png", categorie: "economique" },
        { id: 309, nom: "Renault Kardian", prix: 300, img: "/kardian.png", categorie: "economique" },
    ]
};

export const ALL_CARS: CarModel[] = [
    ...FLOTTE["luxe"],
    ...FLOTTE["semi-luxe"],
    ...FLOTTE["economique"],
];

export const CATEGORY_NAMES: Record<string, string> = {
    "luxe": "💎 Luxe",
    "semi-luxe": "✨ Semi-luxe",
    "economique": "🚙 Économique"
};

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
    "economique": "Fiabilité et économie pour vos trajets quotidiens à Agadir.",
    "semi-luxe": "Le confort moderne combiné à l'élégance accessible.",
    "luxe": "L'excellence automobile pour une expérience premium inoubliable.",
};
