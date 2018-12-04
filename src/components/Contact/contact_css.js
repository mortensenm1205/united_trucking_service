import styled from 'styled-components';

/******************
====================
    Contact (index.js)
====================
******************/

export const Contact = styled.div`
    position: relative;
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
    position: absolute;
    bottom: 12%;
    left: 0;
    width: 40%;
    font-size: 2rem;
`;


/******************
====================
    ContactForm
====================
******************/

export const Form = styled.form`
    width: 45%;
    float: left;
`;

export const Label = styled.label`
    font-size: 1.3rem;
`;

export const Input = styled.input`
    display: block;
    margin: 5% 0;
    width: 85%;
    border: none;
    border-bottom: 2px solid;
`;

export const Button = styled.button`
    margin: 3.3% 0;
    border: 3px solid #a11e35;
    border-radius: 13px;
    background-color: #fff;
    color: #a11e35;
    padding: 3.3%;
    font-size: 1.3rem;

    :hover {
        cursor: pointer;
        border: 3px solid #fff;
        background-color: #a11e35;
        color: #fff;
    }
`;

/******************
====================
    ContactInfo
====================
******************/

export const Info = styled.div`
    margin: 0 0 5% 0;
`;