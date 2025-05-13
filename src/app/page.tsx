'use client'

import About from "@/blocks/About";
import Education from "@/blocks/Education";
import Experience from "@/blocks/Experience";
import Navbar from "@/blocks/Navbar";
import Profile from "@/blocks/Profile";
import Projects from "@/blocks/Projects";
import Works from "@/blocks/Works";
import Contact from "@/components/Contact";
import { contactAtom } from "@/lib/store";
import { useAtom } from "jotai";

export default function Home() {

  const [visibiity, setVisibility] = useAtom(contactAtom)

  return (
    <main className="flex min-h-screen">
      {
        visibiity && <Contact />
      }
      <div className="md:px-[20%] px-[5%] flex w-full flex-col items-center gap-8">
        <Navbar />
        <Profile />
        <About />
        <Experience />
        <Education />
        <Works />
        <Projects />
      </div>
    </main>
  );
}
