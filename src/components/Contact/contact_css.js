import styled from 'styled-components';

/******************
====================
    Contact (index.js)
====================
******************/

export const Contact = styled.div`
    position: relative;
    max-width: 350px;
    margin: 0 auto;

    @media (min-width: 750px) {
        max-width: 650px;
    }

    @media (min-width: 1100px) {
        max-width: 1000px;
    }
`;

/******************
====================
    ContactImages
====================
******************/

export const ContactImageContainer = styled.figure`
    position: relative;
    padding-top: 56.25%;
    overflow: hidden;
`;

export const ContactImg = styled.img.attrs(props => ({
    alt: props.location.pathname,
}))`
    background-image: url(${props => props.src});
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
`

/******************
====================
    ContactSuccess
====================
******************/

export const Success = styled.div`
    font-size: 1.3rem;

    @media (min-width: 1100px) {
        width: 40%;
        font-size: 2rem;
        position: absolute;
        bottom: -6%;
        left: 0;
    }
`;


/******************
====================
    ContactForm
====================
******************/

export const Form = styled.form`

    @media (min-width: 1100px) {
        width: 45%;
        float: left;
    }
`;

export const Label = styled.label`
    font-size: 1.3rem;
`;

export const Input = styled.input`
    display: block;
    margin: 5% 0;
    width: 100%;
    border: none;
    border-bottom: 2px solid;

    @media (min-width: 1000px) {
        width: 85%;
    }
`;

export const Button = styled.button`
    margin: 3.3% 0;
    border: 3px solid #a11e35;
    border-radius: 13px;
    background-color: #fff;
    color: #a11e35;
    padding: 3.3%;
    font-size: 1.3rem;
    width: 100%; 

    :hover {
        cursor: pointer;
        border: 3px solid #fff;
        background-color: #a11e35;
        color: #fff;
    }

    @media (min-width: 1100px) {
        width: auto;
    }

`;

/******************
====================
    ContactInfo
====================
******************/

export const Info = styled.div`
    margin: 0 0 5% 0;
    line-height: 1.6;

    &&& {
        min-height: auto;
    }
`;