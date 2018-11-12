import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav>
      <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
      <Link to="/contact">Contact</Link>{" "}
      <Link to="/services">Towing Services</Link>
    </nav>
  );
};

export default HeaderNav;
