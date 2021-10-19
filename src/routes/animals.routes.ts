import { Router } from "express";
import  multer from 'multer';
import { AnimalsRepository } from "../modules/animals/repositories/AnimalsRepository";
import { CreateAnimalService } from "../modules/animals/services/CreateAnimalService";

const animalsRoutes = Router();
const upload = multer();

const animalsRepository = new AnimalsRepository();

animalsRoutes.post("/", (request, response) => {
    const {
        id,
        nome,
        tipoAnimal,
        statusAnimal,
        localizacao,
        dataNascimento,
        entradaPlantel,
        pesoCompra,
        raca,
        codigoRastreamento,
        faseProducao,
        tipoGranja,
    } = request.body;

    const createAnimalService = new CreateAnimalService(animalsRepository);

    createAnimalService.execute({
        id,
        nome,
        tipoAnimal,
        statusAnimal,
        localizacao,
        dataNascimento,
        entradaPlantel,
        pesoCompra,
        raca,
        codigoRastreamento,
        faseProducao,
        tipoGranja,
    });

    return response.status(201).send();
});

animalsRoutes.get("/", (request, response) =>{
    const all = animalsRepository.list();

    return response.json(all);
});

animalsRoutes.post("/import/", (request, response) =>{

})

export { animalsRoutes };