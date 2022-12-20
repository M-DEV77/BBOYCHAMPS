import api from '../utils/api'
import { useState,useEffect } from "react";
import { useHref } from 'react-router-dom';

export default function criarCamp(){
    async function criarCampeonato(user){
       try {
        const data = await api.post('/campeonato/criar',user).then((response)=>{
         return response.data
        })
        console.log(data)
       } catch (error) {
        console.log(error)
       } 
    }

    return { criarCampeonato }
} 