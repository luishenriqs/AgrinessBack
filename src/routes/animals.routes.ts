import { Router } from "express";
import  multer from 'multer';
import { CreateAnimalController } from "../modules/animals/useCases/createAnimals/CreateAnimalController";
import { ListAnimalsController } from "../modules/animals/useCases/listAnimals/ListAnimalsController";
import { ImportAnimalsController } from "../modules/animals/useCases/importAnimals/ImportAnimalsController";

const animalsRoutes = Router();
const upload = multer({
    dest: "./tmp",
});

const createAnimalController = new CreateAnimalController();
const listAnimalsController = new ListAnimalsController();
const importAnimalsController = new ImportAnimalsController();


animalsRoutes.post("/", createAnimalController.handle);

animalsRoutes.get("/", listAnimalsController.handle);

animalsRoutes.post("/import", upload.single("file"), importAnimalsController.handle);

export { animalsRoutes };