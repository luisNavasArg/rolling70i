import React from 'react'

const Listado = ({data}) => {
console.log(data);
  return (
    <ul style={{listStyleType:"none"}}>
        {data.map((pelicula,i) => {
                return (
                    <li key={`peli${i}`}>
                        <h2
                        style={{backgroundColor:"gray",color:"white",width:"650px"}}
                        >{pelicula.title}
                        <button>Ver más</button>
                        </h2>
                    </li>
                )
            })}
    </ul>
  )
}

export default Listado