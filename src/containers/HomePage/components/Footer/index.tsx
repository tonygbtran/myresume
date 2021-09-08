import React from 'react';
import { BasicGrid, BasicRow, BasicCol } from '../../../../components/BasicGrid';
import {FooterWrapper, Heading, Body} from './styles';

const Footer = () => {
    return (
        <FooterWrapper>
            <BasicGrid fluid>
                <BasicRow center={'lg'}>
                    <BasicCol xs={12} sm={11} md={9} lg={7}>
                        <Heading>
                            Like what you see? 
                        </Heading>
                        <Body>
                            Although I am currently not looking for any new opportunities, I'm always open to have a conversation.
                        </Body>
                        <Body>
                            Tony.Tran@live.com.au
                        </Body>
                        <Body>
                            +61 421 690 431
                        </Body>
                    </BasicCol>
                </BasicRow>
            </BasicGrid>
        </FooterWrapper>
    );
}

export default Footer;