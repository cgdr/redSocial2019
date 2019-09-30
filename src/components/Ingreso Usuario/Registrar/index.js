import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from "date-fns/locale/es";
import 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
//Iconos
import Guardar from '@material-ui/icons/Save';
import Cancelar from '@material-ui/icons/Cancel';

import './style.css';

class Registrar extends Component {
    handleDateChange = date => {
        const selectedDate = date;
        this.setState({selectedDate});
    };

    constructor(){
        super();
        this.state = {
            selectedDate: new Date(),
        }
    }

    render(){
        const {selectedDate} = this.state;
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <Row className="textbox">
                            <Col xs={12} md={12} lg={12}>
                                <TextField 
                                    fullWidth
                                    id="txtNombre"
                                    label="Nombre(s)"
                                    placeholder="Ingrese su nombre(s)"
                                    margin="normal"
                                    variant="outlined"
                                    autoComplete="false"
                                />
                            </Col>
                        </Row>
                        <Row className="textbox">
                            <Col xs={12} md={12} lg={12}>
                                <TextField
                                    fullWidth
                                    id="txtApellido"
                                    label="Apellido"
                                    placeholder="Ingrese su apellido(s)"
                                    margin="normal"
                                    variant="outlined"
                                    autoComplete="false"
                                />
                            </Col>
                        </Row>
                        <Row className="textbox">
                            <Col xs={12} md={12} lg={12}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                                    <KeyboardDatePicker
                                        fullWidth
                                        disableFuture
                                        disableToolbar
                                        autoOk
                                        variant="inline"
                                        inputVariant="outlined"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        label="Fecha de nacimiento"
                                        value={selectedDate}
                                        onChange={this.handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        InputAdornmentProps={{ position: "start" }}
                                        autoComplete="false"
                                    />
                                </MuiPickersUtilsProvider>
                            </Col>
                        </Row>
                        <Row className="textbox">
                            <Col xs={12} md={12} lg={12}>
                                <TextField
                                    fullWidth
                                    id="txtEdad"
                                    label="Edad"
                                    placeholder="Ingrese su edad"
                                    margin="normal"
                                    variant="outlined"
                                    type='number'
                                    autoComplete="false"
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
                                    Guardar
                                    <Guardar className="iconoPersonal"
                                    fontSize="large"/>
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12} lg={12}>
                                <Button 
                                variant="contained" 
                                color="default" 
                                size="medium" 
                                fullWidth>
                                    Cancelar
                                    <Cancelar className="iconoPersonal"
                                    fontSize="large"/>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
};

export default Registrar;