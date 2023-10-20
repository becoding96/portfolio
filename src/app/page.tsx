"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import FillBackground from "@/components/FillBackground/FillBackground";
import Navbar from "@/components/Navbar/Navbar";
import Main from "@/containers/Main/Main";
import About from "@/containers/About/About";
import Projects from "@/containers/Projects/Projects";
import Contact from "@/containers/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ScrollBar from "@/components/ScrollBar/ScrollBar";

export default function Home() {
  const Cursor = dynamic(() => import("@/components/Cursor/Cursor"), {
    ssr: false,
  });

  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Cursor />
      <FillBackground />
      <Navbar
        scrollToHome={() =>
          homeRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToAbout={() =>
          aboutRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToProjects={() =>
          projectsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToContact={() =>
          contactRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <ScrollBar />
      <Main homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  );
}
