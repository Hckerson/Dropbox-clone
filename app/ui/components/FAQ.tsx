"use client";
import { useState } from "react";
import { golos } from "../fonts";
import clsx from "clsx";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
const questions = [
  {
    id: 1,
    topic:
      "Can I use Replay without upgrading to Dropbox Plus or a higher plan?",
    baby: "Yes, Replay is available to users on our Basic plan with limited features. To explore Replay, sign-in or sign-up to get started.",
  },
  {
    id: 2,
    topic: "Can I edit video, audio and images using Replay?",
    baby: "No. Replay is a review and approvals solution. When it comes to making amends to your content, Replay integrates with editing software such as Adobe Premiere Pro, Adobe After Effects, Apple Final Cut Pro, Blackmagic Design DaVinci Resolve, and Avid Pro Tools.",
  },
  {
    id: 3,
    topic: "Where will the media files be stored?",
    baby: "Files uploaded from your local drive or third-party video tools, to Replay, are stored in your Dropbox account and will count towards your total storage amount. Files already stored in your Dropbox account and opened in Replay, will not count additionally towards your total storage. For every project, you can view how much storage they use, directly inside of Replay.",
  },
  {
    id: 4,
    topic: "What type of media files are compatible with Replay?",
    baby: "Video, image, audio, PSD, and PDF projects are all compatible with Replay. File sizes up to 150 GB can be uploaded, and the maximum supported audio and video length is 12 hours.",
  },
  {
    id: 5,
    topic: "Is this a web based or desktop application? Or both?",
    baby: "While there is a macOS desktop application, Replay is accessible through the internet browser on your Windows, macOS, or mobile device. You can use Chrome, Firefox, or Safari, but we recommend using Chrome for the best experience. ",
  },
];

