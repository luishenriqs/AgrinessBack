import { Router } from 'express';
import { animalsRoutes } from '../routes/animals.routes';

const router = Router();

router.use("/animals", animalsRoutes);

export { router };