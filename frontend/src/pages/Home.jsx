import Form from "../components/Form"

import CardCampeonato from "../components/CardCampeonato"

export default function Home(props){
    

    return(<>

        <title>Home</title>
          {props.numero === 0 && <Form />}
          {props.numero > 0 &&  props.mapa.map((campeonatos)=>(
            <div>
            <CardCampeonato 
            nome={campeonatos.nome}
            tipo={campeonatos.tipo}
            chave={campeonatos.chave}
            total={campeonatos.total}
            round={campeonatos.round}
            tempo={campeonatos.tempo}
            inscricao={campeonatos.inscricao}
            jurado={campeonatos.jurado}  

            />
           <p>{campeonatos.id}</p>
           </div>
          ))}
         
        </>)
}