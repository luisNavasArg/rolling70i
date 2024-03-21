let URLproducts = import.meta.env.VITE_ENV_URL_PRODUCTS;
let URLuser = import.meta.env.VITE_ENV_URL_USERS;

import axios from 'axios';
export const getProducts = async () => {
    try {
        let products = await axios.get(URLproducts);
        if (products.status === 200) {
            return products.data.productos

        } else {
            return []
        }


    } catch (error) {
        console.log(error);
        return []
    }
}
export const getUsers = async () => {
    try {
        let users = await axios.get(URLuser);
        if (users.status === 200) {
            return users.data.usuarios

        } else {
            return []
        }


    } catch (error) {
        console.log(error);
        return []
    }
}
export const addProduct = async (obj) => {
    console.log(obj);
    try {
        let add = await axios.post(URLproducts + "/createProduct", obj);
        console.log(add);
        if (add.status == 201) {
            return true
        } else if (add.status == 200 && add.data.msg === "Está duplicado la descripción") {
            return add.data.msg;
        } else {
            alert("estamos en index")
        }


    } catch (error) {
        console.log(error);
        return false
    }

}
export const getOneProduct = async (id) => {
    try {
        let product = await axios.get(`${URLproducts}/getOneProduct/${id}`);
        if (product.status === 200) {
            return product.data.producto

        } else {
            return null
        }

    } catch (error) {

        return null
    }
}
export const updateProduct = async (id, obj) => {
    try {
        let product = await axios.put(`${URLproducts}/updateProduct/${id}`, obj);
        if (product.status === 201) {
            return product.data.productUpdate

        } else {
            return null
        }


    } catch (error) {

        return null
    }
}
export const deleteProduct = async (id) => {
    try {
        let product = await axios.delete(`${URLproducts}/deleteProdut/${id}`);
        
        if (product.status === 200) {
            return true

        } else {
            return null
        }



    } catch (error) {

        return null
    }
}
