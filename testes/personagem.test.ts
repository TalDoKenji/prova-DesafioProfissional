import { response } from 'express';

import supertest from 'supertest';
import app from '../src/app';
import mongoose from 'mongoose';

describe('teste de integração da API', () => {

    afterAll(async () => {
        await mongoose.connection.close()
    })

    afterEach(async () => {
        
    })

    it('busca todos os personagem', async () => {
        
        const response = await supertest(app).get('/api/v1/buscaTodosPersonagens')
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
    })

    it('busca apenas um personagem', async () => {
        const response = await supertest(app).get('/api/v1/buscaPersonagem/662ea93739d1f2f7ce3688f2')
        expect(response.status).toBe(200)
        expect(response.body.nome).toBe('Spider-Gwen (Gwen Stacy)')
    })

    it('cria novo personagem', async () => {
        const novoPersonagem = { idPersonagem: 90, nome: 'Kenji-Aranha', descricao: 'kenji com uniforme do homem-aranha', imagem: 'imagemKenji' }
        const response = await supertest(app).post('/api/v1/personagem').send(novoPersonagem)
        expect(response.status).toBe(201)
        expect(response.body.nome).toBe('Kenji-Aranha')
    })

    it('atualiza um personagem', async() => {
        const novoPersonagem = { idPersonagem: 99, nome: 'Kenji-Aranha', descricao: 'kenji com uniforme do miles', imagem: 'imagemKenji' }
        const response = await supertest(app).post('/api/v1/personagem').send(novoPersonagem)
        expect(response.status).toBe(201)
        expect(response.body.idPersonagem).toBe(99)
    })

    it('deleta um personagem', async()=>{
        const response = await supertest(app).delete('/api/v1/deletaPersonagem/6635e0067b98be6e503696e2')
        expect(response.status).toBe(204)
    })
})
