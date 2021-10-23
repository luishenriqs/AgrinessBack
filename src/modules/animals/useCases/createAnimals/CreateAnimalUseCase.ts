import { inject, injectable } from 'tsyringe';
import { IAnimalsRepository } from "../../repositories/IAnimalsRepository";

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
};

@injectable()
class CreateAnimalUseCase {
    constructor(
        @inject("AnimalsRepository")
        private animalsRepository: IAnimalsRepository
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
    }: IRequest): Promise<void> {

    const animalAlredyExists = await this.animalsRepository.findByName(nome);
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
        })
    };
};

export { CreateAnimalUseCase };