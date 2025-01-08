import { redirect } from "next/navigation";
import Image from 'next/image';
import MyBreadcrumbs from "@/app/ui/breadcrumbs/breadcrumb.component";
import Link from "next/link";

const recipes = [
    {
        title: 'Whole-Grain Banana Bread',
        slug: 'banana-bread',
        image: 'banana-bread.jpg',
        description: "This one-bowl banana bread — our 2018 Recipe of the Year — uses the simplest ingredients, but is incredibly moist and flavorful.While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious — it's versatile."
    },
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
                {recipes.map((recipe) => (
                    <li key={recipe.slug} className="bg-white rounded-lg shadow-md p-4 cursor-pointer w-80" >
                        <Image src={`/images/${recipe.image}`} alt={recipe.title} width={300} height={200} />
                        <h2 className="text-2xl font-bold">
                            <Link href={`/recipes/categories/bread/${recipe.slug}`} className="text-[#4672ab] underline">
                                {recipe.title}
                            </Link>
                        </h2>
                        <p>{recipe.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}