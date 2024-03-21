import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink, useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import ContextUser from '../components/ContextUser';
import {deleteProduct,getProducts} from '../utils/index'
import Swal from 'sweetalert2';
function MyCard({ product, setProducts}) {
  const { user } = useContext(ContextUser);
  const navigate=useNavigate();
  const eliminar=(id)=>{
    Swal.fire({
      title: "Deseas eliminar el producto?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`
    }).then(async(result) => {
      /* Read more about isConfirmed, isDenied below */
      
      if (result.isConfirmed) {
        deleteProduct(id).then(async(result)=>{
          console.log(result);
          if (result==null) {
            Swal.fire("No se eliminó el producto", "", "info");
          }else{
            Swal.fire("Eliminado!", "", "success");
            let products = await getProducts();
            setProducts(products)
            navigate("/")
          }
        })
        

      } 
    });
    
  }
  return (
    <Card style={{ width: '18rem',height:'350px'}}>
      <div style={{width: '18rem',overflow:"hidden",height:'150px'}}>
      <Card.Img variant="top" src={product.src} />
      </div>
      
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