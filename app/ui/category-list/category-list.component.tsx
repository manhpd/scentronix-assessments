'use client';
import { ICategory } from "@/lib/model/category.model";
import CardCategory from "../card-category/card-category.component";

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3001/categories');
    const categories = await res.json();
    return {
        props: { categories }
    }
}

export default function CategoryList({ categories }: { categories: ICategory[] }) {
    return (
        <ul className="flex gap-4">
            {categories.map((category) => (
                <CardCategory key={category.slug} category={category}  />
            ))}
        </ul>
    );
}
