let contenedor = document.querySelector(".contenedor");

let data = [
    {
        id: 1,
        src: "./img/unnamed.png",
        title: "Pulp Fiction (1994)"
    },
    {
        id: 2,
        src: "./img/450_1000.jpg",
        title: "Volver al Futuro (1985)"
    },
    {
        id: 3,
        src: "./img/ac54631a0ae7b7af5c2fe329cd895c09.jpg",
        title: "Star wars: V (1980)"
    },
    {
        id:4 ,
        src: "./img/341344.webp",
        title: "Interstellar (2014)"
    },
    {
        id: 5,
        src: `./img/592219.webp`,
        title: "Harry Potter (2001)"
    },

]
let peli =data.reverse();
peli.map((pelicula)=>{
    contenedor.innerHTML+=`
    <div class="caja2">
        <a href="./detalle.html?id=${pelicula.id}">
            <img src="${pelicula.src}" class="pulp">
            <h3 class="titulopeli">${pelicula.title}</h3>
        </a>
    </div>
    `
})

function checkData() {
    let peliculas = localStorage.getItem("misPeliculas");
    if(peliculas!=null){
        return;
    }else{
        localStorage.setItem("misPeliculas",JSON.stringify(data))
    }
}
checkData()

