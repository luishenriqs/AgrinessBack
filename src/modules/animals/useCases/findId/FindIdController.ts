import { Request, Response } from "express";
import { container } from 'tsyringe';
import { FindIdUseCase } from './FindIdUseCase';

class FindIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.query;
        const findIdUseCase = container.resolve(FindIdUseCase);
        const animal = await findIdUseCase.execute({ id });
        return response.json(animal);
    };
};

export { FindIdController };
