import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom'
function MyCard({product}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.src} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="primary"><NavLink className='nav-link' to={`/admin/detalleProducto/${product.id}`}>
           Ver detalle
            </NavLink></Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;