import { calularDistancia, triangulo,calculoPromedio} from "./utils/cacular";
import { heroes,calcularIva, calculadora, calcularIvaIncluido,usuarios } from "./utils/data";
import { promesa } from "./promesa/promesa";
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
const notas=[7,8,4.5,6]
const numeros = [14,36,98,85,100];
const [a,b,c,...rest]=numeros;

let resultado = reglas.find((regla)=>regla==="Para usar javascript embebido se usa las llaves")
let [dibu,messi,julian,diMaria]=heroes;

promesa.then(function (data) {
  console.log(data);
}).catch(function (error) {
  console.log(error);
})

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
        {heroes.map(jugador=><p>{jugador.id} Nombre: {jugador.name} Camiseta N {jugador.numero} </p>)}
    <div>
      {dibu.name} Camiseta {dibu.numero}
    </div>
    <div>
      {messi.name} Camiseta {messi.numero}
    </div>
    <div>
      {diMaria.name} Camiseta {diMaria.numero}
    </div>
    {calcularIva(1000)}
    {calculadora("+",2,3)}
    <p>{calcularIvaIncluido(1000)}</p>
    <p>{triangulo(120,90)}</p>
    <p>{calularDistancia(1200,1500)}</p>
    <p>Promedio de notas {calculoPromedio(notas).toFixed(2)}</p>
      {usuarios.map(usuario=>{
        return usuario.admin?
        <p style={{backgroundColor:'green'}}>{usuario.name} {usuario.apellido}</p>:
        <p style={{backgroundColor:'red'}}>{usuario.name} {usuario.apellido}</p>
      })}
     
    </div>
    )
}

export default App
