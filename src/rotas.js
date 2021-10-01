const express = require('express');
const crypto = require('crypto');
const conexao = require('./db/conexao');
const rotas = express.Router();

//listar usuários
rotas.get('/users', async(req,res)=>{
    const usuarios = await conexao('users').select('*');
    res.json(usuarios); //retorno
});


//inserção de usuários
// async await => usado para que não haja problemas de tempo de resposta do bd
rotas.post('/users', async(req,res)=>{
    const {name, email, idade, empresa} = req.body;
    const id = crypto.randomBytes(4).toString('hex');
    await conexao('users').insert({
        id,
        name,
        email,
        idade,
        empresa
    })
    res.json({id}); //retorno
});

module.exports = rotas; //exportando as rotas