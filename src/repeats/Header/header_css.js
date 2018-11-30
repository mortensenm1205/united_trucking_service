import styled from 'styled-components';
import { NavLink } from "react-router-dom";

/******************
====================
    Header (index.js)
====================
******************/

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

/******************
====================
    HeaderInfo
====================
******************/

export const HeadInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

/******************
====================
    HeaderNav
====================
******************/

export const HeadNavContainer = styled.nav`
    background-color: #a11e35;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const NavItem = styled(NavLink)`
    color: black;
    text-decoration: none;
    cursor: pointer;
    margin: 0 3%;
`

/******************
====================
    HeaderImage
====================
******************/

export const HeadImageContainer = styled.figure`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-height: 250px;
    overflow: hidden;

    img {
        width: 70%
    }
`;