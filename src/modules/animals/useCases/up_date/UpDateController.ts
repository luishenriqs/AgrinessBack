import { Request, Response } from "express";
import { container } from 'tsyringe';
import { UpDateUseCase } from './UpDateUseCase';

class UpDateController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, localizacao } = request.body;
        const upDateUseCase = container.resolve(UpDateUseCase);
        const animal = await upDateUseCase.execute({ id, localizacao });
        return response.json(animal);
    };
};

export { UpDateController };