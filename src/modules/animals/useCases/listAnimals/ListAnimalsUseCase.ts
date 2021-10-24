import { Animal } from "../../entities/Animal";
import { inject, injectable } from 'tsyringe';
import { IAnimalsRepository } from "../../repositories/IAnimalsRepository";
import { IFaseProducaoRepository } from "../../repositories/IFaseProducaoRepository";
import { ITipoGranjaRepository } from "../../repositories/ITipoGranjaRepository";

@injectable()
class ListAnimalsUseCase {
    constructor(
        @inject("AnimalsRepository")
        private animalsRepository: IAnimalsRepository,

        // @inject("FaseProducaoRepository")
        // private faseProducaoRepository: IFaseProducaoRepository,

        // @inject("TipoGranjaRepository")
        // private tipoGranjaRepository: ITipoGranjaRepository
    ) {};
    async execute(): Promise<Animal[]> {
        const animals = await this.animalsRepository.list();
        // const faseProducao = await this.faseProducaoRepository.findById(id);
        // const tipoGranja = await this.tipoGranjaRepository.findById(id);
        
        return animals;
    }
};

export { ListAnimalsUseCase };