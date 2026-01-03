import Banner from "../Banner/Banner";
import CustomerSatisfaction from "../CustomerSatisfaction/CustomerSatisfaction";
import HowItWorks from "../HowItWorks/HowItWorks";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import TrustedClients from "../TrustedClients/TrustedClients";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div className="mt-10 md:mt-4">
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <TrustedClients></TrustedClients>
      <WhyChooseUs></WhyChooseUs>
      <CustomerSatisfaction></CustomerSatisfaction>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
