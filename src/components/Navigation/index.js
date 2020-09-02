import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import PosedRouter from '../App';
// import posed from 'react-pose';
// import Landing from '../Landing';
// import SignIn from '../SignIn';
// import GuestDashboard from '../../containers/GuestDashboard';
import './nav.scss';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <ul className = 'auth-nav'>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
    

      <ul className = 'non-auth-nav'>
        <li className = 'non-auth-landing'>
          <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li className = 'non-auth-sign-in'>
          <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
        <li className = 'guest'>
          <Link to={ROUTES.CONTINUE_AS_GUEST}>Continue As Guest</Link>
        </li>
      </ul>
    
);

export default Navigation;


