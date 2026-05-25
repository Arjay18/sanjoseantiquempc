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
      <div className="flex min-h-screen flex-col">
        <FadeIn direction="up" delay={0}>
          <HomeSlider />
        </FadeIn>


        <FadeIn direction="up" delay={0.1}>
          <div className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn direction="up" delay={0.1}>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Stay Informed
                  </div>
                  <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-2">Our Latest Announcement</h2>
                  <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Latest Updates & News
                    <span className="block text-blue-600">From SJMPC</span>
                  </p>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Stay updated with the latest announcements, news, and updates from San Jose Multi-Purpose Cooperative.
                  </p>
                </div>
              </FadeIn>
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
