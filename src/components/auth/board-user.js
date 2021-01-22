import React, { Component } from "react";

import UserService from "../../services/UsersService";
import NavigationBar from '../NavigationBar';
import Button from 'react-bootstrap/Button';

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <NavigationBar />
        <header className="mt-4 jumbotron">
          <div className="text-center">
            <h1 className="text-center mb-5">Mon tableau de bord</h1>
            {/*<h3>{this.state.content}</h3>*/}
            <Button href="/code" type="submit">Jouer</Button>          
          </div>    
        </header>
      </div>
    );
  }
}
