import { Router } from "express";
import personagensController from "../controller/personagens.controller";

const routesPersonagem = Router()

routesPersonagem.get('/todosPersonagens', personagensController.salvaPersonagemBanco)

routesPersonagem.post('/personagem', personagensController.criaPersonagem)
routesPersonagem.get('/buscaTodosPersonagens', personagensController.buscaTodosPersonagens)
routesPersonagem.put('/atualizaPersonagem/:id', personagensController.atualizaPersonagem)
routesPersonagem.get('/buscaPersonagem/:id', personagensController.buscaPersonagemUnico)
routesPersonagem.delete('/deletaPersonagem/:id', personagensController.deletaPersonagem)

routesPersonagem.get('/buscaSeriesPorPersonagem/:id', personagensController.buscaSeriesPorPersonagem)

export {
    routesPersonagem
}