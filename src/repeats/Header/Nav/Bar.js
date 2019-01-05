import React from "react";
import { HeadNavContainer, NavItem } from '../header_css';

const NavBar = ({ position, scroll }) => {
  return (
    <HeadNavContainer position={position} scroll={scroll} >
      {/* Using activeClassName now so that we may use media queries */}
      <NavItem exact={true} to="/" activeClassName="nav-active">Home</NavItem>
      <NavItem to="/about" activeClassName="nav-active">About</NavItem>
      <NavItem to="/contact" activeClassName="nav-active">Contact</NavItem>
      <NavItem to="/services" activeClassName="nav-active">Towing Services</NavItem>
    </HeadNavContainer>
  );
};

export default NavBar;
