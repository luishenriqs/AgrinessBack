import { Request, Response } from "express";
import { container } from 'tsyringe';
import { ListAnimalsUseCase } from './ListAnimalsUseCase';

class ListAnimalsController {
    async handle(request: Request, response: Response) {
        const listAnimalsUseCase = container.resolve(ListAnimalsUseCase);
        const all = await listAnimalsUseCase.execute();
        return response.json(all);
    };
};

export { ListAnimalsController };
