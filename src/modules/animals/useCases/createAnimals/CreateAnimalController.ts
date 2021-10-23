import { Request, Response } from 'express';
import { CreateAnimalUseCase } from './CreateAnimalUseCase';

class CreateAnimalController {

    constructor(private createAnimalUseCase: CreateAnimalUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
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
        } = request.body;
       
        await this.createAnimalUseCase.execute({
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
        });
    
        return response.status(201).send();
    };
};

export { CreateAnimalController };