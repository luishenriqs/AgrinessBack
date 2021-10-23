import { Animal } from "../../entities/Animal";
import { inject, injectable } from 'tsyringe';
import { IAnimalsRepository } from "../../repositories/IAnimalsRepository";

@injectable()
class ListAnimalsUseCase {
    constructor(
        @inject("AnimalsRepository")
        private animalsRepository: IAnimalsRepository
    ) {};
    async execute(): Promise<Animal[]> {
        const animals = await this.animalsRepository.list();
        return animals;
    }
};

export { ListAnimalsUseCase };