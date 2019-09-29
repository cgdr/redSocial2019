import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Registrer from '@material-ui/icons/MenuBook'
import { withRouter } from 'react-router-dom';
import './style.css';

class Login extends Component {

    redirige = () => {
        this.props.history.push('./../Registrar/');
    }

    render(){

        return (
            <Grid>
                <Col>
                    <Row className="textbox">
                        <Col xs={12} md={12} lg={12}>
                            <TextField 
                                fullWidth
                                id="txtUsuario"
                                label="Usuario"
                                placeholder="Ingrese usuario"
                                margin="normal"
                                variant="outlined"
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
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <Link variant="contained" color="primary" size="medium" fullWidth>
                                Iniciar sesion
                                <AccountCircleIcon className="iconoPersonal"
                                fontSize="large"/>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                        <Link variant="contained"
                            color="primary" 
                            size="medium" 
                            fullWidth 
                            className="botones"
                            onClick={this.redirige}
                            >
                                Registrarse
                                <Registrer className="iconoPersonal"
                                fontSize="large"/>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Grid>
        );
    }
};

export default Login;