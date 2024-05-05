import { ICriador } from "../types/ICriador";
import criadorRepository from "../repository/criador.repository";
import quadrinhoService from "./quadrinho.service";


class criadorService {

    criadores: Array<ICriador> = []

    async buscaQuadrinhosPorCriador(Uri: string): Promise<Array<string>> {
        let titulos: Array<string> = []
        const response: Response = await fetch(`${Uri}/comics?ts=1&apikey=f629d1d8679e1679118d11ec359c2622&hash=aea29d68aa1545d3674f11adec9ff169&limit=20`)
        const quadrinhoJson: any = await response.json()
        const quadrinhosDoCriador = quadrinhoJson.data.results
        quadrinhosDoCriador.map((infoQuadrinho: any) => {
            titulos.push(infoQuadrinho.title)
        })
        return titulos
    }

    async salvaCriadorBanco() {
        const Todosquadrinhos = await quadrinhoService.buscaQuadrinho()
        const quadrinho: Array<Object> = Todosquadrinhos.map(async (infoQuadrinho: any) => {
            infoQuadrinho.creators.items.map(async (infoCriador: any) => {
                const criador: ICriador = {
                    nome: infoCriador.name,
                    funcao: infoCriador.role,
                    quadrinhos: await this.buscaQuadrinhosPorCriador(infoCriador.resourceURI)
                }
                if (!this.criadores.includes(criador)) {
                    return await criadorRepository.salvaCriadorBanco(criador)
                }
            })
        })
    }

    async criadorComMenosQuadrinhos(){
        const criadores = await criadorRepository.buscaTodosCriadores()
        const criadorMenosQuadrinho = criadores.reduce((anterior, atual) =>{
            return anterior.quadrinhos.length < atual.quadrinhos.length ? anterior : atual
        }, criadores[0])
        return criadorMenosQuadrinho
    }

    async criadorComMaisQuadrinhos(){
        const criadores = await criadorRepository.buscaTodosCriadores()
        const criadorMaisQuadrinho = criadores.reduce((anterior, atual) =>{
            return anterior.quadrinhos.length > atual.quadrinhos.length ? anterior : atual
        }, criadores[0])
        return criadorMaisQuadrinho
    }

    async buscaTodosCriadores(){
        return await criadorRepository.buscaTodosCriadores()
    }

    async buscaCriadorUnico(idCriador: string) {
        return await criadorRepository.buscaCriadorUnico(idCriador)
    }

    async criaNovoCriador(novoCriador: ICriador) {
        return await criadorRepository.criaNovoCriador(novoCriador)
    }

    async atualizaCriador(idCriador: string, criadorAtualizado: ICriador) {
        return await criadorRepository.atualizaCriador(idCriador, criadorAtualizado)
    }
    
    async deletaCriador(idCriador: string) {
        await criadorRepository.deletaCriador(idCriador)
    }






}

export default new criadorService()