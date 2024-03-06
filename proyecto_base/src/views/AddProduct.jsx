import { useForm, Controller } from "react-hook-form"
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';
import { addProduct } from "../utils";
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom'

const AddProduct = () => {
    const { register, handleSubmit, control, formState: { errors }, reset } = useForm();
    const navigate=useNavigate();
    const addItem = (product) => {
        //validar el temaño de la url
        addProduct(product).then((result) => {
            console.log(product);
            if (result) {
          
                Swal.fire({
                    title: `Se agregó el producto ${result.name}`,
                    text: "You clicked the button!",
                    icon: "success"
                });
                Swal.fire({
                    title: "Deseas agregar otro producto?",
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: "Si",
                    denyButtonText: `No`
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      
                     reset();
              
                    } else if (result.isDenied) {
                      navigate("/admin/productos")
                    }
                  });

            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Ocurrio un error, intente nuevamente más tarde',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
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
                        {...register("name", { required: "Este campo es obligatorio" })}
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
                        {...register("description", { required: "Este campo es obligatorio" })}
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
                        {...register("price", { required: "Este campo es obligatorio" })}
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
                        {...register("src", 
                        { required: "Este campo es obligatorio",
                            maxLength: 200,
                            msg:"La Url es muy larga"
                         })}
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
                        {...register("category", { required: "Este campo es obligatorio" })}
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