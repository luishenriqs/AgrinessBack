import { container } from 'tsyringe';
import { AnimalsRepository } from '../../modules/animals/repositories/implementations/AnimalsRepository';
import { IAnimalsRepository } from '../../modules/animals/repositories/IAnimalsRepository';
import { FaseProducaoRepository } from '../../modules/animals/repositories/implementations/FaseProducaoRepository';
import { IFaseProducaoRepository } from '../../modules/animals/repositories/IFaseProducaoRepository';
import { TipoGranjaRepository } from '../../modules/animals/repositories/implementations/TipoGranjaRepository';
import { ITipoGranjaRepository } from '../../modules/animals/repositories/ITipoGranjaRepository';

container.registerSingleton<IAnimalsRepository>(
    "AnimalsRepository",
    AnimalsRepository
);

container.registerSingleton<IFaseProducaoRepository>(
    "FaseProducaoRepository",
    FaseProducaoRepository
);

container.registerSingleton<ITipoGranjaRepository>(
    "TipoGranjaRepository",
    TipoGranjaRepository
);