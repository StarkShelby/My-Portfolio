import Hero from "@/components/Hero";
import Image from "next/image";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Approach from "@/components/Approach";
import Grid from "@/components/Grid";
import { navItems } from "@/data";
import { TestContext } from "node:test";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Testimonial />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
