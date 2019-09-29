import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import './style.css';

class Registrar extends Component {
    render(){
        return (
            <Grid>
                <Col>
                    <Row className="textbox">
                        <Col xs={12} md={12} lg={12}>
                            FUNCIONO
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <Button variant="contained" color="primary" size="medium" fullWidth>
                                Iniciar sesion
                                <AccountCircleIcon className="iconoPersonal"
                                fontSize="large"/>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Grid>
        );
    }
};

export default Registrar;