const Sequelize = require('sequelize');
const db = require('../db/conn');


const Campeonato = db.define('campeonatos',{
nome:{
    type:  Sequelize.STRING,
},
capa:{
    type:  Sequelize.STRING,
},
tipo:{
    type:  Sequelize.INTEGER,
},
chave:{
    type:  Sequelize.INTEGER,
},
total:{
    type:  Sequelize.INTEGER,
},
round:{
    type: Sequelize.INTEGER,
},
tempo:{
    type: Sequelize.NUMBER,
},
inscricao:{
    type:  Sequelize.NUMBER,
},
totalInscricao:{
    type:  Sequelize.NUMBER,
},
jurado:{
    type:  Sequelize.INTEGER,
}


});

module.exports = Campeonato;