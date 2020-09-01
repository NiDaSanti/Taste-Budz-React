import React from 'react';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';
import { withAuthorization } from '../Session';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

// const users = {name: null, age: 0, dateOfBirth: null, bio: ''};
// console.log('let me see myself ', users);


const HomePage = (props) => {
  console.log('I m looking for available ', props);
  return (<div></div>)
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
