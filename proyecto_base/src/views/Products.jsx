import React from 'react'
import MyCard from "../common/MyCard";
const Products = ({products}) => {
    
  return (
    <main className='d-flex justify-content-around align-items-center flex-wrap'>
        {products.map((product,i)=>{
            return <MyCard product={product}/>
        })}
    </main>
  )
}

export default Products