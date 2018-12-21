import styled from 'styled-components';

/******************
====================
    Root (index.js)
====================
******************/

export const RootContain = styled.div`
    font-family: Lato;
    margin: 0 auto;
    
    & > div {
        min-height: 145vh;
    }

    h1 {
        font-size: 1.8rem;
        text-align: center;
        color: #a11e35;
        margin: 5% 0 7%;
    }

    @media (min-width: 750px) {
        & > div {
            min-height: 110vh;
        }
    }

    @media (min-width: 1100px) {
        & > div {
            min-height: 150vh;
        }

        h1 {
            font-size: 2.6rem;
            margin: 5% 0;
        }
    }
`;