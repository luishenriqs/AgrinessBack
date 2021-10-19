import { Animal } from '../model/Animal';

interface IFaseTipo {
    sigla: string;
    descricao: string;
}

interface ICreateAnimalDTO {
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
}

interface IAnimalsRepository {
    create({
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
    }: ICreateAnimalDTO): void;

    list(): Animal[];

    findByName(nome: string): Animal;

    findById(id: string): Animal;

    findByLocalization(localizacao: string): Animal;
};

export { IAnimalsRepository, ICreateAnimalDTO };