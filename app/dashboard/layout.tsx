"use client";
import { useEffect, useState } from "react";
import { Box } from "../ui/components/vgs";
import clsx from "clsx";
import { FiPlus } from "react-icons/fi";
import Ring from "../ui/components/ring";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Initials from "../ui/components/nameCard";
import { Row } from "../ui/components/rowed_items";
import List from "../ui/components/list";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const data = [
  { name: "Upload anything", about: "0 byter of 2 gb", action: "Upload" },
  { name: "Sign documents", about: "0 of 3 requests per MO", action: "Sign" },
  { name: "Edit images", about: "Unlimited", action: "Edit" },
  { name: "Edit videos", about: "Unlimited", action: "Edit" },
  { name: "Review media", about: ") of 4 media files", action: "Review" },
  { name: "Edit PDFs", about: "Unlimited", action: "Edit" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("")
  const [isFolderOpen, setIsFolderOpen] = useState<string[]>([]);
  useEffect(()=>{
    const name = localStorage.getItem('name') as string
    setName(name)
  }, [name])
  return (
    <div className="flex box-border h-screen w-screen  ">
      <div className="lg:relative lg:z-0 z-30 absolute lg:translate-x-0 -translate-x-full  box-border h-full flex bg-black">
        <div className="w-[70px] h-full border-r-[1px] border-white bg-black z-20 px-2 border-opacity-20">
          <div className="flex flex-col h-full items-center justify-between py-4">
            <div className="flex flex-col items-center space-y-3 justify-center">
              <span className="inline-flex">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  className=""
                  width="48"
                  height="48"
                  focusable="false"
                >
                  <path
                    d="M21.851 15L11.7021 21.375L21.851 27.75L32.0015 21.375L42.1503 27.75L52.2992 21.375L42.1503 15L32.0015 21.375L21.851 15Z"
                    fill="white"
                  ></path>
                  <path
                    d="M21.851 40.5001L11.7021 34.1251L21.851 27.75L32.0015 34.1251L21.851 40.5001Z"
                    fill="white"
                  ></path>
                  <path
                    d="M32.0015 34.1251L42.1503 27.75L52.2992 34.1251L42.1503 40.5001L32.0015 34.1251Z"
                    fill="white"
                  ></path>
                  <path
                    d="M32.0015 49L21.851 42.625L32.0015 36.25L42.1503 42.625L32.0015 49Z"
                    fill="white"
                  ></path>
                </svg>
              </span>
              <span
                className="inline-flex justify-center space-y-1 flex-col cursor-pointer"
                onClick={() => setActive("home")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  className={clsx(
                    "p-[8px] rounded-xl",
                    active == "home" ? "bg-stone-800" : ""
                  )}
                  width="40"
                  height="40"
                  focusable="false"
                  aria-label="Home"
                >
                  <path
                    d="M20.594 9.415 12 2.54 3.406 9.415l.938 1.17L5.5 9.662V19H10v-4.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75V19h4.5V9.66l1.157.925.937-1.171Z"
                    fill={active == "home" ? "white" : "gray"}
                    vectorEffect="non-scaling-stroke"
                  ></path>
                </svg>
                <div>
                  <p
                    className={clsx(
                      " text-center text-sm font-normal",
                      active == "home" ? "text-white" : "text-stone-500"
                    )}
                  >
                    Home
                  </p>
                </div>
              </span>
              <span
                className="inline-flex justify-center space-y-1 flex-col cursor-pointer"
                onClick={() => setActive("folder")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  className={clsx(
                    "p-[8px] rounded-xl",
                    active == "folder" ? "bg-stone-800" : ""
                  )}
                  width="40"
                  height="40"
                  focusable="false"
                  aria-label="Folders"
                >
                  <path
                    d="m10.875 7-1.5-2H4v11.75A2.25 2.25 0 0 0 6.25 19h12a2.249 2.249 0 0 0 2.25-2.25V7h-9.625Zm.625 10.5V16H13v1.5h-1.5Zm3 0v-3H10v3H8.5V13H16v4.5h-1.5Zm4.5-.75a.75.75 0 0 1-.75.75h-.75v-6H7v6h-.75a.75.75 0 0 1-.75-.75V6.5h3.125l1.5 2H19v8.25Z"
                    fill={active == "folder" ? "white" : "gray"}
                    vectorEffect="non-scaling-stroke"
                  ></path>
                </svg>
                <div>
                  <p
                    className={clsx(
                      " text-center text-sm font-normal",
                      active == "folder" ? "text-white" : "text-stone-500"
                    )}
                  >
                    Folder
                  </p>
                </div>
              </span>
              <span className="inline-flex w-full justify-center space-y-1 flex-col cursor-pointer">
                <Row classes="flex-col space-y-2 lg:hidden" fill="white" />
                <div className="hover:bg-stone-700 p-1 flex lg:hidden items-center justify-center rounded-lg">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        {" "}
                        <Initials
                          classname="size-6 text-[10px] font-bold rounded-lg "
                          color="#fad24b"
                          bg="#684505"
                          name={name}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Account</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </span>
            </div>
            <div className="h-[30px] *:w-full flex items-center justify-center">
              {!isOpen ? (
                <span className="inline-flex">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        {" "}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="cursor-pointer size-6"
                          focusable="false"
                          aria-label="Hide sidebar"
                          onClick={() => {
                            setIsOpen(!isOpen);
                            setTimeout(() => {
                              const sidebar =
                                document.getElementById("sidebar");
                              sidebar?.classList.add("absolute");
                            }, 300);
                          }}
                        >
                          <path
                            d="M19.383 20.025 19.433 4l-1.5-.005-.05 16.025 1.5.005ZM9.931 6.177 4.5 12.009l1.023.953 4.527 4.763 1.088-1.034-3.814-4.012h8.742v-1.5H7.324l3.706-3.98-1.098-1.022Z"
                            fill="gray"
                            vectorEffect="non-scaling-stroke"
                          ></path>
                        </svg>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Hide sidebar</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </span>
              ) : (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <span className="inlne-flex">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="cursor-pointer size-6"
                          focusable="false"
                          aria-label="Show sidebar"
                          onClick={() => {
                            setIsOpen(!isOpen);
                            setTimeout(() => {
                              const sidebar =
                                document.getElementById("sidebar");
                              sidebar?.classList.remove("absolute");
                            }, 300);
                          }}
                        >
                          <path
                            d="M5 4.5h1.5V19H5V4.5Zm7.456 3.016 1.088-1.032 4.989 5.266-4.989 5.266-1.088-1.032 3.3-3.484H8V11h7.757l-3.301-3.484Z"
                            fill="gray"
                            vectorEffect="non-scaling-stroke"
                          ></path>
                        </svg>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Open sidebar</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
        </div>
        <div
          id="sidebar"
          className={clsx(
            "flex w-[225px] flex-col justify-between h-full   px-2 box-border pt-8 pb-2 border-r-[1px] border-white border-opacity-20  transition-transform duration-700 ease-in-out",
            isOpen ? "-translate-x-full" : "translate-x-0"
          )}
        >
          <div className="flex flex-col w-full h-full  space-y-6  text-white">
            <legend className="font-semibold text-lg px-8 pb-2">Home</legend>
            <List />
            <div className="text-xs font-medium tracking-wide text-stone-200 px-7 inline-flex items-center justify-between">
              <p className="tracking-wide">Quick access</p>
              <span style={{ verticalAlign: "middle" }}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      {" "}
                      <FiPlus className="size-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Create section</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </span>
            </div>
            <div className="w-full box-border flex-col flex space-y-1">
              <div
                className="text-xs hover:bg-stone-700  group  font-semibold text-stone-200 pl-4 p-1 rounded-lg inline-flex items-center justify-between"
                onClick={() => setIsFolderOpen([...isFolderOpen, "starred"])}
              >
                <span className="inline-flex items-center space-x-1 w-full  text-stone-400">
                  {isFolderOpen.includes("starred") ? (
                    <FaAngleDown />
                  ) : (
                    <FaAngleRight />
                  )}
                  <div className="w-full flex items-center justify-between">
                    <p>Starred</p>
                    <span className="p-1 hover:bg-stone-600 rounded-md flex items-center justify-center">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <FiPlus className="size-4 " />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Create sections or add items</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </span>
                  </div>
                </span>
              </div>
              <div
                className="text-xs hover:bg-stone-700  group  font-semibold text-stone-200 pl-4 p-1 rounded-lg inline-flex items-center justify-between"
                onClick={() => {
                  setIsFolderOpen([...isFolderOpen, "untitled"]);
                }}
              >
                <span className="inline-flex items-center space-x-1 w-full text-stone-400">
                  {isFolderOpen.includes("untitled") ? (
                    <FaAngleDown />
                  ) : (
                    <FaAngleRight />
                  )}

                  <div className="w-full flex items-center justify-between">
                    <div className="w-full flex items-center justify-between">
                      <p>Untitled</p>
                      <div className="flex items-center justify-center">
                        <span className="p-1 hover:bg-stone-600 rounded-md">
                          <BiDotsVerticalRounded className="size-4 " />
                        </span>{" "}
                        <span className="p-1 hover:bg-stone-600 flex items-center justify-center rounded-md">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <FiPlus className="size-4 " />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Create sections or add items</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </span>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
            <div className="px-7 text-base font-light text-stone-400">
              Drag important items here.
            </div>
          </div>

          <div className=" w-full text-white rounded-xl   relative">
            <div className="  rounded-xl shadow-lg flex items-center p-2 gap-x-4 bg-[#002969]">
              <div className="shrink-0">
                <Ring color="#002969">
                  <Box color="#2563eb" />
                </Ring>
              </div>
              <div className="flex flex-col space-y-1">
                <div
                  style={{ fontSize: "11px" }}
                  className=" text-xs text-blue-400 "
                >
                  Explore free features
                </div>
                <p style={{ fontSize: "10px" }} className="text-blue-400 ">
                  0 bytes of 2gb
                </p>
              </div>
              <FaAngleUp className="text-blue-400" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "transition-transform duration-700 ease-in-out w-full",
          isOpen ? "" : ""
        )}
      >
        {children}
      </div>
    </div>
  );
}
