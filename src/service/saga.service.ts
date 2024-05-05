import { response } from "express"
import { ISaga } from "../types/ISaga"
import { title } from "process"


class sagaService {

    async buscaSagaAranhaverso() {
        const aranhaVerso = await fetch('http://gateway.marvel.com/v1/public/series/18892/comics?ts=1&apikey=f629d1d8679e1679118d11ec359c2622&hash=aea29d68aa1545d3674f11adec9ff169')
        const saga: any = await aranhaVerso.json()

        const quadrinhosUri = saga.data.results[0].comics.collectionURI
        const comics = await fetch(quadrinhosUri)
        const comicsjson = await comics.json()
        console.log(quadrinhosUri)
        console.log(comicsjson)

        console.log(saga.data.results)

        return
    }
}

export default new sagaService()