import styled from 'styled-components';

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
    width: 40%;
    float: right;
    margin: 0 0 0 3%;
    line-height: 2;
`;