import styled from "styled-components";
import { globalStyles } from './../../../../styles/global-styles';

export const FooterWrapper = styled.div`
    padding: 10rem 0 3rem;
    background: #141E30;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
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

export const SubTitle = styled.div`
    padding-top: 17rem;
    color:  ${globalStyles.core.grey};
    font-size: 1.2rem;
    font-family: ${globalStyles.core.secondaryFont};
`
