import { Document } from "mongoose";

export interface ISaga {
    titulo: string,
    descricao: string,
    dataInicio: Date,
    dataFim: Date,
    criadores: String[],
    personagens: String[],
    quadrinhos: String[],
    resumoQuadrinhos: String[],
    series: String[]

}