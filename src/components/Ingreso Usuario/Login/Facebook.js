import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';

import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component{
    constructor(){
        super();
        this.state = {
            isLoggedIn: false,
            userID:' ',
            name:' ',
            email: ' ',
            picture:' ',
        }
    };

    responseFacebook = response => {
        console.log(response);
          this.setState ({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url,
        });
        console.log(this.state);
    }

    render () {
        const LinkRegistrar = React.forwardRef((props, ref) =>
         <Link innerRef={ref} to='/timeline' {...props} />);

        const {isLoggedIn, userID, name, email, picture} = this.state;

        let fbContent;
        if(this.state.isLoggedIn){
            fbContent = (
                <div>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        size="medium" 
                        fullWidth
                        component={LinkRegistrar}
                        >
                            Continuar como {name}
                    </Button>
                </div>
            );
        }else{
            fbContent = (
            <FacebookLogin
                textButton="Facebook"
                appId='1325659940930854'
                fields="name, email, picture"
                onClick = {this.componentClicked}
                callback={this.responseFacebook}
            ></FacebookLogin>
            );
        }
        return <div>{fbContent}</div>
    }
}