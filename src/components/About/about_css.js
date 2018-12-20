import styled from 'styled-components';

export const About = styled.div`
    max-width: 350px;
    margin: 0 auto;

    @media (min-width: 750px) {
        max-width: 650px;
    }

    @media (min-width: 1100px) {
        max-width: 1000px;
    }
`;

export const AboutImageContainer = styled.figure`
    margin: 5% 0 0;
    position: relative;
    padding-top: 56.25%;
    overflow: hidden;
`;

export const AboutImg = styled.img.attrs(props => ({
    alt: props.location.pathname,
}))`
    background-image: url(${props => props.src});
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
`;

export const AboutCont = styled.div`
    line-height: 1.6;
    
    @media (min-width: 1100px) {
        width: 40%;
        float: right;
        margin: 0 0 0 3%;
        line-height: 2
    }
`;