import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Footer from './components/footer';
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
              <Route path="/" exact component={Welcome} />
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
}

export default App;


