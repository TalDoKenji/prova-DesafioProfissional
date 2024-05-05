import { Router } from "express";
import sagaController from "../controller/saga.controller";

const routesSaga = Router()

routesSaga.get('/saga/', sagaController.buscaSagaAranhaverso)

export {
    routesSaga
}