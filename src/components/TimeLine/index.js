import React, {Component} from 'react';
import Helmet from 'react-helmet';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import MenuIcon from '@material-ui/icons/Menu';


import './miCss.css';

class TimeLine extends Component {
    render (){
        return (
            <AppBar 
                position="static"
                color="secondary"
            >
                <Helmet>
                    <style>{'body { background-color: gray; }'}</style>
                </Helmet>
                <Toolbar className="barra">
                    <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className="title">
                        Noticias
                    </Typography>
                    <Button color="inherit">Iniciar sesión</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default TimeLine;