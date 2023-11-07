let us = JSON.parse(sessionStorage.getItem("user"));
if (us.admin) {
    
let principal=document.querySelector("#principal");
principal.innerHTML=mostrarPelis(misPeliculas.get());

function update(id) {
    let pelis = misPeliculas.get();
    let [obj] = pelis.filter(p=>{
        if (p.id==id) {
            return p;
        }
    });
    // principal.innerHTML=modificarPeli(obj)
    modificarPeli(obj)
}


function agregarPeli() {
    return`
    <form id="agregar">
        <h3 class="text-white bg-primary text-center my-3">Agregar Peli</h3>
        <div class="form-group">
            <input type="text" name="title" id="title" placeholder="Título">
        </div>
        <div class="form-group">
            <input type="text" name="src" id="src" placeholder="src">
        </div>
        <div class="form-group">
            <input id="btn" class="btn btn-primary" type="button" value="Agregar" onclick="add()">
        </div>
        <div class="form-group">
            <span></span>
        </div>
    </form>
    `;
}
function add() {
    let form = document.querySelector("#agregar");
    let [title,src]=form;
   
    misPeliculas.create({title:title.value,src:src.value})
}
// document.querySelector("#btn").addEventListener('click',function () {
//     let form = document.querySelector("#agregar");
//     misPeliculas.create({title:form[0].value,src:form[1].value})
//     console.log(misPeliculas.get());
//     localStorage.setItem("misPeliculas",JSON.stringify(misPeliculas.get()))
// })
const modificarPeli=(obj)=>{
    //
    principal.innerHTML= `<form id="editar">
    <h3>Modificar Peli</h3>
    <div class="input">
        <input type="text" name="title" id="title" value="${obj.title}">
    </div>
    <div class="input">
        <input type="text" name="src" id="src" value="${obj.src}">
    </div>
    <div class="input">
        <input id="btn" type="button" value="Modificar" onclik="procesarFormUpdate()">
    </div>
    <div class="input">
        <span></span>
    </div>
</form>`;
document.querySelector("#editar").addEventListener('click',()=>{
    let title=document.querySelector("#title").value;
    let src = document.querySelector("#src").value;
    console.log(title,src);
    console.log(obj.id);
    misPeliculas.update(obj.id,{id:obj.id,title,src});
})

}
function modificarUsuario(id,obj) {
   return `
<form>
    <h3>Modificar Usuario</h3>
    <div class="input">
        <input type="text" name="usuario" id="usuario" value="${obj.usuario}">
    </div>
    <div class="input">
        <input type="password" name="password" id="password" value="">
    </div>
    <div class="input">
        <input id="btnModificarUsuario" type="button" value="Modificar">
    </div>
    <div class="input">
        <span></span>
    </div>
</form>
`
}

// document.querySelector("#btn").addEventListener('click',function () {

// })

function mostrarPelis(obj) {
    let peliculas = ``;
    obj.map((peli)=>{
        peliculas+= `<tr >
        <td><img class="imgPeli" src="${peli.src}"></td>
        <td><h3 class="text-white mx-3">${peli.title}</h3></td>
        <td><button class="btn btn-primary"><a class="text-white"  href="./detalle.html?id=${peli.id}">Ver más</a></button></td>
        <td><button class="btn btn-success" onclick="update(${peli.id})">Editar</button></td>
        <td><button class="btn btn-danger" onclick="deletePeli(${peli.id})">Borrar</button></td>
    </tr> `;
 
    

    })
    return `
    <section>
    <button id="add" class="btn btn-success m-4">Agregar</button>
    <table class="m-4">
    <thead>
        <!--<tr>
            <th>Título</th>
            <th>Imagen</th>
            <th>Editar</th>
            <th>Borrar</th>
        </tr>-->
    </thead>
    <tbody>
        ${peliculas}
    </tbody>
   </table>
   </section>
    `
}




function deletePeli(id) {
    misPeliculas.delete(id)
}
document.querySelector("#add").addEventListener('click',function () {
    principal.innerHTML=agregarPeli()
})
}else{
    alert("Disculpa pero no tienes permisos de administrador");
    location.replace("./index.html");
}

// function sumar(a,b) {
//     return a+b;
// }
// function restar(a,b) {
//     return a-b;
// }
// setTimeout(()=>{
//     console.log(sumar(4,7));
// },2000)
// console.log(restar(12,5));



