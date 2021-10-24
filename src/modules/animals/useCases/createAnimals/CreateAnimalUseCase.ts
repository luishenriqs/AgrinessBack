import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { IAnimalsRepository } from "../../repositories/IAnimalsRepository";
import { IFaseProducaoRepository } from "../../repositories/IFaseProducaoRepository";
import { ITipoGranjaRepository } from "../../repositories/ITipoGranjaRepository";

interface IFaseTipo {
    sigla: string;
    descricao: string;
}
interface IRequest {
    id: string;
    nome: string;
    tipoAnimal: string;
    statusAnimal: string;
    localizacao: string;
    dataNascimento: string;
    entradaPlantel: string;
    pesoCompra: string;
    raca: string;
    codigoRastreamento: string;
    faseProducao: IFaseTipo,
    tipoGranja: IFaseTipo,
};

@injectable()
class CreateAnimalUseCase {
    constructor(
        @inject("AnimalsRepository")
        private animalsRepository: IAnimalsRepository,

        @inject("FaseProducaoRepository")
        private faseProducaoRepository: IFaseProducaoRepository,

        @inject("TipoGranjaRepository")
        private tipoGranjaRepository: ITipoGranjaRepository
    ) {};

    async execute({
        id,
        nome,
        tipoAnimal,
        statusAnimal,
        localizacao,
        dataNascimento,
        entradaPlantel,
        pesoCompra,
        raca,
        codigoRastreamento,
        faseProducao,
        tipoGranja,
    }: IRequest): Promise<void> {

    const animalAlredyExists = await this.animalsRepository.findByName(nome);
        if(animalAlredyExists) {
            throw new AppError("Animal`s name alredy exists!")
        }

        await this.animalsRepository.create({
            id,
            nome,
            tipoAnimal,
            statusAnimal,
            localizacao,
            dataNascimento,
            entradaPlantel,
            pesoCompra,
            raca,
            codigoRastreamento,
        }),

        await this.faseProducaoRepository.create({
            id,
            sigla: faseProducao.sigla,
            descricao: faseProducao.descricao,
        }),

        await this.tipoGranjaRepository.create({
            id,
            sigla: tipoGranja.sigla,
            descricao: tipoGranja.descricao,
        })
    };
};

export { CreateAnimalUseCase };