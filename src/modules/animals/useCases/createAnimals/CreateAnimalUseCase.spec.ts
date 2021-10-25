import { CreateAnimalUseCase } from './CreateAnimalUseCase';
import { AnimalsRepositoryFake } from '../../repositories/fakes/AnimalsRepositoryFake';
import { FaseProducaoRepositoryFake } from '../../repositories/fakes/FaseProducaoRepositoryFake';
import { TipoGranjaRepositoryFake } from '../../repositories/fakes/TipoGranjaRepositoryFake';
import { AppError } from '../../../../errors/AppError';

let createAnimalUseCase: CreateAnimalUseCase;
let animalsRepositoryFake: AnimalsRepositoryFake;
let faseProducaoRepositoryFake: FaseProducaoRepositoryFake;
let tipoGranjaRepositoryFake: TipoGranjaRepositoryFake;

describe("Create animal", () => {
    beforeEach(() => {
        animalsRepositoryFake = new AnimalsRepositoryFake();
        faseProducaoRepositoryFake = new FaseProducaoRepositoryFake();
        tipoGranjaRepositoryFake = new TipoGranjaRepositoryFake();

        createAnimalUseCase = new CreateAnimalUseCase(
            animalsRepositoryFake, 
            faseProducaoRepositoryFake, 
            tipoGranjaRepositoryFake
        );
    })

    it("Should be able to create a new animal", async () => {

        await createAnimalUseCase.execute({
            id:"319846198719876519874651984",
            nome:"Animal for example",
            tipoAnimal:"POULTRY",
            statusAnimal:"3",
            localizacao:"Room 5",
            dataNascimento:"2017-06-29 02:53",
            entradaPlantel:"2019-06-16",
            pesoCompra:"98.934",
            raca:"ac-7077/m",
            codigoRastreamento:"649846549841987465194",
            faseProducao: {
                sigla:"ENG",
                descricao:"Growth stage"
            },
            tipoGranja: {
                sigla:"URE",
                descricao:"Recreate"
            }
        });
        await animalsRepositoryFake.create({
            id:"319846198719876519874651984",
            nome:"Animal for example",
            tipoAnimal:"POULTRY",
            statusAnimal:"3",
            localizacao:"Room 5",
            dataNascimento:"2017-06-29 02:53",
            entradaPlantel:"2019-06-16",
            pesoCompra:"98.934",
            raca:"ac-7077/m",
            codigoRastreamento:"649846549841987465194",
        });
        await faseProducaoRepositoryFake.create({
            id:"319846198719876519874651984",
            sigla:"ENG",
            descricao:"Growth stage"
        });
        await tipoGranjaRepositoryFake.create({
            id:"319846198719876519874651984",
            sigla:"URE",
            descricao:"Recreate"
        });

        const animalCreated = await animalsRepositoryFake.findByName(
            "Animal for example"
        );

        const faseProducaoCreated = await faseProducaoRepositoryFake.findById(
            "319846198719876519874651984"
        );

        const tipoGranjaCreated = await tipoGranjaRepositoryFake.findById(
            "319846198719876519874651984"
        );

        expect(animalCreated).toHaveProperty("tipoAnimal");
        expect(animalCreated).toHaveProperty("localizacao");
        expect(animalCreated).toHaveProperty("dataNascimento");
        expect(faseProducaoCreated).toHaveProperty("sigla");
        expect(tipoGranjaCreated).toHaveProperty("descricao");
    }),
    
    it("Should not be able to create two animals with the same name", async () => {

        expect(async () =>{
            await createAnimalUseCase.execute({
                id:"319846198719876519874651984",
                nome:"Animal for example",
                tipoAnimal:"POULTRY",
                statusAnimal:"3",
                localizacao:"Room 5",
                dataNascimento:"2017-06-29 02:53",
                entradaPlantel:"2019-06-16",
                pesoCompra:"98.934",
                raca:"ac-7077/m",
                codigoRastreamento:"649846549841987465194",
                faseProducao: {
                    sigla:"ENG",
                    descricao:"Growth stage"
                },
                tipoGranja: {
                    sigla:"URE",
                    descricao:"Recreate"
                }
            });
            await animalsRepositoryFake.create({
                id:"319846198719876519874651984",
                nome:"Animal for example",
                tipoAnimal:"POULTRY",
                statusAnimal:"3",
                localizacao:"Room 5",
                dataNascimento:"2017-06-29 02:53",
                entradaPlantel:"2019-06-16",
                pesoCompra:"98.934",
                raca:"ac-7077/m",
                codigoRastreamento:"649846549841987465194",
            });
            await faseProducaoRepositoryFake.create({
                id:"319846198719876519874651984",
                sigla:"ENG",
                descricao:"Growth stage"
            });
            await tipoGranjaRepositoryFake.create({
                id:"319846198719876519874651984",
                sigla:"URE",
                descricao:"Recreate"
            });
    
            await animalsRepositoryFake.create({
                id:"319846198719876519874651984",
                nome:"Animal for example",
                tipoAnimal:"POULTRY",
                statusAnimal:"3",
                localizacao:"Room 5",
                dataNascimento:"2017-06-29 02:53",
                entradaPlantel:"2019-06-16",
                pesoCompra:"98.934",
                raca:"ac-7077/m",
                codigoRastreamento:"649846549841987465194",
            });
    
            await faseProducaoRepositoryFake.create({
                id:"319846198719876519874651984",
                sigla:"ENG",
                descricao:"Growth stage"
            });
            await tipoGranjaRepositoryFake.create({
                id:"319846198719876519874651984",
                sigla:"URE",
                descricao:"Recreate"
            });

        }).rejects.toBeInstanceOf(AppError);
    });
});