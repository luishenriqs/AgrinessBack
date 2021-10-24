import { Router } from 'express';
import { authenticateUserRoutes } from '../routes/authenticate.routes';
import { userRoutes } from '../routes/user.routes';
import { animalsRoutes } from '../routes/animals.routes';

const router = Router();

router.use(authenticateUserRoutes);
router.use("/user", userRoutes);
router.use("/animals", animalsRoutes);

export { router };