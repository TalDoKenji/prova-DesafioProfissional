import { Router } from "express";
import criadorController from "../controller/criador.controller";

const routesCriador = Router()

routesCriador.get('/criador', criadorController.salvaCriadorBanco)

routesCriador.get('/todosCriadores', criadorController.buscaTodosCriadores)
routesCriador.get('/criadorComMenosQuadrinho', criadorController.buscaCriadorComMenosQuadrinho)
routesCriador.get('/criadorComMaisQuadrinho', criadorController.buscaCriadorComMaisQuadrinho)
routesCriador.post('/criador', criadorController.criaNovoCriador)
routesCriador.get('/criador/:id', criadorController.buscaCriadorUnico)
routesCriador.put('/atualizaCriador/:id', criadorController.atualizaCriador)
routesCriador.delete('/deletaCriador/:id', criadorController.deletaCriador)

export {
    routesCriador
}