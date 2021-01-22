import React, {Component} from 'react';

import {Navbar, Col} from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        let fullYear = new Date().getFullYear();
        return (
            <Navbar fixed="bottom" bg="dark" variant="dark">
                    <Col lg={12} className="text-center text-muted bg-dark ">
                        <div className="text-white">{fullYear} - {fullYear+1},&nbsp; All Rights Reserved by TOUHARDJI Hamza</div>
                    </Col>
            </Navbar>
        );
    }
}