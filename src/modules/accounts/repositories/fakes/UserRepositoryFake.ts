import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class UserRepositoryFake implements IUserRepository {
    users: User[] = [];

    async create({
        id, 
        user_name, 
        email, 
        password, 
    }: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {
            id, 
            user_name, 
            email, 
            password, 
        });

        this.users.push(user);
    }

    async findById(id: string): Promise<User> {
        return this.users.find((user) => user.id === id);
    }

    async findByEmail(email: string): Promise<User> {
        return this.users.find((user) => user.email === email);
    }
};

export { UserRepositoryFake };