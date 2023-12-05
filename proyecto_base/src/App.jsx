import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './common/Footer'
import NavbarApp from './common/NavbarApp';
import Home from './views/Home'
import Admin from './views/Admin';
import ErrorScreen from './views/ErrorScreen';
import {getProducts} from './utils'
import { useEffect, useState } from 'react';
function App() {
  const [products,setProducts]=useState([])
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
    <>
    <NavbarApp/>
    <Home/>
    {/* <Admin/> */}
    {/* <ErrorScreen/> */}
    {products.map((product,index)=>{
    return(<li key={index}>{product.name}</li>)
    })}
    <Footer/>
    </>
  )
}

export default App
