import personagemService from "../service/personagem.service";
import { Request, Response } from "express";

class personagemController {
    
    async salvaPersonagemBanco(req: Request, res: Response){
        const personagens = await personagemService.salvaPersonagemBanco()
        return res.status(200).json(personagens)
    }

    async criaPersonagem(req: Request, res: Response) {
        const novoPersonagem = await personagemService.criaPersonagem(req.body)
        return res.status(201).json(novoPersonagem)
    }

    async buscaSeriesPorPersonagem(req: Request, res: Response) {
        const seriesDoPersonagem = await personagemService.buscaSeriesPorPersonagem(req.params.id)
        return res.status(200).json(seriesDoPersonagem)
    }
  
    async buscaTodosPersonagens(req: Request, res: Response) {
        const personagens = await personagemService.buscaTodosPersonagens()
        return res.status(200).json(personagens)
    }

    async buscaPersonagemUnico(req: Request, res: Response) {
        const personagemBuscado = await personagemService.buscaPersonagemUnico(req.params.id)
        return res.status(200).json(personagemBuscado)
    }

    async atualizaPersonagem(req: Request, res: Response) {
        const personagemAtualizado = await personagemService.atualizaPersonagem(req.params.id, req.body)
        return res.status(200).json(personagemAtualizado)
    }

    async deletaPersonagem(req: Request, res: Response) {
        await personagemService.deletaPersonagem(req.params.id)
        return res.status(204).json()
    }
}

export default new personagemController()