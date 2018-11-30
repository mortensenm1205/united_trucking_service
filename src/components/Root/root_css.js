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
        min-height: 45vh;
        display: flex;
        flex-direction: column;

        h1 {
            font-size: 2.6rem;
            flex-grow: 2;
            text-align: center;
        }
    }

    // These are basestyle removals. 
    // Might be better to get a normalize file. 
    h3, p {
        margin: 0;
        padding: 0;
    }
`;