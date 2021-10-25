import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { Animal } from "../../entities/Animal";
import { IAnimalsRepository } from "../../repositories/IAnimalsRepository";

@injectable()
class UpDateUseCase {
    constructor(
        @inject("AnimalsRepository")
        private animalsRepository: IAnimalsRepository,
    ) {};
    async execute({ id, localizacao }): Promise<Animal> {
        const animal = await this.animalsRepository.update(id, localizacao);
        return animal;
    }
};

export { UpDateUseCase };