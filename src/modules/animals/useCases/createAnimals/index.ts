import { AnimalsRepository } from '../../repositories/AnimalsRepository';
import { CreateAnimalUseCase } from './CreateAnimalUseCase';
import { CreateAnimalController } from './CreateAnimalController';

const animalsRepository = new AnimalsRepository();
const createAnimalUseCase = new CreateAnimalUseCase(animalsRepository);
const createAnimalController = new CreateAnimalController(createAnimalUseCase);

export { createAnimalController };
