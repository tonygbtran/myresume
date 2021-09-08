import React from 'react';
import { globalStyles } from '../../styles/global-styles';
import { 
    NavigationWrapper, 
    MenuIconWrapper,
    MenuNavigationWrapper,
    MenuLink,
    MenuBtn 
} from './styles';

const NavBar = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <NavigationWrapper ref={ref}>
            <MenuIconWrapper>
                <i className="fas fa-hamburger fa-3x"></i>
            </MenuIconWrapper>
            <MenuNavigationWrapper>
                <MenuLink style={{color: globalStyles.core.white}}>
                    About
                </MenuLink>
                <MenuLink style={{color: globalStyles.core.white}}>
                    Projects
                </MenuLink>
                <MenuLink style={{color: globalStyles.core.white}}>
                    Stack
                </MenuLink>
                <MenuLink style={{color: globalStyles.core.white}}>
                    Objectives
                </MenuLink>
                <MenuBtn style={{color: globalStyles.core.green}}>
                    Connect
                </MenuBtn>
            </MenuNavigationWrapper>
        </NavigationWrapper>
    );
});

export default NavBar;