const express = require('express');
const rotas = express.Router();
const usuariosControler = require('./controle/userControler');

//listar usuários
rotas.get('/users', usuariosControler.list);
//listar 1 usuário
rotas.get('/users/:id', usuariosControler.show);

//inserir usuário
rotas.post('/users', usuariosControler.creat);

//alterar usuário
rotas.put('/users/:id', usuariosControler.update);

//deletar usuário
rotas.delete('/users/:id', usuariosControler.delete);

module.exports = rotas; //exportando as rotas