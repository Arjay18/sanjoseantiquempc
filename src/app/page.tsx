import HomeSlider from "@/components/HomeSlider";
import NewsSlider from "@/components/NewsSlider";

import ContactForm from "@/components/ContactForm";

import LatestProjects from "@/components/home/LatestProjects";
import Testimonials from "@/components/home/Testimonials";
import PMESSchedule from "@/components/home/PMESSchedule";
import HowToBecomeMember from "@/components/home/HowToBecomeMember";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import AssistanceProcess from "@/components/home/AssistanceProcess";

import { FadeIn } from "@/components/animations/FadeIn";


export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <FadeIn direction="up" delay={0}>
          <HomeSlider />
        </FadeIn>
        {/* spacer removed */}


        <FadeIn direction="up" delay={0.8}>
          <ServicesShowcase />
        </FadeIn>

        <FadeIn direction="up" delay={0.9}>
          <NewsSlider />
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
          <AssistanceProcess />
        </FadeIn>

        <FadeIn direction="up" delay={1.8}>
          <PMESSchedule />
        </FadeIn>

        <FadeIn direction="up" delay={2.0}>
          <ContactForm />
        </FadeIn>
      </div>
    </>
  );
}
