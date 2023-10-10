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
        nombre=nombre
        this.codigo=Date.now();
        this.cantPasajeros=cantPasajeros;
        this.estacionFinal=estacionFinal;
        this.estacionInicial=estacionInicial;
    }
    capturarPrecio(){
        return this.cantPasajeros * (this.capturarDistancia(this.estacionInicial,this.estacionFinal)
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

   reservas.push(new Reserva("Trenes Argentinos",Number(pasajeros),
   Number(EstacionInical),Number(EstacionFinal)))
   console.log(reservas);
   
}
