const Sequelize = require('sequelize');
const db = require('../db/conn');


const Jurado = db.define('jurados',{
    numeroJurado:{
        type:  Sequelize.INTEGER,
    },
    nomeJurado:{
        type:  Sequelize.STRING,
    },
    fotoJurado:{
        type:  Sequelize.STRING,
    },
    grupoJurado:{
        type:  Sequelize.STRING,
    },
    detalhesJUrado:{
        type:  Sequelize.STRING,
    },
    
});

module.exports = Jurado;