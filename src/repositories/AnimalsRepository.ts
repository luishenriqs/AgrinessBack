import { Animal } from '../model/Animal';
import { IAnimalsRepository, ICreateAnimalDTO } from './IAnimalsRepository';

class AnimalsRepository implements IAnimalsRepository {
    private animals: Animal[];

    constructor() {
        this.animals = [];
    }

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
    }: ICreateAnimalDTO): void {
        const animal = new Animal();

        Object.assign(animal, {
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
        });

        this.animals.push(animal);
    }

    list(): Animal[] {
        return this.animals;
    }

    findByName(nome: string): Animal {
        const animal = this.animals.find((animal) => animal.nome === nome);
        return animal;
    }

    findById(id: string): Animal {
        const animal = this.animals.find((animal) => animal.id === id);
        return animal;
    }

    findByLocalization(localizacao: string): Animal {
        const animal = this.animals.find((animal) => animal.localizacao === localizacao);
        return animal;
    }
};

export { AnimalsRepository };