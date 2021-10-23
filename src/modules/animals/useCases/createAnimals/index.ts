import { AnimalsRepository } from '../../repositories/implementations/AnimalsRepository';
import { CreateAnimalUseCase } from './CreateAnimalUseCase';
import { CreateAnimalController } from './CreateAnimalController';

export default (): CreateAnimalController => {
    const animalsRepository = new AnimalsRepository();
    const createAnimalUseCase = new CreateAnimalUseCase(animalsRepository);
    const createAnimalController = new CreateAnimalController(createAnimalUseCase);
    
    return createAnimalController;

};
