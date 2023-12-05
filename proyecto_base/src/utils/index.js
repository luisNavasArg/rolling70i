let URLproducts = "http://localhost:3000/products";
import axios from 'axios';
export const getProducts=async()=>{
    try {
        let products= await axios.get(URLproducts);
        if (products.status===200) {
            return products.data
            
        }else{
            return []
        }

    } catch (error) {
        console.log(error);
        return []
        // console.log(error.request);
    }
}