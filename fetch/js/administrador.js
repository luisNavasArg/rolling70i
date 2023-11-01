let principal=document.querySelector("#principal");

principal.innerHTML=`
<form id="agregar">
    <h3>Agregar Peli</h3>
    <div class="input">
        <input type="text" name="title" id="title" placeholder="Título">
    </div>
    <div class="input">
        <input type="text" name="src" id="src" placeholder="src">
    </div>
    <div class="input">
        <input id="btn" type="button" value="Agregar"  >
    </div>
    <div class="input">
        <span></span>
    </div>
</form>
`;

document.querySelector("#btn").addEventListener('click',function () {
    let form = document.querySelector("#agregar");
    misPeliculas.create({title:form[0].value,src:form[1].value})
    console.log(misPeliculas.get());
    localStorage.setItem("misPeliculas",JSON.stringify(misPeliculas.get()))
})
const modificarPeli=(id,obj)=>{
    
    return `<form id="editar">
    <h3>Modificar Peli</h3>
    <div class="input">
        <input type="text" name="title" id="title" value="${obj.title}">
    </div>
    <div class="input">
        <input type="text" name="src" id="src" value="${obj.src}">
    </div>
    <div class="input">
        <input id="btn" type="button" value="Modificar">
    </div>
    <div class="input">
        <span></span>
    </div>
</form>`
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
        <input id="btnModificarUsuario" type="button" value="Registrarme">
    </div>
    <div class="input">
        <span></span>
    </div>
</form>
`
}

document.querySelector("#btn").addEventListener('click',function () {

})

function mostrarPelis() {
    return `<table>
    <thead>
        <tr>
            <th>Título</th>
            <th>Imagen</th>
            <th>Editar</th>
            <th>Borrar</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Título</td>
            <td>Imagen</td>
            <td>Editar</td>
            <td>Borrar</td>
        </tr>
    </tbody>
   </table>
    `
}
