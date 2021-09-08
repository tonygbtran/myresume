import styled from "styled-components";
import { globalStyles } from '../../../../styles/global-styles';
import { BasicCol } from '../../../../components/BasicGrid';

export const ProjectsWrapper = styled.div`
    margin-top: -16rem;
    padding: 40rem 0 20rem;
`

export const Image = styled.img`
    max-width: 34rem;
    border-radius: 1.5rem;
    box-shadow: 0 1.5rem 5rem rgb(0 0 0 / 40%);
    transform-origin: center;
    transition: all .2s ease-in-out;
    :hover {
        transform: scale(1.1);
    }
`

export const StyledBasicCol = styled(BasicCol)`
    padding: 1.7rem;
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