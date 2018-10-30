import React from "react";
import Header from '../../UI/Header';
import Footer from '../../UI/Footer';

const HomeContainer = ({ children }) => {
    return (
        <div>
            <Header />
             {children}
            <Footer />
        </div>
    )
}

export default HomeContainer;