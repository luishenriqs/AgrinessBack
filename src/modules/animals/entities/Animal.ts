import { v4 as uuidv4 } from 'uuid';
import {
    Column,
    CreateDateColumn,
    Entity, JoinColumn, OneToOne, PrimaryColumn,
    UpdateDateColumn
} from 'typeorm';
import { TipoGranja } from './TipoGranja';
import { FaseProducao } from './FaseProducao';

@Entity("animals")
class Animal {
    @PrimaryColumn()
    id?: string;

    @OneToOne(type => TipoGranja)
    @JoinColumn()
    tipoGranja: TipoGranja

    @OneToOne(type => FaseProducao)
    @JoinColumn()
    faseProducao: FaseProducao

    @Column()
    nome: string;

    @Column()
    tipoAnimal: string;

    @Column({type: 'real'})
    statusAnimal: string;

    @Column()
    localizacao: string;

    @Column()
    dataNascimento: string;

    @Column()
    entradaPlantel: string;

    @Column({type: 'real'})
    pesoCompra: string;

    @Column()
    raca: string;

    @Column()
    codigoRastreamento: string;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Animal }