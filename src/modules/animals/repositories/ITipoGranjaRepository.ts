import { TipoGranja } from '../entities/TipoGranja';

interface ICreateTipoGranjalDTO {
    id: string;
    sigla: string;
    descricao: string;
}

interface ITipoGranjaRepository {
    create({
        id,
        sigla,
        descricao,
    }: ICreateTipoGranjalDTO): Promise<void>;

    findById(id: string): Promise<TipoGranja>;
};

export { ITipoGranjaRepository, ICreateTipoGranjalDTO };