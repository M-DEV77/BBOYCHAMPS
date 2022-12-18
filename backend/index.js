// basic config
const PORT = 4500;
const HOST = "http://localhost:";
const FRONT = "http://localhost:3345"
// config dependence
const db = require('./db/conn');
const cors = require('cors');
const express = require('express');
const app = express();
const campRouters = require('./routers/campRouters')
const bodyParser = require('body-parser')
// solve cors
app.use(cors({credentials:true, origin:FRONT}))
//public folder for images
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// connection 
db.authenticate()
.then(()=>{
    console.log("Conectou ao banco de dados!")
})
.catch(err =>{
    console.log("Erro ao conectar ao banco de dados",err)   
})

// routers basic
app.get("/",(req,res)=>{ 
    res.send(
        "<title>API-B.BOY</title><p>Rodando na porta: "+HOST+PORT+"</p>"
    )});
app.use('/campeonato',campRouters)

// server start 
app.listen(PORT,()=>{console.log(`Aplicação Rodando na pota: ${HOST+PORT}`)})




