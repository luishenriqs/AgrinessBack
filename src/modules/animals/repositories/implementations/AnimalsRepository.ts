import { getRepository, Repository } from 'typeorm';
import { Animal } from '../../entities/Animal';
import { IAnimalsRepository, ICreateAnimalDTO } from '../IAnimalsRepository';

class AnimalsRepository implements IAnimalsRepository {

    private repository: Repository<Animal>;

    constructor() {
        this.repository = getRepository(Animal); 
    };

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

        const animal = this.repository.create({
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
        });

        await this.repository.save(animal);
    }

    async list(): Promise<Animal[]> {
        const animals = await this.repository.find();
        return animals;
    }

    async findByName(nome: string): Promise<Animal> {
        const animal = await this.repository.findOne({ nome });
        return animal;
    }

    async findById(id: string): Promise<Animal> {
        const animal = await this.repository.findOne({ id });
        return animal;
    }

    async findByLocalization(localizacao: string): Promise<Animal[]> {
        const animals = await this.repository.find({ localizacao });
        return animals;
    }
};

export { AnimalsRepository };