import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Button,
} from 'reactstrap';

import { useAuth0 } from '../../api/auth0-context';

export const Header = () => {
  const auth0 = useAuth0();
  const {
    isLoading,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = auth0;

  let authContent = null;
  if (!isLoading) {
    if (!isAuthenticated) {
      authContent = (
        <Button onClick={loginWithRedirect}>Sign In</Button>
      );
    } else {
      authContent = (
        <div>
          <Button onClick={logout}>Sign Out</Button>
        </div>
      );
    }
  }

  return (
    <div>
      <Navbar color="dark" dark>
        <div className="container">
          <NavbarBrand href="/">Stuff that needs to get done</NavbarBrand>
          {authContent}
        </div>
      </Navbar>
    </div>
  );
};
