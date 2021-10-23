import fs from 'fs';
import { inject, injectable } from 'tsyringe';
import { Animal } from '../../entities/Animal';
import { IAnimalsRepository } from "../../repositories/IAnimalsRepository";

@injectable()
class ImportAnimalsUseCase {
    constructor(
        @inject("AnimalsRepository")
        private animalsRepository: IAnimalsRepository
    ) {};

    loadingFile = (file: Express.Multer.File, encoding) => {
        return new Promise<Animal[]>((resolve, reject) => {
            fs.readFile(file.path, encoding = "utf-8", function read(err, data) {
                if (err) {
                    reject(err);
                }
                fs.promises.unlink(file.path);
                resolve(JSON.parse(data));
            });

        })
    };

    async execute(file: Express.Multer.File, encoding): Promise<void> {
        const animals = await this.loadingFile(file, encoding);

        animals.map(async (animal) => {
            const {
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
            } = animal;

            const existAnimal = this.animalsRepository.findByName(nome);

            if(!existAnimal) {
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
                });
            };
        });
    };
};

export { ImportAnimalsUseCase };