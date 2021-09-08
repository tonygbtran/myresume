import React from 'react';
import { BasicGrid, BasicRow, BasicCol } from '../../../../components/BasicGrid';
import profilePhoto from '../../../../assets/profilePhoto.jpg';
import {AboutWrapper, Heading, Body, ProfileImage, GlassCard } from './styles';

const About = () => {
    return (
        <AboutWrapper>
            <BasicGrid fluid>
            <GlassCard>
                <BasicRow middle={'xs'}>
                    <BasicCol xs={12} sm={12} md={12} lg={4}>
                        <div style={{textAlign: 'center'}}>
                            <ProfileImage alt="profilePhoto" src={profilePhoto} />
                        </div>
                    </BasicCol>
                    <BasicCol xs={12} sm={12} md={12} lg={8}>
                            <Heading>
                                About Me
                            </Heading>
                            <Body>
                                Being an individual that lives and breathes the growth mindset, I am forever updating my toolkit. I believe to become a successful engineer, one does not need to specialise in one language or framework, but rather, have the ability to leverage off multiple technologies and concepts to find a solution. I have achieved my previous objective of becoming a Full Stack developer, and my next step is to hone my current skills while also exploring other areas such as DevOps. From this, I hope to have a better understanding of both sides of the coin so that I can promote cohesion between the two sides.
                            </Body>
                    </BasicCol>
                </BasicRow>
                </GlassCard>
            </BasicGrid>
        </AboutWrapper>
    );
}

export default About;