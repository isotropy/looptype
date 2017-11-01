import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as modal from "../../actions/modal";

class SignInButton extends Component {
    constructor() {
        super();
        this.signInClicked = this.signInClicked.bind(this);
    }

    signInClicked() {
        modal.openModal();
    }

    render() {
        return (
            <div>
                <input type="button" value="Sign In" onClick={this.signInClicked} />
            </div>
        );
    }
}

export default connect(SignInButton, state => state);
