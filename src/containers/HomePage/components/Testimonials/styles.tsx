import styled from "styled-components";
import { globalStyles } from './../../../../styles/global-styles';

export const TestimonialWrapper = styled.div`
    padding: 20rem 0 20rem;
    background: #141E30;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    font-family: ${globalStyles.core.secondaryFont};
    color: ${globalStyles.core.white};
`

export const Name = styled.div`
    font-size: 2rem;
    display: block;
    text-align: center;
    padding-top: 5rem;
    font-weight: 600;
`
export const JobTitle = styled.div`
    padding: 1rem 0 1rem 0;
    display: block;
    font-size: 1.5rem;
    text-align: center;
    opacity: 0.7;
    font-style: italic;
`
export const Message = styled.div`
    padding: 1rem 0 1rem 0;
    font-size: 1.5rem;
    font-style: italic;
    opacity: 0.6;
`

export const TestimonialCard = styled.div`
    background: white;
    border-radius: 1rem;
    padding: 5rem;
    background: ${globalStyles.core.darkGrey};
`

export const Image = styled.img`
    max-width: 15rem;
    border-radius: 100rem;
    object-fit: fill;
    box-shadow: 0 0 3rem rgb(255 255 255 / 40%);
`

export const ImgContainer = styled.div`
    text-align: center;
`


export const Heading = styled.div`
    color: ${globalStyles.core.white};
    font-size: 3rem;
    padding: 1rem 0 5rem 0;
    font-weight: 700;
    font-family: ${globalStyles.core.secondaryFont};
    letter-spacing: 0.07rem;
    text-align: center;

    @media (min-width: 76.8rem) {
        font-size: 5rem;
    }

    @media (min-width: 96rem) {
        font-size: 2.5vw;
    }
`