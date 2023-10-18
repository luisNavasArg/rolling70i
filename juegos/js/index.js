function load() {
    let elemento = document.querySelector("#root");//id
    /*
    let elemento = document.querySelector(".tablero");//class
    let elemento = document.querySelector("div");//elemento*/
    // let cuadros = document.querySelectorAll("div");
    
    for (let index = 0; index < 9; index++) {
        elemento.innerHTML+=`
        <div id=${index} class="cuadro" onclick="turno(${index})"></div>
        ` 
    }
}
load();
let letra = 'X';
let jugador;
let cuadros = Array(9).fill(null);

function turno(params) {
    let cuadro = document.getElementById(`${params}`);
    if (cuadro.innerText==="") {
        if (letra==="X") {
            letra='Y'
            cuadros[params]=letra;
        }else{
            letra = 'X'
            cuadros[params]=letra;
        }
        cuadro.innerHTML=`<span>${letra}</span>`;   
    } 
    const gana = ganar(cuadros);
    console.log(gana);
    if(gana){
        jugador = `El ganador es : ${gana}`;
        mostrarGanador(jugador)
    }else{
        console.log('Siguiente jugador es '+letra);
    }

}
function ganar(lista) {
    const lineas = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    for (let i = 0; i < lineas.length; i++) {
        const [a,b,c]=lineas[i];
        console.log(lista[a] && lista[a] === lista[b] && lista[a] === lista[c]);
        if (lista[a] && lista[a] === lista[b] && lista[a] === lista[c]) {
            return lista[a]
        }
    }
    return null;
}

function mostrarGanador(gana) {
    let bd = document.querySelector('body');
    bd.innerHTML+=`
    <section class="msg" >
        <article>${gana}</article>
        <button onclick="recarga()">Cerrar</button>
    </section>
    `
}
function recarga() {
    location.reload();
}


