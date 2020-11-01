import Menu from '../components/Menu';
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

const About = (data) => (
    <div>
        <Menu />
        <Jumbotron fluid className="top">
            <style>{`.top {
                        padding-top: 80px;
                        padding-botton: 80px;
                        background-color: #000;
                        color: #fff;
                        margin-bottom: 0rem !import;
                    }`}
            </style>
            <Container>
                <div className="text-center">
                    <h1 className='display-4'>Sobre a Empresa</h1>
                </div>
            </Container>
        </Jumbotron>
        <Jumbotron fluid className="about">
            <style>{`.about {
                        padding-top: 80px;
                        padding-botton: 80px;
                        background-color: #fff;
                        margin-bottom: 0rem !import;
                    }
                    .featurette-divider {
                        margin: 5rem 0;
                    }    
                    `}
            </style>
            <Container>
                <div>
                    {data.response.about.map(about => (
                        <div key={about._id}>
                            <div className="row featurette">
                                <div className="col-md-7 order-md-2">
                                <h2 className="featurette-heading">{about.title}</h2>
                                    <p className="lead">{about.desc}</p>
                                </div>
                                <div className="col-md-5 order-md-1">
                                    <img src={data.response.urlFile + about.fileName} alt="foto 1" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />
                                </div>
                            </div>
                            <hr className="featurette-divider"></hr>
                        </div>
                    ))}
                </div>
            </Container>
        </Jumbotron>
    </div>
);

About.getInitialProps = async () => {
    var response = await axios.get('http://localhost:8080/about');
    console.log(response.data)
    return { response: response.data }
}


export default About