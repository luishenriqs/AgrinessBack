import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity("faseProducao")
class FaseProducao {
    @PrimaryColumn()
    id?: string;

    @Column()
    sigla: string;

    @Column()
    descricao: string;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;
}

export { FaseProducao }