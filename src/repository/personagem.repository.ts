import { IPersonagem } from './../types/personagem';
import personagemSchema from "../schema/personagem.schema";

class personagemRepository {

    async salvarPersonagensBanco(personagens: Array<Object>) {

        return await personagemSchema.create(personagens)
    }

    async buscaSeriesPorPersonagem(personagem: number) {
        return await personagemSchema.findById(personagem)
    }

    async criaPersonagem(novoPersonagem: IPersonagem) {
        return await personagemSchema.create(novoPersonagem)
    }

    async buscaPersonagemUnico(idPersonagem: string) {
        return await personagemSchema.findById(idPersonagem)
    }

    async buscaTodosPersonagens() {
        return await personagemSchema.find()
    }
    
    async atualizaPersonagem(idPersonagem: string ,personagemAtualizado: IPersonagem) {
        return await personagemSchema.findByIdAndUpdate(idPersonagem, personagemAtualizado, {new: true})
    }

    async deletaPersonagem(idPersonagem: string) {
        await personagemSchema.findByIdAndDelete(idPersonagem)
    }
}
export default new personagemRepository()
