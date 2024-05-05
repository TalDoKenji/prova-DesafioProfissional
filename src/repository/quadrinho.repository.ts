import quadrinhoSchema from "../schema/quadrinho.schema";
import { IQuadrinho } from "../types/quadrinho";


class quadrinhoRepository {

    async salvarQuadrinhos(quadrinhos: Array<Object>) {

        return await quadrinhoSchema.create(quadrinhos)
    }
    
    async criaNovoQuadrinho(quadrinho: IQuadrinho) {
        return await quadrinhoSchema.create(quadrinho)
    }

    async storysPorQuadrinho(idQuadrinho: string) {
        return await quadrinhoSchema.findById(idQuadrinho)
    }

    async retornaTodosQuadrinhos() {
        return await quadrinhoSchema.find()
    }

    async retornaQuadrinhoUnico(id: string) {
        return await quadrinhoSchema.findById(id)
    }

    async atualizaQuadrinho(id: string, novoQuadrinho: IQuadrinho) {
        return await quadrinhoSchema.findByIdAndUpdate(id, novoQuadrinho, { new: true })
    }

    async deletaQuadrinho(id: string) {
        await quadrinhoSchema.findByIdAndDelete(id)
        return null
    }

}

export default new quadrinhoRepository() 