import { Request, Response } from "express";
import { container } from 'tsyringe';
import { DeleteUseCase } from './DeleteUseCase';

class DeleteController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;
        const deleteUseCase = container.resolve(DeleteUseCase);
        await deleteUseCase.execute({ id });
        return response.status(200).send();
    };
};

export { DeleteController };