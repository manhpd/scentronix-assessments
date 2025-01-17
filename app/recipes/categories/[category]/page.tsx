import MyBreadcrumbs from "@/app/ui/breadcrumbs/breadcrumb.component";
import { IRecipe } from "@/lib/model/recipe.model";
import RecipeList from "@/app/ui/recipe-list/recipe-list.component";

export default function Category({ recipes }: { recipes: IRecipe[] }) {
    return (
        <div>
            <MyBreadcrumbs />
            <h1 className="title text-6xl pt-8 mb-8">Bread Recipes</h1>
            <ul className="flex gap-4">
               <RecipeList  />
            </ul>
        </div>
    );
}