"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const findServer_route_1 = __importDefault(require("./routes/findServer.route"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.get('/', (req, res) => {
    res.send('Hello, TypeScript Express!');
});
// app.use(express.json()); 
// app.use('/categories', categoriesRoute); 
app.use(express_1.default.json());
app.use('/findServer', findServer_route_1.default);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
