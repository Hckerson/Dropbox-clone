"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function About() {
  const [opacity, setOpacity] = useState(1); 
  const [bgColor, setBgColor] = useState("rgb(0, 0, 0)");
  const [txt1Color, setText1Color] = useState("rgb(175, 175, 175");
  const [txt2Color, setText2Color] = useState("rgb(163, 163, 163");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const fadeStart = 10;
      const fadeEnd = 400;
      const maxOpacity = 1;
      const minOpacity = 0;

      if (scrollTop >= fadeEnd) {
        setOpacity(minOpacity); 
        setBgColor("rgb(255, 255, 255)");
        setText1Color("rgb(255, 255, 255)");
        setText2Color("rgb(255, 255, 255)");
      } else if (scrollTop >= fadeStart) {
        const colorValue =
          ((scrollTop - fadeStart) / (fadeEnd - fadeStart)) * 255;
        const txtValue =
          ((scrollTop + 200 - fadeStart) / (fadeEnd - fadeStart)) * 255;
        const bgColorValue = `rgb(${colorValue}, ${colorValue}, ${colorValue})`; // Transition from black (0,0,0) to white (255,255,255)
        const txtColorValue = `rgb(${txtValue}, ${txtValue}, ${txtValue})`;
        const opacityValue = maxOpacity - (scrollTop - fadeStart) / (fadeEnd - fadeStart);
        setOpacity(opacityValue);
        setBgColor(bgColorValue);
        setText1Color(txtColorValue);
        setText2Color(txtColorValue);
      } else {
        setOpacity(maxOpacity);
        setBgColor("rgb(0, 0, 0)"); // Black when at the top
        setText1Color("rgb(175, 175, 175");
        setText2Color("rgb(163, 163, 163");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full flex items-center justify-center flex-col pt-24 pb-36 space-y-6 transition-opacity z-0 "
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="text-6xl font-semibold text-white">
        Get to work, with a lot less work
      </h2>
      <p className="text-lg  text-center" style={{ color: txt1Color }}>
        Dropbox delivers tools that help you move your work forward faster, keep
        it safe, and <br /> let you collaborate with ease.
      </p>

      <div className="flex space-x-9">
        <div className="flex flex-col space-y-3" style={{opacity : opacity}}>
          <Link
            className="text-base font-medium px-5 py-6 rounded-2xl bg-blue-500 flex"
            href="/login"
          >
            Sign up for free
            <ArrowLongRightIcon className="ml-5 w-6" />
          </Link>
          <p className="text-xs  text-center" style={{ color: txt2Color }}>
            No credit card required
          </p>
        </div>
        <div>
          <Link
            className="text-sm text-white underline flex mt-5 mb-1"
            href="/login"
          >
            <p className="inline-flex text-base">
              Find your plan <ArrowLongRightIcon className="ml-5 w-5 h-6" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
