'use client';
import { IRecipe } from "@/lib/model/recipe.model";
import { usePathname } from "next/navigation"
import { use, useEffect, useState } from "react";
import RecipeCard from "../recipe-card/recipe-card.component";


export default function RecipeList() {
    const pathName = usePathname();
    // fetch the recipes from the backend localhost:3001
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const category = pathName.split('/').pop();
    useEffect(() => {
        fetch(`http://localhost:3001/recipes/categories/${category}`)
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(err => console.log(err))
    }, []);

    return (
       <div className="flex gap-4">
              {recipes.map(recipe => (
                <RecipeCard key={recipe.slug} recipe={recipe} />
              ))}
       </div>
    )
}   