const crypto = require('crypto');
const conexao = require('../db/conexao');

module.exports = {

    //listar todos os usuários
    async list(req, res){
        const usuarios = await conexao('users').select('*');
        return res.json(usuarios); //retorno
    },

    //buscar apenas 1 usuário específico
    async show(req, res){
        const {id} = req.params;
        const usuario = await conexao('users').where('id',id).select('*');
        return res.json(usuario); //retorno
    },
    //inserção de usuários    
    async creat(req, res){
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
    },
    //atualizar 1 usuário específico
    async update(req, res){
        const {id} = req.params;
        const {name, email, idade, empresa} = req.body;
        await conexao('users').where('id',id).update({
            id,
            name,
            email,
            idade,
            empresa
        });

        return res.status(204).send(); //se deu certo, retorna status 204
    },

    //deletar usuario
    async delete(req, res){
        const {id} = req.params;
        await conexao('users').where('id',id).delete();
        return res.status(204).send(); //se deu certo, retorna status 204
    }
}