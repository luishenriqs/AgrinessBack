import { getRepository, Repository } from 'typeorm';
import { FaseProducao } from '../../entities/FaseProducao';
import { IFaseProducaoRepository, ICreateFaseProducaolDTO } from '../IFaseProducaoRepository';

class FaseProducaoRepository implements IFaseProducaoRepository {

    private repository: Repository<FaseProducao>;

    constructor() {
        this.repository = getRepository(FaseProducao); 
    };

    async create({
        id,
        sigla,
        descricao,
    }: ICreateFaseProducaolDTO): Promise<void> {

        const faseProducao = this.repository.create({
            id,
            sigla,
            descricao,
        });

        await this.repository.save(faseProducao);
    }

    async findById(id: string): Promise<FaseProducao> {
        const faseProducao = await this.repository.findOne({ id });
        return faseProducao;
    }
};

export { FaseProducaoRepository };