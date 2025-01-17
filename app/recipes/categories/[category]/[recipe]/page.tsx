'use client';
import Image from 'next/image';
import MyBreadcrumbs from '@/app/ui/breadcrumbs/breadcrumb.component';
import RecipeDetail from '@/app/ui/recipe-detail/recipe-detail.component';
import { IRecipe } from '@/lib/model/recipe.model';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Recipe() {
    
    const pathName = usePathname();
    const recipeSlug = pathName.split('/').pop();
    const [recipe, setRecipe] = useState<IRecipe>();
    useEffect(() => {
        fetch(`http://localhost:3001/recipes/${recipeSlug}`)
            .then(res => res.json())
            .then(data => setRecipe(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="flex flex-row items-start gap-16">
            <div className="flex flex-col items-start">
                <MyBreadcrumbs />
                {recipe && <RecipeDetail recipe={recipe} />}
            </div>
            {recipe && <Image src={`/images/${recipe.image}`} alt={recipe.title} width={800} height={600} />}
        </div>
    );
}