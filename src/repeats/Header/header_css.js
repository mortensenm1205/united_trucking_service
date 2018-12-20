import styled from 'styled-components';
import { NavLink } from "react-router-dom";

/******************
====================
    Header (index.js)
====================
******************/

export const Header = styled.header`
`;

export const HeadImageContainer = styled.figure`
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
`;

/******************
====================
    HeaderInfo
====================
******************/

export const HeadInfoContainer = styled.div`
    min-height: 40vh;
`;

/******************
====================
    HeaderNav
====================
******************/

export const HeadNavContainer = styled.nav`
    background-color: #a11e35;
    padding: 1.2% 0;
    text-align: center;
`;

export const NavItem = styled(NavLink).attrs({
    activeStyle: {
        borderBottom: "2px solid #fff"
    }
})`
    color: white;
    text-decoration: none;
    cursor: pointer;
    margin: 0 3%;
    padding: 0 0 0.5% 0;
    font-size: 1.3rem;
    display: block;

    @media (min-width: 850px) {
        display: inline-block;
    }
`;

/******************
====================
    HeaderImages
====================
******************/

export const HeadImage = styled.img.attrs(props => ({
    alt: props.location.pathname === "/" ? "/home" : props.location.pathname
}))`
    background-image: url(${props => props.src});
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
`;

export const HeadInfoImage = styled.img.attrs({
    alt: "United Truck Service Logo"
})`
    background-image: url(${props => props.src});
    width: 35%;
`; 