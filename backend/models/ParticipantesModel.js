const Sequelize = require('sequelize');
const db = require('../db/conn');


const Participante = db.define('participantes',{
    numero:{
        type:  Sequelize.INTEGER,
    },
    nomeBboy:{
        type:  Sequelize.STRING,
    },
    foto:{
        type:  Sequelize.STRING,
    },
    grupo:{
        type:  Sequelize.STRING,
    },
    detalhes:{
        type:  Sequelize.STRING,
    },
    position:{
        type:  Sequelize.INTEGER,
    },
    ponto:{
        type:  Sequelize.INTEGER,
    },
    status:{
        type: Sequelize.INTEGER,
    },
});

module.exports = Participante;