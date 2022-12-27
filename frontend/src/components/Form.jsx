import { useState,useEffect } from "react";
import styled from "styled-components";
import BotaoSubmit from "./BotaoSubmit";
import InputNome from "./Input";
import api from "../utils/Api";
import {Link} from "react-router-dom";


const FomContent = styled.form`


`
export default function Form (){
  const [user,setUser] = useState({})
  function handleChange(e){
     setUser({ ...user, [e.target.name]: e.target.value })
  }

  function  handleSubmit(e){
     e.preventDefault()
     
     api.post('/campeonato/criar',user)
     .then(response =>{
      console.log(response.data)
      
     })
     .catch(err=>{
      console.log(err)
     })
     
  }
    return(
        <FomContent onSubmit={handleSubmit}>
          <InputNome 
          type="text"
          text="NOME"
          name="nome"
          placeholder="Digite o nome!"
          handleOnChange={handleChange}
          />
          
          <InputNome
          type="number"
          text="TIPO"
          name="tipo"
          placeholder="Digite a quantidade de dançarinos"
          handleOnChange={handleChange}
          />
          <InputNome
          type="number"
          text="CHAVE"
          name="chave"
          placeholder="Digite a quantidade de chave"
          handleOnChange={handleChange}
          />
          <InputNome
          type="number"
          text="ROUND"
          name="round"
          placeholder="Digite quantas entradas"
          handleOnChange={handleChange}
          />
          <InputNome
          type="number"
          text="TEMPO"
          name="tempo"
          placeholder="Tempo de cada entrada"
          handleOnChange={handleChange}
          />
          <InputNome
          type="number"
          text="INSCRIÇÃO"
          name="inscricao"
          placeholder="Preço de inscrição"
          handleOnChange={handleChange}
          />
          <InputNome
          type="number"
          text="JURADOS"
          name="jurado"
          placeholder="Digite quantos são os jurados"
          handleOnChange={handleChange}
          />
          <InputNome
          type="file"
          text="CAPA "
          name="capa"
          placeholder="Arte do capeonato"
          handleOnChange={handleChange}
          />
          <BotaoSubmit
          value='SALVAR'
          />
        </FomContent>

    )
}