import {Link} from "react-router-dom";
import styled from "styled-components";
import Logo1 from '/public/img/WBSYS.png'
export default function Menu(){
  const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ff3232;
  align-items: center;
  padding: 1vw;
  
  a{
    text-decoration: none;
    color: #333333;
    width: 2vw;
    margin-left: 1vw;
    transition: 1s;
   }
   a:hover{
    text-decoration: none;
    color: #ffffff;
    transition: 0.3s;
   }
   `
   const LinkMenu = styled.div`
   
   `
   const Img = styled.img`
   width: 1.4vw;
   height: auto;
   `
   const Menu1 = styled.div`
   display: none;
   `
   const Menu2 = styled.div`
   display: none;
   `
    return(<>
    <ContainerMenu>
      <Img src={Logo1} alt="LOGO"/>
            <LinkMenu>  
                <Link to="/">HOME</Link>
                
                    <Menu1>
                        <Link to="/campeonatos">CAMPEONATOS</Link>
                        <Link to="/criar/campeonatos">NOVO</Link>
                    </Menu1>
                    <Menu2>
                        <Link to="/competidores">COMPETIDORES</Link> 
                        <Link to="/jurados">JURADOS</Link>
                    </Menu2>
            </LinkMenu> 
        
    </ContainerMenu>
    </>)
}