import { TipoGranja } from '../../entities/TipoGranja';
import { ITipoGranjaRepository, ICreateTipoGranjalDTO } from '../ITipoGranjaRepository';

class TipoGranjaRepositoryFake implements ITipoGranjaRepository {

    repository: TipoGranja[] = [];

    async create({
        id,
        sigla,
        descricao,
    }: ICreateTipoGranjalDTO): Promise<void> {
        const tipoGranja = new TipoGranja();

        Object.assign(tipoGranja, {
            id,
            sigla,
            descricao,
        })
        this.repository.push(tipoGranja);
    }

    async findById(id: string): Promise<TipoGranja> {
        const tipoGranja = this.repository.find((tipoGranja: TipoGranja) => tipoGranja.id === id);
        return tipoGranja;
    }
};

export { TipoGranjaRepositoryFake };