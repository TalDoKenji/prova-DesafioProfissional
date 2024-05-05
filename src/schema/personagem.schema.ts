import { Schema, model } from "mongoose";
import { IPersonagem } from "../types/personagem";

const personagemSchema = new Schema({

    idPersonagem: { type: Number, required: true },
    nome: { type: String, required: true },
    descricao: { type: String },
    imagem: { type: String, required: true },

})

export default model<IPersonagem>('Personagens', personagemSchema)