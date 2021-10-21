import { AnimalsRepository } from '../../repositories/implementations/AnimalsRepository';
import { ImportAnimalsController } from "./ImportAnimalsController";
import { ImportAnimalsUseCase } from "./ImportAnimalsUseCase";

const animalsRepository = AnimalsRepository.getInstance();
const importAnimalsUseCase = new ImportAnimalsUseCase(animalsRepository);
const importAnimalsController = new ImportAnimalsController(importAnimalsUseCase);

export { importAnimalsController };