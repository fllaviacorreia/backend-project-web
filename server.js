const express = require('express');

const app = express();

/**
 * 
 * iniciando node.js
 * 
 */

// app.get('/',(req,res)=>{
//     res.send("Hello World!");
// });

/**
 * 
 * Rotas e parâmetros
 * 
 */

/**
 * Métodos:
 * GET: buscar/listar informações no backend
 * POST: criar informação no backend
 * PUT: alterar informação no backend
 * DELETE: apagar uma informação no backend
 */

/**
 * Parâmetros:
 * QUERY:parâmetros nomeados enviados na rota
 * 
 */

app.get('/users',(req,res)=>{
    const params = req.query;
    console.log(params);
    
    res.json({
        nome: "Jana",
        empresa: "UESB"
    })
});

app.listen(3001)