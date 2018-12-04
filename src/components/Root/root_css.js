import styled from 'styled-components';

/******************
====================
    Root (index.js)
====================
******************/

export const RootContain = styled.div`
    font-family: Lato;
    
    & > div {
        min-height: 45vh;

        h1 {
            font-size: 2.6rem;
            text-align: center;
        }
    }
`;