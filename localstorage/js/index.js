document.querySelector("#root").innerHTML=`
<form action="./home.html" >
    <h3>Login</h3>
    <div class="input">
        <input type="text" name="usuario" id="usuario" placeholder="Email">
    </div>
    <div class="input">
        <input type="password" name="password" id="password" placeholder="Password">
    </div>
    <div class="input">
        <input id="btn" type="submit" value="Ingresar"  >
    </div>
    <div class="input">
        <span></span>
    </div>
</form>
`
// let usuarios =`[
//     {"email":"lpipnavas@gmail.com","password":"Luisnavas1"}
// ]`;
// console.log(usuarios);
// console.log(JSON.parse(usuarios));
// let alumnos=[
//     {nombre:"John Paul"},
//     {nombre:"Nahuel Gallardo"},
//     {nombre:"Santiago Argañaraz"}
// ]
// console.log(alumnos);
// console.log(JSON.stringify(alumnos));
// localStorage.setItem("alumnos",JSON.stringify(alumnos));
// setTimeout(()=>{
//    // localStorage.clear();//Elimina todos los datos del localstorage
//     let dataJson = localStorage.getItem("alumnos");
//     console.log("data json");
//     console.log(dataJson);
//     let arrayObjetos =JSON.parse(dataJson) 
//     arrayObjetos.map((obj)=>console.log(obj))
// },2000)
// setTimeout(()=>{
//     localStorage.removeItem("alumnos");
// },3000)

// sessionStorage.setItem("usuario",`{name:"Luis",password:"123456"}`);

//agregamos el array de usuarios
// sessionStorage.setItem("usuarios",`[{"email":"pepe@gmail.com","password":"pepe"},{"email":"lpipnavas@gmail.com","password":"123456"}]`)

let formulario = document.querySelector("form");
let mensaje = document.querySelector("span");
mensaje.style.display="none";
mensaje.style.color="red";
mensaje.style.backgroundColor="black";
mensaje.style.padding="10px";

formulario.addEventListener("submit",function(event){
    event.preventDefault();//evitar el comportamiento por defecto
    let email =event.target[0].value;
    let password=event.target[1].value;
    if (email=="" || password=="") {
        mensaje.innerText="Algunos de los campos está vacío";
        mensaje.style.display="block";
        setTimeout(()=>{
            mensaje.style.display="none";
        },3000)

    }else{
        this.submit();
    }
  

})
// console.log(formulario);