import React from 'react';
import FBLogin from '../FBLogin'

export default class Login extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <p>Welcome to the Facebook SDK for React Native!</p>
                <FBLogin />
            </div>
        );
    }
}
