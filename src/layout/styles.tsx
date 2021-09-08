import styled from 'styled-components';
import background from '../assets/background.jpg';

interface IPageWrapper {
    navHeight: number;
}

interface IParallaxImg {
    yOffset: number
}

export const PageWrapper = styled.div`
    background-repeat: repeat;
    background-size: cover;
    min-height: calc(100vh - ${(props: IPageWrapper) => props.navHeight ? (props.navHeight/10) : 5}rem);
`

export const ParallaxImg = styled.div<IParallaxImg>`

    background:  url(${background});

    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: transform 0.3s;
    transform: ${props => props.yOffset ? `translateY(${props.yOffset * -0.42}px)` : 'translateY(0)'};
`