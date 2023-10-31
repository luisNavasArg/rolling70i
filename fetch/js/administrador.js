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
