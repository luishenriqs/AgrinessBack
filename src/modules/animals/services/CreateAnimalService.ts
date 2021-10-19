import { IAnimalsRepository } from "../repositories/IAnimalsRepository";

interface IFaseTipo {
    sigla: string;
    descricao: string;
}
interface IRequest {
    id: string;
    nome: string;
    tipoAnimal: string;
    statusAnimal: number;
    localizacao: string;
    dataNascimento: string;
    entradaPlantel: string;
    pesoCompra: number;
    raca: string;
    codigoRastreamento: string;
    faseProducao: IFaseTipo;
    tipoGranja: IFaseTipo;
};

class CreateAnimalService {
    constructor(private animalsRepository: IAnimalsRepository) {

    };

    execute({
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
    }: IRequest): void {

    const animalAlredyExists = this.animalsRepository.findByName(nome);
    if(animalAlredyExists) {
        throw new Error("Animal`s name alredy exists!")
    }

    this.animalsRepository.create({
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
    })
    }
};

export { CreateAnimalService };