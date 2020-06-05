import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

export const Header = () => {
  return (
    <div>
      <Navbar color="dark" dark>
        <div className="container">
          <NavbarBrand href="/">Stuff that needs to get done</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
};
