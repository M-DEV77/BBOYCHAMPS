import { useEffect,useState } from "react"
import styled from "styled-components"

export default function CardCampeonato(props){
const DivCard = styled.div`
    display: flex;
    flex-direction: column;
   
`
const TitleCard = styled.h1`

`
const DivCont = styled.div`
    display: flex;
    flex-direction: column;
`
const Cont = styled.div`
    display: flex;
    flex-direction: row;
`
const Cont1 = styled.div`
color:  #0026ff;
`
const Cont2 = styled.div`
color: red;
`

   

    return(
    <DivCard>
      <TitleCard>{props.nome}</TitleCard>
        <DivCont>
            <Cont><Cont1>Tipo de campeonato: </Cont1><Cont2>{props.tipo} -VS- {props.tipo}</Cont2></Cont>
            <Cont><Cont1>Quantidade de Chaves: </Cont1><Cont2>{props.chave}</Cont2> </Cont>
            <Cont><Cont1>Quantidade de total de participantes: </Cont1><Cont2>{props.total}</Cont2></Cont>
            <Cont><Cont1>Quantidade de entrada:</Cont1><Cont2>{props.round}</Cont2> </Cont>
            <Cont><Cont1>Tempo estimado de cada entrada:</Cont1><Cont2> {props.tempo}</Cont2></Cont>
            <Cont><Cont1>Valor da inscrição:</Cont1><Cont2> {props.inscricao}</Cont2></Cont>
            <Cont><Cont1>Quantidade de jurados:</Cont1><Cont2>{props.jurado}</Cont2></Cont>
        </DivCont>
        
    </DivCard>
    
   )
}