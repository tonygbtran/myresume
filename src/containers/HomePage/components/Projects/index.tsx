import React from 'react';
import businessRules from '../../../../assets/businessRules.png';
import history from '../../../../assets/history.png';
import onboarding from '../../../../assets/onboarding.png';
import peopleManager from '../../../../assets/peopleManager.png';
import reporting from '../../../../assets/reporting.png';
import trainingDashboard from '../../../../assets/trainingDashboard.png';
import { BasicGrid, BasicRow, BasicCol } from '../../../../components/BasicGrid';
import { 
    ProjectsWrapper,
    Image,
    StyledBasicCol,
    Heading
} from './styles';

const Projects = () => {
    return(
        <ProjectsWrapper>
            <BasicGrid fluid>

                <BasicRow>
                    <BasicCol xs={12} sm={12} md={12} lg={12}>
                        <Heading>
                            Recent Work
                        </Heading>
                    </BasicCol>
                </BasicRow>
                <BasicRow center={'lg'}>
                    <StyledBasicCol xs={12} sm={12} md={12} lg={4}>
                        <Image alt='peopleManager' src={peopleManager}/>
                    </StyledBasicCol>
                    <StyledBasicCol xs={12} sm={12} md={12} lg={4}>
                        <Image alt='trainingDashboard' src={trainingDashboard}/>
                    </StyledBasicCol>
                    <StyledBasicCol xs={12} sm={12} md={12} lg={4}>
                        <Image alt='reporting' src={reporting}/>
                    </StyledBasicCol>
                    <StyledBasicCol xs={12} sm={12} md={12} lg={4}>
                        <Image alt='businessRules' src={businessRules}/>
                    </StyledBasicCol>
                    <StyledBasicCol xs={12} sm={12} md={12} lg={4}>
                        <Image alt='history' src={history}/>
                    </StyledBasicCol>
                    <StyledBasicCol xs={12} sm={12} md={12} lg={4}>
                        <Image alt='onboarding' src={onboarding}/>
                    </StyledBasicCol>
                </BasicRow>
            </BasicGrid>
        </ProjectsWrapper>
    );
}

export default Projects;