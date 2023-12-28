import { useForm } from "react-hook-form"
import { useContext } from "react";
import {Button,Form,FormControl,FormGroup} from 'react-bootstrap';
import {getUsers} from '../utils';
import UserContext from "../components/ContextUser";


const Login = () => {

    const {user,setUser}=useContext(UserContext);
    const {register,handleSubmit,formState:{errors},reset} = useForm();
    const login=async(user)=>{
        let users= await getUsers();
        let objUser = {};
        users.map((myUser)=>{
            if((myUser.email===user.email) && (myUser.password===user.password)){
                objUser = myUser
            }
           
        })
        if(objUser.admin!=undefined){
            setUser(objUser)
        }
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
    <div className="d-flex justify-content-center m-4">
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