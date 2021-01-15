import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavigationBar extends Component {
    render(){
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                    <img src="https://cdn0.iconfinder.com/data/icons/communication-technology/500/code_brackets-512.png" width="70" height="70" alt="brand"/>
                    Tech Skills
                </Link>
                <Nav className="mr-auto">
                    <Link to={"quiz"} className="nav-link">Quiz</Link>
                    <Link to={"users"} className="nav-link">Utilisateurs</Link>

                </Nav>
            </Navbar>
        );
    } 
};

export default NavigationBar;