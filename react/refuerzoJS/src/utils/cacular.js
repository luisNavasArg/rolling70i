export const triangulo=(base,altura)=>{
    return base*altura/2
}
export const calcularArea=(a,b)=>{
    return b*a;
}
export const calularDistancia=(inicio,fin)=>{
    return Math.abs(inicio-fin);
}
export const calculoPromedio=(array)=>{
    let suma=0
    for (let index = 0; index < array.length; index++) {
        suma+=array[index]
    }
    return suma/array.length;

}
