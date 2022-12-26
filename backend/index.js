// basic config
const PORT = 4500;
const HOST = "http://localhost:";
const FRONT = "http://127.0.0.1:5173"
// config dependence
const db = require('./db/conn');
const cors = require('cors');
const express = require('express');
const app = express();
const campRouters = require('./routers/campRouters')
const partRouters = require('./routers/participanteRouters')
const bodyParser = require('body-parser')
// solve cors
app.use(cors({credentials:true, origin:"http://127.0.0.1:5173"}))

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
//app.get("/",(req,res)=>{ 
    //res.send(
        //"<title>API-B.BOY</title><p>Rodando na porta: "+HOST+PORT+"</p>"
    //)});
app.use('/',campRouters)
app.use('/participante',partRouters)

// server start 
app.listen(PORT,()=>{console.log(`Aplicação Rodando na pota: ${HOST+PORT}`)})




