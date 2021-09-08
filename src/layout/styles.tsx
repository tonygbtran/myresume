import styled from 'styled-components';
import background from '../assets/background.jpg';

interface IPageWrapper {
    navHeight: number;
}



export const PageWrapper = styled.div<IPageWrapper>`
    background-size: cover;
    min-height: calc(100vh - ${(props: IPageWrapper) => props.navHeight ? (props.navHeight/10) : 5}rem);
`

export const ParallaxImg = styled.div`
    background:  url(${background});
    position: absolute;
    background-size: cover;
    background-attachment: fixed;
    top: -8.5rem;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: transform 0.3s;
`