export default function Faq() {
  const [openMenu, setMenuOpen] = useState<string | null>(null);
  const toggleMenu = (menu: string) => {
    setMenuOpen(openMenu == menu ? null : menu);
  };

  return (
    <div className="w-full box-border flex flex-col text-black py-20  items-center">
      <div className="xl:max-w-[1200px] box-border gap-y-20 md:p-14 lg:p-20 flex flex-col w-full mx-auto items-center">
        <h3
          className={`md:text-4xl text-3xl font-medium text-center   ${golos.className}`}
        >
          Frequently asked questions
        </h3>
        <div className="w-full box-border">
          <ul className="w-full box-border">
            <li className="flex flex-col relative border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-start box-border">
              <div
                className="cursor-pointer w-full box-border px-6 py-8 flex  justify-between space-x-2 items-center"
                onClick={() => toggleMenu("one")}
              >
                <span
                  className={clsx(
                    "text-base font-semibold peer transition-colors ease-in-out"
                  )}
                >
                  {questions[0].topic}
                </span>
                <div className="p-3">
                  {openMenu === "one" ? (
                    <ChevronUpIcon
                      className={clsx(
                        "size-6 transition-colors ease-in-out text-black "
                      )}
                    />
                  ) : (
                    <ChevronDownIcon
                      className={clsx(
                        "size-6 transition-colors ease-in-out text-black "
                      )}
                    />
                  )}
                </div>
              </div>
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-300 ease-in-out -translate-y-7",
                  openMenu === "one"
                    ? "max-h-[100px] opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <ul
                  style={{ scrollbarWidth: "none" }}
                  className="w-full box-border px-6 flex overflow-scroll"
                >
                  <li className="w-full text-base font-light">
                    {questions[0].baby}
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex flex-col relative border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
              <div
                className="cursor-pointer w-full box-border px-6 py-8 flex  justify-between space-x-2 items-center"
                onClick={() => toggleMenu("two")}
              >
                <span
                  className={clsx(
                    "text-base font-semibold peer transition-colors ease-in-out"
                  )}
                >
                  {questions[1].topic}
                </span>
                <div className="p-3">
                  {openMenu === "two" ? (
                    <ChevronUpIcon
                      className={clsx(
                        "size-6 transition-colors ease-in-out text-black "
                      )}
                    />
                  ) : (
                    <ChevronDownIcon
                      className={clsx(
                        "size-6 transition-colors ease-in-out text-black "
                      )}
                    />
                  )}
                </div>
              </div>
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-300 ease-in-out -translate-y-7",
                  openMenu === "two"
                    ? "max-h-[125px] opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <ul
                  style={{ scrollbarWidth: "none" }}
                  className="w-full box-border px-6 flex overflow-scroll"
                >
                  <li className="w-full text-base font-light">
                    {questions[1].baby}
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex flex-col relative border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
              <div
                className="cursor-pointer w-full box-border px-6 py-8 flex  justify-between space-x-2 items-center"
                onClick={() => toggleMenu("three")}
              >
                <span
                  className={clsx(
                    "text-base font-semibold peer transition-colors ease-in-out"
                  )}
                >
                  {questions[2].topic}
                </span>
                <div className="p-3">
                  {openMenu === "three" ? (
                    <ChevronUpIcon
                      className={clsx(
                        "size-6 transition-colors ease-in-out text-black "
                      )}
                    />
                  ) : (
                    <ChevronDownIcon
                      className={clsx(
                        "size-6 transition-colors ease-in-out text-black "
                      )}
                    />
                  )}
                </div>
              </div>
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-300 ease-in-out -translate-y-7",
                  openMenu === "three"
                    ? "max-h-[100px] opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <ul
                  style={{ scrollbarWidth: "none" }}
                  className="w-full box-border px-6 flex overflow-scroll"
                >
                  <li className="w-full text-base font-light">
                    {questions[2].baby}
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex flex-col relative border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
              <div
                className="cursor-pointer w-full box-border px-6 py-8 flex  justify-between space-x-2 items-center"
                onClick={() => toggleMenu("four")}
              >
                <span
                  className={clsx(
                    "text-base font-semibold peer transition-colors ease-in-out"
                  )}
                >
                  {questions[3].topic}
                </span>
                <div className="p-3">
                  {openMenu === "four" ? (
                    <ChevronUpIcon
                      className={clsx(
                        "size-6 transition-colors ease-in-out text-black "
                      )}
                    />
                  ) : (
                    <ChevronDownIcon
                      className={clsx(
                        "size-6 transition-colors ease-in-out text-black "
                      )}
                    />
                  )}
                </div>
              </div>
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-300 ease-in-out -translate-y-7",
                  openMenu === "four"
                    ? "max-h-[100px] opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <ul
                  style={{ scrollbarWidth: "none" }}
                  className="w-full box-border px-6 flex overflow-scroll"
                >
                  <li className="w-full text-base font-light">
                    {questions[3].baby}
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex flex-col relative border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
              <div
                className="cursor-pointer w-full box-border px-6 py-8 flex  justify-between space-x-2 items-center"
                onClick={() => toggleMenu("five")}
              >
                <span
                  className={clsx(
                    "text-base font-semibold peer transition-colors ease-in-out"
                  )}
                >
                  {questions[4].topic}
                </span>
                <div className="p-3">
                  {openMenu === "five" ? (
                    <ChevronUpIcon
                      className={clsx(
                        "size-6 transition-colors ease-in-out text-black "
                      )}
                    />
                  ) : (
                    <ChevronDownIcon
                      className={clsx(
                        "size-6 transition-colors ease-in-out text-black "
                      )}
                    />
                  )}
                </div>
              </div>
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-300 ease-in-out -translate-y-7",
                  openMenu === "five"
                    ? "max-h-[100px] opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <ul
                  style={{ scrollbarWidth: "none" }}
                  className="w-full box-border px-6 flex overflow-scroll"
                >
                  <li className="w-full text-base font-light">
                    {questions[4].baby}
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function FaqV1() {
  const [openMenu, setMenuOpen] = useState<string | null>(null);
  const toggleMenu = (menu: string) => {
    setMenuOpen(openMenu == menu ? null : menu);
  };

  return (
    <div className="w-full box-border flex flex-col text-black   items-center">
      <div className="w-full box-border">
        <ul className="w-full box-border">
          <li className="flex flex-col relative border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-start box-border">
            <div
              className="cursor-pointer w-full box-border px-6 py-8 flex  justify-between space-x-2 items-center"
              onClick={() => toggleMenu("one")}
            >
              <span
                className={clsx(
                  "text-base font-semibold peer transition-colors ease-in-out"
                )}
              >
                {questions[0].topic}
              </span>
              <div className="p-3">
                {openMenu === "one" ? (
                  <ChevronUpIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                ) : (
                  <ChevronDownIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                )}
              </div>
            </div>
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out -translate-y-7",
                openMenu === "one"
                  ? "max-h-[100px] opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <ul
                style={{ scrollbarWidth: "none" }}
                className="w-full box-border px-6 flex overflow-scroll"
              >
                <li className="w-full text-base font-light">
                  {questions[0].baby}
                </li>
              </ul>
            </div>
          </li>
          <li className="flex flex-col relative border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
            <div
              className="cursor-pointer w-full box-border px-6 py-8 flex  justify-between space-x-2 items-center"
              onClick={() => toggleMenu("two")}
            >
              <span
                className={clsx(
                  "text-base font-semibold peer transition-colors ease-in-out"
                )}
              >
                {questions[1].topic}
              </span>
              <div className="p-3">
                {openMenu === "two" ? (
                  <ChevronUpIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                ) : (
                  <ChevronDownIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                )}
              </div>
            </div>
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out -translate-y-7",
                openMenu === "two"
                  ? "max-h-[125px] opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <ul
                style={{ scrollbarWidth: "none" }}
                className="w-full box-border px-6 flex overflow-scroll"
              >
                <li className="w-full text-base font-light">
                  {questions[1].baby}
                </li>
              </ul>
            </div>
          </li>
          <li className="flex flex-col relative border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
            <div
              className="cursor-pointer w-full box-border px-6 py-8 flex  justify-between space-x-2 items-center"
              onClick={() => toggleMenu("three")}
            >
              <span
                className={clsx(
                  "text-base font-semibold peer transition-colors ease-in-out"
                )}
              >
                {questions[2].topic}
              </span>
              <div className="p-3">
                {openMenu === "three" ? (
                  <ChevronUpIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                ) : (
                  <ChevronDownIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                )}
              </div>
            </div>
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out -translate-y-7",
                openMenu === "three"
                  ? "max-h-[100px] opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <ul
                style={{ scrollbarWidth: "none" }}
                className="w-full box-border px-6 flex overflow-scroll"
              >
                <li className="w-full text-base font-light">
                  {questions[2].baby}
                </li>
              </ul>
            </div>
          </li>
          <li className="flex flex-col relative border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
            <div
              className="cursor-pointer w-full box-border px-6 py-8 flex  justify-between space-x-2 items-center"
              onClick={() => toggleMenu("four")}
            >
              <span
                className={clsx(
                  "text-base font-semibold peer transition-colors ease-in-out"
                )}
              >
                {questions[3].topic}
              </span>
              <div className="p-3">
                {openMenu === "four" ? (
                  <ChevronUpIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                ) : (
                  <ChevronDownIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                )}
              </div>
            </div>
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out -translate-y-7",
                openMenu === "four"
                  ? "max-h-[100px] opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <ul
                style={{ scrollbarWidth: "none" }}
                className="w-full box-border px-6 flex overflow-scroll"
              >
                <li className="w-full text-base font-light">
                  {questions[3].baby}
                </li>
              </ul>
            </div>
          </li>
          <li className="flex flex-col relative border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
            <div
              className="cursor-pointer w-full box-border px-6 py-8 flex  justify-between space-x-2 items-center"
              onClick={() => toggleMenu("five")}
            >
              <span
                className={clsx(
                  "text-base font-semibold peer transition-colors ease-in-out"
                )}
              >
                {questions[4].topic}
              </span>
              <div className="p-3">
                {openMenu === "five" ? (
                  <ChevronUpIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                ) : (
                  <ChevronDownIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                )}
              </div>
            </div>
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out -translate-y-7",
                openMenu === "five"
                  ? "max-h-[100px] opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <ul
                style={{ scrollbarWidth: "none" }}
                className="w-full box-border px-6 flex overflow-scroll"
              >
                <li className="w-full text-base font-light">
                  {questions[4].baby}
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
