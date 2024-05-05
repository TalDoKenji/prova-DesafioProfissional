import { IQuadrinho } from "../types/quadrinho"
import quadrinhoRepository from "../repository/quadrinho.repository"

class quadrinhoService {

    async buscaQuadrinho() {
        const response: Response =
            await fetch('http://gateway.marvel.com/v1/public/series/18892/comics?ts=1&apikey=f629d1d8679e1679118d11ec359c2622&hash=aea29d68aa1545d3674f11adec9ff169')
        const serieJson: any = await response.json()
        const serie = serieJson.data.results
        return serie
    }

    async salvaQuadrinhoBanco() {
        const serie = await this.buscaQuadrinho()
        const Todascomic: Array<Object> = serie.map((infoSerie: any) => {
            const comic: IQuadrinho = {
                idComic: infoSerie.id,
                titulo: infoSerie.title,
                descricao: infoSerie.description,
                qtdePaginas: infoSerie.pageCount,
                dataPublicacao: infoSerie.dates,
                capa: infoSerie.thumbnail.path,
            }
            console.log(comic)
            return comic
        })
        return await quadrinhoRepository.salvarQuadrinhos(Todascomic)
    }

    async buscaMenorQuadrinho() {
        const quadrinhos = await quadrinhoRepository.retornaTodosQuadrinhos()
        const menorQuadrinho = quadrinhos.reduce((menor, atual) => {
           return menor.qtdePaginas > atual.qtdePaginas ? atual : menor
        }, quadrinhos[0])
        return menorQuadrinho
    }

    async buscaMaiorQuadrinho(){
        const quadrinhos = await quadrinhoRepository.retornaTodosQuadrinhos()
        const menorQuadrinho = quadrinhos.reduce((menor, atual) => {
           return menor.qtdePaginas < atual.qtdePaginas ? atual : menor
        }, quadrinhos[0])
        return menorQuadrinho
    }

    async criaNovoQuadrinho(quadrinho: IQuadrinho) {
        const NovoQuadrinho = await quadrinhoRepository.criaNovoQuadrinho(quadrinho)
        return NovoQuadrinho
    }

    async buscaTodosQuadrinhosInterno() {
        return await quadrinhoRepository.retornaTodosQuadrinhos()

    }

    async buscaQuadrinhoUnico(quadrinho: string) {
        return await quadrinhoRepository.retornaQuadrinhoUnico(quadrinho)
    }

    async atualizaQuadrinho(id: string, novoQuadrinho: IQuadrinho) {
        return await quadrinhoRepository.atualizaQuadrinho(id, novoQuadrinho)
    }

    async deletaQuadrinho(id: string) {
        await quadrinhoRepository.deletaQuadrinho(id)
    }
}

export default new quadrinhoService()