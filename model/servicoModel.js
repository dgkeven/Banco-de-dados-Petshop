const Sequelize = require('sequelize');
const database = require('../db/db');

const Servico = database.define('servico', {
    id_servico: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    preco: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { database, modelname: 'servico', tableName: 'servicos' })
module.exports = Livro; 