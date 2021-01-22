import React, { Component } from "react";

import UserService from "../../services/UsersService";
import { Jumbotron, Button} from 'react-bootstrap';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header>
          <Jumbotron className="text-center bg-dark text-white">
                <h1>Bienvenue sur Tech skills !</h1>
                <p className="mb-5"> Tu penses être un bon développeur, relève les défis de Tech skill</p>
                <Button className="mr-2" href="/login" type="submit">Connexion</Button>
                <Button href="/register" type="submit">Inscription</Button>          
            </Jumbotron>
        </header>
      </div>
    );
  }
}
