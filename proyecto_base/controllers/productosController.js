const {request,response}=require("express");
const Producto = require("../models/producto");

const createProduct= async(req,res)=>{
    const {name,description,price,src,category}=req.body;
    let producto = new Producto({name,description,price,src,category,estado:true});
    await producto.save();
    res.json({msg:"Se creo el producto con éxito!", producto});
}
const productsGet=async(req, res)=>{
    let productos = await Producto.find();
    return res.json({productos}); 

}
const productUpdate =async(req,res)=>{
    let {id}=req.params;
    const {name,description,price,src,category}=req.body;
    let estado=true;
    const data={name,description,price,src,category,estado};
    const producto= await Producto.findByIdAndUpdate(id,data,{new:true});
    res.json({id,ProductNew:producto});
}
const productDelete=async(req,res)=>{
    let {id} = req.params;
    const producto = await Producto.findByIdAndUpdate(id,{estado:false},{new:true});
    res.json({id,producto});
}
module.exports={
    productsGet,
    productDelete,
    createProduct,
    productUpdate
}