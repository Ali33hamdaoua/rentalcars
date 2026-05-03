import { FLOTTE, CATEGORY_NAMES } from "@/data/fleet";
import { notFound } from "next/navigation";
import CategoryClient from "./CategoryClient";

export async function generateStaticParams() {
    return [
        { category: 'luxe' },
        { category: 'semi-luxe' },
        { category: 'economique' },
    ];
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const resolvedParams = await params;
    const categoryId = resolvedParams.category;

    if (!FLOTTE[categoryId]) {
        notFound();
    }

    const categoryName = CATEGORY_NAMES[categoryId];
    const cars = FLOTTE[categoryId];

    return <CategoryClient categoryName={categoryName} categoryId={categoryId} cars={cars} />;
}
