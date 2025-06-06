"use client";
import { SearchBar } from "../ui/components/search";
import {
  Upload,
  Create,
  Folder,
  Transfer,
  Share,
  App,
} from "../ui/components/vgs";
import clsx from "clsx";
import { Row } from "../ui/components/rowed_items";
import Initials from "../ui/components/nameCard";
import ActionCard from "../ui/components/action-card";
import { IoSettingsOutline } from "react-icons/io5";
import { WiTime8 } from "react-icons/wi";
import { FaRegStar } from "react-icons/fa";
import { CiGrid31 } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import Link from "next/link";
import { useEffect, useState } from "react";
import FileUpload from "../ui/components/check";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const cards = [
  { first: true, link: "", name: "Upload ", vgs: Upload, hidden: "relative" },
  { first: false, link: "", name: "Create", vgs: Create, hidden: "relative" },
  {
    first: false,
    link: "",
    name: "Create folder",
    vgs: Folder,
    hidden: "relative hidden md:block",
  },
  {
    first: false,
    link: "",
    name: "Transfer a copy",
    vgs: Transfer,
    hidden: "min-[1025px]:block hidden relative",
  },
  {
    first: false,
    link: "",
    name: "Share",
    vgs: Share,
    hidden: "min-[1536px]:block hidden relative",
  },
  {
    first: false,
    link: "",
    name: "Get the app",
    vgs: App,
    hidden: "xl:block hidden",
  },
];

export default function Page() {
  const [name, setName] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [factor, setFactor] = useState(false);

  const handleFactor = (response: boolean) => {
    setFactor(response);
  };

  useEffect(() => {
    const fetchClientDetails = async () => {
      const response = await fetch("/api/details", {
        next: { revalidate: 1 * 24 * 60 * 60 },
      });
      const data = await response.json();
      if (data?.error === "unauthorized") {
        setFirst("D");
        setLast("B");
        setName("DB");
      } else {
        const result = data;
        const first = result.first;
        const last = result.last;
        setFirst(first);
        setLast(last);
        const firstname = result.first?.slice(0, 1).toUpperCase();
        const lastname = result.last?.slice(0, 1).toUpperCase();
        const initials = `${firstname}${lastname}`;
        setName(initials);
      }
      localStorage.setItem("name", name);
    };
    fetchClientDetails();
  }, [name]);
  return (
    <div className="relative flex flex-col w-full justify-normal  h-full box-border bg-[#1a1918]">
      <div className="text-white w-full  px-7 md:px-10 py-3  flex-col  space-y-4 bg-[#1a1918] relative flex ">
        <section className="w-full box-border flex space-x-2 z-20 sticky top-0 bg-[#1a1918] items-center">
          <SearchBar />
          <div className=" shadow-lg flex items-center gap-x-1 max-h-min py-[6px]  justify-center px-2 bg-stone-700 rounded-[10px]">
            <div className="shrink-0">
              <span className="">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  width="20"
                  height="20"
                  role="presentation"
                  focusable="false"
                >
                  <path
                    d="M21 17.5h-2v-2h-1.5v2h-2V19h2v2H19v-2h2v-1.5ZM9.25 13h5.5a2.746 2.746 0 0 1 2.12 1h1.75a4.25 4.25 0 0 0-3.72-2.489A4.818 4.818 0 0 0 15.5 9c0-2.287-1.036-3.694-2.864-3.952A4.25 4.25 0 0 0 12 5a4.707 4.707 0 0 0-.636.048C9.536 5.306 8.5 6.713 8.5 9a4.822 4.822 0 0 0 .6 2.508A4.25 4.25 0 0 0 5 15.75V19h9v-1.5H6.5v-1.75A2.753 2.753 0 0 1 9.25 13Zm2.572-1.504h-.031c-.882-.05-1.719-.45-1.719-2.494s.838-2.446 1.719-2.494h.031c.06-.008.119-.008.178-.008s.118 0 .178.004h.031c.882.05 1.719.45 1.719 2.494s-.838 2.446-1.719 2.494h-.031c-.06.008-.119.008-.178.008s-.118 0-.178-.004Z"
                    fill="currentColor"
                    vectorEffect="non-scaling-stroke"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="flex">
              <p className="text-sm text-white min-w-max  sm:hidden hidden">
                Invite members
              </p>
            </div>
          </div>
          <Row classes="relative space-x-1 lg:flex hidden" fill="white" />
          {factor && <div></div>}
          <div className="hover:bg-stone-700 p-1 hidden lg:flex items-center justify-center rounded-[8px]">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <Initials
                    classname="size-6 text-[10px] font-bold rounded-[8px] "
                    color="#fad24b"
                    bg="#684505"
                    name={name}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-white">Account</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className=" text-nowrap md:block hidden text-[14px] text-black tracking-wide  font-semibold">
            <Link
              href={
                "https://www.dropbox.com/plans?_camp=19135&_tk=link_campaign_format"
              }
              className="bg-[#b4dc19] rounded-[8px]  p-2"
            >
              {" "}
              Click to update
            </Link>
          </div>
        </section>
        <section
          style={{ gridAutoFlow: "column" }}
          className="w-full  box-border flex space-x-2 items-center"
        >
          {cards.map((card) => {
            const Icon = card.vgs;
            return (
              <ActionCard
                key={card.name}
                first={card.first}
                name={card.name}
                hidden={card.hidden}
              >
                <Icon />
              </ActionCard>
            );
          })}
        </section>
        <section className="flex justify-between">
          <div className="flex items-center space-x-4">
            <p className="text-2xl font-semibold">All files</p>
            <button>
              <IoSettingsOutline className="size-4" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="inline-flex items-center justify-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Initials
                      classname="size-8 text-[12px] font-bold rounded-xl "
                      color="#fa551e"
                      bg="#4e0119"
                      name={name}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="flex flex-col justify-center">
                      <p>
                        {first} {last} {`(you)`}
                      </p>
                      <p className="text-center">Owner</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-stone-400">Only you</p>
          </div>
        </section>
        {!factor && (
          <section className="flex justify-between">
            <div className="flex space-x-3">
              <div className="flex items-center border border-white border-opacity-15 px-3 py-1 rounded-2xl space-x-1 bg-stone-800 hover:bg-stone-700 origin-bottom transition-all ">
                <button>
                  <WiTime8 className="size-5" />
                </button>
                <p className="text-sm font-normal">Recents</p>
              </div>
              <div className="flex items-center border border-white border-opacity-15 px-3 py-1 rounded-2xl space-x-1 bg-stone-800 hover:bg-stone-700 origin-bottom transition-all ">
                <button>
                  <FaRegStar className="size-4" />
                </button>
                <p className="text-sm font-normal">Starred</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="inline-flex p-2 hover:bg-stone-700 rounded-[8px]">
                <FaBars className="size-4" />
              </button>
              <button className="inline-flex p-[5px] hover:bg-stone-700 rounded-[8px]">
                <CiGrid31 className="size-5" />
              </button>
            </div>
          </section>
        )}
      </div>
      <section
        className={clsx(
          "relative flex flex-col w-full box-border",
          !factor ? "px-7 md:px-10" : "pt-4"
        )}
      >
        <FileUpload handler={handleFactor} factor={factor} />
      </section>
    </div>
  );
}
