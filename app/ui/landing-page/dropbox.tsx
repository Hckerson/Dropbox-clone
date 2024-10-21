import { VideoLeft, VideoRight } from "./video";
import { ImgLayout, MiniImg } from "./img-layout";
import { useState, useEffect } from "react";

export default function Dropbox() {
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPercentage = scrollTop / (documentHeight - windowHeight);
      const fadeStartPercent = 0.002;
      const fadeEndPercent = 0.045;
      const maxOpacity = 1;
      const minOpacity = 0;

      if (scrollPercentage >= fadeEndPercent) {
        setOpacity(minOpacity);
      } else if (scrollPercentage >= fadeStartPercent) {
        const opacityValue =
          maxOpacity - (scrollPercentage - fadeStartPercent) /(fadeEndPercent - fadeStartPercent);
        setOpacity(opacityValue);
      } else {
        setOpacity(maxOpacity);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className="flex w-full lg:px-0  xs:px-6 justify-center  flex-grow items-center bg-transparent -translate-y-[53px] box-border "
        id="big-box"
        style={{ flexGrow: 1 }}
      >
        <div
          style={{
            flex: "1 1 20px",
            willChange: "opacity",
            opacity: opacity,
            marginRight: -24,
          }}
          className="h-[400px] min-w-0 overflow-hidden justify-center hidden box-border xl:flex "
        >
          <div
            style={{ aspectRatio: 16 / 9 }}
            className="w-full h-full flex relative items-center box-border max-h-full max-w-full"
          >
            <VideoLeft />
          </div>
        </div>
        <div
          className=" max-w-[900px] relative min-w-0 w-full box-border h-full scroll-mt-6 md:scroll-mt-12"
          style={{ aspectRatio: 16 / 9, flexGrow: 1 }}
        >
          <div className="absolute bottom-0 top-0 left-0 h-full z-30 box-border hidden  md:block  md:w-11/12">
            {" "}
            <ImgLayout />{" "}
          </div>
          <div
            style={{ marginBottom: "auto", marginTop: "auto" }}
            className="md:max-w-[197px] md:absolute md:top-0 right-0 md:bottom-0 md:z-30 md:h-[85%] box-border"
          >
            {" "}
            <MiniImg />
          </div>
        </div>
        <div
          style={{
            flex: "1 1 90px",
            willChange: "opacity",
            opacity: opacity,
            marginLeft: -90,
          }}
          className="h-[400px] min-w-0 overflow-hidden justify-center hidden box-border xl:flex "
        >
          <div
            style={{ aspectRatio: 16 / 9 }}
            className="w-full h-full flex relative items-center box-border max-w-full max-h-full"
          >
            <VideoRight />
          </div>
        </div>
      </div>
    </>
  );
}
