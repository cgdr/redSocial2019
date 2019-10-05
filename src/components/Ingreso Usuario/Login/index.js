import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FacebookLogin from './Facebook';
import './style.css';

class Login extends Component {

    constructor(){
        super();
        this.state = ({
            email: null,
            message: null,
        })
    }

    siLogueo(data){
        
    }


    noLogueo(){
        console.log("No funciono");
    }

    autenticaUsuario = () => {
        const txtUsuario = document.getElementById("txtUsuario");
        const txtContrasena = document.getElementById("txtContrasena");
        const data = {
                        "email":txtUsuario.value,
                        "password": txtContrasena.value
                    };

        fetch('https://api-social-network-umg.herokuapp.com/users/authenticate',
                {
                    method: 'POST', // or 'PUT'
                    body: JSON.stringify(data), // data can be `string` or {object}!
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }
        ).then(
            this.setState ({
                email: data.email,
                message: data.message,
            })
            ,this.noLogueo);
    };

    componentDidMount() {
    };
    

    render(){
        const {email, message} = this.state;
        console.log(email)
        const LinkToTimeLine = React.forwardRef((props, ref) => 
            <Link innerRef={ref} to='/timeline' {...props}></Link>)

        return (
            <Grid>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <Row className="textbox">
                            <Col xs={12} md={12} lg={12}>
                                <TextField 
                                    fullWidth
                                    id="txtUsuario"
                                    label="Usuario"
                                    placeholder="Ingrese usuario"
                                    margin="normal"
                                    variant="outlined"
                                    value="christian.diaz.gonzalo@gmail"
                                />
                            </Col>
                        </Row>
                        <Row className="textbox">
                            <Col xs={12} md={12} lg={12}>
                                <TextField
                                    fullWidth
                                    id="txtContrasena"
                                    label="Contraseña"
                                    placeholder="Ingrese contraseña"
                                    margin="normal"
                                    variant="outlined"
                                    type="password"
                                    value="coco"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12} lg={12}>
                                <Button 
                                variant="contained" 
                                color="secondary" 
                                size="medium" 
                                fullWidth
                                onClick={this.autenticaUsuario}
                                component={email?LinkToTimeLine:"no"}
                                >
                                    Iniciar sesion
                                    <AccountCircleIcon className="iconoPersonal"
                                    fontSize="large"/>
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12} lg={12}>
                                <FacebookLogin></FacebookLogin>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
};

export default Login;