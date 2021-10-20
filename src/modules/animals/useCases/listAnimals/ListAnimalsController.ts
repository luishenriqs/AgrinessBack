import { Request, Response } from "express";
import { ListAnimalsUseCase } from './ListAnimalsUseCase';

class ListAnimalsController {
    constructor(private listAnimalsUseCase: ListAnimalsUseCase ) {};
    handle(request: Request, response: Response) {
        const all = this.listAnimalsUseCase.execute();
        return response.json(all);
    };
};

export { ListAnimalsController };
