function App() {
  let nombre = "Luis Navas";
  const PI=3.14;
  let edad=50;
  let saludo= `Hola  mi nombre es: ${nombre} y tengo ${edad} años`;
  let curso={
    nombre:"html",
    src:"https://www.alura.com.br/artigos/assets/html-css-js/imagem-1.png",
    duracion:"3 meses",
    cantmaxAlumnos:20,
    crearCertificado:(nombreCompleto)=>"certificado"
  }
  let reglas =["Para usar javascript embebido se usa las llaves","Para los estilos se usan dobles llaves",
"Para usar atributos que contengan dos palabras usa el camell case","Todas las etiquetas jsx deben de tener el cierre ejemplo img"];
let reglasJoin = reglas.join(", ");
reglas.push("Otra regla");
reglas.pop()
reglas.unshift("hola soy una regla");
// reglas.shift();
let pos = reglas.indexOf("hola soy una regla");
// alert(pos)
reglas.splice(pos,1)
console.log(reglasJoin); 
const alumno ={name:"Juan",lastName:"Perez",old:34};
const {name,old,lastName}=alumno;

const numeros = [14,36,98,85,100];
const [a,b,c,...rest]=numeros;

let resultado = reglas.find((regla)=>regla==="Para usar javascript embebido se usa las llaves")
return (
    <div className="">
      Hola {nombre}
      <p>El valor de PI es: {PI}</p>
      <p>Saludamos: {saludo}</p>
      <div style={{display:"flex", justifyContent:"center", backgroundColor:"blue"}}>
        <div>
        <img src={curso.src} style={{width:"150px"}} alt="" />
        <h3>{curso.nombre}</h3>
        <p>Aprenderás a crear la estructura de tu página</p>
        <p>Cantidad por curso: {curso.cantmaxAlumnos}</p>
        </div>
      </div>
      <h3>Reglas jsx</h3>
      <ol>
        {reglas.map(regla=>{
        return(<li>{regla}</li>)
        })}
      </ol>
      <p>
        {reglasJoin}
      </p>
      El resultado es: {resultado}
      <p>Hola {name} {lastName} {old}</p>
      
        <p>{a}</p>
        <p>{b}</p>
        <p>{rest}</p>
    </div>
    
   
    )
}

export default App
