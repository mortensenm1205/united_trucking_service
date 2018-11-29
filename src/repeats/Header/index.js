import React from "react";
import { HeaderContain } from './header_css';
import HeaderInfo from './Info';
import HeaderNav from "./Nav";
import HeaderImage from "./Image";

const HeaderContainer = ({ url, location }) => {
  return (
    <HeaderContain>
      <HeaderInfo />
      <HeaderNav />
      <HeaderImage url={url} location={location} />
    </HeaderContain>
  );
};

export default HeaderContainer;
