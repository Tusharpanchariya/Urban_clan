// src/pages/Home.tsx

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/Services';
import FeaturesSection from '../components/FeaturesSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
