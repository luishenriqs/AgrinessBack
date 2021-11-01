import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { IAnimalsRepository } from "../../repositories/IAnimalsRepository";
import { IFaseProducaoRepository } from "../../repositories/IFaseProducaoRepository";
import { ITipoGranjaRepository } from "../../repositories/ITipoGranjaRepository";

interface IAnimalReturn {
    id?: String;
    nome: String;
    tipoAnimal: String;
    statusAnimal: String;
    localizacao: String;
    dataNascimento: String;
    entradaPlantel: String;
    pesoCompra: String;
    raca: String;
    codigoRastreamento: String;
    faseProducao: {
        id?: string;
        sigla: string;
        descricao: string;
    };
    tipoGranja: {
        id?: string;
        sigla: string;
        descricao: string;
    };
};
@injectable()
class FindIdUseCase {
    constructor(
        @inject("AnimalsRepository")
        private animalsRepository: IAnimalsRepository,

        @inject("FaseProducaoRepository")
        private faseProducaoRepository: IFaseProducaoRepository,

        @inject("TipoGranjaRepository")
        private tipoGranjaRepository: ITipoGranjaRepository,
    ) {};
    async execute({ id }): Promise<IAnimalReturn> {
        let animal = await this.animalsRepository.findById(id);
        let faseProducao = await this.faseProducaoRepository.findById(id);
        let tipoGranja = await this.tipoGranjaRepository.findById(id);

        animal = { ...animal, faseProducao, tipoGranja }

        return animal;
    }
};

export { FindIdUseCase };