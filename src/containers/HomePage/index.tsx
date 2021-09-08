import React from 'react';
import HeroBanner from './components/HeroBanner';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const HomePage = () => {
    return (
        <>
            <HeroBanner/>
            <About/>
            <Experience/>
            <Projects/>
            <Testimonials/>
            <Footer/>
        </>
    );
}

		
export default HomePage;
