import AboutSection from "@/components/About-Section/aboutPage";
import BlogSection from "@/components/Blog/blog";
import ClinicPartners from "@/components/Clinic-Partners/clinicPartner";
import AppointmentBanner from "@/components/CTA/ctaBanner";
import DentistSection from "@/components/Dentist-Section/bestDentist";
import Footer from "@/components/Footer/footer";

import MainHeader from "@/components/Main-Header/mainHeader";

import ServicesSection from "@/components/Service-List/serviceList";
import StatsSection from "@/components/Statistic/statSection";
import TestimonialSection from "@/components/Testimonal/testSection";

export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <>
      <div className="container">
        <div className="mainheader">
          <MainHeader />
        </div>

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
