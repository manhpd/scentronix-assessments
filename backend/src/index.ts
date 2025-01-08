import express, { Request, Response } from 'express';
import categoriesRoute from './routes/category.route'; 
import findServerRoute from './routes/findServer.route'; 

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

// app.use(express.json()); 
// app.use('/categories', categoriesRoute); 

app.use(express.json()); 
app.use('/findServer', findServerRoute); 


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

