import { useState } from 'react';
import './App.css'
import Formulario from "./components/Formulario";
import Lista from './components/Lista';

function App() {
  /**hook */
  /*variable estado, método para mutar el estado   valor inicial*/
  // const [count,      setCountador]              = useState(0)
  const [lista,setLista]=useState([]);

  return (
    <>
      <h1>Lista de productos</h1>
      <Formulario lista={lista} setLista={setLista}/>
      <Lista lista={lista} />

    </>
  )
}

export default App
