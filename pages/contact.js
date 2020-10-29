import React from 'react';
import { Spinner } from 'reactstrap';
import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

function Contact() {
    return (

        <div>
            <Menu />
           Contact
            <div className="d-flex justify-content-center">
                <Spinner color="primary" />
            </div>
        </div>

    )
}

export default Contact