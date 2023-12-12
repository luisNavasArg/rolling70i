import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import logo from '/logo.svg'
import { Link, NavLink} from "react-router-dom";
const NavbarApp = ({admin}) => {
  return (
    <Navbar className='d-flex justify-content-center text-white' bg="dark" data-bs-theme="dark" >
        <Nav className='me-auto'>
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
            
            {admin?<NavLink className='nav-link' to='/admin'>
            Administrador
            </NavLink>:""}
        </Nav>

    </Navbar>
  )
}

export default NavbarApp