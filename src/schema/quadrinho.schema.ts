import { IQuadrinho } from './../types/quadrinho';
import { Schema, model } from "mongoose";

const quadrinhosSchema = new Schema({

    idComic: {type: Number, required: true},
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    qtdePaginas: {type: Number, required: true},
    dataPublicacao: { type: [Object], required: true },
    capa: { type: String, required: true }
})

export default model<IQuadrinho>('Quadrinhos', quadrinhosSchema)