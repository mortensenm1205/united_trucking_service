import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Services = styled.div`
    max-width: 350px;
    margin: 0 auto;

    @media (min-width: 850px) {
        max-width: 1200px;
    }
`;

export const ServicesContentWrapper = styled.section`
    line-height: 1.6;
    
    @media (min-width: 850px) {
        float: left;
        width: 50%;
        margin: 0 3% 0 0;
        line-height: 1.4;
    }
`;

export const ServicesImageContainer = styled.figure`
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
`;

export const TypesLink = styled(NavLink).attrs({
    activeStyle: {
        fontStyle: "italic",
    }
})`
    display: inline-block;
    width: 20%;
    vertical-align: top;
    text-decoration: none;
    color: #000;
    border: 2px solid;

    :hover {
        cusor: pointer;
    }
`;