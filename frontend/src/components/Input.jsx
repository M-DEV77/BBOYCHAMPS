import styled from "styled-components"
const InputContainer = styled.div`
padding: 0.4vw;

`
const InputForm = styled.input`
border: 1px black solid;
`
const Rotulo = styled.label`
margin: 0.2vw;
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
        <Rotulo htmlFor={name}>{text}</Rotulo>
            <InputForm 
            type={type}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
            {...(multiple ? {multiple} : "" )}
            />
     </InputContainer>
    )
}