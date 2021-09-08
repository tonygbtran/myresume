import React, {useState, useEffect} from 'react';
import background from '../../../../assets/background.jpg';
import { Container, TextWrapper, Headline, SubHeadline, ParallaxImg } from './styles';

const Parallax = () => {

    const [yOff, setYOff] = useState(0);

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
        <>
            <Container>
                <ParallaxImg yOffset={yOff} alt={'parallaxBackground'} src={background}/>
                <TextWrapper>
                    <Headline>Parallax</Headline>
                    <SubHeadline>Scrolling Effect</SubHeadline>
                </TextWrapper>
            </Container>
        </>
    );
}

export default Parallax;