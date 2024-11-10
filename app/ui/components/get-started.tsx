"use client";
import Link from "next/link";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

export function GetStarted() {
  return (
    <div className="w-full  bg-blue-500 hover:bg-blue-400 rounded-2xl ">
      <Link
        href="/nav/plans"
        className=" rounded-xl w-full text-black group px-6 py-6 justify-between flex space-x-3 font-semibold "
      >
        Get Started now
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
  );
}

export function GetStartedv1() {
  return (
    <div className="w-full  bg-blue-500 hover:bg-blue-400 rounded-2xl ">
      <Link
        href="/nav/products/backup#dropbox-backup-plan"
        className=" rounded-xl w-full text-black group px-6 py-6 justify-between flex space-x-3 font-semibold "
      >
        Get Backup with Dropbox
        <ArrowDownIcon className="size-5"/>
      </Link>
    </div>
  );
}

