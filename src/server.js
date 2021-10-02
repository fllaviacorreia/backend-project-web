const express = require('express');
const cors = require('cors');
const rotas = require('./rotas');

const app = express();
app.use(cors()); //aberto p qualquer dominio
app.use(express.json());
app.use(rotas);

app.listen(3001)