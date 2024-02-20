const {request,response}=require("express");

const usersGet= async(req=request,res=response)=> {
    res.json({msg:"datos de los usuarios"}); 
}
const userGet=function (req,res) {
    let miid=req.params.id;
    res.json({id:miid});
}
const createUser=(req=request,res=response)=>{
    res.json({data:"creando el usario"});
}
const userUpdate=(req=request,res=response)=>{
    res.json({data:"modificando el usario"});
}
const userDelete=function (req=request,res=response) {
    let miid=req.params.id;
    res.json({msg:miid}); 
}
module.exports={
    usersGet,
    userGet,
    userDelete,
    createUser,
    userUpdate
}