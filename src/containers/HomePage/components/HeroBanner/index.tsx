import React from 'react';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import { BasicGrid, BasicRow, BasicCol } from '../../../../components/BasicGrid';
import {Greeting, Name, Title, SubTitle, HeroWrapper, HeroContainer, Bounce} from './styles';

const HeroBanner = () => {
    
  const { height } = useWindowDimensions();

    return (
        <HeroWrapper height={height}>
            <HeroContainer>
                <BasicGrid fluid>
                    <BasicRow>
                        <BasicCol xs={12} sm={12} md={12} lg={12}>
                            <Greeting>
                                Hi, my name is            
                            </Greeting>
                        </BasicCol>
                    </BasicRow>
                    <BasicRow>
                        <BasicCol xs={12} sm={12} md={12} lg={12}>
                            <Name>
                                Tony Tran.            
                            </Name>
                        </BasicCol>
                    </BasicRow>
                    <BasicRow>
                        <BasicCol xs={12} sm={12} md={12} lg={12}>
                            <Title>
                                And I'm <Bounce>not</Bounce> your average Software Engineer          
                            </Title>
                        </BasicCol>
                    </BasicRow>
                    <BasicRow>
                        <BasicCol xs={12} sm={12} md={12} lg={8}>
                            <SubTitle>
                                I build fast and responsive User Interfaces to ensure user's have a positive experience. Currently employed at ANZ Bank, building a Commercial Lending Platform.  
                            </SubTitle>
                        </BasicCol>
                    </BasicRow>
                </BasicGrid>
            </HeroContainer>
        </HeroWrapper>
    );
}

		
export default HeroBanner;
