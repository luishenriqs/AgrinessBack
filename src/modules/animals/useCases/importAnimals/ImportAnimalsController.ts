import { Request, Response } from "express";
import { ImportAnimalsUseCase } from "./ImportAnimalsUseCase";


class ImportAnimalsController {
    constructor(private importAnimalsUseCase: ImportAnimalsUseCase) {}
    handle(request: Request, response: Response): Response {
        const { file } = request;
        const encoding = "utf-8";
        this.importAnimalsUseCase.execute(file, encoding);
        return response.send();
    };
};

export { ImportAnimalsController };