import styled from "styled-components";
import { globalStyles } from './../../../../styles/global-styles';

export const FooterWrapper = styled.div`
    padding: 10rem 0 20rem;
    background: ${globalStyles.core.black};
    text-align: center;  
    transition: all 0.3s;
`

export const Heading = styled.div`
    background-image: linear-gradient(to right, #7ed56f, #28b485);    
    -webkit-background-clip: text;
    color: transparent;
    font-size: 3rem;
    font-family: ${globalStyles.core.primaryFont};

    @media (min-width: 96rem) {
        font-size: 3vw;
    }

`
export const Body = styled.div`
    color:  ${globalStyles.core.white};
    font-size: 1.5rem;
    padding: 5rem 3rem 0 3rem;
    font-family: ${globalStyles.core.secondaryFont};

    @media (min-width: 96rem) {
        font-size: 0.7vw;
    }
`
