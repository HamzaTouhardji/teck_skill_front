import React, { Component } from "react";

import CodeService from "../../services/CodeService";
import {Form, Button} from 'react-bootstrap'
import NavigationBar from '../NavigationBar';
import CheckButton from "react-validation/build/button";
import Input from "react-validation/build/input";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Ce champ est requis!
      </div>
    );
  }
};

export default class BoardUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      code: ""
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

  onChangeCode(e) {
    this.setState({
      code: e.target.value
    });
  }

  handleCode(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      CodeService.sendCode(this.state.code).then(
        () => {
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }














  render() {
    return (
      <div className="container">
        <NavigationBar />
        <header className="mt-4 jumbotron">
          <h6>{this.state.content}</h6>

          <h1 className="text-center">Niveau 1 </h1>
          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username">Identifiant</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Connexion</span>
              </button>
            </div>

  
            
          </Form>
        </header>
      </div>
    );
  }
}