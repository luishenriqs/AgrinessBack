import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { Animal } from "../../entities/Animal";
import { IAnimalsRepository } from "../../repositories/IAnimalsRepository";

@injectable()
class FindIdUseCase {
    constructor(
        @inject("AnimalsRepository")
        private animalsRepository: IAnimalsRepository,
    ) {};
    async execute({ id }): Promise<Animal> {
        let animal = await this.animalsRepository.findById(id);
        return animal;
    }
};

export { FindIdUseCase };