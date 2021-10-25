import { FaseProducao } from '../../entities/FaseProducao';
import { IFaseProducaoRepository, ICreateFaseProducaolDTO} from '../IFaseProducaoRepository';

class FaseProducaoRepositoryFake implements IFaseProducaoRepository {

    repository: FaseProducao[] = [];

    async create({
        id,
        sigla,
        descricao,
    }: ICreateFaseProducaolDTO): Promise<void> {
        const faseProducao = new FaseProducao();

        Object.assign(faseProducao, {
            id,
            sigla,
            descricao,
        })
        this.repository.push(faseProducao);
    }

    async findById(id: string): Promise<FaseProducao> {
        const faseProducao = this.repository.find((faseProducao: FaseProducao) => faseProducao.id === id);
        return faseProducao;
    }
};

export { FaseProducaoRepositoryFake };