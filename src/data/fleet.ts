export type Transmission = "Manuel" | "Automatique" | "Manuel / Automatique";
export type Fuel = "Diesel" | "Essence";

export type CarModel = {
    id: number;
    nom: string;
    prix: number;          // DH per day
    img: string;           // empty string = placeholder
    categorie: "luxe" | "semi-luxe" | "economique";
    annee: number;         // model year
    transmission: Transmission;
    carburant: Fuel;       // normalized
    bestValue?: boolean;
    // Legacy / optional
    moteur?: string;
    places?: number;
};

/**
 * Normalize raw fuel strings — converts variants like "mazot", "MAZOT", "diesel"
 * into the canonical "Diesel" value. Anything else falls back to "Essence".
 */
export const normalizeFuel = (raw: string): Fuel => {
    const v = raw.toLowerCase().trim();
    if (v.includes("mazot") || v.includes("diesel") || v.includes("gasoil") || v.includes("gazole")) {
        return "Diesel";
    }
    return "Essence";
};

// Internal helper to apply normalization at definition time
const car = (
    id: number,
    nom: string,
    prix: number,
    img: string,
    categorie: CarModel["categorie"],
    transmission: Transmission,
    fuelRaw: string,
    bestValue?: boolean,
): CarModel => ({
    id,
    nom,
    prix,
    img,
    categorie,
    annee: 2026,
    transmission,
    carburant: normalizeFuel(fuelRaw),
    ...(bestValue ? { bestValue: true } : {}),
});

export const FLOTTE: Record<string, CarModel[]> = {
    "luxe": [
        car(101, "Mercedes GLC", 2200, "/glc.png", "luxe", "Automatique", "diesel"),
        car(102, "Mercedes Classe A", 900, "/class_a.jpeg", "luxe", "Automatique", "diesel"),
        car(103, "Mercedes CLA", 1200, "/cla.jpeg", "luxe", "Automatique", "diesel"),
        car(104, "BMW Série 3", 1000, "/serie3.jpeg", "luxe", "Automatique", "diesel"),
        car(105, "BMW Série 5", 2000, "/serie5.jpeg", "luxe", "Automatique", "diesel"),
        car(106, "Audi A3", 900, "/a3.jpeg", "luxe", "Automatique", "diesel"),
        car(107, "Audi Q3", 1100, "/q3.jpeg", "luxe", "Automatique", "diesel"),
        car(108, "Range Rover Evoque", 1000, "/rangeevoque.jpeg", "luxe", "Automatique", "essence"),
        car(109, "Volkswagen Touareg", 1200, "/touareg.jpeg", "luxe", "Automatique", "mazot"),
        car(110, "Audi Q8", 2200, "/q8.jpeg", "luxe", "Automatique", "diesel"),
        car(111, "Range Rover Sport", 2200, "/rangesport.jpeg", "luxe", "Automatique", "essence"),
        car(112, "Porsche Macan", 2200, "/macan.jpeg", "luxe", "Automatique", "essence"),
    ],
    "semi-luxe": [
        car(201, "Hyundai Tucson", 600, "/tucson2023.png", "semi-luxe", "Automatique", "diesel", true),
        car(202, "Kia Sportage", 600, "/kiasportage.jpg", "semi-luxe", "Automatique", "diesel", true),
        car(203, "Peugeot 3008", 600, "/3008.jpeg", "semi-luxe", "Automatique", "diesel"),
        car(204, "Hyundai Accent", 350, "/accent.jpeg", "semi-luxe", "Automatique", "essence", true),
        car(205, "Dacia Duster", 450, "/duster.jpeg", "semi-luxe", "Manuel / Automatique", "diesel"),
        car(206, "Volkswagen Golf 8 R-Line", 800, "/golf8.jpeg", "semi-luxe", "Automatique", "diesel"),
        car(207, "Skoda Octavia", 550, "/octavia.jpeg", "semi-luxe", "Automatique", "diesel"),
        car(208, "Seat Leon", 700, "/seatleon.jpeg", "semi-luxe", "Automatique", "diesel"),
        car(209, "Hyundai i20", 350, "/i20.jpeg", "semi-luxe", "Automatique", "essence"),
        car(210, "Renault Megane 4", 500, "/megane4.jpeg", "semi-luxe", "Automatique", "diesel"),
        car(211, "Cupra Formentor", 900, "/cupra.jpeg", "semi-luxe", "Automatique", "diesel"),
        car(212, "Dacia Jogger", 400, "/jogger.jpeg", "semi-luxe", "Manuel", "diesel"),
        car(213, "Volkswagen T-Roc", 700, "/troc.jpeg", "semi-luxe", "Automatique", "mazot"),
    ],
    "economique": [
        car(301, "Dacia Logan", 280, "/logan.jpeg", "economique", "Manuel", "diesel"),
        car(302, "Dacia Sandero", 280, "/sandero.png", "economique", "Manuel", "essence"),
        car(303, "Dacia Sandero Stepway", 300, "/sanderostepway.png", "economique", "Manuel", "diesel"),
        car(304, "Hyundai i10", 270, "/i10.jpeg", "economique", "Automatique", "essence"),
        car(305, "Kia Picanto", 270, "/kiapicanto.jpeg", "economique", "Automatique", "essence"),
        car(306, "Renault Clio 5", 300, "/clio5.jpeg", "economique", "Manuel", "essence"),
        car(307, "Peugeot 208", 300, "/208.jpeg", "economique", "Manuel", "diesel"),
        car(308, "Citroën C3", 300, "/c3.jpg", "economique", "Automatique", "essence"),
        car(309, "Renault Kardian", 300, "/kardian.png", "economique", "Manuel", "essence"),
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
