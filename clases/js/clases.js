class Empresa {
    nombre;
    constructor(nombre){
        this.nombre=nombre
    }
    recaudacionTotal(){

    }
    cantVecesRecorrida(estacion){

    }
}

class Reserva extends Empresa{
    codigo;
    cantPasajeros;
    estacionInicial;
    estacionFinal;
    precioPorEstacion=70;
    constructor(nombre,cantPasajeros,estacionInicial,estacionFinal){
        super(nombre);
        
        this.codigo=Date.now();
        this.cantPasajeros=cantPasajeros;
        this.estacionFinal=estacionFinal;
        this.estacionInicial=estacionInicial;
    }
    capturarPrecio(){
        return this.cantPasajeros * 
        (this.capturarDistancia(this.estacionInicial,this.estacionFinal)
             * this.precioPorEstacion);

    }
    capturarDistancia(inicio,fin){
        return Math.abs(inicio-fin);
    }
    ViajeRealizado(verificacion,estacionFinal){
        return 
    }
}
let reservas =[];
let viajes=[];

// let reserva0 = new Reserva("Trenes Argentinos",3,1,8);
// reservas.push(reserva0);
// let reserva1 = new Reserva("Trenes Argentinos",1,9,8);
// reservas.push(reserva1);


// console.log(reserva0);
// console.log(reserva0.capturarPrecio());
// console.log(reserva1.capturarPrecio());
// console.log(reservas);
// let empresa= new Empresa("Colectivo 143");
// console.log(empresa);

function crearReserva() {
   let pasajeros = document.getElementById("pasajeros").value;
   let EstacionInical = document.getElementById("EstacionInical").value;
   let EstacionFinal = document.getElementById("EstacionFinal").value;
    let rs=new Reserva("Trenes Argentinos",Number(pasajeros),
    Number(EstacionInical),Number(EstacionFinal));
    rs.monto=rs.capturarPrecio();
    rs.cerrado=false;
   reservas.push(rs)
   MostrarReservas(reservas,true);
   
}
function MostrarReservas(array,v) {
    let r = true;
    r=v;
    let = titulo="Reserva";
    if(v){
        titulo="Reserva";
    }else{
        titulo="Viaje";
    }
    let elemento = document.querySelector("#root");
    elemento.innerHTML=`
    <table>
    <thead>
        <tr>
            <th>${titulo} N°</th>
            <th>Desde</th>
            <th>Hasta</th>
            <th>Monto</th>
            <th></th>
        </tr>
    </thead>
    <tbody id="cuerpo"></tbody>
</table>
    `;
let cuerpo= document.querySelector("#cuerpo");
array.map((reserva)=>{
    cuerpo.innerHTML+=`
    <tr>
        <td class="${reserva.cerrado?"cerrado":"abierta"}">${reserva.codigo}</td>
        <td>${reserva.estacionInicial}</td>
        <td>${reserva.estacionFinal}</td>
        <td>${reserva.monto}</td>
        <td><input type="checkbox" id="verificado" onchange="cambiarValor(${reserva.codigo})"/></td>
    </tr>
    `
})
    
}
function cambiarValor(id) {
    let nuevaReseva=reservas.filter((reserva=>{
        if (id !== reserva.codigo) {
            // reserva.cerrado=true;
            return reserva;
        }else{
            reserva.cerrado=true;
            viajes.push(reserva);
        }
    }));
    reservas = nuevaReseva;
    MostrarReservas(reservas,true);
    MostrarReservas(viajes,false);
    
}

