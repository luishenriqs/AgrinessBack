import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const userRoutes = Router();

const createAnimalController = new CreateUserController();

userRoutes.post("/", createAnimalController.handle);

export { userRoutes };