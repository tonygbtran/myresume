import React, {useState, useLayoutEffect} from 'react';
import NavBar from '../components/NavBar/';
import { PageWrapper, ParallaxImg} from './styles';

interface ILayout {
    children: JSX.Element[];
}

const Layout = (props: ILayout) => {

    const [navHeight, setNavHeight] = useState(0);
    
    const input = React.useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!input.current) return;
        setNavHeight(input.current.clientHeight);
    },[])

    return ( 
    <div style={{position: 'relative'}}>
      <NavBar ref={input}/>
      <ParallaxImg/>
      <PageWrapper navHeight={navHeight}>
          {props.children}
      </PageWrapper>
    </div>
    );
}

export default Layout;