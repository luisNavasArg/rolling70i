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