import { Animal } from "../../model/Animal";
import { IAnimalsRepository } from "../../repositories/IAnimalsRepository";

class ListAnimalsUseCase {
    constructor(private animalsRepository: IAnimalsRepository) {};
    execute(): Animal[] {
        const animals = this.animalsRepository.list();
        return animals;
    }
};

export { ListAnimalsUseCase };