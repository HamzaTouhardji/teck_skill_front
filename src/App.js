import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Footer from './components/footer';
//https://www.youtube.com/watch?v=WKkM5rFed2g&list=PLZdfbI_OZWAMvhSl32tFcD6M9x_Pqtkwb&index=3

//7:13

//https://github.com/mightyjava/book-rest-api-reactjs/blob/master/src/main/webapp/reactjs/src/components/NavigationBar.js
function App() {

  const marginTop = {
    marginTop : "20px"
  }
  return (
    <div className="App">
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Welcome />
          </Col>
        </Row>
      </Container>
      <Footer />
      </div>
  );
}

export default App;


