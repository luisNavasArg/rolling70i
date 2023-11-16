import React from 'react'

const Item = ({ data}) => {
    

    return (
        <div>
            {data.map((pelicula,i) => {
                return (
                    <li key={`peli${i}`}>
                        <h2
                        style={{backgroundColor:"gray",color:"white",width:"550px"}}
                        >{pelicula.title}</h2>
                        <p
                        style={{width:"550px"}}
                        >Descripción: {pelicula.description}</p>
                        <iframe width="560" height="315"
                            src={pelicula.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                    </li>

                )
            })}


        </div>
    )
}

export default Item