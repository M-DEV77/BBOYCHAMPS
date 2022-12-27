
import {Link} from "react-router-dom";
import styled from "styled-components";
import Logo1 from '/img/WBSYS.png';

export default function Menu(props){
 
  const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ff3232;
  align-items: center;
  padding: 1vw;
 
   `
   const LinkMenu = styled.div`
      a{
        color:white;
        padding-left: 1vw;
        text-decoration: none;
        font-size:1.2vw;
      }

   `
   
   const Img = styled.img`
   width: 1.4vw;
   height: auto;
   `
  
    return(<>
    <ContainerMenu>
      <Img src={Logo1} alt="LOGO"/>
            <LinkMenu>  
                   
                        <Link to="/">HOME</Link>
                   
                   {props.numero > 0 && 
                    <>
                        <Link to="/competidores">COMPETIDORES</Link> 
                        <Link to="/jurados">JURADOS</Link>
                    </>
                   }

                
                    
            </LinkMenu> 
        
    </ContainerMenu>
    </>)
}