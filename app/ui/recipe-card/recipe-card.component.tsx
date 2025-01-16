'use client';
import { IRecipe } from "@/lib/model/recipe.model";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RecipeCard({ recipe } : { recipe: IRecipe }) {
    const pathName = usePathname();

    return (
        <div className="bg-white shadow-md cursor-pointer w-80" >
            <div className="w-full h-48 relative">
                <Image src={`/images/${recipe.image}`} alt={recipe.title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-bold">
                    <Link href={`${pathName}/${recipe.slug}`} className="text-[#4672ab] underline">
                        {recipe.title}
                    </Link>
                </h2>
                <p>{recipe.shortDescription}</p>
            </div>
        </div>
    );
}