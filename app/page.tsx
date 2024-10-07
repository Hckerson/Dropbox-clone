"use client";
import Navbar from "./ui/navbar/nav-bar";
import Image from "next/image";
import About from "./ui/landing-page/about";
import { Suspense, useState, useEffect } from "react";
import { VideoLeft, VideoRight } from "./ui/landing-page/video";
import { ImgLayout, MiniImg } from "./ui/landing-page/img-layout";
import CustomLetter from "./ui/landing-page/customized-lettering";

export default function Page() {
  const [opacity, setOpacity] = useState(1);
  const [position, setPosition] = useState<"relative" | "fixed" | "absolute">(
    "fixed"
  );
  const [mT, setMt] = useState(626);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const fadeStart = 10;
      const fadeEnd = 400;
      const maxOpacity = 1;
      const minOpacity = 0;

      if (scrollTop >= fadeEnd) {
        setOpacity(minOpacity);
        setMt(50);
        setPosition("relative");
      } else if (scrollTop >= fadeStart) {
        const opacityValue =
          maxOpacity - (scrollTop - fadeStart) / (fadeEnd - fadeStart);
        setOpacity(opacityValue);
        setPosition("fixed");
        setMt(626);
      } else {
        setOpacity(maxOpacity);
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
    <main
      className="min-h-screen "
      style={{ backgroundColor: "rgb(247, 245, 242)" }}
    >
      <div className="fixed w-full top-0 bg-black z-50">
        <Navbar />
      </div>

      <div className=" w-full z-10 top-[50px] " style={{ position: position }}>
        <About />
      </div>
      <div className="relative  w-full z-20" style={{ marginTop: mT }}>
        <div
          className="flex justify-between  mb-[205px] "
          style={{ backgroundColor: "rgb(247, 245, 242)" }}
        >
          <Suspense
            fallback={
              <div className="image-container">
                <Image
                  src="/left-fallback.png" // The base image URL
                  alt="Description"
                  width={1920} // The largest image size
                  height={1080}
                  sizes="(min-width: 1920px) 37vw, (min-width: 1440px) 32vw, (min-width: 1280px) 25vw, 100vw"
                  priority // Optional: loads the image quickly, used for critical images
                  className="your-classes"
                />
              </div>
            }
          >
            <div
              style={{ opacity: opacity, transition: "opacity  ease-in-out" }}
            >
              <VideoLeft />
            </div>
          </Suspense>

          <div className="relative flex">
            <ImgLayout />
            <div className="absolute -right-[85px] top-2 z-30">
              <MiniImg />
            </div>
          </div>
          <div style={{ opacity: opacity, transition: "opacity  ease-in-out" }}>
            <VideoRight />
          </div>
        </div>
      </div>
      <div className="z-10">
      <CustomLetter />
      </div>
      <div className=" relative z-30 bg-white h-screen">
        <div className="mt">

        </div>
      </div>
    </main>
  );
}
