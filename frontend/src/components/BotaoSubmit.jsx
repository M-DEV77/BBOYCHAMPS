import styled from "styled-components"
const InputContainer = styled.div`
padding: 0.4vw;


`
const InputForm = styled.input`
border: 1px black solid;
width: 30vw;
height: 2vw;
border-radius: 3px;
cursor: pointer;
`

export default function BotaoSubmit({
    
   
    handleOnChange, 
    value,
    
}){
    return(
     <InputContainer>
        
            <InputForm 
            type='submit'
            onChange={handleOnChange}
            value={value}
            
            />
     </InputContainer>
    )
}