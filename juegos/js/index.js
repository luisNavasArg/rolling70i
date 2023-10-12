function load() {
    let elemento = document.querySelector("#root");
    
    for (let index = 0; index < 9; index++) {
        elemento.innerHTML+=`
        <div id=${index} class="cuadro" onclick="turno(${index})"> ...</div>
        ` 
    }
}
load();
let letra = 'X';
function turno(params) {
    if (letra==="X") {
        letra='Y'
    }else{
        letra = 'X'
    }
    document.getElementById(`${params}`).innerHTML=`<span>${letra}</span>`
   
    
}

