import { container } from 'tsyringe';
import { IAnimalsRepository } from '../../modules/animals/repositories/IAnimalsRepository';
import { AnimalsRepository } from '../../modules/animals/repositories/implementations/AnimalsRepository';

container.registerSingleton<IAnimalsRepository>(
    "AnimalsRepository",
    AnimalsRepository
)