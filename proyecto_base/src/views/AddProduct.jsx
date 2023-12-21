import { useForm, Controller} from "react-hook-form"
import {Button,Form,FormControl,FormGroup} from 'react-bootstrap';
import { addProduct } from "../utils";


const AddProduct = () => {
  const {register,handleSubmit,control,formState:{errors},reset}=useForm();
  const addItem=(product)=>{
    addProduct(product).then((result)=>{
        if(result){
            alert("SE añadio el producto")
        }else{
            alert("Ocurrio un error")
        }
    })
       
  }
  return (
    <div className="d-flex justify-content-center m-4">
        <Form className="w-50" onSubmit={handleSubmit(addItem)} method="POST">
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
            <Form.Label>
                Categoría
            </Form.Label>
            <Form.Select
            type="text"
            {...register("category",{required:"Este campo es obligatorio"})}
            >
                <option value='cafeteria'>Cafetería</option>
                <option value='bebidas'>Bebidas</option>
                <option value='plato'>Plato</option>
                <option value='entradas'>Entradas</option>
            </Form.Select>   
            <Form.Text>
                {errors.category?.message}
            </Form.Text>
        </FormGroup>
        <FormGroup>
            <Button type="submit">Agregar producto</Button>
        </FormGroup>
    </Form>
    </div>
  )
}

export default AddProduct