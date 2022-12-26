import { useEffect,useState } from "react"
import styled from "styled-components"


export default function CardCampeonato(props){
    const tip = props.tipo
    return(<>
    
    <p>Nome do campeonato:{props.nome}</p>
    
    <p>Campeonato de:{props.tipo} versos {props.tipo} </p>
    
    
    </>)
}