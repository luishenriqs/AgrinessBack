import { getRepository, Repository } from 'typeorm';
import { TipoGranja } from '../../entities/TipoGranja';
import { ITipoGranjaRepository, ICreateTipoGranjalDTO } from '../ITipoGranjaRepository';

class TipoGranjaRepository implements ITipoGranjaRepository {

    private repository: Repository<TipoGranja>;

    constructor() {
        this.repository = getRepository(TipoGranja); 
    };

    async create({
        id,
        sigla,
        descricao,
    }: ICreateTipoGranjalDTO): Promise<void> {

        const tipoGranja = this.repository.create({
            id,
            sigla,
            descricao,
        });

        await this.repository.save(tipoGranja);
    }

    async findById(id: string): Promise<TipoGranja> {
        const tipoGranja = await this.repository.findOne({ id });
        return tipoGranja;
    }
};

export { TipoGranjaRepository };