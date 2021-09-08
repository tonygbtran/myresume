import styled from "styled-components";
import { globalStyles } from "../../../../styles/global-styles";

interface IParallaxImg {
    yOffset: number
}

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const TextWrapper = styled.div`
    text-align: center;
    z-index: 1;
    color: ${globalStyles.core.white};
`

export const Headline = styled.h1`
    font-size: 10rem;
    font-family: ${globalStyles.core.primaryFont};
`

export const SubHeadline = styled.h2`
    font-size: 5rem;
    font-family: ${globalStyles.core.secondaryFont};
`

export const ParallaxImg = styled.img<IParallaxImg>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    transform: ${props => props.yOffset ? `translateY(${props.yOffset * -0.5}px)` : 'translateY(0)'};
`

export const Overflow = styled.div`
    height: 200vh;
`