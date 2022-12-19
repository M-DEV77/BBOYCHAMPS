import styled from "styled-components"

const Content = styled.div`
height:85vh;
width: 100vw;
`
export default function Container({children}){
    return(

        <Content>
         {children}
        </Content>
    )
}