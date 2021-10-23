import { v4 as uuidv4 } from 'uuid';
import { Column, Entity, PrimaryColumn } from 'typeorm';

class FaseTipo {
    sigla: string;
    descricao: string;
}

@Entity("animals")
class Animal {
    @PrimaryColumn()
    id?: string;

    @Column()
    nome: string;

    @Column()
    tipoAnimal: string;

    @Column()
    statusAnimal: number;

    @Column()
    localizacao: string;

    @Column()
    dataNascimento: string;

    @Column()
    entradaPlantel: string;

    @Column()
    pesoCompra: number;

    @Column()
    raca: string;

    @Column()
    codigoRastreamento: string;

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Animal }