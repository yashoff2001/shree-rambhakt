import BusinessSegments from "../components/business-segments";
import HeroSection from "../components/hero-section";
import Testimonials from "../components/testimonials";

function HomePage() {

  return (
    <>
      <HeroSection />
      <div className="container mx-auto">
        <BusinessSegments />
      </div>
      <Testimonials />
    </>
  )
}

export default HomePage;