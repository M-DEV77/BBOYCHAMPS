import { useEffect,useState } from "react"
import Api from "../utils/Api"
import CardBboy from "../components/CardBoy"
import styled from "styled-components"

export default function Competidores(){
    const [compt,setCompt] = useState('')
    
    useEffect(()=>{
        Api.get("/participante/pegar",{
        
        })
        .then((response)=>{
          setCompt(response.data.part)
        })
        },[])
    console.log(compt)
    const BboyCont = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    `
    return(<>
        <title>Competidores</title>
        <BboyCont>
         {compt.length > 0 && compt.map((Bboy)=>(
            <CardBboy
            nome={Bboy.nomeBboy}
            numero={Bboy.numero}
            foto={Bboy.foto}
            />
         ))}
         </BboyCont>
        </>)
}