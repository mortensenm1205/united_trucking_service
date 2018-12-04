import styled from 'styled-components';
import { NavLink } from "react-router-dom";

/******************
====================
    Header (index.js)
====================
******************/

export const Header = styled.header`
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
    padding: 0.8% 0;
    text-align: center;
`;

export const NavItem = styled(NavLink)`
    color: white;
    text-decoration: none;
    cursor: pointer;
    margin: 0 3%;
    font-size: 1.3rem;
`;

/******************
====================
    HeaderImages
====================
******************/

export const HeadImageContainer = styled.figure`
    margin: 0 auto;
    text-align: center;
`;

export const HeadImage = styled.img.attrs({
    alt: props => props.location.pathname === "/" ? "/home" : props.location.pathname
})`
    background-image: url(${props => props.src})
`;

export const HeadInfoImageContainer = styled(HeadImageContainer)`
    img {
        width: 35%;
    }
`; 