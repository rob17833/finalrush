import React from 'react';
import {
  Navbar,
  Nav, 
  NavbarBrand,
  NavLink,
  NavItem
} from 'reactstrap';

const Header = () => (
  <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Wild Circus</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="">Links</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>


);

export default Header;