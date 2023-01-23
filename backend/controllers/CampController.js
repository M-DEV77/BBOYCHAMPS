const Campeonato = require('../models/CampModel');
const Participantes = require('../models/ParticipantesModel');
const Jurado = require('../models/JuradosModel');

module.exports = class CampController{
 static async criar(req,res){
  const {nome,tipo,chave,round,tempo,inscricao,jurado}= req.body; 
  const capa = "//teste"
  const total = tipo * chave
  const totalInscricao = inscricao * total
    if(!nome){
      res.status(442).json({message:"O nome do campeonato é obrigatório!"})
      return
    }
    if(!tipo){
      res.status(442).json({message:"Por favor digite o tipo de campeonato!"})
      return
    }
    if(!chave){
      res.status(442).json({message:"Digite a quantidade chave!"})
      return
    }
    if(!round){
      res.status(442).json({message:"Digite a quantidade de entrada!"})
      return
    }
    if(!tempo){
      res.status(442).json({message:"Por favor digite o tempo de cada entrada!"})
      return
    }
    if(!inscricao){
      res.status(442).json({message:"Digite um valor da inscrição!"})
      return
    }
    if(!jurado){
      res.status(442).json({message:"Digite quantidade de jurados!"})
      return
    }

    var totalCount1 = total+1
    while (totalCount1>1){
     totalCount1=totalCount1-1
     
     await Participantes.create({
      numero:totalCount1,
      nomeBboy:"Participante",
      foto:"./img/avatar1.png"
   })
   
   .then(()=>{
    console.log(`participante de numero[${totalCount1}] criado`) 
   })
   .catch(err=>{
    console.log('participante não criado',err)
   })
    }

// criar jurado----------------------
 var totalCount2 = jurado+1
 while (totalCount2>1){
     totalCount2=totalCount2-1
     
     await Jurado.create({
      numeroJurado:totalCount2,
      nomeJurado:"Jurado",
      fotoJurado:"./img/avatar2.png"
   })
   
   .then(()=>{
    console.log(`Jurado de numero[${totalCount2}] criado`) 
   })
   .catch(err=>{
    console.log('Jurado não criado',err)
   })
  }     
    
   await Campeonato.create({
      
       nome, 
       capa,
       tipo,
       chave,
       total,
       round,
       tempo,
       inscricao,
       totalInscricao,
       jurado
    })
    
    .then(()=>{
      
      res.status(201).json({message:`Campeonato ${nome} criado com sucesso!`})
      return
      
    })
    .catch(err=>{
      res.status(500).json({message:`Campeonato ${nome} não criado!`,err})
    })
   
       
 }
 
 static async campeonato(req,res){
    Campeonato.findAll({order:[
      ['createdAt','DESC']
    ]})
    .then(camps =>{
      res.status(201).json({message:'Campeonatos encontrado com sucesso!',camps})
       
    })
    .catch(err=>{
      res.status(500).json({message:`Nenhum campeonato encontrado!`,err})
    })
 }

 


 static async participantes(req,res){
 Participantes.findAll({order:[
    ['createdAt','DESC']
  ]})
  .then(part =>{
    res.status(201).json({message:'Participantes encontrado com sucesso!',part}) 
  })
  .catch(err=>{
    res.status(500).json({message:`Todos Participantes encontrado!`,err})
  })
 }

 static async getJurados(req,res){

 }
//deletar campeonato e participantes e jurados
 static async deletar(req,res){
   await Campeonato.destroy();
     res.status(201).json({message:"Campeonato deletado!"})
   return
 }


}