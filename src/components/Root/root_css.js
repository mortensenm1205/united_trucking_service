import styled from 'styled-components';

/******************
====================
    Root (index.js)
====================
******************/

export const RootContain = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Lato;
    
    // This is for props.children.
    // These are just base style updates. 
    & > div {
        min-height: 100vh;
    }

    h3, p {
        margin: 0;
        padding: 0;
    }
`;