import { AnimalsRepository } from '../../repositories/AnimalsRepository';
import { ListAnimalsUseCase } from './ListAnimalsUseCase';
import { ListAnimalsController } from './ListAnimalsController';

const animalsRepository = new AnimalsRepository();
const listAnimalsUseCase = new ListAnimalsUseCase(animalsRepository);
const listAnimalsController = new ListAnimalsController(listAnimalsUseCase);

export { listAnimalsController };