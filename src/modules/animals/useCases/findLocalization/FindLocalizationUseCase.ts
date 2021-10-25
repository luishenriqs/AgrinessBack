import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { Animal } from "../../entities/Animal";
import { IAnimalsRepository } from "../../repositories/IAnimalsRepository";

@injectable()
class FindLocalizationUseCase {
    constructor(
        @inject("AnimalsRepository")
        private animalsRepository: IAnimalsRepository,
    ) {};
    async execute({ localization }): Promise<Animal[]> {
        let animais = await this.animalsRepository.findByLocalization(localization);
        return animais;
    }
};

export { FindLocalizationUseCase };