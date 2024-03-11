let URLproducts = import.meta.env.VITE_ENV_URL_PRODUCTS;
let URLproductsLocal = import.meta.env.VITE_ENV_URL_PRODUCTS_LOCAL
let URLuser =import.meta.env.VITE_ENV_URL_USERS;

import axios from 'axios';
export const getProducts=async()=>{
    try {
        let products= await axios.get(URLproducts);
        if (products.status===200) {
            return products.data.productos
            
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
    console.log(URLproducts);
    try {
       let add= await axios.post(URLproducts+"/createProduct",obj);
       if (add.status==201) {
            return true
       }else{
        alert("estamos en index")
       }
   

    } catch (error) {
        console.log(error);
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
export const updateProduct=async(id,obj)=>{
    try {
        let product= await axios.put(`${URLproductsLocal}/${id}`,obj)
        if (product.status===200) {
            return product.data
            
        }else{
            return null
        }
        

    } catch (error) {
       
        return null
    }
}
export const deleteProduct=async(id)=>{
    try {
        let product= await axios.delete(`${URLproductsLocal}/${id}`)
        // if (product.status===200) {
        //     return product.data
            
        // }else{
        //     return null
        // }
        console.log(product);
        

    } catch (error) {
       
        return null
    }
}
