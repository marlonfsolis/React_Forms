import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';


const HeaderBar = () => {
    return (
        <React.Fragment>
            <Navbar bg="light" expand="md">
                <Navbar.Brand href="#home">React-Forms</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/bsform">Boostrap Form</Nav.Link>
                        <Nav.Link as={NavLink} to="/rhform">React Hook Form Form</Nav.Link>                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default HeaderBar;