


import React from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/Hero-Section/HeroSection';
import Company from "../components/Company-Section/Company"

import AboutUs from "../components/About-Us/aboutus"
import Courses from "../components/Courses/Courses"
import ChooseUS from "../components/ChooseUs/ChooseUs"
import Features from '../components/Features/Features';

import FreeCourse from '../components/FreeCourse/FreeCourse'
import Testimonials from '../components/Testimonials/Testimonials'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'


const Home = () => {
  return (
  <>
   <Header />
   <HeroSection />
   <Company />
   <AboutUs />
   <Courses />
   <ChooseUS />
   <Features />
   <FreeCourse />
   <Testimonials />
   <Newsletter />
   <Footer />


  </>
     

     
  
  )
}

export default Home