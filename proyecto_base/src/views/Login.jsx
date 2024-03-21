import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import {Button,Form,FormControl,FormGroup} from 'react-bootstrap';
import {getUsers} from '../utils';
import UserContext from "../components/ContextUser";
import {Navigate}  from "react-router-dom";
import bcrypt from "bcryptjs-react";
const Login = () => {
    const [navigate,setNavigate]=useState(false);
    const {user,setUser}=useContext(UserContext);
    const {register,handleSubmit,formState:{errors},reset} = useForm();
    const login=async(user)=>{
        let users= await getUsers();
        
        let objUser = {};
        users.map((myUser)=>{
            
            if(myUser.email===user.email && bcrypt.compareSync(user.password,myUser.password)){
                objUser.email=myUser.email;
                objUser.estado=myUser.estado;
                objUser.img=myUser.img;
                objUser.nombre=myUser.nombre;
                objUser.password=myUser.password;
                objUser.admin=myUser.rol==="admin";
                objUser.uid= myUser.uid;
            }
           
        })
        if(objUser.admin!=undefined){
            setUser(objUser)
            setNavigate(true);
        }
    }
    if (navigate) {
        return <Navigate to="/admin"/>
    }
  return (
    <>    
    <style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: white;
    }
    .btn-flat:hover {
        background-color: black;
        color: white;
      }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>
    <div className="main d-flex justify-content-center m-4">
    <Form onSubmit={handleSubmit(login)} className="w-25">
        <FormGroup>
            <Form.Label>
                Email
            </Form.Label>
            <FormControl 
            type="text"
            {...register("email",{required:"Este campo es obligatorio"})}
            />
            <Form.Text>
                {errors.email?.message}
            </Form.Text>
        </FormGroup>
        <FormGroup>
            <Form.Label>
                Clave
            </Form.Label>
            <FormControl 
            type="password"
            {...register("password",{required:"Este campo es obligatorio"})}
            />
            <Form.Text>
                {errors.password?.message}
            </Form.Text>
        </FormGroup>
        <FormGroup>
            <Button variant="flat" type="submit">Ingresar</Button>
        </FormGroup>
    </Form>
    </div>
    </>

  )
}

export default Login