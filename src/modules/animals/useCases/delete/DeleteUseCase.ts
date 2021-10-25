import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { IAnimalsRepository } from "../../repositories/IAnimalsRepository";

@injectable()
class DeleteUseCase {
    constructor(
        @inject("AnimalsRepository")
        private animalsRepository: IAnimalsRepository,
    ) {};
    async execute({ id }): Promise<void> {
        await this.animalsRepository.delete(id);
    }
};

export { DeleteUseCase };