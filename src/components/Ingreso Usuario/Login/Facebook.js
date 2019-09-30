import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component{
    state = {
        isLoggedIn: false,
        userID:' ',
        name:' ',
        email: ' ',
        picture:' ',
    }

    
    componentClicked = () => console.log('Clickerd');

    responseFacebook = response => {
        console.log(response);
          this.setState = ({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url,
        });
        console.log(this.state);
    }

    render () {

        let fbContent;
        if(this.state.isLoggedIn){
            fbContent = (
                <div>hola</div>
            );
        }else{
            fbContent = (
            <FacebookLogin
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