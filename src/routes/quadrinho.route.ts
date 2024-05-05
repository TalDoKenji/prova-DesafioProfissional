import { Router } from "express";
import quadrinhoController from "../controller/quadrinho.controller";

const routesQuadrinhos = Router()

routesQuadrinhos.get('/comics', quadrinhoController.buscaQuadrinhos)

routesQuadrinhos.get('/buscaMenorQuadrinho', quadrinhoController.buscaMenorQuadrinho)
routesQuadrinhos.get('/buscaMaiorQuadrinho', quadrinhoController.buscaMaiorQuadrinho)
routesQuadrinhos.post('/comics', quadrinhoController.criaNovoQuadrinho)
routesQuadrinhos.get('/todasComics', quadrinhoController.buscaQuadrinhosInterno)
routesQuadrinhos.put('/atualizaComic/:id', quadrinhoController.atualizaQuadrinho)
routesQuadrinhos.delete('/deletaComic/:id', quadrinhoController.deletaQuadrinho)
routesQuadrinhos.get('/comics/:id', quadrinhoController.buscaQuadrinhoUnico)

export {
    routesQuadrinhos
}