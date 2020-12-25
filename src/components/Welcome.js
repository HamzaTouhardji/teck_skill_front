import React, {Component}  from 'react';
import { Jumbotron} from 'react-bootstrap';


class Welcome extends Component {
    render(){
        return (
            <Jumbotron className="bg-dark text-white">
                <h1>Bienvenue sur Tech skills !</h1>
                <p> Tu penses être un bon développeur, relève les défis de Tech skill</p>
            </Jumbotron>
        );
    } 
};

export default Welcome;