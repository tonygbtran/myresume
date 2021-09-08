import styled from "styled-components";
import { BasicRow } from '../../../../components/BasicGrid';
import { globalStyles } from './../../../../styles/global-styles';

export const ExperienceWrapper = styled.div`
    padding: 20rem 0;
    margin-top: 10rem;
    transform: skewY(-7deg);
    background: ${globalStyles.core.black};
    transition: all 0.3s;
`

export const Heading = styled.div`
    padding-left: 2rem;
    color: ${globalStyles.core.white};
    transform: skewY(7deg);
    font-family: ${globalStyles.core.secondaryFont};
`

export const LogoWrapper = styled.div`
    text-align: center;
    padding-bottom: 1rem;
    
    @media (min-width: 96rem) {
        text-align: left;
        padding-bottom: 8rem;
    }
`

export const Body = styled.div`
    line-height: 3rem;
    color: ${globalStyles.core.white};
    opacity: 1;
    transform: skewY(7deg);
    margin-top: 2rem;
    font-family: ${globalStyles.core.secondaryFont};    
    
    font-size: 1.2rem;

    @media (min-width: 96rem) {
        font-size: 0.65vw;
    }
`

export const JobWrapper = styled.div`
    padding-top: 5rem;
`
export const SubHeading = styled.div`
    padding-top: 1rem;
    font-weight: 500;
    opacity: 0.6;
    font-size: 1.2rem;

    @media (min-width: 96rem) {
        font-size: 0.65vw;
    }
`

export const Date = styled.div`
    font-size: 1.5rem;
    padding-top: 1rem;
    font-weight: 500;
`

export const JobHeading = styled.div`
    font-size: 1.6rem;
    font-weight: 700;

    @media (min-width: 96rem) {
        font-size: 0.8vw;
    }
`

export const Bullet = styled.i`
    color: ${globalStyles.core.green};
    transition: all .3s ease-in-out;
    padding: 0 3rem 0 3rem
`

export const Paragraph = styled.p`
    :hover {
        font-weight: 700;
    };
`

export const Logo = styled.img`
    transform: skewY(7deg);
    max-width: 15rem; 

    @media (min-width: 96rem) {
        max-width: 22rem; 
    }
`

export const BulletRow = styled(BasicRow)`
    &:hover ${Bullet} {
        padding: 0 1rem 0 5rem;
        transition: all .3s ease-in-out;
    }
`