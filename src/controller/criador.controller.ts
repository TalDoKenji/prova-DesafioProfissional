import criadorService from "../service/criador.service";
import { Request, Response } from "express";

class criadorController {

    async salvaCriadorBanco(req: Request, res: Response) {
        const criador = await criadorService.salvaCriadorBanco()
        return res.status(200).json(criador)
    }

    async buscaTodosCriadores(req: Request, res: Response) {
        const todosCriadores = await criadorService.buscaTodosCriadores()
        return res.status(200).json(todosCriadores)
    }

    async buscaCriadorUnico(req: Request, res: Response) {
        const criador = await criadorService.buscaCriadorUnico(req.params.id)
        return res.status(200).json(criador)
    }

    async criaNovoCriador(req: Request, res: Response) {
        const criador = await criadorService.criaNovoCriador(req.body)
        return res.status(201).json(criador)
    }

    async atualizaCriador(req: Request, res: Response) {
        const criadorAtualizado = await criadorService.atualizaCriador(req.params.id, req.body)
        return res.status(200).json(criadorAtualizado)
    }

    async deletaCriador(req: Request, res: Response) {
        await criadorService.deletaCriador(req.params.id)
        return res.status(204).json()
    }

    async buscaCriadorComMenosQuadrinho(req: Request, res: Response){
        const criador = await criadorService.criadorComMenosQuadrinhos()
        return res.status(200).json(criador)
    }

    async buscaCriadorComMaisQuadrinho(req: Request, res: Response) {
        const criador = await criadorService.criadorComMaisQuadrinhos()
        return res.status(200).json(criador)
    }

}
export default new criadorController()