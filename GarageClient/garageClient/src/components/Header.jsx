import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <div>
      <Navbar className="bg-info  container rounded-2 mt-3">
        <Container>
          <Link to={"/"}>
          <Navbar.Brand href="#home" style={{color:"white", fontWeight:"bold", fontSize:"30px"}}>
            <i className="fa-solid fa-car fa-beat-fade fa-xl me-2" style={{color:"red"}}></i>{' '}
            Mridhul's Garage
          </Navbar.Brand>
          </Link>
          <Link to = {"/customer"} className='btn btn-outline-dark'>Customer</Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
