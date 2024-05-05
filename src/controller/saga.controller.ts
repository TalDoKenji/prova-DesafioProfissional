import sagaService from "../service/saga.service";
import { Request, Response } from "express";

class sagaController {

    async buscaSagaAranhaverso(req: Request, res: Response){
        const aranhaVerso = await sagaService.buscaSagaAranhaverso()
        return res.status(200).json(aranhaVerso)
    }
}

export default new sagaController()