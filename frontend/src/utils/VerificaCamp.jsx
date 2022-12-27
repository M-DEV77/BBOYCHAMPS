import { useEffect,useState } from "react";
import Api from "./Api";


   export function VerificaCamp(){

    const [camp,setCamp]= useState()
    const [cont,setCont]=useState()
 
  Api.get("/campeonato",{
  
  })
  .then((response)=>{
  setCamp(response.data.camps)
   setCont(camp.length)
  })
  
 
  return cont
}
