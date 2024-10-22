'use client'
import { useState, useEffect } from "react";
import Navbar from "./ui/navbar/nav-bar";
import About from "./ui/landing-page/about";
import Dropbox from "./ui/landing-page/dropbox";
import CustomLetter from "./ui/landing-page/customized-lettering";
import Content from "./ui/landing-page/content";
import Document from "./ui/landing-page/document";
import Faster from "./ui/landing-page/faster";
import Container from "./ui/landing-page/container";
import Aspect from "./ui/landing-page/aspect";
import Discovery from "./ui/landing-page/discovery";
import Footer from "./ui/landing-page/footer";
export default function Home() {
  const [position, setPosition] = useState<"sticky" | "static">('sticky')

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPercentage = Math.min(scrollTop / (documentHeight - windowHeight), 1);
      console.log(scrollPercentage)

      document.documentElement.style.setProperty("--element-scroll-progress",`${scrollPercentage}`);

      const fadeStartPercent = 0.05;
      const fadeEndPercent = 0.1;

      if (scrollPercentage >= fadeEndPercent) {
        setPosition('static')
      } else if (scrollPercentage >= fadeStartPercent) {
        setPosition('sticky')
      } else {
        setPosition('sticky')
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex flex-col min-h-screen ">
      <div className="w-full fixed top-0 z-40">
        <Navbar />
      </div>
      <div
        style={{ zIndex: -1, position: position }}
        className="w-full    top-0 items-center"
      >
        <About />
      </div>
      <div style={{ backgroundColor: "#f7f5f2" }} className="flex ">
        <Dropbox />
      </div>
      <div className="w-full h-auto">
        <CustomLetter />
      </div>
      <div className="w-full flex flex-col -translate-y-[275px] bg-white">
        <div className="box-border flex ">
          <Content/>
        </div>
        <div className="box-border flex  ">
          <Document />
        </div>
        <div className="box-border flex  ">
          <Faster />
        </div>
      </div>
      <div className="w-full  border-box lg:px-10 ">
        <Container />
      </div>
      <div className="w-full box-border  h-full my-20">
        <Aspect />
      </div>
      <div className="w-full  box-border">
        <Discovery />
      </div>
      <footer className="w-full box-border">
        <Footer />
      </footer>
    </main>
  );
}
