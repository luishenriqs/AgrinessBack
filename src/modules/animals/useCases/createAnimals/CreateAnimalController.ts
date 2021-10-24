import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateAnimalUseCase } from './CreateAnimalUseCase';

class CreateAnimalController {
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
            faseProducao,
            tipoGranja,
        } = request.body;
       
        const createAnimalUseCase = container.resolve(CreateAnimalUseCase);

        await createAnimalUseCase.execute({
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