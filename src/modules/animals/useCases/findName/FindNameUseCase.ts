import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { Animal } from "../../entities/Animal";
import { IAnimalsRepository } from "../../repositories/IAnimalsRepository";

@injectable()
class FindNameUseCase {
    constructor(
        @inject("AnimalsRepository")
        private animalsRepository: IAnimalsRepository,
    ) {};
    async execute({ nome }): Promise<Animal> {
        let animal = await this.animalsRepository.findByName(nome);
        return animal;
    }
};

export { FindNameUseCase };