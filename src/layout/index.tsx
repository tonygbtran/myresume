import React, {useState, useLayoutEffect, useEffect} from 'react';
import NavBar from '../components/NavBar/';
import { PageWrapper, ParallaxImg} from './styles';

interface ILayout {
    children: JSX.Element[];
}

const Layout = (props: ILayout) => {

    const [navHeight, setNavHeight] = useState(0);
    const [yOff, setYOff] = useState(0);
    
    const input = React.useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!input.current) return;
        setNavHeight(input.current.clientHeight);
    },[])

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll)
        return ()=> {
            window.removeEventListener('scroll', handleScroll);
        }
    }
    ,[]);

    const handleScroll = () => {
        setYOff(window.pageYOffset);
    }

    return ( 
    <div style={{position: 'relative'}}>
      <NavBar ref={input}/>
      <ParallaxImg yOffset={yOff}/>
      <PageWrapper navHeight={navHeight}>
          {props.children}
      </PageWrapper>
    </div>
    );
}

export default Layout;