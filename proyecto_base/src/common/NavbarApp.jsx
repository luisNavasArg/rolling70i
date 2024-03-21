import {useContext, useEffect} from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import logo from '/logo.svg'
import { Link, NavLink} from "react-router-dom";
import UserContext from '../components/ContextUser';

import MyButton from '../components/MyButton';
const NavbarApp = () => {
  const {user,setUser}=useContext(UserContext);
  const logout=()=>{
    setUser({
      "uid": 0,
      "nombre": "",
      "password": "",
      "email":"",
      "admin":false,
      "theme":"light",
      "colorText":"dark"
    });
  }

  return (
    <Navbar className='d-flex justify-content-center text-white' bg={user.theme} data-bs-theme={user.theme} >
        <Nav className='me-auto'>
            {user.admin?<>
              <NavLink className='nav-link' to='/admin'>
            Administrador
            </NavLink>
            <NavLink className='nav-link' to='/admin/agregarProducto'>
            Agregar Producto
            </NavLink>
            <NavLink className='nav-link' to='/admin/productos'>
            Administrar productos
            </NavLink>
            <NavLink className='nav-link' onClick={logout}>
            Salir
            </NavLink>
            </>:<>
            <Link className='navbar-branch' to="/">
                <img src={logo} alt="" />
            </Link>
            <NavLink className='nav-link' to='/'>
            Inicio
            </NavLink>
            <NavLink className='nav-link' to='/nosotros'>
            Nosotros
            </NavLink>
            <NavLink className='nav-link' to='/ingresar'>
            Ingresar
            </NavLink>
            <NavLink className='nav-link'>
              <MyButton />
            </NavLink>
            </>}
        </Nav>
    </Navbar>
  )
}

export default NavbarApp