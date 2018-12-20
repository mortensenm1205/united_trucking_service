import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Services = styled.div`
    max-width: 350px;
    margin: 0 auto;

    @media (min-width: 750px) {
        max-width: 650px;
    }

    @media (min-width: 1100px) {
        max-width: 1000px;
    }
`;

export const ServicesContentWrapper = styled.section`
    line-height: 1.6;
    
    @media (min-width: 1100px) {
        float: left;
        width: 50%;
        margin: 0 3% 0 0;
        line-height: 1.4;
    }
`;

export const ServicesImageContainer = styled.figure`
    margin: 5% 0 0;
    position: relative;
    padding-top: 56.25%;
    overflow: hidden;
`;

export const ServicesImg = styled.img.attrs(props => ({
    alt: props.location.pathname,
}))`
    background-image: url(${props => props.src});
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
`

export const TypesNavigation = styled.nav`
    text-align: center;

    .types-nav-active {
        font-style: italic;
        background-color: #a11e35;
        color: #fff;

        @media (min-width: 1100px) {
            background-color: #fff;
            color: #a11e35;
        }
    }
`;

export const TypesLink = styled(NavLink)`
    display: block;
    width: 100%;
    margin: 2% auto;
    padding: 3%;
    border: 3px solid #a11e35;
    border-radius: 13px;
    background-color: #fff;
    color: #a11e35;
    text-decoration: none;
    box-sizing: border-box;
    
    @media (min-width: 1100px) {
        display: inline-block;
        width: 20%;
        border: none;
        margin: 0 2%;
        color: #000;

    }
`;