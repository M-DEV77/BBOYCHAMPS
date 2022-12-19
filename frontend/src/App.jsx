import {
  BrowserRouter, 
  Routes,
  Route,
  Link,
} from "react-router-dom";
import styled from "styled-components"
import Container from "./components/Container";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Campeonatos from "./pages/Campeonatos";
import Home from "./pages/Home";
const Main = styled.div`

`

function App() {
  return (
<Main>
  <BrowserRouter>
    <Menu/>
    <Container>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campeonatos" element={<Campeonatos/>} />
        </Routes>
    </Container> 
    <Footer/>
  </BrowserRouter>        
</Main>
  )
}

export default App
