import { AnimalsRepository } from '../../repositories/implementations/AnimalsRepository';
import { ImportAnimalsController } from "./ImportAnimalsController";
import { ImportAnimalsUseCase } from "./ImportAnimalsUseCase";

export default (): ImportAnimalsController => {
    const animalsRepository = new AnimalsRepository();
    const importAnimalsUseCase = new ImportAnimalsUseCase(animalsRepository);
    const importAnimalsController = new ImportAnimalsController(importAnimalsUseCase);
    
    return importAnimalsController;

};