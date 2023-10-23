let query = location.search;
let queryString = new URLSearchParams(query);
console.log(query);
let usuario =queryString.get("usuario");
let password=queryString.get("password");
console.log(usuario,password);
let data ={
    usuario:"lpipnavas@gmail.com",
    password:"LuisNavas1"
}
let bienvenida=`
<h3 class="titulo">Bienvenido/a ${data.usuario}</h3>
`
if (data.usuario==usuario && data.password==password) {
    document.querySelector("#root").innerHTML=bienvenida
}else{
    document.querySelector("#root").innerHTML=`Usuario o password es incorrecto`;
    setTimeout(()=>{location.replace("index.html")},5000)
}

let dataJson =  JSON.parse(`{"usuarios":[{"usuario":"lpipnavas@gmail.com","password":"LuisNavas1"}]}`);
console.log(dataJson);