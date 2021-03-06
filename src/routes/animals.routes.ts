import { Router } from "express";
import  multer from 'multer';
import { CreateAnimalController } from "../modules/animals/useCases/createAnimals/CreateAnimalController";
import { ListAnimalsController } from "../modules/animals/useCases/listAnimals/ListAnimalsController";
import { ImportAnimalsController } from "../modules/animals/useCases/importAnimals/ImportAnimalsController";
import { FindNameController } from '../modules/animals/useCases/findName/FindNameController';
import { FindIdController } from '../modules/animals/useCases/findId/FindIdController';
import { FindLocalizationController } from '../modules/animals/useCases/findLocalization/FindLocalizationController';
import { DeleteController } from "../modules/animals/useCases/delete/DeleteController";
import { UpDateController } from '../modules/animals/useCases/up_date/UpDateController';

const animalsRoutes = Router();
const upload = multer({
    dest: "./tmp",
});

const createAnimalController = new CreateAnimalController();
const listAnimalsController = new ListAnimalsController();
const findNameController = new FindNameController();
const findIdController = new FindIdController();
const findLocalizationController = new FindLocalizationController();
const deleteController = new DeleteController();
const importAnimalsController = new ImportAnimalsController();
const upDateController = new UpDateController();

animalsRoutes.post("/", createAnimalController.handle);

animalsRoutes.get("/", listAnimalsController.handle);

animalsRoutes.get("/findname", findNameController.handle);

animalsRoutes.get("/findid", findIdController.handle);

animalsRoutes.get("/findlocalization", findLocalizationController.handle);

animalsRoutes.delete("/delete", deleteController.handle);

animalsRoutes.patch("/update", upDateController.handle);

animalsRoutes.post("/import", upload.single("file"), importAnimalsController.handle);

export { animalsRoutes };