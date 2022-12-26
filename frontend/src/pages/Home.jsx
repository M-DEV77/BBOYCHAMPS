import Form from "../components/Form"
import { useEffect,useState } from "react"
import api from "../utils/Api"
import CardCampeonato from "../components/CardCampeonato"

export default function Home(){
    const [camp,setCamp]= useState()
    const [cont,setCont]=useState()
useEffect(()=>{
api.get("/",{

})
.then((response)=>{
   setCamp(response.data.camps)
   setCont(camp.length )
  console.log(camp)
  
})

})


    return(<>

        <title>Home</title>
          {cont === 0 && <Form />}
          {cont > 0 &&  camp.map((campeonatos)=>(
            <CardCampeonato 
            nome={campeonatos.nome}
            tipo={campeonatos.tipo}
            />
          ))}
          
        
        </>)
}