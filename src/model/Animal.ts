
class FaseTipo {
    sigla: string;
    descricao: string;
}


class Animal {
    id: string;
    nome: string;
    tipoAnimal: string;
    statusAnimal: number;
    localizacao: string;
    dataNascimento: string;
    entradaPlantel: string;
    pesoCompra: number;
    raca: string;
    codigoRastreamento: string;
    faseProducao: FaseTipo;
    tipoGranja: FaseTipo;
}

export { Animal }