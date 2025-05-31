import { dmSans } from "../fonts";
import Image from "next/image";
import Link from "next/link";
export default function Faster() {
  return (
    <div className="flex flex-col space-y-12 text-black items-center pt-24  w-full px-6 xl:px-0  flex-grow box-border  ">
      <div className="max-w-4xl box-border mx-auto flex flex-col items-center space-y-7 ">
        <div className="flex flex-col text-center items-center space-y-3 w-full">
          <div className=" flex flex-col items-center space-y-4">
            <p
              className="p-1 text-white rounded-2xl max-w-max"
              style={{ backgroundColor: "#007891" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="inline-flex"
                width="24"
                height="24"
                role="presentation"
                focusable="false"
              >
                <path
                  d="m13.964 10-3.928 2.5v-5l3.928 2.5Z"
                  fill="currentColor"
                  vectorEffect="non-scaling-stroke"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 4h16v12H4V4Zm1.5 1.5h13v9h-13v-9Z"
                  fill="currentColor"
                  vectorEffect="non-scaling-stroke"
                ></path>
                <path
                  d="M8 19.5H6V18h2v-.5h1.5v.5H18v1.5H9.5v.5H8v-.5Z"
                  fill="currentColor"
                  vectorEffect="non-scaling-stroke"
                ></path>
              </svg>
              Faster Feedback
            </p>
            <span className={`${dmSans.className} font-medium text-3xl`}>
              Reduce the chaos
            </span>
          </div>

          <span className="text-base">
            Dropbox Replay reduces ‌feedback back-and-forth. Collect video,
            image, and audio feedback all in one place, so you can get to final
            delivery in no time.
          </span>
        </div>

        <div className="w-full text-center box-border flex flex-col space-y-6 md:space-y-0 md:flex-row space-x-12 justify-center items-center">
          <Link
            href="#"
            className="py-3 px-5 inline-block rounded-xl ring-2 ring-black group"
          >
            Get started free{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="inline-flex ml-5 transition-transform duration-300 group-hover:translate-x-1"
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
          <Link href="/nav/products/replay" className="group">
            <p className="inline underline underline-offset-2 decoration-1 decoration-stone-300">
              Learn more
            </p>{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="inline-flex ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
        </div>
      </div>

      <div
        style={{ maxWidth: "100%", overflow: "unset" }}
        className=" w-[1280px]  relative  flex items-center box-border max-w-full "
        id="faster"
      >
        <div
          style={{ aspectRatio: 0.67 }}
          className=" lg:block box-border hidden  w-[500px] lg:h-auto lg:max-h-full absolute"
          id="sit"
        >
          <div
            style={{ aspectRatio: 0.67, overflow: "unset" }}
            className="w-full h-auto flex relative items-center max-h-full  max-w-full box-border"
          >
            <Image
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/features/replay/The_Luupe_Genya_Oneall.jpg?id=e2669bcf-402f-4d94-bde1-1671ff42b8e7&width=3840&output_type=jpg"
              alt=""
              width={3840}
              height={3560}
              className="object-contain w-full absolute inset-0 h-full"
            />
          </div>
        </div>
        <div
          style={{ aspectRatio: 1.6 }}
          className="relative lg:absolute w-full lg:h-auto lg:w-[650px] lg:max-h-full box-border  "
          id="video"
        >
          <div
            style={{ aspectRatio: 1.6, overflow: "unset" }}
            className="w-full h-auto flex relative items-center max-h-full max-w-full box-border"
          >
            <video
              className="absolute w-full object-contain rounded-lg"
              aria-hidden="false"
              aria-label=""
              autoPlay
              playsInline
              loop
              height={3000}
              width={1500}
              muted
            >
              <source
                src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/test/homepageredesign2024/features/replay/user-interface/mov/replay-hero-ui-1080xauto.mov"
                type="video/quicktime; codecs=hvc1"
              />
              <source
                src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/test/homepageredesign2024/features/replay/user-interface/webm/replay-hero-ui-1080xauto.webm"
                type="video/webm; codecs=vp9"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
