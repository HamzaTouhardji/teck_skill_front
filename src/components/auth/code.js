import React, { Component } from "react";

import CodeService from "../../services/CodeService";
import {Form, Button} from 'react-bootstrap'
import NavigationBar from '../NavigationBar';

export default class BoardUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    CodeService.getCode().then(
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
          <h6>{this.state.content}</h6>

          <h1 className="text-center">Niveau 1 </h1>
          <Form>         
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Ecrire un Hello World en Java </Form.Label>
              <Form.Control as="textarea" placeholder="Entrer votre code" rows={10} />
            </Form.Group>
            <Button variant="success" >Valider </Button>
          </Form>
        </header>
      </div>
    );
  }
}
