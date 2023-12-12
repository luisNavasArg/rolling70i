import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './common/Footer'
import NavbarApp from './common/NavbarApp';
import Home from './views/Home'
import ErrorScreen from './views/ErrorScreen';
import About from './views/About'
import {getProducts} from './utils'
import { useEffect, useState } from 'react';
import RoutesPrivates from './routes/RoutesPrivates';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from './views/AddProduct'
import Admin from './views/Admin';
import Login from './views/Login';

function App() {
  const [products,setProducts]=useState([]);
  const [user,setUser]=useState({
    "id": 0,
    "user": "",
    "password": "",
    "email":"",
    "admin":false
  })
  const getData=async()=>{
    let data= await getProducts();
    setProducts(data);
  }
  useEffect(() => {
    // Al momento en que se monta el componente
    // setProducts()
    getData()

    
  }, [])
 
  
  return (
    <BrowserRouter>
    <NavbarApp admin={user.admin}/>
    <Routes>
        <Route  path='/' element={<Home products={products}/>}/>
        <Route path='/admin' element={<RoutesPrivates admin={user.admin}/>}>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/admin/agregarProducto' element={<AddProduct/>}/>
        </Route>
        <Route path='/nosotros' element={<About/>}/>
        {/* Enviar una función como props */}
        <Route path='/ingresar' element={<Login setUser={setUser}/>}/>
        <Route path='/*' element={<ErrorScreen/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App