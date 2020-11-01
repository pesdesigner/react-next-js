import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

function About() {
    return (

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
                        <div class="row featurette">
                            <div class="col-md-7 order-md-2">
                                <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
                                <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                            </div>
                            <div class="col-md-5 order-md-1">
                                <img src="/image1.jpg" alt="foto 1" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />
                            </div>
                        </div>
                    </div>
                    <hr class="featurette-divider"></hr>
                    <div>
                        <div class="row featurette">
                            <div class="col-md-7">
                                <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
                                <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                            </div>
                            <div class="col-md-5 order-md-1">
                                <img src="/image1.jpg" alt="foto 1" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />
                            </div>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default About