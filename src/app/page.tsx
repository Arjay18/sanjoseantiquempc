import HomeSlider from "@/components/HomeSlider";
import ContactForm from "@/components/ContactForm";
import AboutUs from "@/components/home/AboutUs";
import LatestProjects from "@/components/home/LatestProjects";
import Testimonials from "@/components/home/Testimonials";
import PMESSchedule from "@/components/home/PMESSchedule";
import HowToBecomeMember from "@/components/home/HowToBecomeMember";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import { FadeIn } from "@/components/animations/FadeIn";

export default function Home() {
  return (
    <>
      {/* Organization Schema Markup for Google Logo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "San Jose Antique MPC",
            "url": "https://sanjoseantiquempc.com./",
            "logo": "https://sanjoseantiquempc.com./images/433653723_8032419583452138_6238720083292977796_n.jpg"
          })
        }}
      />
      <div className="flex min-h-screen flex-col">
        <FadeIn direction="up" delay={0.2}>
          <HomeSlider />
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <AboutUs />
        </FadeIn>

        <FadeIn direction="up" delay={0.8}>
          <ServicesShowcase />
        </FadeIn>

        <FadeIn direction="up" delay={1.0}>
          <HowToBecomeMember />
        </FadeIn>

        <FadeIn direction="up" delay={1.2}>
          <Testimonials />
        </FadeIn>

        <FadeIn direction="up" delay={1.4}>
          <LatestProjects />
        </FadeIn>

        <FadeIn direction="up" delay={1.6}>
          <PMESSchedule />
        </FadeIn>

        <FadeIn direction="up" delay={1.8}>
          <ContactForm />
        </FadeIn>
      </div>
    </>
  );
}
