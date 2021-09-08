import React from 'react';
import { 
    NavigationWrapper, 
    MenuIconWrapper
} from './styles';

const NavBar = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <NavigationWrapper ref={ref}>
            <MenuIconWrapper>
                <i className="fas fa-bars fa-3x"></i>
            </MenuIconWrapper>
        </NavigationWrapper>
    );
});

export default NavBar;