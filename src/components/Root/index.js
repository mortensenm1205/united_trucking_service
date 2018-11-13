import React from "react";
import HeaderImage from "../../repeats/Image/";
import Header from "../../repeats/Header";
import Footer from "../../repeats/Footer";

const RootContainer = ({ children }) => {
  return (
    <div>
      <Header />
      <HeaderImage />
        {children}
      <Footer />
    </div>
  )
};

export default RootContainer;
