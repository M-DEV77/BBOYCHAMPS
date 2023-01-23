import styled from "styled-components"
const InputContainer = styled.div`
padding: 0.4vw;


`
const InputForm = styled.input`

border: 1px black inherit;
background-color: #e4e4e4;
padding-left: 0.2vw;
width: 30vw;
height: 2vw;
border-radius: 3px;
`
const Rotulo = styled.div`
margin: 0.2vw;
width: 2vw;
`
export default function Input({
    type, 
    text, 
    name, 
    placeholder,
    handleOnChange, 
    value,
    multiple
}){
    return(
     <InputContainer>
        <Rotulo>{text}</Rotulo>
            <InputForm 
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
            {...(multiple ? {multiple} : '')}
            />
     </InputContainer>
    )
}