import Item from "./Item"
import data from "../data/movies.json";

const Lista = (props) => {
    let pelis = data.filter((obj,index)=>{
        if (index > 4 && index <10) {
            return obj
        }
    })

  return (
    <div
    style={{display:"flex",justifyContent:"center"}}
    >
    <section>    <h2 style={{
            backgroundColor:"black",
            color:"white",
            width:"250px"}}>{props.titulo}</h2>
    <ul>

        <Item data={pelis} />
   
    </ul></section>
    </div>
  )
}

export default Lista
