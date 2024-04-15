import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import routes from './routes/index'
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});