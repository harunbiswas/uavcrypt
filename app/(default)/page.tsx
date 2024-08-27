export const metadata = {
  title: "UAVSync",
  description:
    "drone communication platform that connects all drones to each other in a swarm as well as connects them to a control system",
};

import Features from "@/components/features";
import Hero from "@/components/hero";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Features />
      <Zigzag />
      {/* <Testimonials /> */}
      <Newsletter />
    </>
  );
}
