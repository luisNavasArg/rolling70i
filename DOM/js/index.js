let body = document.querySelector("body");


// for (let i = 0; i < 200; i++) {
//     body.innerHTML+=`
//     <div class="circulos"></div>
//     `
// }

// // setInterval(()=>{
// //     body.style.backgroundColor="rgba("+numAleatorio()+","+numAleatorio()+","+numAleatorio()+")"
// // },1000);

// function numAleatorio() {
//     return Math.floor(Math.random()*265);
// }
// let misCirculos = document.querySelectorAll(".circulos");

// setInterval(()=>{
//     for (let i = 0; i < misCirculos.length; i++) {
//         misCirculos[i].style.borderRadius="90px"
//         misCirculos[i].style.backgroundColor="rgba("+numAleatorio()+","+numAleatorio()+","+numAleatorio()+")"
//         misCirculos[i].style.top=(numAleatorio()*2)+"px"
//         misCirculos[i].style.left=(numAleatorio()*2)+"px"
//     }
// },1000)

let titulo = document.querySelector("h1");
titulo.addEventListener('mouseover',animacion)

titulo.style.position="absolute";

function animacion() {
    let pos = 0;
let time = setInterval(()=>{
    pos++;
    // if(pos===1400){
    //     pos=0;
    // }
    // pos=pos+50;
    // titulo.style.left=pos+"px"
    // console.log(titulo.getBoundingClientRect());
titulo.style.opacity="0."+pos;
if(pos==9){
    clearInterval(time);
    titulo.style.display="none"
}
},1000);
}
