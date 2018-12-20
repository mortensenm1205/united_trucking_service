import styled from 'styled-components';

export const About = styled.div`
    max-width: 350px;
    margin: 0 auto;

    @media (min-width: 850px) {
        max-width: 1200px;
    }
`;

export const AboutImageContainer = styled.figure`
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
 
    @media (min-width: 850px) {
        width: 40%;
        float: right;
        margin: 0 0 0 3%;
        line-height: 2;
    }
`;