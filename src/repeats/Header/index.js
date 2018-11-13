import React from "react";
import HeaderNav from "./Nav";
import HeaderImage from "./Image";

const HeaderContainer = ({ url, location }) => {
  return (
    <header>
      <HeaderNav />
      <HeaderImage url={url} location={location} />
    </header>
  );
};

export default HeaderContainer;
