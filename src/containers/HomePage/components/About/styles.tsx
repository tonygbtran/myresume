import styled from "styled-components";
import { globalStyles } from './../../../../styles/global-styles';

export const AboutWrapper = styled.div`
    margin: 1rem;
    padding: 5rem 0 5rem 0;
    transition: all 0.3s;
    @media (min-width: 96rem) {
        padding: 10rem 0 10rem 0;
    }
`
export const Heading = styled.div`
    color: white;
    font-size: 2.5rem;
    padding: 0 0 3rem 0;
    font-weight: 700;
    font-family: ${globalStyles.core.primaryFont};
    letter-spacing: 0.07rem;
    text-align: center;
    
    @media (min-width: 96rem) {
        font-size: 2.0vw;
        text-align: left;
        padding: 0 2rem 3rem 2rem;
    }
`

export const Body = styled.div`
    color: white;
    font-size: 1.3rem;
    opacity: 0.8;
    line-height: 2rem;
    font-family: ${globalStyles.core.secondaryFont};

    @media (min-width: 96rem) {
        font-size: 0.78vw;
        line-height: 3.2rem;
        padding: 0 2rem 0 2rem;
    }
`

export const ProfileImage = styled.img`
    margin: 5rem auto;
    max-width: 30rem;
    width: 50vw;
    border-radius: 100rem;
    margin-bottom: 5rem;
    box-shadow: 0 0rem 3rem rgb(255 255 255 / 60%);
    transform-origin: center;
    transition: all .5s ease-in-out;
    :hover {
        transform: scale(1.1);
    }
`

export const GlassCard = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 4rem;
    padding: 3rem 3rem 3rem 3rem;
    box-shadow: 
      0px 
      calc(var(--size) / 6) 
      calc(var(--size) / 3) 
      rgba(black, 0.1);
    backdrop-filter: blur(2px);
    transition: all 0.6s ease-in-out;
    overflow: hidden;
    &:hover {
        transform: translateY(-2rem);
        &:before {
            left: 200%;
        }
    }

    &:before {
        content: '';
        background: rgba(255, 255, 255, 0.2);
        width: 50%;
        height: 100%;
        top: 0%;
        transform: skew(45deg);
        position: absolute;
        left: -100%;
        transition: left 0.6s ease-in-out;
      }
    }

    @media (min-width: 96rem) {
        padding: 5rem;
    }
`