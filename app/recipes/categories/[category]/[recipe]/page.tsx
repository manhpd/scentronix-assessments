
import Image from 'next/image';
import MyBreadcrumbs from '@/app/ui/breadcrumbs/breadcrumb.component';
import RecipeDetail from '@/app/ui/recipe-detail/recipe-detail.component';

export default function Recipe() {
    const recipe = {
        title: 'Whole-Grain Banana Bread',
        slug: 'quick-bread',
        image: 'banana-bread.jpeg',
        description: "This one-bowl banana bread our 2018 Recipe of the Year uses the simplest ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious it's versatile.",
        prepTime: '10 mins',
        bakeTime: '30 mins',
        totalTime: '1 hr 10 mins',
        yield: '1 loaf, 12 generous servings'
    }

    return (
        <div className="flex flex-row items-start gap-16">
            <div className="flex flex-col items-start">
                <MyBreadcrumbs />
                <RecipeDetail recipe={recipe} />
            </div>
            <Image src={`/images/${recipe.image}`} alt={recipe.title} width={800} height={600} />
        </div>
    );
}