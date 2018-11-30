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
    align-items: center;
    min-height: 35vh;
`;

export const HeadInfoContent = styled.div`
    text-align: center;
`;

export const HeadInfoLeft = styled(HeadInfoContent)`
`;

export const HeadInfoRight = styled(HeadInfoContent)`
    border: 2px solid red;
`;

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
    padding: 0.8% 0;
`;

export const NavItem = styled(NavLink)`
    color: white;
    text-decoration: none;
    cursor: pointer;
    margin: 0 3%;
    font-size: 1.3rem;
    font-family: Lato;
`;

/******************
====================
    HeaderImages
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
        width: 100%
    }
`;

export const HeadInfoImageContainer = styled(HeadImageContainer)`
    max-height: 75px;
    margin: 0;
    flex-grow: 4;
`;