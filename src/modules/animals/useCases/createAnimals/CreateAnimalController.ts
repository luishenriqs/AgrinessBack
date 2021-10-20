import { Request, Response } from 'express';
import { CreateAnimalUseCase } from './CreateAnimalUseCase';

class CreateAnimalController {

    constructor(private createAnimalUseCase: CreateAnimalUseCase) {

    }

    handle(request: Request, response: Response): Response {
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
       
        this.createAnimalUseCase.execute({
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
    };
};

export { CreateAnimalController };