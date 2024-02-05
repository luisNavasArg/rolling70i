import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink, useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import ContextUser from '../components/ContextUser';
import {deleteProduct} from '../utils/index'
import Swal from 'sweetalert2';
function MyCard({ product }) {
  const { user } = useContext(ContextUser);
  const navigate=useNavigate();
  console.log(user);
  const eliminar=(id)=>{
    Swal.fire({
      title: "Deseas eliminar el producto?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteProduct(id).then((result)=>{
          if (result==undefined) {
            
          }
        })
        Swal.fire("Eliminado!", "", "success");
        navigate("/")

      } else if (result.isDenied) {
        Swal.fire("No se eliminó el producto", "", "info");
      }
    });
    
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.src} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button className='my-4' variant="primary">
          <NavLink className='nav-link' to={`/admin/detalleProducto/${product.id}`}>
          Ver detalle
        </NavLink></Button>
        {user.admin?<>
          <Button variant="success"><NavLink className='nav-link' to={`/admin/modificarProducto/${product.id}`}>
         Modificar
        </NavLink></Button>
        <NavLink className='nav-link' to={`/admin`}>
        <Button variant="danger" onClick={()=>eliminar(product.id)}>
         Eliminar
        </Button>
        </NavLink>
        </>:''}
      </Card.Body>
    </Card>
  );
}

export default MyCard;