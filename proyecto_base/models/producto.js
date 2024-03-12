const {Schema,model}=require("mongoose");
const ProductoSchema=Schema({
    name:{
        type:String,
        required:[true,"El nombre es obligatorio"]
    },
    description:{
        type:String,
        required:[true,"El nombre es obligatorio"]
    },
    price:{
        type:Number,
        required:[true,"El precio es obligatoria"]
    },
    src:{
        type:String
    },
    category:{
        type:String,
        required:[true,"La categoria es obligatoria"]
    },
    estado:{
        type:Boolean
    }
});

module.exports=model("Producto",ProductoSchema);