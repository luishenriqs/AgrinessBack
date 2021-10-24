import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        user_name: string;
        email: string;
    },
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,
    ) {};

    async execute({
        email,
        password,
    }: IRequest): Promise<IResponse> {

        const user = await this.userRepository.findByEmail(email);
        
        if(!user) {
            throw new AppError("Email or password incorrect!")
        };
        
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new AppError("Email or password incorrect!")
        };

        // ==> Obs: Gerador de MD5 para chave aleatória;
        const token = sign({}, "8195adc23a4b26b90d375170bf2cc44a", {
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReturn = {
            user: {
                user_name: user.user_name,
                email: user.email
            },
            token,
        }

        return tokenReturn;

    };
};

export { AuthenticateUserUseCase };