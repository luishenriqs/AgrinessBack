import { Router } from "express";
import  multer from 'multer';
import createAnimalController from "../modules/animals/useCases/createAnimals";
import listAnimalsController from "../modules/animals/useCases/listAnimals";
import importAnimalsController from "../modules/animals/useCases/importAnimals";

const animalsRoutes = Router();
const upload = multer({
    dest: "./tmp",
});

animalsRoutes.post("/", (request, response) => {
    return createAnimalController().handle(request, response);
});

animalsRoutes.get("/", (request, response) =>{
    return listAnimalsController().handle(request, response);
});

animalsRoutes.post("/import", upload.single("file"), (request, response) =>{
    return importAnimalsController().handle(request, response);
})

export { animalsRoutes };