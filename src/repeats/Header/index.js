import React from "react";
import { Header } from './header_css';
import HeaderInfo from './Info';
import HeaderNav from "./Nav";
import HeaderImage from "./Image";

const HeaderContainer = ({ url, location }) => {
  return (
    <Header>
      <HeaderInfo />
      <HeaderNav />
      <HeaderImage url={url} location={location} />
    </Header>
  );
};

export default HeaderContainer;
