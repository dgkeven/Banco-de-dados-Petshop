const Sequelize = require('sequelize');
const database = require('..db/db');
const Gato = database.define('gato', {
    id_gato: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    raca: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dono: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { databasae, modelnome: 'gato', tableName: 'gatos' })
module.exports = Gato;