import {
  BrowserRouter, 
  Routes,
  Route,
} from "react-router-dom";
import { useEffect,useState } from "react"
import Api from "./utils/Api"
import styled from "styled-components";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Competidores from "./pages/Competidores";
import Jurados from "./pages/Jurados"
import Home from "./pages/Home";
import Container from "./components/Container";

const Main = styled.div`

`

function App() {
  const [camp,setCamp]= useState(0)
  const [mapa,setMapa]= useState()
 
useEffect(()=>{
Api.get("/campeonato",{

})
.then((response)=>{
  setCamp(response.data.camps.length) 
  setMapa(response.data.camps)
})
},[])
console.log("teste"+camp)

  return (
<Main>
  <BrowserRouter>
    <Menu numero={camp}/>
    <Container>
        <Routes>
          <Route path="/" element={<Home mapa={mapa}  numero={camp} />} />
          <Route path="/competidores" element={<Competidores/>} />
          <Route path="/jurados" element={<Jurados/>} />
        </Routes>
      </Container>
    <Footer/>
  </BrowserRouter>        
</Main>
  )
}

export default App
