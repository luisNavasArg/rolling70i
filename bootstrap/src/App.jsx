import { useEffect, useState } from 'react'
import {sculptureList} from './data/data'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar/Navbar'
import MyCarousel from "./components/MyCarousel/MyCarousel";
import Promotions from './views/Promotions';
import Footer from './components/Footer/Footer';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    setData(sculptureList);
    
  }, [])
  
  
  return (
    <>
    <MyNavbar/>
    <header style={{height:"300px",backgroundImage:"url(https://fotografias.lasexta.com/clipping/cmsimages02/2018/12/27/70F50734-CF4B-4956-AE42-1BD11E21B4C5/97.jpg?crop=1200,675,x0,y63&width=1600&height=900&optimize=high&format=webply)"}}>
    <h1 className='text-white'>Mi aplicación</h1>
    </header>

  
  <MyCarousel data={data}/>
  <Promotions/>
  <Promotions/>
  <Promotions/>
  <Promotions/>
  <Promotions/>
  <Promotions/>
  <Footer/>
  </>
    
  )
}

export default App
