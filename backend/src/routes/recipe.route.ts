import { Router, Request, Response } from 'express';
import { ICategory } from '../model/category.model';
const router = Router();

const recipes = [
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

// Add your CRUD API implementation here

router.get('/', (req: Request, res: Response) => {
    res.json(recipes);
});

router.get('/:slug', (req: Request, res: Response) => {
    const category = recipes.find(category => category.slug === req.params.slug);
    if (category) {
        res.json(category);
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
});

export default router;