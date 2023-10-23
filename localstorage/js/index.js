document.querySelector("#root").innerHTML=`
<form action="./home.html">
    <h3>Login</h3>
    <div class="input">
        <input type="text" name="usuario" id="usuario" placeholder="Email">
    </div>
    <div class="input">
        <input type="password" name="password" id="password" placeholder="Password">
    </div>
    <div class="input">
        <input id="btn" type="submit" value="Ingresar"  >
    </div>
    <div class="input">
        <span></span>
    </div>
</form>
`
let formulario =document.querySelector("form");
let mensaje =document.querySelector("span");
mensaje.style.color="red";
mensaje.style.backgroundColor="black";
mensaje.style.padding="10px";
mensaje.style.display="none";

formulario.addEventListener('submit',function(event){
    event.preventDefault();
    let email=event.target[0].value;
    let password= event.target[1].value;
    if(email=="" || password==""){
      mensaje.innerText="Los campos son obligatorios";
      mensaje.style.display="block";
      setTimeout(()=>{
        mensaje.innerText="";
        mensaje.style.display="none";
      },3000)
    }else{
        this.submit()
    }
})

