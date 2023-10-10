
class Carrito {
    constructor(nombre,item,cant,precio){
        this.nombre=nombre;
        this.item=item;
        this.cant=cant;
        this.precio=precio;
    }
    cambiarPrecio(monto){
        this.precio=monto;
    }
    
}
let compra0210 = new Carrito("Bici ring 19",1,2,120000);
let compra ={
    nombre:"item1",
    item:2,
    cant:1,
    precio:10000,
    cambiarPrecio:(monto)=>{
        compra.precio=monto;
    }
}
let compra2 ={
    nombre:"item1",
    item:2,
    cant:1,
    precio:10000
}
compra0210.cambiarPrecio(150000)
compra.cambiarPrecio(140000)
console.log(compra0210);
console.log(compra);