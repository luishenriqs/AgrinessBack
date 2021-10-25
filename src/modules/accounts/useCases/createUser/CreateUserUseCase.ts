import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { AppError } from '../../../../errors/AppError';

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,
    ) {};

    async execute({
        user_name,
        email,
        password,
    }: ICreateUserDTO): Promise<void> {

        const passwordHash = await hash(password, 8);

        const emailAlredyExists = await this.userRepository.findByEmail(email);

        if(emailAlredyExists) {
            throw new AppError("user`s email alredy exists!")
        }

        await this.userRepository.create({
            user_name,
            email,
            password: passwordHash,
        })
    };
};

export { CreateUserUseCase };