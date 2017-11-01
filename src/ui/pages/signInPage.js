import React, { Component } from "react";
import {protocolAndHost} from "../utils/url-generator";

// This route is supposed to be opened in a new window, after signing in with
// OAuth. It should return a postMessage to the parent
export default class SignInPage extends React.PureComponent {

  constructor(props) {
    super(props);

    const query = props.location.search.split('?code=');    

    if (query) {
      const jwt = query[1];
      if (window.opener) {
        this.state = {
          jwt,
        };
        if (window.opener.location.origin === window.location.origin) {
          window.opener.postMessage(
            {
              type: 'signin',
              data: {
                jwt,
              },
            },
            protocolAndHost()
          );
        }
        return;
      }
      this.state = {
        redirect: '/',
      };
      return;
    }

    this.state = {
      error: 'no message received',
    };
  }

  getMessage() {
    if (this.state.redirect) {
      document.location.href = "http://localhost:3000";
      return 'Redirecting...';
    }
    if (this.state.error) {
      return `Something went wrong while signing in: ${this.state.error}`;
    }
    if (this.state.jwt) return 'Signing in...';
    if (this.state.jwt == null) {
      setTimeout(() => {
        document.location.href = signInUrl();
      }, 2000);
      return 'Redirecting to sign in page...';
    }

    return 'Hey';
  };

  render() {
    return (
      <Centered horizontal vertical>
        <Title>{this.getMessage()}</Title>
      </Centered>
    );
  }
}
