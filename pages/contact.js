import React, { Component } from 'react';
import Menu from '../components/Menu';

import { Jumbotron, Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Axios from 'axios';

class Contact extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        formSuccess: false,
        msg: ''
    }

    onChangeInput = (field, ev) => {
        this.setState({[field]: ev.target.value})
    }
    sendMsg = event => {
        event.preventDefault();
        const {name, email, subject, message} = this.state;
       // console.log(name + '' + email)
       Axios.post('http://localhost:8080/contact',{name, email, subject, message}).then(res => {
          console.log(res);
          this.setState({formSuccess: true});
          this.setState({msg: res.data.message})
       })
    }

    render() {
        const {formSuccess, msg} = this.state;
        return (
            <>
                <Menu />
                <Jumbotron fluid className="head-contact">
                    <style>{`
                .head-contact{
                padding-top:80px;
                padding-bottom:80px;
                background-color:#000;
                color:#fff;
                margin-bottom:0rem !important;
                }
                `}</style>
                    <Container>
                        <h1 className="display-4 text-center">Contato</h1>
                    </Container>
                </Jumbotron>

                <Jumbotron fluid className='contact'>
                    <style>{`
                .contact{
                padding-top:80px;
                padding-bottom:80px;
                background-color:#fff;
                margin-bottom:0rem !important;
                }
                `}</style>
                    <Container>
                        {formSuccess ? <div className="alert alert-success">{msg}</div> : ""}
                        <Form onSubmit={this.sendMsg}>
                            <FormGroup>
                                <Label for="name">Nome: </Label>
                                <Input type="text" name="name" id="name" placeholder="Nome completo" onChange={(ev)=> this.onChangeInput('name',ev)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">E-mail: </Label>
                                <Input type="email" name="email" id="email" placeholder="Seu melhor e-mail" onChange={(ev)=> this.onChangeInput('email',ev)}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="subject">Assunto: </Label>
                                <Input type="text" name="subject" id="subject" placeholder="Informe o assunto" onChange={(ev)=> this.onChangeInput('subject',ev)}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="message">Mensagem: </Label>
                                <Input type="textarea" name="message" id="message" placeholder="Deixe uma mensagem" onChange={(ev)=> this.onChangeInput('message',ev)}/>
                            </FormGroup>

                            <Button type="submit" color="success">Enviar</Button>
                        </Form>
                    </Container>
                </Jumbotron>
            </>
        )
    }
}

export default Contact