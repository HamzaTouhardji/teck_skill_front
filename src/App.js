

import React, { Component } from "react";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/authService";

import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/auth/home";
import Profile from "./components/auth/profile";
import BoardUser from "./components/auth/board-user";
import BoardAdmin from "./components/auth/board-admin";
import Footer from './components/footer';
import ListUsersComponent from './components/crud/ListUsersComponent'
import CreateUserComponent from './components/crud/CreateUserComponent'
import ViewUserComponent from './components/crud/ViewUserComponent'
import UpdateUserComponent from './components/crud/UpdateUserComponent'

import Code from './components/auth/code'
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {

    return (
      <div>
        <div className="container mt-3">
          <BrowserRouter>
           <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/admin" component={BoardAdmin} />

              <Route path="/code" exact component={Code} />


              <Route path="/users" exact component={ListUsersComponent} />
              <Route path = "/add-user/:id" component = {CreateUserComponent}></Route>
              <Route path = "/view-user/:id" component = {ViewUserComponent}></Route>
              <Route path = "/update-user/:id" component = {UpdateUserComponent}></Route>
            </Switch>
          </BrowserRouter>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;





/*import { Col, Container, Row} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';

import Games from './components/games';
import ListUsersComponent from './components/crud/ListUsersComponent'
import CreateUserComponent from './components/crud/CreateUserComponent'
import ViewUserComponent from './components/crud/ViewUserComponent'
import UpdateUserComponent from './components/crud/UpdateUserComponent'

 
function App() {

  const marginTop = {
    marginTop : "20px"
  }
  return (
    <div className="App">
<Router>
      
      <NavigationBar /> 
      <Container>
        <Row>
          <Col className="container" lg={12} style={marginTop}>
            <Switch>
              <Route path="/quiz" exact component={Games}/>
              <Route path="/users" exact component={ListUsersComponent} />
              <Route path = "/add-user/:id" component = {CreateUserComponent}></Route>
              <Route path = "/view-user/:id" component = {ViewUserComponent}></Route>
              <Route path = "/update-user/:id" component = {UpdateUserComponent}></Route>
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
      </Router>
      </div>
  );
}*/