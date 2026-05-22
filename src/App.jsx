import Header from "./components/Header";
import Hero from "./components/HeroSection";
import FeaturedMenu from "./components/FeaturedMenu";
import WhyChooseUs from "./components/WhyChooseUs";
import TestimonialsSection from "./components/TestimonialsSection";
import FranchiseSection from "./components/FranchiseSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      <Header />

      {/* HOME */}
      <section id="home">
        <Hero />
      </section>

      {/* MENU */}
      <section id="menu">
        <FeaturedMenu />
      </section>

      {/* ABOUT */}
      <section id="about">
        <WhyChooseUs />
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>

      {/* FRANCHISE */}
      <section id="franchise">
        <FranchiseSection />
      </section>
      <ContactSection />

      <Footer />

    </div>
  );
}

export default App;