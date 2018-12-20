import React from "react";
import { HeadNavContainer, NavItem } from './header_css';

const HeaderNav = () => {
  return (
    <HeadNavContainer>
      {/* Using activeClassName now so that we may use media queries */}
      <NavItem exact={true} to="/" activeClassName="nav-border">Home</NavItem>
      <NavItem to="/about" activeClassName="nav-border">About</NavItem>
      <NavItem to="/contact" activeClassName="nav-border">Contact</NavItem>
      <NavItem to="/services" activeClassName="nav-border">Towing Services</NavItem>
    </HeadNavContainer>
  );
};

export default HeaderNav;
