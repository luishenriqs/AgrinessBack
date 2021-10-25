import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { Animal } from "../../entities/Animal";
import { IAnimalsRepository } from "../../repositories/IAnimalsRepository";

@injectable()
class ListAnimalsUseCase {
    constructor(
        @inject("AnimalsRepository")
        private animalsRepository: IAnimalsRepository,
    ) {};
    async execute(): Promise<Animal[]> {
        let animals = await this.animalsRepository.list();
        return animals;
    }
};

export { ListAnimalsUseCase };