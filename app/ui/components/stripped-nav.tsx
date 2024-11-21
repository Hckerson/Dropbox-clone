import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Menue } from "../navbar/buttons";
import Link from "next/link";
import clsx from "clsx";
import { StartLink } from "./sublink";

export default function Navbar({ condition = true }) {
  return (
    <nav className="bg-white relative z-50 flex flex-col">
      <div className="p-0 sm:px-5 lg:px-6">
        <div className="relative flex  items-center justify-between h-[48px] md:h-[80px]">
          <div className="flex flex-1 items-center justify-start  h-full">
            <div className="flex flex-shrink-0 items-center bg-blue-500">
              <svg
                viewBox="0 0 30 25"
                height="48"
                width="48"
                fill="blue"
                xmlns="http://www.w3.org/2000/svg"
                className="p-2 "
              >
                <path
                  d="M7.70076 0.320312L0.478516 4.91332L7.70076 9.50633L14.9242 4.91332L22.1465 9.50633L29.3687 4.91332L22.1465 0.320312L14.9242 4.91332L7.70076 0.320312Z"
                  fill="#F7F5F2"
                ></path>
                <path
                  d="M7.70076 18.6925L0.478516 14.0994L7.70076 9.50633L14.9242 14.0994L7.70076 18.6925Z"
                  fill="#F7F5F2"
                ></path>
                <path
                  d="M14.9242 14.0994L22.1465 9.50633L29.3687 14.0994L22.1465 18.6925L14.9242 14.0994Z"
                  fill="#F7F5F2"
                ></path>
                <path
                  d="M14.9242 24.8164L7.70077 20.2234L14.9242 15.6304L22.1465 20.2234L14.9242 24.8164Z"
                  fill="#F7F5F2"
                ></path>
              </svg>
            </div>
            <p className="text-xl ml-2 mr-6 font-bold  hidden xs:block mb-1">
              Dropbox
            </p>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center h-full  sm:static sm:inset-auto sm:ml-6 space-x-1 sm:space-x-2">
            <GlobeAltIcon className=" size-4 sm:size-5  hidden xs:block" />
            <div className="box-border hidden xl:flex flex-col items-center justify-center">
              <Link
                href="/nav/contact"
                className={clsx(
                  "px-2 py-3  h-full focus:outline-none hover:text-blue-600 text-sm xs:text-base font-light  focus:ring-offset-0 items-center  transition-colors ease-in-out  flex space-x-1 "
                )}
              >
                <div className="flex items-center h-10">Contact Sales</div>
              </Link>
            </div>
            <div className="box-border hidden md:flex flex-col items-center justify-center">
              <Link
                href="/https://replay.dropbox.com/?login=true"
                className={clsx(
                  "  h-full focus:outline-none  text-sm xs:text-base font-medium text-white   focus:ring-offset-0 items-center  transition-colors ease-in-out  flex space-x-1 "
                )}
              >
                <div className="flex items-center px-4 py-3 rounded-xl bg-blue-600 h-10">
                  Start Project
                </div>
              </Link>
            </div>
            <div>
              <Menue />
            </div>
          </div>
        </div>
      </div>
      {condition && (
        <div className="w-full box-border border z-20 border-t-stone-300 ">
          <StartLink />
        </div>
      )}
    </nav>
  );
}
