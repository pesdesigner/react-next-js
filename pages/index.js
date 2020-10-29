import Head from 'next/head';
import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
 
library.add(fas)
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
    return (

        <div>
            <Head>
                <title>Home - Gráfico e Web</title>
                <meta name='description' content='site react next.js layout básico' />
                <meta name='author' content='Paulo Eduardo' />
            </Head>
            <Menu />
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 font-weight-normal">Punny headline</h1>
                    <p class="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                    <a class="btn btn-outline-secondary" href="#">Coming soon</a>
                </div>

            </div>
    
            <Jumbotron fluid className='service2'>
                <style>
                    {`.service2{
                        padding-top: 80px;
                        padding-bottom: 80px;
                        background-color: #E9F2F9;
                        color: #000;
                    }
                    .circles{
                        width:140px;
                        height:140px;
                        background-color: #fed136;
                        font-size:52px;
                        padding-top:24px;
                    }
                    .centralized{
                        margin: 0 auto !important;
                        float: none !important;
                    }
                    `}
                </style>
                <Container className='text-center'>
                    <div>
                        <h1 className='display-4'>Seviços da empresa</h1>
                        <p className='lead pb-4'>Temos a solução que a sua empresa precisa!</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div className="rounded-circle circles centralized">
                                <FontAwesomeIcon icon='dolly' />
                            </div>
                                <h2 className='mt-4 mb-4'>Service 1</h2>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        </div>
                        <div class="col-lg-4">
                        <div className="rounded-circle circles centralized">
                                <FontAwesomeIcon icon='dolly-flatbed' />
                            </div>
                                <h2 className='mt-4 mb-4'>Service 2</h2>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        </div>
                        <div class="col-lg-4">
                        <div className="rounded-circle circles centralized">
                            <FontAwesomeIcon icon='truck' />
                            </div>
                                <h2 className='mt-4 mb-4'>Service 3</h2>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
        </div>

    )
}

export default HomePage