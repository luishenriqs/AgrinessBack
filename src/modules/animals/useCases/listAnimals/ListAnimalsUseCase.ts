import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { Animal } from "../../entities/Animal";
import { IAnimalsRepository } from "../../repositories/IAnimalsRepository";
import { IFaseProducaoRepository } from "../../repositories/IFaseProducaoRepository";
import { ITipoGranjaRepository } from "../../repositories/ITipoGranjaRepository";
import { response } from "express";
import { FaseProducao } from "../../entities/FaseProducao";

@injectable()
class ListAnimalsUseCase {
    constructor(
        @inject("AnimalsRepository")
        private animalsRepository: IAnimalsRepository,

        @inject("FaseProducaoRepository")
        private faseProducaoRepository: IFaseProducaoRepository,

        @inject("TipoGranjaRepository")
        private tipoGranjaRepository: ITipoGranjaRepository
    ) {};
    async execute(): Promise<Animal[]> {
        const animals = await this.animalsRepository.list();

        const teste = [];

        animals.map(async (animal) => {
            const faseProducao = await this.faseProducaoRepository.findById(animal.id);
            const tipoGranja = await this.tipoGranjaRepository.findById(animal.id);
            
            let data = { ...animal, faseProducao, tipoGranja }
            console.log('---> animal ', data);
        })
        
        return teste;
    }
};

export { ListAnimalsUseCase };