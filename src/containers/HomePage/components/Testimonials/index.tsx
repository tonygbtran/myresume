import React from 'react';
import { BasicGrid, BasicRow, BasicCol } from '../../../../components/BasicGrid';
import ramzis from '../../../../assets/ramzis.jpg';
import babu from '../../../../assets/babu.jpg';
import anshu from '../../../../assets/anshu.png';
import michelle from '../../../../assets/michelle.jpg';
import danpolas from '../../../../assets/danpolas.jpg';
import danegonidis from '../../../../assets/danegonidis.jpg';
import {
    TestimonialCard,
    TestimonialWrapper,
    Name,
    Message,
    JobTitle,
    Image,
    ImgContainer,
    Heading
} from './styles';
import RotatingCard from '../../../../components/RotatingCard';

const Testimonials = () => {

    const testimonialData = [
        {
            image: babu,
            alt: 'babu photo',
            name: 'Babu Murugesan',
            jobTitle: 'Engineer Chapter Lead',
            message:  "You have been a role model in learning and adapting to change. Keep up the great work mate! We will miss working with you. Keep in touch! Thanks again and I wish you all the very best."
        },
        {
            image: michelle,
            alt: 'michelle photo',
            name: 'Michelle Swales',
            jobTitle: 'CSO Transformation Lead',
            message: "Thank-you for everything you have done and especially what you are leaving behind - the Sandpit - but also the tools you have lovingly built! You will always be welcome back - good luck with your new adventure."
        },
        {
            image: danegonidis,
            alt: 'dan egonidis photo',
            name: 'Daniel Egonidis',
            jobTitle: 'Engineer Chapter Lead',
            message: "It was awesome working with you. You did all the hard work mate. Really took hold of your career and went for it - all that studying and effort outside of work hours. You have achieved a lot, and to watch that has been awesome."
        },
        {
            image: ramzis,
            alt: 'ramzis photo',
            name: 'Ramzis Kariyaden',
            jobTitle: 'Product Owner & Engineer Chapter Lead',
            message: "I am so happy to see you grow over the last 2 years and how you had taken upon yourself to acquire skills to become a full stack developer. And a BIG thank you for all your support and hard work over the years and the crucial role you played in Transformers squad to deliver the awesome Lighthouse Self-Managed Portal which is adding alot of value and benefits to the Business Owners Ops group. \n Wish you all the very best in your role with Small Business Technology Team."
        },
        {
            image: anshu,
            alt: 'anshu photo',
            name: 'Anshu Bhatiani',
            jobTitle: 'Product Owner',
            message:  "It's been an absolute pleasure to work with you over the last nearly 2 years. I have personally learnt so much from you and felt like you really helped us uplift our cadence. I admire your passion, commitment, and willingness to share your knowledge in order to educate and help others. We will miss your energy and passion. Transformers Squad is and will always be very proud of what you have helped us accomplish. Wishing you all the very best for your new role and for the future. Stay in touch!"
        },
        {
            image: danpolas,
            alt: 'dan polas photo',
            name: 'Daniel Polas',
            jobTitle: 'Lighthouse Performance Lead',
            message: "I'm really proud of you and what you have achieved over the years. It hasn't always been smooth but you've really shown some great capability and growth in just a handful of years. You're not even close to your full potential yet - keep going like you have and you'll be able to do anything you want."
        },
    ];

    const buildTestimonials = (data: {image: string, alt:string, name: string, jobTitle: string, message: string}[]) => {
        let testimonalList = data.map(item => {

            const frontSide = (
                <TestimonialCard>
                    <ImgContainer>
                        <Image alt={item.alt} src={item.image}/>
                    </ImgContainer>
                    <Name>
                        {item.name}
                    </Name>
                    <JobTitle>
                        {item.jobTitle}
                    </JobTitle>
                </TestimonialCard>
            );

            const backSide = (
                <TestimonialCard>
                    <Message>
                        {`"${item.message}"`}
                    </Message>
                </TestimonialCard>
            );

            return(
                <BasicCol xs={12} sm={12} md={12} lg={4}>
                    <div style={{width: '100%'}}>
                        <RotatingCard
                            frontSide={frontSide}
                            backSide={backSide}
                            hasBackSide={true}
                            active={false}
                        />
                    </div>
                </BasicCol>
            );
        });

        return testimonalList;
    }

    return(
        <TestimonialWrapper>
            <BasicGrid fluid>
                <BasicRow>
                    <BasicCol xs={12} sm={12} md={12} lg={12}>
                        <Heading>
                            Testimonials
                        </Heading>
                    </BasicCol>
                </BasicRow>
                <BasicRow center={'xs'}>
                    {buildTestimonials(testimonialData)}
                </BasicRow>
            </BasicGrid>
        </TestimonialWrapper>
    );
}

export default Testimonials;