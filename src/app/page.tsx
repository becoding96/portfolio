import Cursor from "@/components/Cursor/Cursor";
import FillBackground from "@/components/FillBackground/FillBackground";
import Navbar from "@/components/Navbar/Navbar";
import Main from "@/containers/Main/Main";

export default function Home() {
  return (
    <>
      <Cursor />
      <FillBackground />
      <Navbar />
      <Main />
      <div style={{ height: "1000px" }}></div>
    </>
  );
}
