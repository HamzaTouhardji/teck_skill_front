import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavigationBar extends Component {
    render(){
        return (
            <Navbar className="mb-5" bg="light" expand="lg">
                <Navbar.Brand href="#home">
                <Link to={""} className="navbar-brand">
                        <img src="../../logo.png" width="50" height="50" alt="brand"/>&nbsp;
                        Tech Skills
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="users" className="nav-link">Utilisateurs</Nav.Link>
                        <Nav.Link href="profile" className="nav-link">Mon compte</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    } 
};

export default NavigationBar;