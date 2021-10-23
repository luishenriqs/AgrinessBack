import { AnimalsRepository } from '../../repositories/implementations/AnimalsRepository';
import { ListAnimalsUseCase } from './ListAnimalsUseCase';
import { ListAnimalsController } from './ListAnimalsController';

export default (): ListAnimalsController => {
    const animalsRepository = new AnimalsRepository();
    const listAnimalsUseCase = new ListAnimalsUseCase(animalsRepository);
    const listAnimalsController = new ListAnimalsController(listAnimalsUseCase);
    
    return listAnimalsController;
};