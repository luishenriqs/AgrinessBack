import { Router } from "express";
import  multer from 'multer';
import { createAnimalController } from "../modules/animals/useCases/createAnimals";
import { listAnimalsController } from "../modules/animals/useCases/listAnimals";

const animalsRoutes = Router();
const upload = multer();

animalsRoutes.post("/", (request, response) => {
    return createAnimalController.handle(request, response);
});

animalsRoutes.get("/", (request, response) =>{
    return listAnimalsController.handle(request, response);
});

animalsRoutes.post("/import/", (request, response) =>{

})

export { animalsRoutes };