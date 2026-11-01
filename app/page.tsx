import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Work from "@/components/Work";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Team from "@/components/Team";
import CollectiveCourses from "@/components/CollectiveCourses";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Intro />
        <Work />
        <Partners />
        <Services />
        <Testimonial />
        <Team />
        <CollectiveCourses />
      </main>
      <Footer />
    </>
  );
}
