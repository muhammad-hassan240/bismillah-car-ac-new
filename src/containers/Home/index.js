
import React from 'react';
import NavigationMenu from '../../components/NavigationHeader';
import Banner from './Sections/Banner';
import OurService from './Sections/OurService';
import About from './Sections/About';
import CompanyLogos from './Sections/CompanyLogos';
import Footer from '../../components/Footer';
const Home = () => {
  return (
    <>
      <NavigationMenu />
      <Banner />
      <OurService />
      <About />
      <CompanyLogos />
      <Footer />
    </>
  );
};
export default Home;
