import { Request, Response } from "express";
import { container } from 'tsyringe';
import { FindLocalizationUseCase } from './FindLocalizationUseCase';

class FindLocalizationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { localization } = request.query;
        const findLocalizationUseCase = container.resolve(FindLocalizationUseCase);
        const animal = await findLocalizationUseCase.execute({ localization });
        return response.json(animal);
    };
};

export { FindLocalizationController };