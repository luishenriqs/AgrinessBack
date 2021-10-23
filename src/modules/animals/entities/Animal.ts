import { v4 as uuidv4 } from 'uuid';
import {
    Column,
    CreateDateColumn,
    Entity, JoinColumn, OneToOne, PrimaryColumn,
    UpdateDateColumn
} from 'typeorm';
import { Tipo } from './Tipo';
import { Fase } from './Fase';

@Entity("animals")
class Animal {
    @PrimaryColumn()
    id?: string;

    @OneToOne(type => Tipo)
    @JoinColumn()
    tipo: Tipo

    @OneToOne(type => Fase)
    @JoinColumn()
    fase: Fase

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