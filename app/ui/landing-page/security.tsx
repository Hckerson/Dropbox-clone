import { dmSans } from "../fonts";
import Link from "next/link";
export default function Security() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8 ">
      <div className="flex flex-col text-center items-center space-y-6 w-full">
        <span className=" h-20 w-20 flex items-center justify-center">
          {" "}
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="dig-PictogramIcon"
            width="64"
            height="64"
            focusable="false"
            role="presentation"
          >
            <path
              d="M15 9V7.25C15 5.768 14.436 4 11.75 4S8.5 5.768 8.5 7.25V9H6v7.75A3.254 3.254 0 0 0 9.25 20h5a3.254 3.254 0 0 0 3.25-3.25V9H15Zm-5-1.75c0-1.292.458-1.75 1.75-1.75s1.75.458 1.75 1.75V9H10V7.25Zm6 9.5a1.75 1.75 0 0 1-1.75 1.75h-5a1.75 1.75 0 0 1-1.75-1.75V10.5H16v6.25Z"
              fill="white"
              vectorEffect="non-scaling-stroke"
            ></path>
            <path
              d="M11 15.366V17h1.5v-1.634a1.603 1.603 0 0 0 1-1.616A1.626 1.626 0 0 0 11.75 12 1.626 1.626 0 0 0 10 13.75a1.603 1.603 0 0 0 1 1.616Z"
              fill="white"
              vectorEffect="non-scaling-stroke"
            ></path>
          </svg>
        </span>

        <span className={`${dmSans.className} font-medium text-3xl text-white`}>
          Security never comes second
        </span>
        <span className="text-base text-white">
          From industry-leading encryption and tamper-proof documents to version
          history and recovery, Dropbox keeps your intellectual property safe
          and never sells or shares your data.
        </span>
      </div>

      <div className="w-full text-center text-white box-border flex flex-col space-y-6 md:space-y-0 md:flex-row space-x-12 justify-center items-center">
        <Link
          href="#"
          className="py-3 px-5 inline-block rounded-xl ring-2 ring-white group"
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
        <Link
          href="#"
          className="group"
        >
          <p className="inline underline underline-offset-2 decoration-1 decoration-stone-300">Learn more</p> {" "}
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
  );
}
