let root = document.querySelector("#root");
let usuarios = [];
root.innerHTML = `
<form action="./login.html" >
    <h3>Registrarme</h3>
    <div class="input">
        <input type="text" name="usuario" id="usuario" placeholder="Email">
    </div>
    <div class="input">
        <input type="password" name="password" id="password" placeholder="Password">
    </div>
    <div class="input">
        <input id="btn" type="submit" value="Registrarme"  >
    </div>
    <div class="input">
        <span></span>
    </div>
</form>
`
let mensaje = document.querySelector("span");
mensaje.style.display = "none";
mensaje.style.color = "red";
mensaje.style.backgroundColor = "black";
mensaje.style.padding = "10px";
document.querySelector("form").addEventListener('submit', function (event) {
    event.preventDefault();
    let email = event.target[0].value;
    let password = event.target[1].value;
    if (email == "" || password == "") {
        mensaje.innerText = "Algunos de los campos está vacío";
        mensaje.style.display = "block";
        setTimeout(() => {
            mensaje.style.display = "none";
        }, 3000)

    } else {
        let usuario = {
            email:email,
            password,
            admin:false
        }
    
        if(checkUser()){
            let obj = JSON.parse(checkUser());
            usuarios=obj;
            usuarios.push(usuario);
            localStorage.setItem("usuarios",JSON.stringify(usuarios))
        }else{
            usuarios.push(usuario)
            localStorage.setItem("usuarios",JSON.stringify(usuarios))
        }
    }

})

function checkUser() {
    let data = localStorage.getItem("usuarios");
    if (data != null) {

        return data;
    } else {
        return false;
    }
}



