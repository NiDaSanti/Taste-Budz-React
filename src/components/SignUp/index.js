import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constants/routes';
import './sign-up.scss';

const SignUpPage = () => (
  <div className = 'signup-container'>
    <h1 className = 'signup-heading'>SignUp</h1>
      <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
            .set({
              username,
              email,
            });
          })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error, } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';

    return (
      <form className = 'form-container' onSubmit={this.onSubmit}>
      <input
        className = 'signup-form'
        name="username"
        value={username}
        onChange={this.onChange}
        type="text"
        placeholder="Full Name"
      />
      <input
        className = 'signup-form'
        name="email"
        value={email}
        onChange={this.onChange}
        type="text"
        placeholder="Email Address"
      />
      <input
      className = 'signup-form'
        name="passwordOne"
        value={passwordOne}
        onChange={this.onChange}
        type="password"
        placeholder="Password"
      />
      <input
        className = 'signup-form'
        name="passwordTwo"
        value={passwordTwo}
        onChange={this.onChange}
        type="password"
        placeholder="Confirm Password"
      />
      <button  className = 'signup-btn' disabled = {isInvalid}type="submit">Sign Up</button>

      {error && <p>{error.message}</p>}
    </form>
    );
  }
}

const SignUpLink = () => (
  <p className = 'sign-up'>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
