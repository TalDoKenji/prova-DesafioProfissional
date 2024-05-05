import express from 'express'
import mongoose from 'mongoose'
import { routesQuadrinhos } from './routes/quadrinho.route'
import { routesPersonagem } from './routes/personagem.route'
import { routesCriador } from './routes/criador.routes'
import compression from 'compression'
    
class App {
    express: express.Application

    constructor() {
        this.express = express()
        this.database()
        this.middleware()
    }

    private middleware(): void {
        this.express.use(express.json())
        this.express.use(compression({ threshold: 0 }))
        this.express.use('/api/v1', routesQuadrinhos)
        this.express.use('/api/v1', routesPersonagem)
        this.express.use('/api/v1', routesCriador)
    }

    private async database() {
        try {
            mongoose.set("strictQuery", true)
            await mongoose.connect('mongodb://0.0.0.0:27017/apiMarvel')
            //console.log("connect database success")
        } catch (error) {
            console.error('Cannot connect to database, error:', error)
        }
    }

}

export default new App().express