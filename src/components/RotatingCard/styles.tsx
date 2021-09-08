import styled from 'styled-components';

export const Card = styled.div`
    perspective: 60rem;
    -moz-perspective: 60rem;
    position: relative;
    margin: 1.5rem auto;
    max-width: 37rem;
    height: 40rem;
    cursor: pointer;
    transition: all .2s ease;
    :hover {
        transform: translateY(-2rem);
    }
`

interface IFrontBackSide {
    active: boolean;
    isFlipped: boolean;
}

export const FrontSide = styled.div<IFrontBackSide>`
    transition: all .5s ease;
    border-radius: 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    overflow: hidden;
    width: 100%;
    box-shadow: 0 ${props => props.active ? "1rem 1rem" : "0.25rem 0.25rem"} rgba(0, 0, 0, 0.2);
    transition: all .5s ease;
    transform: ${props => props.active ? "translateY(-0.5rem) rotateY(0)" : (props => props.isFlipped ? "rotateY(180deg) translateY(0rem)" : "rotateY(0) translateY(0rem)")};
`

export const BackSide = styled.div<IFrontBackSide>`
    background-image: black;
    transition: all .5s ease;
    border-radius: 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    overflow: hidden;
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2);
    width: 100%;
    transform: ${props => props.active ? "rotateY(-180deg)" : (props => props.isFlipped ? "rotateY(0)" : "rotateY(-180deg)")};

`

interface ISide {
    active?: boolean;
}

export const FrontSideStatic = styled.div<ISide>`
    background-image: white;
    border-radius: 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    overflow: hidden;
    box-shadow: 0 ${props => props.active ? "1rem 1rem" : "0.25rem 0.25rem"} rgba(0, 0, 0, 0.2);
    transform: ${props => props.active ? "translateY(-0.5rem)" : "translateY(0rem)"};
    width: 100%;
    transition: all .5s ease;
`