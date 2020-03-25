const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
/**
 * Métodos HTTP:
 * 
 * Get: Buscar uma informação do back-end
 * Post: Criar uma informação do back-end
 * Put: Alterar uma informação no back-end
 * Delete: Deletar uma informação no back-end
 */

/**
 * Tipos de parametros: 
 * 
 * Query: Parametros enviados na rota após o '?' (Filtros,Paginação)
 * Route: Parametros utilizados para identificar recursos
 * Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

app.use(routes);

app.listen(3333);