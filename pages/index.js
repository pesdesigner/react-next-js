import React from 'react';
import axios from 'axios';
import Head from 'next/head';

import Menu from '../components/Menu';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

const HomePage = (data) => (
        <div>
            <Head>
                <title>Home - Gráfico e Web</title>
                <meta name='description' content='site react next.js layout básico' />
                <meta name='author' content='Paulo Eduardo' />
            </Head>
            <Menu />
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal">Punny headline</h1>
                    <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                    <a className="btn btn-outline-secondary" href="#">Coming soon</a>
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
                        {console.log(data)}
                        <h1 className='display-4'>{data.response.title}</h1>
                        <p className='lead pb-4'>{data.response.caption}</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="rounded-circle circles centralized">
                                <FontAwesomeIcon icon={data.response.icon1} />
                            </div>
                                <h2 className='mt-4 mb-4'>{data.response.servTitle1}</h2>
                                <p>{data.response.servDesc1}</p>
                        </div>
                        <div className="col-lg-4">
                        <div className="rounded-circle circles centralized">
                                <FontAwesomeIcon icon={data.response.icon2} />
                            </div>
                                <h2 className='mt-4 mb-4'>{data.response.servTitle2}</h2>
                                <p>{data.response.servDesc2}</p>
                        </div>
                        <div className="col-lg-4">
                        <div className="rounded-circle circles centralized">
                            <FontAwesomeIcon icon={data.response.icon3} />
                            </div>
                                <h2 className='mt-4 mb-4'>{data.response.servTitle3}</h2>
                                <p>{data.response.servDesc3}</p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    );

HomePage.getInitialProps = async () => {
    var response = await axios.get('http://localhost:8080/home');
   // console.log(response);
    return {response: response.data}
}    

export default HomePage;