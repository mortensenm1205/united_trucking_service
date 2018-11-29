import React from "react";
import './header.css'
import HeaderInfo from './Info';
import HeaderNav from "./Nav";
import HeaderImage from "./Image";

const HeaderContainer = ({ url, location }) => {
  return (
    <header className="header_container">
      <HeaderInfo />
      <HeaderNav />
      <HeaderImage url={url} location={location} />
    </header>
  );
};

export default HeaderContainer;
