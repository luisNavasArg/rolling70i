import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../Images/MyImage';
import { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner/Spinner'
function CarouselFadeExample({data}) {
  console.log(data);
  const [view,setView]=useState(false);
  const showData=()=>{
    if(data.length!==0){
      setView(true)
    }
  }
  setTimeout(()=>{
    showData()
  },2000)
  useEffect(()=>{
    
  },[])
  return (
    <Carousel fade>
      {view?
      data.map((card)=>{
        return(
        <Carousel.Item className='d-flex justify-content-between'>
          <ExampleCarouselImage src={card.url} />
          <Carousel.Caption className='mx-4'>
            <h3 className='text-dark'>{card.name}</h3>
            <p className='text-dark mx-4 p-4'>{card.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        )
      })
     
      :<Spinner/>
      }
   
    </Carousel>
  );
}

export default CarouselFadeExample;