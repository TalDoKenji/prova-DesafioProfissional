import supertest from 'supertest';
import app from '../src/app';
import mongoose from 'mongoose';

describe('teste de integração da API', () => {

    afterAll(async () => {
        await mongoose.connection.close()
    })


    it('deve retornar todos os quadrinhos', async () => {
        const response = await supertest(app).get('/api/v1/todasComics');
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
    })

    it('deve retornar apenas um quadrinho', async () => {
        const response = await supertest(app).get('/api/v1/comics/6636839bb91b80fe0336ddee')
        expect(response.status).toBe(200)
        expect(response.body.titulo).toBe('Spider-Verse (2014) #1')
    })

    it('cria novo quadrinho', async () => {
        const newQuadrinho = {
            idComic: 456, titulo: 'Cassia se tornou uma mulher-aranha', qtdePaginas: 43, descricao: 'pipipopo',
            dataPublicacao: [{ onsaledateDate: '2004-04-23' }], capa: 'fotinha da fumy'
        }
        const response = await supertest(app).post('/api/v1/comics').send(newQuadrinho)
        expect(response.status).toBe(201)
        expect(response.body.titulo).toBe('Cassia se tornou uma mulher-aranha')
    })

    it('atualiza quadrinho', async () => {
        const quadrinhoAtualizado = {
            idComic: 456, titulo: 'Cassia se tornou uma mulher-aranha', qtdePaginas: 45, descricao: 'pipipopo',
            dataPublicacao: [{ onsaledateDate: '2004-04-23' }], capa: 'fotinha da cassia'
        }
        const response = await supertest(app).put('/api/v1/atualizaComic/663694a7818782f5e45b7772').send(quadrinhoAtualizado)
        expect(response.status).toBe(200)
        expect(response.body.idComic).toBe(456)
    })

    it('deleta quadrinho', async () => {
        const response = await supertest(app).delete('/api/v1/deletaComic/663683c4ef86971fbd456475')
        expect(response.status).toBe(204)
    })

    it('busca quadrinho com menos paginas', async () => {
        const response = await supertest(app).get('/api/v1/buscaMenorQuadrinho')
        expect(response.status).toBe(200)
        expect(response.body.idComic).toBe(53336)
    })

    it('busca quadrinho com mais paginas', async () => {
        const response = await supertest(app).get('/api/v1/buscaMaiorQuadrinho')
        expect(response.status).toBe(200)
        expect(response.body.idComic).toBe(50554)
    })



})
