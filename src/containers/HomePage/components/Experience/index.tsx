import React from 'react';
import moment from 'moment';
import { BasicGrid, BasicRow, BasicCol } from '../../../../components/BasicGrid';
import anzlogo from '../../../../assets/anzlogo.png';
import { 
    ExperienceWrapper, 
    LogoWrapper, 
    Heading, 
    Body, 
    JobWrapper, 
    SubHeading, 
    JobHeading, 
    Paragraph, 
    Bullet,
    Logo,
    BulletRow 
} from './styles';

interface IExpData {
    jobTitle: string,
    department: string,
    employmentType: string,
    startDate: string,
    endDate: string | null,
    responsibilities: string[];
}

const expData = [
    {
        jobTitle: 'Engineer - Full Stack',
        department: 'Business Lending',
        employmentType: 'Full-time',
        startDate: '2021-08-09',
        endDate: null,
        responsibilities: [
            'Building and deploying a Commercial Lending Platform.',
            'Designing and building API pipelines for dataflow.',
            'Adding functionality/components to CLP UI via JSON.'
        ]
    },
    {
        jobTitle: 'Engineer - Front End',
        department: 'Small Business Banking & Business Banking',
        employmentType: 'Full-time',
        startDate: '2018-07-01',
        endDate: '2021-08-08',
        responsibilities: [
            'Designed, built and deployed APRA Remdiation Application.',
            'Designed and built a capacity management and skill management web application.',
            'Designed and built a web portal for COVID-19 Relief Package and JobKeeper applications.',
            'Front-end: ReactJS (HTML, CSS Styled Components, Javascript) following UI/UX principles.',
            'When required, jumped in to help back-end engineers with database changes or API creation.',
            'Worked in AGILE framework in 2 or 3 week sprints.'
        ]
    },
    {
        jobTitle: 'Automation Expert',
        department: 'Channel Automation',
        employmentType: 'Full-time',
        startDate: '2016-11-01',
        endDate: '2018-06-30',
        responsibilities: [
            'Developed and Tested new versions of Mortgage Settlement Application.',
            'Developed and Tested new versions of Secured Assessment Application.',
            'Stood up relational databases, creating and altering tables, views and stored procedures.',
            'Worked in an AGILE environment, ensuring a consistent and unimpaired product delivery.'
        ]
    }
];

const buildExpList = (data: IExpData[]) => {
    const list = data.map((item,index) =>
        <BasicRow key={`${item.jobTitle}-${index}`}>
                <BasicCol xs={12} sm={12} md={12} lg={12}>
                    <JobWrapper>
                        <Heading>
                            <JobHeading>
                                {item.jobTitle}
                            </JobHeading>
                            <SubHeading>
                                {item.employmentType}
                            </SubHeading>
                            <SubHeading>
                                {`${moment(item.startDate).format("MMM YYYY")} - ${!!item.endDate ? moment(item.endDate).format("MMM YYYY") : 'Present'}`}
                            </SubHeading>
                        </Heading>
                        <Body>
                            <BasicGrid fluid>
                                {item.responsibilities.map(item => {
                                    return(
                                        <BulletRow>
                                            <BasicCol xs={2} sm={1} md={1} lg={1}>
                                                <Bullet className="fas fa-caret-right"/>    
                                            </BasicCol>
                                            <BasicCol xs={10} sm={11} md={11} lg={11}>
                                                <Paragraph>{item}</Paragraph>
                                            </BasicCol>
                                        </BulletRow>
                                    );
                                })}
                            </BasicGrid>
                        </Body>
                    </JobWrapper>
                </BasicCol>
            </BasicRow>
    );
    return list;
}

const Experience = () => {



    return (
        <ExperienceWrapper>
            <BasicGrid fluid>
                <BasicRow>
                    <BasicCol xs={12} sm={12} md={12} lg={2}>
                        <LogoWrapper>
                            <Logo alt={'anzLogo'} src={anzlogo}/>
                        </LogoWrapper>
                    </BasicCol>
                </BasicRow>
                {buildExpList(expData)}
            </BasicGrid>
        </ExperienceWrapper>
    );
}

export default Experience;