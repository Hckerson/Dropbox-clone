"use client";
import clsx from "clsx";
import Link from "next/link";
import { sub } from "../navbar/links";
import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export function StartLink() {
  const [activated, setActivated] = useState(false);
  const handleClick = () => {
    setActivated((prevValue) => {
      return !prevValue;
    });
  };
  const handler = () => {
    setActivated((prevValue) => {
      return !prevValue;
    });
  };
  return (
    <div className=" flex flex-col w-full">
      <div className="flex justify-between items-center">
        <div className="flex ">
          {sub.map((link, index) => {
            const hide =
              index == 1 || index == 2 || index == 3 || index == 4
                ? "xl:flex hidden"
                : null;
            return (
              <div
                key={link.label}
                className="relative group h-full box-border"
              >
                <Link
                  href={link.href}
                  className={clsx(
                    "px-2 py-1   h-full focus:outline-none text-black hover:bg-stone-200  focus:ring-offset-0 items-center font-semibold transition-colors text-base  ease-in-out flex space-x-1",
                    hide
                  )}
                >
                  <div className="flex items-center h-10">{link.label}</div>
                </Link>
              </div>
            );
          })}
        </div>
        {!activated && (
          <div className=" box-border flex xl:hidden w-6 h-6 mx-2">
            <button
              style={{ aspectRatio: 1, overflow: "unset" }}
              className="m-0 inline-flex p-0 relative items-center justify-center w-full box-border"
              onClick={handleClick}
            >
              <ChevronDownIcon className="" />
            </button>
          </div>
        )}
        {activated && (
          <div className=" box-border flex xl:hidden w-6 h-6 mx-2">
            <button
              style={{ aspectRatio: 1, overflow: "unset" }}
              className="m-0 inline-flex p-0 relative items-center justify-center w-full box-border"
              onClick={handler}
            >
              <ChevronUpIcon className="" />
            </button>
          </div>
        )}
      </div>
      {activated && (
        <div
          style={{ backgroundColor: "rgb(238, 233, 226)" }}
          className=" h-screen w-screen  xl:hidden block"
        >
          <ul className="w-full box-border p-5 pt-0 md:p-8 md:pt-0 flex justify-between space-x-3 ">
            <div className="grid box-border md:gap-x-6 w-full">
              <div className="w-full  flex flex-col space-y-8">
                {sub.map((each, index) => {
                  const hide = index == 0 ? "hidden m-0 p-0" : null;
                  return (
                    <li className={clsx("font-medium", hide)} key={each.label}>
                      <Link href={each.href}>
                        <div className="flex  flex-col">
                          <p>{each.label}</p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </div>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
