
import React from 'react';
import Banner from './Sections/Banner';
import OurService from './Sections/OurService';
import About from './Sections/About';
import CompanyLogos from './Sections/CompanyLogos';
import Footer from '../../components/Footer';
const Home = () => {
  return (
    <>
      <Banner />
      <OurService />
      <About />
      <CompanyLogos />
      <Footer />
    </>
  );
};
export default Home;
