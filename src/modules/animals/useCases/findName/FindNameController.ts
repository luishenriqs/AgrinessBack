import { Request, Response } from "express";
import { container } from 'tsyringe';
import { FindNameUseCase } from './FindNameUseCase';

class FindNameController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nome } = request.body;
        const findNameUseCase = container.resolve(FindNameUseCase);
        const animal = await findNameUseCase.execute({ nome });
        return response.json(animal);
    };
};

export { FindNameController };
