import { User } from '../entities/User';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

interface IUserRepository {
    create({
        user_name,
        email,
        password,
    }: ICreateUserDTO): Promise<void>;

    findById(id: string): Promise<User>;

    findByEmail(email: string): Promise<User>;
};

export { IUserRepository };