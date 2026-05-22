import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedMenu from "../components/FeaturedMenu";
import WhyChooseUs from "../components/WhyChooseUs";
import TestimonialsSection from "../components/TestimonialsSection";
import FranchiseSection from "../components/FranchiseSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedMenu />
      <WhyChooseUs />
      <TestimonialsSection />
      <FranchiseSection />
        <Footer />
    </div>
  );
};

export default Home;