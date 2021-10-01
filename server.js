const express = require('express');

const app = express();
app.use(express.json());

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
 * QUERY: parâmetros nomeados enviados na rota
 * ROUTE PARAMS: parâmetros utilizados para identificar um recurso
 * REQUEST BODY: corpo da requisição
 */

app.get('/users',(req,res)=>{
    const params = req.query;
    console.log(params);

    // res.json({
    //     nome: "Jana",
    //     empresa: "UESB"
    // })
    res.json(params);
});

app.post('/users/:id',(req,res)=>{
    const params = req.params;
    console.log(params);
    res.json(params);
});


app.post('/users',(req,res)=>{
    const params = req.body;
    console.log(params);
    res.json(params);
});


app.listen(3001)