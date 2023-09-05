import dynamic from "next/dynamic";
import FillBackground from "@/components/FillBackground/FillBackground";
import Navbar from "@/components/Navbar/Navbar";
import Main from "@/containers/Main/Main";

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
    </>
  );
}
