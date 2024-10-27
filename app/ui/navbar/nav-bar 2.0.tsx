import { Leftlink } from "./nav-link 2.0";
import { Rightlink } from "./nav-link 2.0";
import { GetStarted } from "./buttons";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Mainmenu } from "./buttons";

export default function Navbar() {
  return (
    <nav className="bg-white relative z-50  ">
      <div className="mx-auto  p-0 sm:px-5 lg:px-6">
        <div
          style={{
            transition: "height 0.3s ease-in-out",
          }}
          className="relative flex  md:h-20 transition-transform text-black duration-200 ease-in items-center justify-between"
        >
          <div className="flex flex-1 items-center justify-start  h-full">
            <div className="flex flex-shrink-0 items-center bg-blue-500">
              <svg
                viewBox="0 0 30 25"
                fill="blue"
                xmlns="http://www.w3.org/2000/svg"
                className="p-2 size-12 lg:size-10"
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
            <Leftlink />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center h-full  sm:static sm:inset-auto sm:ml-6 space-x-1 sm:space-x-2">
            <GlobeAltIcon className=" size-4 sm:size-5  hidden xs:block" />
            <Rightlink />
            <div className="rounded-xl px-4 py-2 text-white bg-blue-600 hidden md:block ">
              <GetStarted />
            </div>
            <Mainmenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
