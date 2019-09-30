import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
//Iconos
import imgRedSocial from './../../imagenes/rs.jpg';
//Componentes
import Login from './Login';
import './style.css';
import Registrar from './Registrar/index';

class InicioUsuario extends Component {

    constructor(){
        super();
        this.state = {
            inicioSesion: "IS",
        }
    }

    funcionRegistrar = () => {
        const inicioSesion = "RE";
        this.setState({inicioSesion});
    };

    funcionLogin = () => {
        const inicioSesion = "IS";
        this.setState({inicioSesion});
    };

    render(){
        const {inicioSesion} = this.state;
        return (
            <Grid justify="center" className="contenedor">
                <Grid xs={8} md={8}>
                    <Paper>
                        <Grid>
                            <Grid>
                                <Row>
                                    <Col xs={12}>
                                        <FormLabel>
                                            <h1 className="titulo">Red Social</h1>
                                        </FormLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={0} lg={9} className="contenedorImg">
                                        <img alt="" src={imgRedSocial} className="imgLogin"/>
                                    </Col>
                                    <Col md={12} lg={3}>
                                        <Row>
                                            <Col xs={6} md={6} lg={6}>
                                                <Button variant="contained"
                                                color={inicioSesion=="IS"?"secondary":"default"} 
                                                size="small" 
                                                fullWidth 
                                                className="botones"
                                                onClick = {this.funcionLogin}
                                                id="btnLogin"
                                                >
                                                    Iniciar sesión
                                                </Button>
                                            </Col>
                                            <Col xs={6} md={6} lg={6}>
                                                <Button variant="contained"
                                                color={inicioSesion=="IS"?"default":"secondary"}  
                                                size="small" 
                                                fullWidth 
                                                className="botones"
                                                onClick = {this.funcionRegistrar}
                                                id="btnRegistrar"
                                                >
                                                    Registrarse
                                                </Button>
                                            </Col>
                                        </Row>                                        
                                        {inicioSesion=="IS" ? <Login></Login> : <Registrar></Registrar>}
                                    </Col>
                                </Row>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
};

export default InicioUsuario;