import { ISaga } from "../types/ISaga";
import { Schema, model } from "mongoose";

const sagaSchema = new Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    dataInicio: { type: Date, required: true },
    dataFim: { type: Date, required: true },
    criadores: { type: Array, required: true },
    personagens: { type: Array, required: true },
    quadrinhos: { type: Array, required: true },
    resumoQuadrinhos: { type: Array, required: true },
    series: { type: Array, required: true }
})
export default model<ISaga>('Sagas', sagaSchema)