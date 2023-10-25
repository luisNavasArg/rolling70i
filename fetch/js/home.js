let query = location.search;
// console.log(query);
let queryString = new URLSearchParams(query);
let usuario =queryString.get("usuario");
let password = queryString.get("password");

//recuperamos los datos del sessionstorage
let usuarios = sessionStorage.getItem("usuarios");

//Convertimos los datos a un tipo de dato manejable por javascript
let data = JSON.parse(usuarios)
if(data !== null){

    let elemento = document.querySelector("#root");
    let ingresar=false;
    let mensajeIngresa =`
    <h3 class="titulo">Bienvenido/a ${usuario}</h3>
    `
    let mensajeNoIngresa=`
    <h3 class="titulo">Usuario o password incorrecto</h3>
    `;
    for (let index = 0; index < data.length; index++) {
        if(usuario===data[index].email && password===data[index].password){
            ingresar = true;
        }
    }
    if(ingresar){
        elemento.innerHTML=mensajeIngresa;
    }else{
        elemento.innerHTML=mensajeNoIngresa;
        setTimeout(()=>{
            location.replace("index.html");
        },3000)
    }
}else{
    location.replace("index.html");
}
