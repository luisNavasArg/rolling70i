export let promesa= new Promise((resolve,reject)=>{
    let valido = true;
    setTimeout(()=>{
        if (valido) {
            resolve("Éxito!")
        }else{
            resolve("Falló la promesa!")
        }
    },500)
})
