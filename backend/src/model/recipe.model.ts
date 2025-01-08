export default interface IRecipe {
    id: number;
    title: string;
    slug: string;
    image: string;
    description: string;
    category: string;
    prepTime: string;
    cookTime: string;
    totalTime: string;
    yield: string;
}