import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            user_name,
            email,
            password,
        } = request.body;
       
        const createUserUseCase = container.resolve(CreateUserUseCase);

        await createUserUseCase.execute({
            user_name,
            email,
            password,
        });
    
        return response.status(201).send();
    };
};

export { CreateUserController };