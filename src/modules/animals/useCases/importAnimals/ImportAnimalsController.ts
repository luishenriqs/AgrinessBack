import { Request, Response } from "express";
import { container } from 'tsyringe';
import { ImportAnimalsUseCase } from "./ImportAnimalsUseCase";


class ImportAnimalsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;
        const encoding = "utf-8";

        const importAnimalsUseCase = container.resolve(ImportAnimalsUseCase);
        await importAnimalsUseCase.execute(file, encoding);
        return response.send();
    };
};

export { ImportAnimalsController };