import { AppError } from '../../../../errors/AppError';
import { Animal } from '../../entities/Animal';
import { IAnimalsRepository, ICreateAnimalDTO } from '../IAnimalsRepository';

class AnimalsRepositoryFake implements IAnimalsRepository {

    repository: Animal[] = [];

    async create({
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
    }: ICreateAnimalDTO): Promise<void> {
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
        })
        this.repository.push(animal);
    }

    async list(): Promise<Animal[]> {
        const all = this.repository;
        return all;
    }

    async findByName(nome: string): Promise<Animal> {
        const animal = this.repository.find((animal: Animal) => animal.nome === nome);
        return animal;
    }

    async findById(id: string): Promise<Animal> {
        const animal = this.repository.find((animal: Animal) => animal.id === id);
        return animal;
    }

    async findByLocalization(localizacao: string): Promise<Animal[]> {
        const animals = this.repository.filter((animal: Animal) => animal.localizacao === localizacao);
        return animals;
    }

    async delete(id: string): Promise<void> {
        const animal = await this.repository.find((animal: Animal) => animal.id === id);
        if (!animal) {
            throw new AppError('This animal does not exist');
        }
        this.repository.filter((animal: Animal) => animal.id !== id);
    }

    async update(id: string, localizacao: string): Promise<Animal> {
        const animal = await this.repository.find((animal: Animal) => animal.id === id);
        if (!animal) {
            throw new AppError('This animal does not exist');
        }
        animal.localizacao = localizacao;
        return animal;
    }
};

export { AnimalsRepositoryFake };