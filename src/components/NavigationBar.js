import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class NavigationBar extends Component {
    render(){
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img src="https://cdn0.iconfinder.com/data/icons/communication-technology/500/code_brackets-512.png" width="70" height="70" alt="brand"/>
                    Tech Skills
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Login</Nav.Link>
                    <Nav.Link href="/">Créer un compte</Nav.Link>
                    <Nav.Link href="/"></Nav.Link>
                </Nav>
            </Navbar>
        );
    } 
};

export default NavigationBar;