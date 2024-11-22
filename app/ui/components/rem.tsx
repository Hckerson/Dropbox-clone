import { golos } from "../fonts";
import Link from "next/link";
export default function Righty() {
  return (
    <div className="grid items-center h-full p-4" id="one">
      <div className=" box-border px-4 md:px-8 h-full flex items-center justify-center">
        <div className="grid  gap-y-6">
          <p className={`text-3xl text-white font-normal ${golos.className}`}>
            Bring everyone together
          </p>
          <span className="text-white font-normal">
            Host a live virtual review for your audio, video, or image project.
            And collect everyone’s feedback with real-time comments and markup
            tools.
          </span>
          <Link
            href=""
            className=" rounded-xl text-white group py-5 px-6 ring-2 ring-white flex space-x-5 font-semibold "
            style={{ width: "fit-content" }}
          >
            <p>Get started</p>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
      <div className="xl:flex hidden"></div>
    </div>
  );
}

export function Lefty() {
  return (
    <div className="grid items-center h-full p-4" id="two">
      <div className="xl:flex hidden"></div>
      <div className=" box-border px-4 md:px-8 h-full flex items-center justify-center">
        <div className="grid  gap-y-6">
          <p className={`text-3xl text-white font-normal ${golos.className}`}>
            Prioritize security
          </p>
          <span className="text-white font-normal">
            Replay is backed by Dropbox, so you know your work is safe. Password
            protect shared files and manage all your review links in one
            centralized hub.
          </span>
          <Link
            href=""
            className=" rounded-xl text-white group py-5 px-6 ring-2 ring-white flex space-x-5 font-semibold "
            style={{ width: "fit-content" }}
          >
            <p>Start project</p>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
  );
}

export function LeftyV1() {
  return (
    <div className="grid items-center h-full p-4" id="two">
      <div className="xl:flex hidden"></div>
      <div className=" box-border px-4 md:px-8 h-full flex items-center justify-center">
        <div className="grid  gap-y-3 text-white">
          <legend>Dash for Business</legend>
          <p className={`text-3xl text-white font-normal ${golos.className}`}>
            Find anything. Protect everything.
          </p>
          <span className="text-white font-normal">
            Introducing Dash for Business, the platform that combines AI
            universal search and organization with universal content access
            control. Dash is here to help teams find what they need, and let
            admins protect what matters.
          </span>
          <ul className="w-full list-disc  pl-6">
            <li>
              Universal search helps users quickly find the content they need
              within Dropbox and beyond
            </li>
            <li>
              Summarize documents with a click, instantly generate AI-powered
              insights, and collaborate easily using shareable content
              collections
            </li>
            <li>
              Powerful admin controls—easily view and manage access permissions
              to make sure only the right people see sensitive content
            </li>
          </ul>
          <span>
            Dropbox Dash is currently available to users in the US in English
            only.
          </span>
          <Link
            href="https://dash.dropbox.com/?tk=dea"
            className=" rounded-xl text-white group py-5 px-6 ring-2 hover:bg-stone-700 ring-white flex space-x-5 font-semibold "
            style={{ width: "fit-content" }}
          >
            <p>Try Dash now</p>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
  );
}
