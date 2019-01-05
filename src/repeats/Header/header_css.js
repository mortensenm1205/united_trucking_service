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
    // border: 2px solid;

    @media (min-width: 1100px) {
        margin: 0 0 5% 21%;
        max-width: 65%;
    }

    @media (min-width: 1300px) {
        margin: 0 0 5% 24%;
        max-width: 60%;
    }

    & > section:nth-child(1) {

        @media (min-width: 1100px) {
            margin: 0 6% 0 0;
        }

        @media (min-width: 1300px) {
            margin: 0 12% 0 0;
        }
    }

    & > section:nth-child(3) {
        
        @media (min-width: 1100px) {
            margin: 0 0 0 3%;
            width: 35%; 
        }

        @media (min-width: 1300px) {
            margin: 0 0 0 6%;
            width: 27%;
        }
    }
`;

export const HeadInfo = styled.section`

    & > p {
        text-align: center;
        font-size: 1.8rem;
        font-weight: 700;
        color: #a11e35;
        padding: 2.5% 0;
        margin: 0;
    } 

    @media (min-width: 1100px) {
        display: inline-block;
    }
`;

/******************
====================
    HeaderNav
====================
******************/

export const HeadNavContainer = styled.nav`
    background-color: #a11e35;
    text-align: center;
    position: fixed;
    top: ${props => (
        props.position === 0 || props.position < 265 ? 
            "300px" 
                : 
            "0px"
    )};
    z-index: 99;
    width: 100%;
    
    /* 
        Had to remove attrs from NavItem so that 
        we may apply media queries to the acitve style
    */
    .nav-active {
        border: 2px solid #fff;

        @media (min-width: 1100px) {
            border: none;
            border-bottom: 2px solid #fff;
        }
    }

    @media (min-width: 1100px) {
        padding: 1.2% 0;
    }
`;

export const NavItem = styled(NavLink)`
    color: white;
    text-decoration: none;
    cursor: pointer;
    padding: 4% 0;
    font-size: 1.3rem;
    display: block;

    @media (min-width: 1100px) {
        display: inline-block;
        padding: 0 0 0.5% 0;
        margin: 0 3%;
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

export const HeadInfoImage = styled.img.attrs(props => ({
    alt: "United Truck Service Logo",
    src: props.src
}))`
    background: no-repeat top center;
    width: 35%;

    @media (min-width: 1100px) {
        width: 32%;
    }
`; 