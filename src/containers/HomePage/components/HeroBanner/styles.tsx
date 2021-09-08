import styled,{keyframes} from "styled-components";
import { globalStyles } from './../../../../styles/global-styles';

interface IHeroWrapper {
    height: number
}

const horizontalBounce = keyframes`
    0%, 20%, 50%, 80%, 100% {transform: translateX(0);} 
    40% {transform: translateX(3rem);} 
    60% {transform: translateX(1.5rem);} 
`;

const verticalBounce = keyframes`
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
    40% {transform: translateY(-1rem);} 
    60% {transform: translateY(-0.5rem);} 
`;

export const Bounce = styled.span`
    display: inline-block;
    animation: ${verticalBounce} 1.5s;
    animation-delay: 2.0s;
`

export const HeroWrapper = styled.div<IHeroWrapper>`
    position: relative;
    height: calc(${props => props.height}px - 5rem);
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    transition: all 0.3s;
    min-height: 50rem;
    background: #141E30;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
`

export const HeroContainer = styled.div`
    font-family: 'Montserrat';
    top: calc(50% - 10rem);
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    width: 100%;
    padding: 0 5vw 0 5vw; 
`
		
export const Greeting = styled.div`
    color: ${globalStyles.core.green};
    font-size: 2rem;
    padding: 1.5rem 0 1.5rem 0;
    font-family: 'DM Serif Display';
    letter-spacing: 0.07rem;

    @media (min-width: 96rem) {
        font-size: 1.0vw;
    }
`

export const Name = styled.div`
    color: ${globalStyles.core.white};
    font-size: 4rem;
    padding: 1.5rem 0 1.5rem 0;
    font-family: 'DM Serif Display';
    animation: ${horizontalBounce} 1.5s;
    animation-delay: 1.5s;

    @media (min-width: 76.8rem) {
        font-size: 6rem;
    }

    @media (min-width: 96rem) {
        font-size: 4.0vw;
    }
`

export const Title = styled.div`
    color: ${globalStyles.core.grey};
    font-size: 1.5rem;
    padding: 1.5rem 0 1.5rem 0;
    font-family: 'Montserrat';
    letter-spacing: -0.07rem;

    @media (min-width: 96rem) {
        font-size: 4rem;
    }
`

export const SubTitle = styled.div`
    color: ${globalStyles.core.grey};
    font-size: 1.2rem;
    padding: 1.5rem 0 1.5rem 0;
    line-height: 2rem;
    font-family: 'Montserrat';

    @media (min-width: 96rem) {
        line-height: 3rem;
        font-size: 2rem;
    }
`

