import React from "react";
import { HeadNavContainer, NavItem } from './header_css';

const HeaderNav = () => {
  return (
    <HeadNavContainer>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/contact">Contact</NavItem>
      <NavItem to="/services">Towing Services</NavItem>
    </HeadNavContainer>
  );
};

export default HeaderNav;
