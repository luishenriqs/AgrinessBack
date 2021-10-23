import { Animal } from '../entities/Animal';

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
    }: ICreateAnimalDTO): Promise<void>;

    list(): Promise<Animal[]>;

    findByName(nome: string): Promise<Animal>;

    findById(id: string): Promise<Animal>;

    findByLocalization(localizacao: string): Promise<Animal[]>;
};

export { IAnimalsRepository, ICreateAnimalDTO };