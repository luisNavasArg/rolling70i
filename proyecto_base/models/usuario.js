const {Schema,model}=require("mongoose");
const UsuarioSchema=Schema({
    nombre:{
        type:String,
        required:[true,"El nombre es obligatorio"]
    },
    email:{
        type:String,
        required:[true,"El correo es obligatorio"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"La conreaseña es obligatoria"]
    },
    img:{
        type:String
    },
    rol:{
        type:String,
        required:true
    },
    estado:{
        type:Boolean,
        default:true
    }
});

UsuarioSchema.methods.toJSON=function () {
    const {__v,password, _id , ...usuario}=this.toObject();
    usuario.uid=_id;
    usuario.password=password;
    return usuario;
}
module.exports=model("Usuario",UsuarioSchema);