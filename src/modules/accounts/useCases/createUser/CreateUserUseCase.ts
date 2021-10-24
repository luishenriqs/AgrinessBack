import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,
    ) {};

    async execute({
        id,
        user_name,
        email,
        password,
    }: ICreateUserDTO): Promise<void> {

        const passwordHash = await hash(password, 8);

        const userIdAlredyExists = await this.userRepository.findById(id);

        if(userIdAlredyExists) {
            throw new Error("user`s Id alredy exists!")
        }

        await this.userRepository.create({
            id,
            user_name,
            email,
            password: passwordHash,
        })
    };
};

export { CreateUserUseCase };