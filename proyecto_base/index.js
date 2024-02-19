const express = require("express");

const app = express();
const cors =require("cors");
app.use(cors());
app.use(express.json());
let users=[];
let mid=0;
//method get
app.get("/api/users",(req,res)=>{

    res.status(200).json(users);

});
//method post
app.post("/api/users",(req,res)=>{
    
    let newObj =req.body;
    mid++;
    newObj.id=mid;
    users=[...users,req.body];
    res.status(201).json({"data":users});
});
//method put
app.put("/api/users",(req,res)=>{
    let id=Number(req.query.id);
    let {name}=req.body;
 
    let newData = users.map(user=>{
        console.log(user);
        if (id==user.id) {
            return user={id,name};
        }else{
            return user;
        }
    
    });
    users=newData;
    res.status(202).json(users);
    
});
//method delete
app.delete("/api/users",(req,res)=>{
    let id=Number(req.query.id);
    let newData = users.filter(user=>{ 
        if (id!=user.id) {
            return user;
        }
    });
    users=newData;
    res.status(202).json(users);
});

app.listen(8080,()=>{
    console.log("Server on Ready!");
});