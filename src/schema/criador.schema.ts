import { model, Schema, Types } from 'mongoose';
import { ICriador } from '../types/ICriador';

const criadorSchema = new Schema({

    nome: {type: String, requed: true},
    funcao: { type: String, required: true },
    quadrinhos: { type: Array<string>, required: true }

})
export default model<ICriador>('Criadores', criadorSchema)