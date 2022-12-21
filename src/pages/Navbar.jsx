import React from 'react'
import { Container, Nav, Navbar, NavDropdown,} from 'react-bootstrap'
import '../stylesheet/navbar.css'
import {CgProfile} from 'react-icons/cg'


const DashboardLayout = () => {

  return (
    <>
        <Navbar expand="sm" className='custom-navbar'>
            <Container>
                <Navbar.Brand href="/">ReChat</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-nav-link-body">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>                   
                    </Nav>
                    <CgProfile style={{margin:'0.4rem', fontSize:'1.5rem'}} className=""/>
                </Navbar.Collapse>
                
            </Container>
            
        </Navbar>
    </>
    
  )
}

export default DashboardLayout