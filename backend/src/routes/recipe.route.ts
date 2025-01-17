import { Router, Request, Response } from 'express';
import { ICategory } from '../model/category.model';
import IRecipe from '../model/recipe.model';
const router = Router();

const recipes = [
    {
        title: 'Whole-Grain Banana Bread',
        slug: 'quick-bread',
        image: 'banana-bread.jpeg',
        description: "This one-bowl banana bread our 2018 Recipe of the Year uses the simplest ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious it's versatile.",
        prepTime: '10 mins',
        bakeTime: '30 mins',
        totalTime: '1 hr 10 mins',
        yield: '1 loaf, 12 generous servings',
        category: 'bread'
    },
    {
        title: 'Apple Bread',
        slug: 'apple-bread',
        image: 'apple-bread.jpg',
        description: "This apple bread is moist and delicious, and it's perfect for any occasion.",
        prepTime: '20 mins',
        bakeTime: '30 mins',
        totalTime: '1 hr 30 mins',
        yield: '1 loaf, 12 generous servings',
        category: 'bread'
    },
    {
        title: 'Carrot Cake',
        slug: 'carrot-cake',
        image: 'carrot-cake.jpg',
        description: "This carrot cake is moist and delicious, and it's perfect for any occasion.",
        prepTime: '20 mins',
        bakeTime: '30 mins',
        totalTime: '1 hr 30 mins',
        yield: '1 cake, 12 generous servings',
        category: 'cake'
    },
    {
        title: 'Classic Birthday Cake',
        slug: 'classic-birthday-cake',
        image: 'birthday-cake.jpg',
        description: "This classic birthday cake is easy to make and clean up since the recipe only requires one bowl. It's also moist and delicious, and it's perfect for any occasion.",
        prepTime: '20 mins',
        bakeTime: '30 mins',
        totalTime: '1 hr 30 mins',
        yield: '1 cake, 12 generous servings',
        category: 'cake'
    },
    {
        title: 'Chocolate Cake',
        slug: 'chocolate-cake',
        image: 'chocolate-cake.jpg',
        description: "This chocolate cake is moist and delicious, and it's perfect for any occasion.",
        prepTime: '20 mins',
        bakeTime: '30 mins',
        totalTime: '1 hr 30 mins',
        yield: '1 cake, 12 generous servings',
        category: 'cake'
    }


] as IRecipe[];

// Add your CRUD API implementation here

router.get('/', (req: Request, res: Response) => {
    res.json(recipes);
});

// get by category

router.get('/categories/:category', (req: Request, res: Response) => {
    const category = recipes.filter(recipe => recipe.category === req.params.category);
    console.log(category);
    if (category) {
        res.json(category);
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
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