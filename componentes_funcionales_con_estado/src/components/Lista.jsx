import React from 'react'

const Lista = ({lista}) => {
  return (
    <ol>
        {lista.map((producto,index)=>{
            return <li key={index+"pro"}>{producto.nombre} {producto.descripcion} {producto.precio}</li>
        })}
    </ol>
  )
}

export default Lista