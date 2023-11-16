import { Component } from "react"
import Lista from "./components/Lista";
import Listado from "./components/Listado";
import data from "./data/movies.json";
class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    
    let pelis = data.filter((obj,index)=>{
      if (index > 4 && index <10) {
          return obj
      }
  })
    return (
      <>
        
          <h1
          style={{textAlign:"center"}}
          >Componentes de React</h1>
          <Lista titulo={"Mis peliculas"}></Lista>
          {/* <Listado data={pelis}/> */}
        
      </>
    )
  }
  
}

export default App
