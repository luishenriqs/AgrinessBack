import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UserRepositoryFake } from "../../repositories/fakes/UserRepositoryFake";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let userRepositoryFake: UserRepositoryFake;
let createUserUseCase: CreateUserUseCase;
let authenticateUserUseCase: AuthenticateUserUseCase;

describe("Authenticate user", () => {
    beforeEach(() => {
        userRepositoryFake = new UserRepositoryFake();
        createUserUseCase = new CreateUserUseCase(userRepositoryFake);
        authenticateUserUseCase = new AuthenticateUserUseCase(
            userRepositoryFake, 
        );
    });


    it("Should be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            user_name: "Jonh Doe", 
            email: "jonhDoe@test.com", 
            password: "123456", 
        };

        await createUserUseCase.execute(user);
        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password,
        });
    
        expect(result).toHaveProperty("token");
    });

    it("Should not be able to authenticate an nonexistent user", () => {
        expect(async () => {
            await await authenticateUserUseCase.execute({
                email: "false@email.com",
                password: "123456",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("Should not be able to authenticate with incorrect password", async () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                user_name: "Jonh Doe", 
                email: "jonhDoe@test.com", 
                password: "123456", 
            };
    
            await createUserUseCase.execute(user);
            await authenticateUserUseCase.execute({
                email: user.email,
                password: "incorrectPassword",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});