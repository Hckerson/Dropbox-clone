"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function About() {
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);
  const [bgColor, setBgColor] = useState("rgb(0, 0, 0)");
  const [txt1Color, setText1Color] = useState("rgb(175, 175, 175");
  const [txt2Color, setText2Color] = useState("rgb(163, 163, 163");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPercentage = scrollTop / (documentHeight - windowHeight);
      const fadeStartPercent = 0.01;
      const fadeEndPercent = 0.1;
      const maxOpacity = 1;
      const minOpacity = 0;
      const maxScale = 1;
      const minScale = 0;

      if (scrollPercentage >= fadeEndPercent) {
        setOpacity(minOpacity);
        setBgColor("rgb(255, 255, 255)");
        setText1Color("rgb(255, 255, 255)");
        setText2Color("rgb(255, 255, 255)");
        setScale(minScale);
      } else if (scrollPercentage >= fadeStartPercent) {
        const colorValue =
          ((scrollPercentage - fadeStartPercent) /
            (fadeEndPercent - fadeStartPercent)) *
          255;
        const txtValue =
          ((scrollPercentage + 0.07 - fadeStartPercent) /
            (fadeEndPercent - fadeStartPercent)) *
          255;
        const bgColorValue = `rgb(${colorValue}, ${colorValue}, ${colorValue})`; // Transition from black (0,0,0) to white (255,255,255)
        const txtColorValue = `rgb(${txtValue}, ${txtValue}, ${txtValue})`;
        const opacityValue =
          maxOpacity -
          (scrollPercentage - fadeStartPercent) /
            (fadeEndPercent - fadeStartPercent);
        const scaleValue =
          maxScale -
          ((scrollPercentage - fadeStartPercent) /
            (fadeEndPercent - fadeStartPercent)) *
            0.25;
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
      className=" flex w-full items-center z-0 justify-center py-28 xs:pb-40 sm:pt-48 transition-opacity px-0 xs:px-12 md:px-0"
      style={{ backgroundColor: bgColor }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          willChange: "transform",
          marginLeft: 50,
          marginRight: 50,
        }}
        className="box-border"
      >
        <div className="box-border justify-center items-center flex flex-wrap space-y-5 flex-col">
          <h2 className="text-balance sm:text-wrap text-4xl md:text-6xl font-semibold text-white text-center box-border ">
            Get to work, with a lot less work
          </h2>
          <p
            className=" text-base sm:text-lg text-center font-medium text-wrap box-border"
            style={{ color: txt1Color }}
          >
            Dropbox delivers tools that help you move your work forward faster,
            keep it safe, and let you collaborate with ease.
          </p>
        </div>
        <div className="w-full flex items-center justify-center flex-col z-50 relative space-y-6">
          <div className="flex flex-col md:flex-row space-x-9 py-4">
            <div
              className="flex flex-col space-y-3 "
              style={{ opacity: opacity, willChange: "opacity" }}
            >
              <Link
                className="text-base font-medium px-5 py-7 group rounded-2xl bg-blue-500 hover:bg-blue-600 flex items-center transition-transform duration-300"
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
                href="/en_GB/plans"
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
