# Ejemplo Modo Oscuro
- Después de crear nuestra aplicación con `mpm create vite nombreAplicacion`
- Creamos la carpeta components y dentro 
- Creamos el archivo `ContextApp.jsx` para nuestro contexto 
- Creamos el contexto importando de `react` `createContext` No olvides exportar la constante
```
import {createContext} from 'react'
const contextApp = createContext(null);
export default contextApp;
```
- Desde App importamos nuestro contexto `import ContextApp from './components/ContextApp'` 
- Creamos un hook para poder asignar desde el local Storage el valor inicial con un or `||` si en el caso de que sea null el valor tome este objeto `{
    bg:"light",
    textColor:"dark"
  }`
Así se verá el código:

``` 
const [context,setContext]=useState(JSON.parse(window.localStorage.getItem("theme")) || {bg:"light",textColor:"dark"});
```
- Creamos la carpeta common
- Creamos el componente MyNavBar
- Importamos desde react el estado y el contexto `import {useContext, useState} from 'react'`
- Importamos nustro contexto creado en el archivo `ContextApp.jsx` 
`import contextApp from '../components/ContextApp'`
- Importamos los componentes necesarios para nuestro navbar
```
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
```

- Creamos una función para el evento onClick del botón 
- Capturamos el contexto si existe desde el localStorage
- creamos un condicional para cambiar a modo claro o oscuro  
```
    const changeMode=()=>{
        let myContext=JSON.parse(window.localStorage.getItem("theme")) || context;
       
        if (myContext.bg==="light") {
            setContext({
                bg:"dark",
                textColor:"light"
              })
            setText("Modo Claro");
            addStorage({
              bg:"dark",
              textColor:"light"
            });
        }else{
            setContext({
                bg:"light",
                textColor:"dark"
              })
              setText("Modo Oscuro")
              addStorage({
                bg:"light",
                textColor:"dark"
              });
        }
    }
```

- Creamos la estructura para cambiar el modo desde un botón agregamdole el evento onClick
- Dentro del componente `ContextApp.Provider` agregamos un elemnto main para poder cambiar las clases de dark a light desde el contexto
` <main className={`bg-${context.bg} text-${context.textColor}`} style={{minHeight:"600px"}}>`


