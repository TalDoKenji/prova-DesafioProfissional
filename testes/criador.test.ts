import supertest from 'supertest';
import app from '../src/app';
import mongoose from 'mongoose';


describe('teste de integração da API', () => {

    afterAll(async () => {
        await mongoose.connection.close()
    })

    it('busca todos os criadores', async () => {

        const response = await supertest(app).get('/api/v1/todosCriadores')
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
    })

    it('busca apenas um criador', async () => {
        const response = await supertest(app).get('/api/v1/criador/663253cf5211519d1cef1b24')
        expect(response.status).toBe(200)
        expect(response.body.nome).toBe('Skottie Young')
    })

    it('cria um novo criador', async () => {
        const novoCriador = { nome: "Kenji", funcao: "writer", quadrinhos: ["miranha 1", "miranha 2", "miranha 5"] }
        const response = await supertest(app).post('/api/v1/criador').send(novoCriador)
        expect(response.status).toBe(201)
        expect(response.body).toBeInstanceOf(Object)
    })

    it('atualiza um criador', async () => {
        const criadorAtualizado = { nome: "Kenji atualizado", funcao: "writer", quadrinhos: ["miranha 1", "miranha 2", "miranha 3"] }
        const response = await supertest(app).put('/api/v1/atualizaCriador/663695e19ed480e5919ac7c7').send(criadorAtualizado)
        expect(response.status).toBe(200)
        expect(response.body.nome).toBe('Kenji atualizado')
    })

    it('deleta um criador', async () => {
        const response = await supertest(app).delete('/api/v1/deletaCriador/6635da54deb9df06b7908e99')
        expect(response.status).toBe(204)
    })

    it('busca criador com menos quadrinhos', async () => {
        const response = await supertest(app).get('/api/v1/criadorComMenosQuadrinho')
        expect(response.status).toBe(200)
        expect(response.body.nome).toBe('Enrique Puig')
    })

    it('busca criador com mais quadrinhos', async()=>{
        const response = await supertest(app).get('/api/v1/criadorComMaisQuadrinho')
        expect(response.status).toBe(200)
        expect(response.body.nome).toBe('Humberto Ramos')
    })

})