
import MyBreadcrumbs from "@/app/ui/breadcrumbs/breadcrumb.component"
import CardCategory from "@/app/ui/card-category/card-category.component"
import CategoryList from "@/app/ui/category-list/category-list.component";
import { ICategory } from "@/lib/model/category.model"
import { redirect } from 'next/navigation'

const categories = [
    {
        title: 'Bread',
        slug: 'bread',
        image: 'bread.jpg',
        description: 'Bread is a staple food prepared from a dough of flour and water, usually by baking.'
    },
    {
        title: 'Cake',
        slug: 'cake',
        image: 'cake.jpg',
        description: 'Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked.'
    }

] as ICategory[];

export default function Categories() {
    const handelClick = (slug: string) => {
        // navigate to the slug
        redirect(`/recipes/categories/${slug}`)
    }
    return (
        <div>
            <MyBreadcrumbs />
            <h1 className="title text-6xl pt-8 mb-8">Categories</h1>
            <CategoryList categories={categories} />
        </div>
    );
}