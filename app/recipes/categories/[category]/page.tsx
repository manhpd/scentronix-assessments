import { redirect } from "next/navigation";
import MyBreadcrumbs from "@/app/ui/breadcrumbs/breadcrumb.component";
import RecipeCard from "@/app/ui/recipe-card/recipe-card.component";

const breadRecipes = [ {
        title: 'Whole-Grain Banana Bread',
        slug: 'quick-bread',
        image: 'banana-bread.jpeg',
        description: "This one-bowl banana bread our 2018 Recipe of the Year uses the simplest ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious it's versatile.",
        prepTime: '10 mins',
        bakeTime: '30 mins',
        totalTime: '1 hr 10 mins',
        yield: '1 loaf, 12 generous servings'
    }
]

export default function Category() {
    const handelClick = (slug: string) => {
        // navigate to the slug
        redirect(`/recipes/categories/${slug}`)
    }
    return (
        <div>
            <MyBreadcrumbs />
            <h1 className="title text-6xl pt-8 mb-8">Bread Recipes</h1>
            <ul className="flex gap-4">
                {breadRecipes.map((recipe) => (
                    <RecipeCard key={recipe.slug} recipe={recipe} />
                ))}
            </ul>
        </div>
    );
}