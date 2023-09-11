import dynamic from "next/dynamic";
import FillBackground from "@/components/FillBackground/FillBackground";
import Navbar from "@/components/Navbar/Navbar";
import Main from "@/containers/Main/Main";
import About from "@/containers/About/About";
import Projects from "@/containers/Projects/Projects";
import Contact from "@/containers/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const Cursor = dynamic(() => import("@/components/Cursor/Cursor"), {
    ssr: false,
  });

  return (
    <>
      <Cursor />
      <FillBackground />
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
