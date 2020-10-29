import Head from 'next/head';
import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function HomePage() {
    return (

            <div>
                <Head>
                    <title>Home - Gráfico e Web</title>
                    <meta name='description' content='site react next.js layout básico'/>
                    <meta name='author' content='Paulo Eduardo' />
                </Head>
                <Menu />
                Home
            </div>

    )
}

export default HomePage