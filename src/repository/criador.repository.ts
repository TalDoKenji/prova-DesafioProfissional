import criadorSchema from "../schema/criador.schema";
import { ICriador } from "../types/ICriador";

class criadorRepository {

    async salvaCriadorBanco(criadores: ICriador) {
        return await criadorSchema.create(criadores)
    }

    async buscaTodosCriadores() {
        return await criadorSchema.find()
    }

    async buscaCriadorUnico(idCriador: string) {
        return await criadorSchema.findById(idCriador)
    }

    async criaNovoCriador(criador: ICriador) {
        return await criadorSchema.create(criador)
    }

    async atualizaCriador(idCriador: string, criadorAtualizado: ICriador) {
        return await criadorSchema.findByIdAndUpdate(idCriador, criadorAtualizado, {new: true})
    }

    async deletaCriador(idCriador: string) {
        await criadorSchema.findByIdAndDelete(idCriador)
    }
}
export default new criadorRepository()