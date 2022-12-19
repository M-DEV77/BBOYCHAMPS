import styled from "styled-components";
import InputNome from "./Input";
const FomContent = styled.form`

`
export default function Form (){
    return(
        <FomContent>
          <InputNome 
          type="text"
          text="NOME"
          name="nome"
          placeholder="Digite o nome!"
          />
        </FomContent>

    )
}