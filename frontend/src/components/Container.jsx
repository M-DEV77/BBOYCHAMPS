import styled from "styled-components"

const Content = styled.div`
height:85vh;
width: 100vw;
display: flex;
flex-direction: row;
justify-content: center;

`
export default function Container({children}){
    return(

        <Content>
         {children}
        </Content>
    )
}