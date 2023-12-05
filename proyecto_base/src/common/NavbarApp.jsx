import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import logo from '/logo.svg'
const NavbarApp = () => {
  return (
    <Navbar className='d-flex justify-content-center bg-dark text-white' >
        <Nav className='me-auto'>
            <button>
                <img src={logo} alt="" />
            </button>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/nosotros">Nosotros</a></li>
                <li><a href="/admin">Admin</a></li>
            </ul>
        </Nav>

    </Navbar>
  )
}

export default NavbarApp