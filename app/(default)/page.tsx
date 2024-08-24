export const metadata = {
  title: "UAVCrypt",
  description:
    "drone communication platform that connects all drones to each other in a swarm as well as connects them to a control system",
};

import About from "@/components/About";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Newsletter from "@/components/newsletter";
import Testimonials from "@/components/testimonials";
import Zigzag from "@/components/zigzag";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  );
}
