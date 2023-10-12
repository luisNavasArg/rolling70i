// // alert()
// //arrays

let alumnos=["Fernando"];

alumnos.push("Santiago")
console.log(alumnos);

alumnos[2]="Alvaro";
console.log(alumnos);
alumnos=["Lisandro",...alumnos];
alumnos.push("Luis")
console.log(alumnos);
// alumnos.pop()
// alumnos.
// let nuevoArray = 
// alumnos.filter((alumno)=>
// {
//     if(alumno !=="Luis"){
//         return(alumno)
//     }
// });
// console.log(nuevoArray);

let pos=alumnos.indexOf("Santiago");
console.log(pos);
console.log(alumnos);
console.log(alumnos.includes("Luis"));
// funciones declaradas
let nuevoArray=[];
function eliminarRegistro(nombre,array) {
     nuevoArray = array.filter(element=>{
        if(nombre !== element){
            return element;
        }
    })
    return nuevoArray;
}
//invocamos a la función
console.log(nuevoArray);

alumnos=eliminarRegistro("Luis",alumnos)
//funciones expresadas
let = numeros=[3,6,456,90];
const mostrarAlumnos= function (array) {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}
mostrarAlumnos(alumnos);
mostrarAlumnos(numeros);
console.log(eliminarRegistro(6,numeros));

let elemento = document.getElementById("root");
elemento.style.backgroundColor="blue";
elemento.innerHTML=`
<p>
    Hola a todos y todas
</p>
`;
function imprimirArray(array) {
    array.forEach((element)=>{
        return(elemento.innerHTML+=`<h3>${element}</h3>`)
    })
}
imprimirArray(alumnos);
imprimirArray(numeros);

//objeto
// palabra reservada nombre ={ propiedad:valor, propiedad2:valor}
const raton={
    color:"blanco",
    botones:2,
    rueda:true,
    cursor:true,
    mover:()=>{return "estás moviendo el ratón"},
    click:(e)=>{return `estás pulsando ${e} del ratón`}
}
raton.baterias=true;

document.getElementById("root").innerHTML=`<p>Color: 
${raton.color}</p>
<p>Cantidad de botones ${raton.botones}</p>
<p>${raton.mover()}</p>
<p>${raton.click("botón derecho ")}</p>
</p>`

const estudiantes={
    dni:10325985,
    email:"pedroperez@gmail.com",
    nombre:"Pedro",
    apellido:"Perez",
    edad:35,
    curso:"Backend"
}

estudiantes.nombre="Juan";

const productos=[
    {
        nombre:"Bicicleta ring 29",
        precio:250000,
        color:"Negro y Rojo",
        velocidades:6,
        url:"https://actitudsports.com.ar/wp-content/uploads/2022/01/shift2.jpg"
},{
    nombre:"Bicicleta Roller Lady",
        precio:280000,
        color:"Rosa",
        velocidades:2,
    url:"https://canaglia.com/wp-content/uploads/2021/02/Bicicleta-Roller-Lady-Beach-TurquesaGris-600x600.jpg"
},
{
    nombre:"Bicicleta ring 29",
    precio:250000,
    color:"Negro y Rojo",
    velocidades:6,
    url:"https://actitudsports.com.ar/wp-content/uploads/2022/01/shift2.jpg"
},{
nombre:"Bicicleta Roller Lady",
    precio:280000,
    color:"Rosa",
    velocidades:2,
url:"https://canaglia.com/wp-content/uploads/2021/02/Bicicleta-Roller-Lady-Beach-TurquesaGris-600x600.jpg"
},
{
    nombre:"Bicicleta ring 29",
    precio:250000,
    color:"Negro y Rojo",
    velocidades:6,
    url:"https://actitudsports.com.ar/wp-content/uploads/2022/01/shift2.jpg"
},{
nombre:"Bicicleta Roller Lady",
    precio:280000,
    color:"Rosa",
    velocidades:2,
url:"https://canaglia.com/wp-content/uploads/2021/02/Bicicleta-Roller-Lady-Beach-TurquesaGris-600x600.jpg"
}
];

function imprimirProducto(array) {
    let elemnt = document.getElementById("root");
    elemnt.innerHTML=""
    array.map((producto,index)=>{
       
        elemnt.innerHTML+=`
        <div class="card" style="width: 18rem;">
  <div class="img"><img src="${producto.url}" class="card-img-top" alt="..."></div>
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <input class="input" type="number" id="cantidad${index}" placeholder="Agrega la cantidad">
    <a href="#" class="btn btn-primary" onclick="addProduct('${index}','cantidad${index}')">Agregar al carrito</a>
  </div>
</div>
    `
    })
}
imprimirProducto(productos);
/*Create, Read, Update y Delete */
function addProduct(i,id) {

    let producto= {
        id:i,
        cantidad:Number(document.getElementById(id).value),
        precio:productos[i].precio,
        nombre:productos[i].nombre
    }
    carrito.push(producto);
    
}
let carrito=[
];

function mostrarCompra(){
    let elementos = ``;
    const lista=carrito.map((item)=>{
        elementos+=`<li class="list-group-item">
        <span> ${item.nombre}</span> <span> ${item.cantidad}</span><span> ${item.precio}</span><span onclick="deleteItem(${item.id})" class="eliminar">X</span>
        </li>`
    })
    console.log(elementos);
    elemento.innerHTML=`
    <ul class="list-group list-group-flush">
    <li class="list-group-item"> <span>Nombre: </span> <span>cantidad: </span><span> precio:</span><span >Eliminar</span></li>
${elementos}
</ul>
    `
}

function deleteItem(pos) {
    let nuevoArray = carrito.filter((p)=>{
        
        if (carrito[pos].id !== p.id) {
          return(p)  
        }
    })
    carrito=nuevoArray;
    mostrarCompra();
}




