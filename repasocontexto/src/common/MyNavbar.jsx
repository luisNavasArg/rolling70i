import {useContext, useState} from 'react'
import contextApp from '../components/ContextApp'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => {
    const {context,setContext}=useContext(contextApp);
    const [text,setText]=useState("Modo Oscuro");
    const addStorage=(context)=>{
      window.localStorage.setItem("theme",JSON.stringify(context));
    }
    const changeMode=()=>{
        // let body=document.querySelector("body"); No se debe hacer esto
        let myContext=JSON.parse(window.localStorage.getItem("theme")) || context;
        console.log(myContext);
        if (myContext.bg==="light") {
            setContext({
                bg:"dark",
                textColor:"light"
              })
            setText("Modo Claro");
            addStorage({
              bg:"dark",
              textColor:"light"
            });
        }else{
            setContext({
                bg:"light",
                textColor:"dark"
              })
              setText("Modo Oscuro")
              addStorage({
                bg:"light",
                textColor:"dark"
              });
        }
    }
  return (
       <Navbar bg={context.bg} data-bs-theme={context.bg}>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <button  onClick={changeMode}>{text}</button>
          </Nav>

        </Container>
      </Navbar>


  )
}

export default MyNavbar



