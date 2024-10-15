/* eslint-disable @next/next/no-img-element */
"use client";
import Navbar from "./ui/navbar/nav-bar";
import About from "./ui/landing-page/about";
import Dropbox from "./ui/landing-page/dropbox";
import { useState, useEffect} from "react";
import CustomLetter from "./ui/landing-page/customized-lettering";
import Content from "./ui/landing-page/content";
import Document from "./ui/landing-page/document";
import Faster from "./ui/landing-page/faster";
import Container from "./ui/landing-page/container";
import Aspect from "./ui/landing-page/aspect";
import Discovery from "./ui/landing-page/discovery";
import Footer from "./ui/landing-page/footer";

export default function Page() {
  const [position, setPosition] = useState<"relative" | "fixed" | "absolute">(
    "fixed"
  );
  const [mT, setMt] = useState(626);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPercentage = scrollTop / (documentHeight - windowHeight);
      const fadeStartPercent = 0.02;
      const fadeEndPercent = 0.18;

      if (scrollPercentage >= fadeEndPercent) {
        setMt(50);
        setPosition("relative");
      } else if (scrollPercentage >= fadeStartPercent) {
        setPosition("fixed");
        setMt(626);
      } else {
        setPosition("fixed");
        setMt(626);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex flex-col min-h-screen ">
      <div className="flex flex-col relative">
        <div className="w-full fixed top-0 z-50">
        <Navbar />
        </div>
        <About />
      </div>
      <div style={{backgroundColor :'#f7f5f2'}} className="flex">
        <Dropbox />
      </div>
      <div className="w-full  md:mt-0">
        <CustomLetter/>
      </div>
      <div>{/* <Footer/> */}</div>
    </main>
  );
}
