"use client";
import Link from "next/link";
import { golos } from "../fonts";

export default function About() {
  return (
    <div
      className=" flex w-full items-center z-0 justify-center pt-48 transition-opacity  px-6 xs:px-12 md:px-0" 
    >
      <div
        className="box-border"
      >
        <div className="box-border justify-center items-center flex flex-wrap space-y-5 flex-col">
          <p className="text-white font-semibold text-lg">Dropbox Replay</p>
          <h2
            className={`${golos.className} text-3xl  text-white md:text-5xl font-normal `}
            style={{
              maxWidth: "25ch",
              lineHeight: "1.2",
              textAlign: "center",
            }}
          >
            Review and approve creative projects faster
          </h2>
          <p
            className=" text-sm sm:text-base text-center text-white font-light text-wrap box-border"
            style={{
              maxWidth: "80ch",
              lineHeight: "1.5",
              textAlign: "center",
            }}
          >
            Share your latest edit, review then resolve comments, and get final
            approval—all in one tool. Seamlessly collaborate on creative media,
            whether your team is in office or all around the world, with Dropbox
            Replay.
          </p>
        </div>
        <div className="w-full flex items-center justify-center flex-col  relative space-y-6">
          <div className="flex  py-4">
            <div
              className="flex flex-col space-y-3 "
              style={{ opacity: 1, willChange: "opacity" }}
            >
              <Link
                className="text-base font-medium px-5 py-6 group rounded-2xl bg-blue-500 hover:bg-blue-600 flex space-x-8 items-center transition-transform duration-300"
                href="/login"
              >
                <p>Start Project</p>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
