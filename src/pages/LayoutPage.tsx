import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutPAge from "../components/AboutPAge";
import ServicesPage from "../components/ServicesPage";
import WorksPage from "../components/WorksPage";
import FreeQuote from "../components/FreeQuote";
import Footer from "../components/Footer";

export default function LayoutPage() {
  return (
    <div className="">
      <div >
        <Header />
      </div>
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
      <AboutPAge />
      </div>
      <div id="services">
      <ServicesPage />
      </div>
      <div id="work">
      <WorksPage />
      </div>
      <div id="request-quote">
      <FreeQuote />
      </div>
      <Footer />
    </div>
  );
}
