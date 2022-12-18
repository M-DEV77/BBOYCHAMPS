const Campeonato = require('../models/CampModel');

module.exports = class CampController{
 static async criar(req,res){
  const {nome,tipo,chave,round,tempo,inscricao,jurado}= req.body; 
  const capa = "//teste"
  const total = tipo * chave
  const totalInscricao = inscricao * total
    if(!nome){
      res.status(442).json({message:"O nome do campeonato é obrigatório!"})
    }
    if(!tipo){
      res.status(442).json({message:"Por favor digite o tipo de campeonato!"})
    }
    if(!chave){
      res.status(442).json({message:"Digite a quantidade chave!"})
    }
    if(!round){
      res.status(442).json({message:"Digite a quantidade de entrada!"})
    }
    if(!tempo){
      res.status(442).json({message:"Por favor digite o tempo de cada entrada!"})
    }
    if(!inscricao){
      res.status(442).json({message:"Digite um valor da inscrição!"})
    }
    if(!jurado){
      res.status(442).json({message:"Digite quantidade de jurados!"})
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

 static async all(req,res){

 }


}