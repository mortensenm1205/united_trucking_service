import React, { Component } from 'react';
import HeaderNav from './Nav';
import HeaderImage from './Image';

class HeaderContainer extends Component {
    render() {
        return( 
            <header>
                <HeaderNav />
                <HeaderImage />
            </header>
        )
    }
}

export default HeaderContainer;