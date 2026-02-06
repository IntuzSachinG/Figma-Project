import AboutSection from "@/components/About-Section/aboutPage";
import TopInfoBanner from "@/components/Banner-Section/bannerSection";
import BlogSection from "@/components/Blog/blog";
import ClinicPartners from "@/components/Clinic-Partners/clinicPartner";
import AppointmentBanner from "@/components/CTA/ctaBanner";
import DentistSection from "@/components/Dentist-Section/bestDentist";
import Footer from "@/components/Footer/footer";
import Hero from "@/components/Hero-Section/heroSection";
import MainHeader from "@/components/Main-Header/mainHeader";
import MainNavbar from "@/components/Navbar-Section/navbarSection";
import ServicesSection from "@/components/Service-List/serviceList";
import StatsSection from "@/components/Statistic/statSection";
import TestimonialSection from "@/components/Testimonal/testSection";

export default function HomePage() {
  return (
    <>
    
   <div className="container">
    <div className="mainheader">
        <MainHeader/>
        </div>
        {/* <TopInfoBanner />
        <MainNavbar />
        <Hero /> */}
       
        <ClinicPartners />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <DentistSection />
        <AppointmentBanner />
        <TestimonialSection />
        <BlogSection />
        <Footer />
      </div>
    </>
  );
}
