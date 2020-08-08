import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// GET:    Buscar ou listar uma informacao
// POST:   Criar uma nova informacao
// PUT:    Atualizar uma informacao existente
// DELETE: Deletar uma informacao existente

// Corpo (Request Body): Dados para criacao ou atualizacao de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// QUery Params: Paginacao, filtros, ordenacao