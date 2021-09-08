import styled from 'styled-components';
import { globalStyles } from '../../styles/global-styles';

export const NavigationWrapper = styled.div`
    height: 8.5rem;
    background: #141E30;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    display: block;
`

export const MenuIconWrapper = styled.div`
    color: white;
    display: inline-block;
    padding: 0 0 0 3rem;
    line-height: 10rem;
    color: ${globalStyles.core.white};
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