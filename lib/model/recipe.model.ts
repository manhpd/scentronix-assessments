export interface IRecipe {
    title: string;
    slug: string;
    image: string;
    shortDescription?: string;
    description: string;
    prepTime: string;
    bakeTime: string;
    totalTime: string;
    yield?: string;
}