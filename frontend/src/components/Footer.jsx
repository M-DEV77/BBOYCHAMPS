import styled from "styled-components"

const FooterContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
a{
 text-decoration: none;
}
`
export default function Footer(){
    return(

        <FooterContainer>
           <a href="">Por Marcelo Olimpio 2022</a>  
        </FooterContainer>
    )
}