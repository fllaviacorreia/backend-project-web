const knex = require('knex');
const config = require('../../knexfile');

conexao = knex(config.development);

module.exports = conexao;