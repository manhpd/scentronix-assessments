import express, { Request, Response } from 'express';
import categoriesRoute from './routes/category.route'; 
import findServerRoute from './routes/findServer.route'; 
import recipesRoute from './routes/recipe.route';

const app = express();
const port = process.env.PORT || 3001;


// allow cors for all routes
app.use((req: Request, res: Response, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

app.use(express.json()); 
app.use('/categories', categoriesRoute); 

app.use(express.json());
app.use('/recipes', recipesRoute);

app.use('/findServer', findServerRoute); 


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

