import express from 'express';
import { animalsRoutes } from '../src/routes/animals.routes';

const app = express();

app.use(express.json());

app.use(animalsRoutes);

app.listen(3333, () => console.log("Server is running!"));
