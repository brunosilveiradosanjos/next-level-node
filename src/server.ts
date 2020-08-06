import express from 'express';

const app = express();


app.get('/', (req, res) => {
    console.log(req.query)
    const users = [
        { message: 'Hello World' }
    ]
    return res.json(users)
})


app.post('/user', (req, res) => {
    const users = [
        { name: 'Bruno', age: 29 },
        { name: 'Giovana', age: 30 },
        { name: 'Sarah', age: 0 }
    ]
    return res.json(users)
})

//localhost:3333/users

app.listen(3333);


// GET:    Buscar ou listar uma informacao
// POST:   Criar uma nova informacao
// PUT:    Atualizar uma informacao existente
// DELETE: Deletar uma informacao existente

// Corpo (Request Body): Dados para criacao ou atualizacao de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// QUery Params: Paginacao, filtros, ordenacao