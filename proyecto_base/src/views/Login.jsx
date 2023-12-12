import { useForm } from "react-hook-form"
import {Button,Form,FormControl,FormGroup} from 'react-bootstrap';
import {getUsers} from '../utils'
const Login = ({setUser}) => {
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
    <Form onSubmit={handleSubmit(login)}>
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
            <Button type="submit">Ingresar</Button>
        </FormGroup>
    </Form>
  )
}

export default Login