const Formulario = ({lista,setLista}) => {
   
    const agregarItem=(e)=>{
        e.preventDefault();
        console.log(e.target);
        let obj ={
            nombre:e.target[0].value,
            descripcion:e.target[1].value,
            precio:Number(e.target[2].value)
        }
   
        let array = lista;
        array.push(obj)
        setLista(array);
    }
  return (
    <div>
        <form onSubmit={agregarItem}>
            <div>
              <label htmlFor="">Nombre</label>
              <input type="text" />
              </div>
              <div>
              <label htmlFor="">Descripción</label>
              <input type="text" />
              </div>
              <div>
              <label htmlFor="">Precio</label>
              <input type="text" />
              </div>
              <div>
              <input type="submit" value="Agregar" />
            </div>
          </form>
       
    </div>
  )
}

export default Formulario