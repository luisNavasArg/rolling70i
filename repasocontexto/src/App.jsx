import { useState } from 'react'
import ContextApp from './components/ContextApp'
import MyNavBar from './common/MyNavbar'
function App() {
  
  const [context,setContext]=useState(JSON.parse(window.localStorage.getItem("theme")) || {
    bg:"light",
    textColor:"dark"
  });

  return (
    <ContextApp.Provider value={{context,setContext}} >
      <main className={`bg-${context.bg} text-${context.textColor}`} style={{minHeight:"600px"}}>
        <MyNavBar/>
        <h1>Contexto en React</h1>
      </main>
    </ContextApp.Provider>
  )
}

export default App
