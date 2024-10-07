"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { dmSans } from "../fonts";

export default function About() {
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);
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
      const maxScale = 1;
      const minScale = 0.7;

      if (scrollTop >= fadeEnd) {
        setOpacity(minOpacity);
        setBgColor("rgb(247, 245, 242)");
        setText1Color("rgb(247, 245, 242)");
        setText2Color("rgb(247, 245, 242)");
        setScale(minScale);
      } else if (scrollTop >= fadeStart) {
        const colorValue =
          ((scrollTop - fadeStart) / (fadeEnd - fadeStart)) * 255;
        const txtValue =
          ((scrollTop + 200 - fadeStart) / (fadeEnd - fadeStart)) * 255;
        const bgColorValue = `rgb(${colorValue}, ${colorValue}, ${colorValue})`; // Transition from black (0,0,0) to white (255,255,255)
        const txtColorValue = `rgb(${txtValue}, ${txtValue}, ${txtValue})`;
        const opacityValue =
          maxOpacity - (scrollTop - fadeStart) / (fadeEnd - fadeStart);
        const scaleValue =
          maxScale - ((scrollTop - fadeStart) / (fadeEnd - fadeStart)) * 0.1;
        setScale(scaleValue);
        setOpacity(opacityValue);
        setBgColor(bgColorValue);
        setText1Color(txtColorValue);
        setText2Color(txtColorValue);
      } else {
        setOpacity(maxOpacity);
        setBgColor("rgb(0, 0, 0)"); // Black when at the top
        setText1Color("rgb(175, 175, 175");
        setText2Color("rgb(163, 163, 163");
        setScale(maxScale);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full flex items-center justify-center py-36 transition-opacity"
      style={{ backgroundColor: bgColor }}
    >
      <div style={{ transform: `scale(${scale})` }}>
        <div className="w-full flex items-center justify-center flex-col space-y-6">
          <h2 className={`${dmSans.className} text-6xl font-semibold text-white`}>
            Get to work, with a lot less work
          </h2>
          <p className="text-lg text-center" style={{ color: txt1Color }}>
            Dropbox delivers tools that help you move your work forward faster,
            keep it safe, and <br /> let you collaborate with ease.
          </p>

          <div className="flex space-x-9 py-3">
            <div
              className="flex flex-col space-y-3 "
              style={{ opacity: opacity }}
            >
              <Link
                className="text-base font-medium px-5 py-6 group rounded-2xl bg-blue-500 flex items-center transition-transform duration-300"
                href="/login"
              >
                Sign up for free
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                  width="24"
                  height="24"
                  role="presentation"
                  focusable="false"
                >
                  <path
                    d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    vectorEffect="non-scaling-stroke"
                  ></path>
                </svg>
              </Link>
              <p className="text-xs text-center" style={{ color: txt2Color }}>
                No credit card required
              </p>
            </div>
            <div className="">
              <Link
                className="text-sm text-white underline flex mt-5 mb-1 px-3 group"
                href="/login"
              >
                <p className="inline-flex items-center text-base">
                  Find your plan
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                    width="24"
                    height="24"
                    role="presentation"
                    focusable="false"
                  >
                    <path
                      d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      vectorEffect="non-scaling-stroke"
                    ></path>
                  </svg>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
