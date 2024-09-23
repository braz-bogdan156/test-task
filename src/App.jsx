import Home from "./components/Home/Home";
import InfoBlock from "./components/InfoBlock";
import Services from "./components/Services";
import Stats from "./components/Stats";
import WhyChooseUS from "./components/WhyChooseUS";
import Portfolio from "./components/Portfolio";
import Trust from "./components/Trust";
import PricingPlans from "./components/PricingPlans";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import "./styles/App.scss";

function App() {
  return (
    <div className="page">
      <Header />
      <Home />
      <InfoBlock /> 
       <Services />
       <WhyChooseUS />
      <Stats />
      <Portfolio />
      <Trust />
      <PricingPlans />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
