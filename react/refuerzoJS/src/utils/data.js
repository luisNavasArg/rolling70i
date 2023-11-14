export const heroes = [
    {
        id: 1,
        name: "Dibu",
        numero: 23
    }, {
        id: 2,
        name: "Messi",
        numero: 10
    }, {
        id: 3,
        name: "Julián",
        numero: 9
    }, {
        id: 4,
        name: "Di Maria",
        numero: 11
    }

]
export const calcularIva = (valor) => {
    return valor * 0.21;
}

export const calcularIvaIncluido=(valor)=>{
   return valor *0.21 + valor;
}

export const calculadora = (op, a, b) => {
    switch (op) {
        case '+':
            console.log(a + b);
            break;
        case '-':
            console.log(a - b);
            break;
        case '*':
            console.log(a * b);
            break;
        case '/':
            console.log(a / b);
            break;
        default:
            console.log("el valor del operador no es valido");
            break;
    }
}
export const usuarios =[{
    id:1,
    name:"Pedro",
    apellido:"Alvarez",
    admin:false
},{
    id:2,
    name:"Juana",
    apellido:"Romero",
    admin:true
}]