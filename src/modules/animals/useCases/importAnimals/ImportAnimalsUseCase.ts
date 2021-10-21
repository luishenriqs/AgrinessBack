import fs from 'fs';
import { IAnimalsRepository } from "../../repositories/IAnimalsRepository";

class ImportAnimalsUseCase {
    constructor(private animalsRepository: IAnimalsRepository) {};

    loadingFile = (file: Express.Multer.File, encoding) => {
        return new Promise((resolve, reject) => {
            fs.readFile(file.path, encoding = "utf-8", function read(err, data) {
                if (err) {
                    reject(err);
                }
                resolve(JSON.parse(data));
            });

        })
    };

    async execute(file: Express.Multer.File, encoding): Promise<void> {
        const animals = await this.loadingFile(file, encoding);
        console.log('----------> Array de animais ', animals[0]);
    };
};

export { ImportAnimalsUseCase };