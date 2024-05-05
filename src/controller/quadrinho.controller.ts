import quadrinhoService from "../service/quadrinho.service";
import { Request, Response } from "express";

class quadrinhosController {

    async buscaQuadrinhos(req: Request, res: Response) {
        const comics = await quadrinhoService.salvaQuadrinhoBanco()
        return res.status(200).json(comics)
    }

    async criaNovoQuadrinho(req: Request, res: Response) {
        const NovoQuadrinho = await quadrinhoService.criaNovoQuadrinho(req.body)
        return res.status(201).json(NovoQuadrinho)
    }

    async buscaQuadrinhosInterno(req: Request, res: Response) {
        const quadrinhos = await quadrinhoService.buscaTodosQuadrinhosInterno()
        return res.status(200).json(quadrinhos)
    }

    async buscaQuadrinhoUnico(req: Request, res: Response) {
        const quadrinho = await quadrinhoService.buscaQuadrinhoUnico(req.params.id)
        return res.status(200).json(quadrinho)
    }

    async atualizaQuadrinho(req: Request, res: Response) {
        const quadrinhoAtualizado = await quadrinhoService.atualizaQuadrinho(req.params.id, req.body)
        return res.status(200).json(quadrinhoAtualizado) 
    }

    async deletaQuadrinho(req: Request, res: Response) {
        await quadrinhoService.deletaQuadrinho(req.params.id)
        return res.status(204).json()
    }

    async buscaMenorQuadrinho(req: Request, res: Response){
        const menorQuadrinho = await quadrinhoService.buscaMenorQuadrinho()
        return res.status(200).json(menorQuadrinho)
    }

    async buscaMaiorQuadrinho(req: Request, res: Response){
        const maiorQuadrinho = await quadrinhoService.buscaMaiorQuadrinho()
        return res.status(200).json(maiorQuadrinho)
    }

}

export default new quadrinhosController()