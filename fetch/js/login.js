let form = document.querySelector("#login");


// let usuarios = [
//     {email:"lpipnavas@gmail.com",password:"123456",admin:false},
//     {email:"dami@gmail.com",password:"123456",admin:true}
// ];
let usuarios=[]
fetch("http://127.0.0.1:5500/data.json")
.then((result)=>{return result.json()})
.then(data=>{
    
    usuarios=data

    console.log(usuarios);}
    )

form.addEventListener('submit',function (e) {
    e.preventDefault();
    let [email,password]=form
    let usuario ={email:email.value,password:password.value};
  
    if(usuario.email=="" || usuario.password==""){
        let span = document.querySelector("#msg");
        span.style.backgroundColor="white";
        span.style.color="red";
        span.style.display="block"
        span.innerText=`
        Algunos de los campos está vacío!
        `;
        setTimeout(()=>{
            span.style.display="none"
        },2000)
    }else{
        let ingreso =acceso(usuario,usuarios);

    if (ingreso) {
        this.submit();
    }else{
        let span = document.querySelector("#msg");
        span.style.backgroundColor="white";
        span.style.color="red";
        span.style.display="block"
        span.innerText=`
        Usuario o contraseña incorrecto!
        `;
        setTimeout(()=>{
            span.style.display="none"
        },2000)
    }
    }
    
})

function acceso(obj,array) {
   
    let ingresa=false;
    for (let i = 0; i < array.length; i++) {
     if(array[i].email==obj.email && array[i].password==obj.password){
        sessionStorage.setItem("user",JSON.stringify(array[i]));
        return ingresa=true;
     }
     
    } 
    return ingresa;
 }
