let contenedor = document.querySelector(".contenedor");
let query = window.location.search;
// console.log(query);
let queryString= new URLSearchParams(query);
let id = queryString.get("id");

let peliculas = JSON.parse(localStorage.getItem("misPeliculas"));
if (peliculas != null) {
    let [peli] = peliculas.filter((pelicula)=>{
        if(pelicula.id==id){
            return pelicula
        }
    });
    contenedor.innerHTML+=`
    <div>
        <a href="./detalle.html?id=${peli.id}">
            <img src="${peli.src}" class="pulp">
            <h3 class="titulopeli">${peli.title}</h3>
        </a>
    </div>
    `
}


// let numeros =[12,25,98,14,45];
// let[a,b,c,...otros]=numeros;
// console.log(a);
// console.log(otros);
// console.log(c);
// let alumnos={nombre:"Julian",edad:24};
// let {nombre} =alumnos;
// console.log(nombre);
    

