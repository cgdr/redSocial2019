import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FacebookLogin from './Facebook'
import './style.css';
import { tsConstructorType } from '@babel/types';

class Login extends Component {
    render(){
        const LinkRegistrar = React.forwardRef((props, ref) => <Link innerRef={ref} to='/registrar' {...props} />);
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
                                <Button 
                                variant="contained" 
                                color="secondary" 
                                size="medium" 
                                fullWidth>
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