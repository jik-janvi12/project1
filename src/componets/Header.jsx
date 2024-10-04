import React from 'react'
  import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom/cjs/react-router-dom'
function Header() {
  return (
    <>
       {/* header */}
    <Navbar expand="lg" className="demo py-4">
        <Container>
                <Navbar.Brand href="#home"><Link to="/">Mega<span>kit.</span></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link  to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link  to="/services">SERVICES</Link>
                    <Link  to="/portfolio">PORTFOLIO</Link>
                    <Link to="/blog">BLOG</Link>
                    <Link to="/contact">CONTACT</Link>
                </Nav>
                <Button variant="danger">GET A QUOTE</Button>  
                </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  )
}

export default Header;