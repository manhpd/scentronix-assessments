export interface ICategory {
    id: string
    title: string
    slug: string
    description: string
    image: string
    parent: string
    children: string[]
    products: string[]
    createdAt: string
    updatedAt: string
}