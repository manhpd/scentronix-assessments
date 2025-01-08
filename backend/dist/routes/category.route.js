"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
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
];
// Add your CRUD API implementation here
router.get('/', (req, res) => {
    res.json(categories);
});
router.get('/:slug', (req, res) => {
    const category = categories.find(category => category.slug === req.params.slug);
    if (category) {
        res.json(category);
    }
    else {
        res.status(404).json({ message: 'Category not found' });
    }
});
exports.default = router;
