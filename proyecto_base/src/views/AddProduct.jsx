import { useForm, Controller} from "react-hook-form"
import {Button,Form,FormControl,FormGroup} from 'react-bootstrap';

const AddProduct = () => {
  const {register,handleSubmit,control,formState:{errors},reset}=useForm();
  return (
    <Form>
      <FormGroup>
            <Form.Label>
                Nombre
            </Form.Label>
            <FormControl 
            type="text"
            {...register("name",{required:"Este campo es obligatorio"})}
            />
            <Form.Text>
                {errors.name?.message}
            </Form.Text>
        </FormGroup>
        <FormGroup>
            <Form.Label>
                Descripción
            </Form.Label>
            <FormControl 
            type="text"
            {...register("description",{required:"Este campo es obligatorio"})}
            />
            <Form.Text>
                {errors.description?.message}
            </Form.Text>
        </FormGroup>
        <FormGroup>
            <Form.Label>
                Precio
            </Form.Label>
            <FormControl 
            type="number"
            {...register("price",{required:"Este campo es obligatorio"})}
            />
            <Form.Text>
                {errors.price?.message}
            </Form.Text>
        </FormGroup>
        <FormGroup>
            <Form.Label>
                Url Producto
            </Form.Label>
            <FormControl 
            type="text"
            {...register("src",{required:"Este campo es obligatorio"})}
            />
            <Form.Text>
                {errors.src?.message}
            </Form.Text>
        </FormGroup>
        <FormGroup>
            <Button type="submit">Agregar producto</Button>
        </FormGroup>
    </Form>
  )
}

export default AddProduct