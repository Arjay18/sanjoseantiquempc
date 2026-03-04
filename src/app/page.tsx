import HomeSlider from "@/components/HomeSlider";
import ContactForm from "@/components/ContactForm";
import AboutUs from "@/components/home/AboutUs";
import LatestProjects from "@/components/home/LatestProjects";
import Testimonials from "@/components/home/Testimonials";
import PMESSchedule from "@/components/home/PMESSchedule";
import HowToBecomeMember from "@/components/home/HowToBecomeMember";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import Hero from "@/components/home/Hero";
import { FadeIn } from "@/components/animations/FadeIn";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <FadeIn direction="up" delay={0}>
          <Hero />
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <div className="bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-2">Our Latest Announcement</h2>
              <p className="text-gray-600 text-center mb-2">Stay updated with our latest news and updates</p>
            </div>
          </div>
        </FadeIn>

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
