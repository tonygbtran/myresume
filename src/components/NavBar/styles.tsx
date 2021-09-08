import styled from 'styled-components';
import { globalStyles } from '../../styles/global-styles';

export const NavigationWrapper = styled.div`
    height: 10rem;
    background: ${globalStyles.core.black};
    display: block;
`

export const MenuIconWrapper = styled.div`
    color: white;
    display: inline-block;
    padding: 0.5rem 0 0 5rem;
    line-height: 10rem;
`

export const MenuNavigationWrapper = styled.div`
    color: white;
    float: right;
    line-height: 10rem;
    font-size: 1.75rem;
    font-family: ${globalStyles.core.secondaryFont};
`
export const MenuLink = styled.span`
    padding: 0 4rem 0 4rem;
`

export const MenuBtn = styled.span`
    padding: 0 5rem 0 4rem;
    font-family: ${globalStyles.core.secondaryFont};

`