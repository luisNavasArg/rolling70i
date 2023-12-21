let URLproducts = "http://localhost:3000/products";
let URLuser ="http://localhost:3000/users";
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
    }
}
export const getUsers=async()=>{
    try {
        let users= await axios.get(URLuser);
        if (users.status===200) {
            return users.data
            
        }else{
            return []
        }

    } catch (error) {
        console.log(error);
        return []
    }
}
export const addProduct=async(obj)=>{
    try {
       let add= await axios.post(URLproducts,obj);
       if (add.status==201) {
            return true
       }else{
        alert("estamos en index")
       }

    } catch (error) {
        return false
    }

}
export const getOneProduct=async(id)=>{
    try {
        let product= await axios.get(`${URLproducts}/${id}`);
        if (product.status===200) {
            return product.data
            
        }else{
            return null
        }

    } catch (error) {
       
        return null
    }
}
