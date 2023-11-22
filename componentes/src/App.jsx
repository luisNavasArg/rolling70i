import { Component } from "react"

class App extends Component{
  constructor(props){
    super(props)
    /**Declarando el state */
    this.state={
      item:"",
      listaTareas:[]
    }
    this.capturarTexto=this.capturarTexto.bind(this);
    this.agregarItem=this.agregarItem.bind(this);
  }

  capturarTexto(e){
    this.setState({item:e.target.value})
  }
  agregarItem(e){
    e.preventDefault();
    let array=this.state.listaTareas;
    array.push(this.state.item);
    this.setState({listaTareas:array})
    this.setState({item:""})
    e.target[0].value=""

  }
  render(){
    
    
    return (
      <>
        
          <h1
          style={{textAlign:"center"}}
          >Componentes de React con estados</h1>
          <form onSubmit={this.agregarItem}>
            <div>
              <label htmlFor="">Producto</label>
              <input type="text" onChange={this.capturarTexto}  />
              <input type="submit" value="Agregar" />
            </div>
          </form>
          <h3>Lista de compras</h3>
          <ul>
            {this.state.listaTareas.map((item)=>{
              return(<li>{item}</li>)
            })}
          </ul>
      </>
    )
  }
  
}

export default App
