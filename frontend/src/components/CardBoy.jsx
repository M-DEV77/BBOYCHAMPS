import styled from "styled-components"

const CardBDiv = styled.div`
    background-color: #9c9c9c;
    margin: 0.3vw;
    `
const Bfoto = styled.img`
width: 10vw;
margin: 0.3vw;
`      
export default function CardBoy(props){
    return(<>
    
        <CardBDiv>
            <p>{props.nome}-{props.numero} </p>
            <Bfoto src={props.foto} alt="logo" />
        </CardBDiv>
    
    </>)
}