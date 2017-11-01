import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as modal from "../../actions/modal";
import openPopup from './popup';
import {signInUrl} from '../../utils/url-generator'

class SignIn extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    handleClick(host) {
      this.signIn(host);    
    };

    signIn(host) {
        new Promise((resolve, reject) => {
            const popup = openPopup(signInUrl(host), 'sign in');

            window.addEventListener('message', function onMessage(e) {
            if (e.data.type === 'signin') {
                const jwt = e.data.data.jwt;
                setJwt(jwt);
                window.removeEventListener('message', this);
                popup.close();

                if (jwt) {
                dispatch({
                    type: SIGN_IN_SUCCESFULL,
                    jwt,
                });
                resolve(dispatch(getCurrentUser()));
                } else {
                reject();
                }
            }
        });
    });
};

    render() {
        return (
            <div>
                <div>
                    <h3>Sign in using</h3>
                </div>
                <div>
                    <input type="button" value="Github" onClick={() => this.handleClick('github')} />
                    <input type="button" value="Google" onClick={() => this.handleClick('google')} />
                    <input type="button" value="Facebook" onClick={() => this.handleClick('facebook')} />
                </div>
            </div>
        );
    }
}

export default connect(SignIn, state => state);
