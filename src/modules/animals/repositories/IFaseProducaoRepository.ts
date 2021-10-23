import { FaseProducao } from '../entities/FaseProducao';

interface ICreateFaseProducaolDTO {
    id: string;
    sigla: string;
    descricao: string;
}

interface IFaseProducaoRepository {
    create({
        id,
        sigla,
        descricao,
    }: ICreateFaseProducaolDTO): Promise<void>;

    findById(id: string): Promise<FaseProducao>;
};

export { IFaseProducaoRepository, ICreateFaseProducaolDTO };