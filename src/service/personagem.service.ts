import { IPersonagem } from './../types/personagem';
import personagemRepository from "../repository/personagem.repository";

class personagemService {

    async buscaPersonagensDaSerie() {
        const response: Response = await fetch('http://gateway.marvel.com/v1/public/series/18892/characters?ts=1&apikey=f629d1d8679e1679118d11ec359c2622&hash=aea29d68aa1545d3674f11adec9ff169')

        const personagensJson: any = await response.json()
        const characters = personagensJson.data.results
        return characters
    }

    async buscaSeriesPorPersonagem(idPersonagem: string){
        const response: Response = await fetch(`http://gateway.marvel.com/v1/public/characters/${idPersonagem}/series?ts=1&apikey=f629d1d8679e1679118d11ec359c2622&hash=aea29d68aa1545d3674f11adec9ff169`)
        const seriesPorPersonagem: any = await response.json()
        console.log(seriesPorPersonagem)
        return seriesPorPersonagem.data.results
    }

    async salvaPersonagemBanco(){
        const characters = await this.buscaPersonagensDaSerie()
        const todosPersonagens: Array<Object> = characters.map((infoPersonagem: any) => {
            const personagem: IPersonagem = {
                idPersonagem: infoPersonagem.id,
                nome: infoPersonagem.name,
                descricao: infoPersonagem.description,
                imagem: infoPersonagem.thumbnail.path
            }
            return personagem
        })
        return await personagemRepository.salvarPersonagensBanco(todosPersonagens)
    }

    async criaPersonagem(novoPersonagem: IPersonagem) {
        return await personagemRepository.criaPersonagem(novoPersonagem)
    }

    async buscaPersonagemUnico(idPersonagem: string) {
        return await personagemRepository.buscaPersonagemUnico(idPersonagem)
    }

    async buscaTodosPersonagens() {
        return await personagemRepository.buscaTodosPersonagens()
    }

    async atualizaPersonagem(idPersonagem: string, personagemAtualizado: IPersonagem) {
        return await personagemRepository.atualizaPersonagem(idPersonagem, personagemAtualizado)
    }

    async deletaPersonagem(idPersonagem: string) {
        return await personagemRepository.deletaPersonagem(idPersonagem)
    }
}
export default new personagemService()