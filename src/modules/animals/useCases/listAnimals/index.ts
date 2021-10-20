import { AnimalsRepository } from '../../repositories/implementations/AnimalsRepository';
import { ListAnimalsUseCase } from './ListAnimalsUseCase';
import { ListAnimalsController } from './ListAnimalsController';

const animalsRepository = AnimalsRepository.getInstance();
const listAnimalsUseCase = new ListAnimalsUseCase(animalsRepository);
const listAnimalsController = new ListAnimalsController(listAnimalsUseCase);

export { listAnimalsController };