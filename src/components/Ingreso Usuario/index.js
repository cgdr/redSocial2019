import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import imgRedSocial from './../../imagenes/rs.jpg';
import Login from './Login';
import './style.css';

class InicioUsuario extends Component {

    render(){
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
                            <Col md={6} lg={6}>
                                <img src={imgRedSocial} className="imgLogin"/>
                            </Col>
                            <Col md={6} lg={6}>
                                <Login></Login>
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