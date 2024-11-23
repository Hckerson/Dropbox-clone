"use client";
import { useState } from "react";
import { golos } from "../fonts";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { questions, questionsV1, questionsV2, questionsV3 } from "../navbar/links";


const questionsv4 = [
  {
    id: 1,        
    topic: "Document protection for peace of mind",
    baby: "Secure documents with passwords and expiration dates and turn off the ability to download.",
    alt: "Depiction of security",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/compare/Vault-1696x954.svg?id=47289066-49c0-4944-9138-a45ed680adda",
    bg: "",
  },
  {
    id: 2,
    topic: "Fulfill corporate and government requirements with ease",
    baby: "Automate tracking and reporting of sensitive data. Maintain audit trails for crucial documents including access, reviews, and signatures.",
    alt: "Depiction of security",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/creatives/supreme-court-1696x954.svg?id=aaab30db-00b1-47d1-8687-230aab0af8d3",
    bg: "",
  },
  {
    id: 3,
    topic: "Gain confidence in your content’s security",
    baby: "Utilize tamper-proof documents for protection against changes. Employ access codes and two-factor authentication to verify signers' identity.",
    alt: "Dropbox sign features",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/creatives/end-to-end-encryption-1696x954.svg?id=e40683b4-fcf6-493c-855c-e9cebb2f9b64",
    bg: "",
  },
  {
    id: 4,
    topic: "Disaster-proof protection made simple",
    baby: "Cut disputes by 10x with clear audit trails. Safeguard files on devices with automatic backups for swift recovery.",
    alt: "Dropbox sign features",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/creatives/security-archive-1696x954.svg?id=4cc022c6-227c-46f0-b5f3-e9bc65bab16a",
    bg: "",
  },
];

export default function Faq() {
  const [openMenu, setMenuOpen] = useState<number | null>(null);
  const toggleMenu = (menu: number) => {
    setMenuOpen(openMenu == menu ? null : menu);
  };

  return (
    <div className="w-full box-border flex flex-col text-black py-20  items-center">
      <div className="xl:max-w-[1200px] box-border gap-y-20 md:p-14 lg:p-20 flex flex-col w-full mx-auto items-center">
        <h3
          className={`md:text-4xl text-3xl font-medium text-center px-6  ${golos.className}`}
        >
          Frequently asked questions
        </h3>
        <div className="w-full box-border">
          <ul className="w-full box-border">
            {questions.map((question, index)=>{
              return(
                <li key={question.id} className="flex flex-col relative border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-start box-border">
                <div
                  className="cursor-pointer w-full box-border px-6 py-8 flex  justify-between space-x-2 items-center"
                  onClick={() => toggleMenu(index)}
                >
                  <span
                    className={clsx(
                      "text-base font-semibold peer transition-colors ease-in-out"
                    )}
                  >
                    {question.topic}
                  </span>
                  <div className="p-3">
                    {openMenu === index ? (
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
                    openMenu === index
                      ? "max-h-[100px] opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <ul
                    style={{ scrollbarWidth: "none" }}
                    className="w-full box-border px-6 flex overflow-scroll"
                  >
                    <li className="w-full text-base font-light">
                      {question.baby}
                    </li>
                  </ul>
                </div>
              </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function FaqV1() {
  const [openMenu, setMenuOpen] = useState<number | null>(0);
  const toggleMenu = (menu: number) => {
    setMenuOpen(menu);
  };

  return (
    <div className="w-full box-border flex flex-col text-black   items-center">
      <div className="w-full box-border relative grid overflow-hidden" id="faq">
        <ul className="w-full box-border  md:px-10 lg:px-14">
          {questionsV1.map((question, index) => {
            return (
              <li
                key={question.id}
                className="flex flex-col   border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-start box-border"
              >
                <div
                  className={clsx(
                    "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                    openMenu == index ? "pb-0" : "pb-6"
                  )}
                  onClick={() => toggleMenu(index)}
                >
                  <span
                    className={clsx(
                      "text-base font-semibold peer transition-colors ease-in-out"
                    )}
                  >
                    {question.topic}
                  </span>
                  <div className="p-3">
                    {openMenu === index ? (
                      <ChevronUpIcon className="size-6 transition-colors ease-in-out text-black " />
                    ) : (
                      <ChevronDownIcon className="size-6 transition-colors ease-in-out text-black " />
                    )}
                  </div>
                </div>
                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-300 ease-in-out ",
                    openMenu === index
                      ? "max-h-[450px] opacity-100 pb-6"
                      : "max-h-0 opacity-0 pb-0"
                  )}
                >
                  <ul
                    style={{ scrollbarWidth: "none" }}
                    className="w-full box-border px-6 flex overflow-scroll flex-col"
                  >
                    <li className="w-full text-base font-light">
                      {question.baby}
                    </li>
                    <div
                      style={{ aspectRatio: 16 / 9, overflow: "unset", backgroundColor : question.bg }}
                      className={clsx("lg:absolute relative  sixty top-0  right-0 w-full h-full  flex items-center justify-center  transition-transform ease-in-out duration-300", openMenu == index ? 'translate-x-0': 'translate-x-full')}
                    >
                      <div className="w-full relative h-full py-4 flex items-center  max-w-full">
                        <Image
                          src={question.src}
                          alt={question.alt}
                          width={2880}
                          height={1368} // Adjust this as needed
                          quality={80}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="inset-0 hidden lg:flex items-center justify-center relative overflow-hidden"></div>
      </div>
    </div>
  );
}



export function FaqV3() {
  const [openMenu, setMenuOpen] = useState<number | null>(0);
  const toggleMenu = (menu: number) => {
    setMenuOpen(menu);
  };

  return (
    <div className="w-full box-border flex flex-col text-black   items-center">
      <div className="w-full box-border relative grid overflow-hidden " id="faq">
        <ul className="w-full box-border  md:px-10 lg:px-14">
          {questionsV2.map((question, index) => {
            return (
              <li
                key={question.id}
                className="flex flex-col   border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-start box-border"
              >
                <div
                  className={clsx(
                    "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                    openMenu == index ? "pb-0" : "pb-6"
                  )}
                  onClick={() => toggleMenu(index)}
                >
                  <span
                    className={clsx(
                      "text-base font-semibold peer transition-colors ease-in-out"
                    )}
                  >
                    {question.topic}
                  </span>
                  <div className="p-3">
                    {openMenu === index ? (
                      <ChevronUpIcon className="size-6 transition-colors ease-in-out text-black " />
                    ) : (
                      <ChevronDownIcon className="size-6 transition-colors ease-in-out text-black " />
                    )}
                  </div>
                </div>
                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-300 ease-in-out ",
                    openMenu === index
                      ? "max-h-[450px] opacity-100 pb-6"
                      : "max-h-0 opacity-0 pb-0"
                  )}
                >
                  <ul
                    style={{ scrollbarWidth: "none" }}
                    className="w-full box-border px-6 flex overflow-x-hidden flex-col"
                  >
                    <li className="w-full text-base font-light">
                      {question.baby}
                    </li>
                    <li className="w-full text-base font-light">
                        <Link href={question.link}>Learn more</Link>
                    </li>
                    <div
                      style={{ aspectRatio: 16 / 9, overflow: "unset", backgroundColor : question.bg }}
                      className={clsx("lg:absolute relative  sixty top-0  right-0 w-full h-full  flex items-center justify-center  transition-transform ease-in-out duration-300", openMenu == index ? 'translate-x-0': 'translate-x-full')}
                    >
                      <div className="w-full relative h-full py-4 flex items-center  max-w-full">
                        <Image
                          src={question.src}
                          alt={question.alt}
                          width={2880}
                          height={1368} // Adjust this as needed
                          quality={80}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="inset-0 hidden lg:flex items-center justify-center relative overflow-hidden"></div>
      </div>
    </div>
  );
}

export function FaqV4() {
  const [openMenu, setMenuOpen] = useState<number | null>(0);
  const toggleMenu = (menu: number) => {
    setMenuOpen(menu);
  };

  return (
    <div className="w-full box-border flex flex-col text-black   items-center">
      <div className="w-full box-border relative grid overflow-hidden " id="faq">
        <ul className="w-full box-border  md:px-10 lg:px-14">
          {questionsV3.map((question, index) => {
            return (
              <li
                key={question.id}
                className="flex flex-col   border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-start box-border"
              >
                <div
                  className={clsx(
                    "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                    openMenu == index ? "pb-0" : "pb-6"
                  )}
                  onClick={() => toggleMenu(index)}
                >
                  <span
                    className={clsx(
                      "text-base font-semibold peer transition-colors ease-in-out"
                    )}
                  >
                    {question.topic}
                  </span>
                  <div className="p-3">
                    {openMenu === index ? (
                      <ChevronUpIcon className="size-6 transition-colors ease-in-out text-black " />
                    ) : (
                      <ChevronDownIcon className="size-6 transition-colors ease-in-out text-black " />
                    )}
                  </div>
                </div>
                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-300 ease-in-out ",
                    openMenu === index
                      ? "max-h-[450px] opacity-100 pb-6"
                      : "max-h-0 opacity-0 pb-0"
                  )}
                >
                  <ul
                    style={{ scrollbarWidth: "none" }}
                    className="w-full box-border px-6 flex overflow-x-hidden flex-col"
                  >
                    <li className="w-full text-base font-light">
                      {question.baby}
                    </li>
                    <div
                      style={{ aspectRatio: 16 / 9, overflow: "unset", backgroundColor : question.bg }}
                      className={clsx("lg:absolute relative  sixty top-0  right-0 w-full h-full  flex items-center justify-center  transition-transform ease-in-out duration-300", openMenu == index ? 'translate-x-0': 'translate-x-full')}
                    >
                      <div className="w-full relative h-full py-4 flex items-center  max-w-full">
                        <Image
                          src={question.src}
                          alt={question.alt}
                          width={2880}
                          height={1368} // Adjust this as needed
                          quality={80}
                          className="object-contain w-full h-full scale-75"
                        />
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="inset-0 hidden lg:flex items-center justify-center relative overflow-hidden"></div>
      </div>
    </div>
  );
}

export function FaqV5() {
  const [openMenu, setMenuOpen] = useState<number | null>(0);
  const toggleMenu = (menu: number) => {
    setMenuOpen(menu);
  };

  return (
    <div className="w-full box-border flex flex-col text-black   items-center">
      <div className="w-full box-border relative grid overflow-hidden " id="faq">
        <ul className="w-full box-border  md:px-10 lg:px-14">
          {questionsv4.map((question, index) => {
            return (
              <li
                key={question.id}
                className="flex flex-col     hover:bg-[#eee9e2]  items-start box-border"
              >
                <div
                  className={clsx(
                    "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                    openMenu == index ? "pb-0" : "pb-6", index == 0  || index == questionsv4.length ? " " : "border-t border-black border-opacity-40 "
                  )}
                  onClick={() => toggleMenu(index)}
                >
                  <span
                    className={clsx(
                      "text-base font-semibold peer transition-colors ease-in-out"
                    )}
                  >
                    {question.topic}
                  </span>
                  <div className="p-3">
                    {openMenu === index ? (
                      <ChevronUpIcon className="size-6 transition-colors ease-in-out text-black " />
                    ) : (
                      <ChevronDownIcon className="size-6 transition-colors ease-in-out text-black " />
                    )}
                  </div>
                </div>
                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-300 ease-in-out ",
                    openMenu === index
                      ? "max-h-[450px] opacity-100 pb-6"
                      : "max-h-0 opacity-0 pb-0"
                  )}
                >
                  <ul
                    style={{ scrollbarWidth: "none" }}
                    className="w-full box-border px-6 flex overflow-x-hidden flex-col"
                  >
                    <li className="w-full text-base font-light">
                      {question.baby}
                    </li>
                    <div
                      style={{ aspectRatio: 16 / 9, overflow: "unset", backgroundColor : question.bg }}
                      className={clsx("lg:absolute relative  sixty top-0  right-0 w-full h-full  flex items-center justify-center  transition-transform ease-in-out duration-300", openMenu == index ? 'translate-x-0': 'translate-x-full')}
                    >
                      <div className="w-full relative h-full py-4 flex items-center bg-[#f2eee8] max-w-full">
                        <Image
                          src={question.src}
                          alt={question.alt}
                          width={2880}
                          height={1368} // Adjust this as needed
                          quality={80}
                          className="object-contain w-full h-full scale-75"
                        />
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="inset-0 hidden lg:flex items-center justify-center relative overflow-hidden"></div>
      </div>
    </div>
  );
}

export function FaqV2() {
  const [openMenu, setMenuOpen] = useState<number | null>(0);
  const toggleMenu = (menu: number) => {
    setMenuOpen(menu);
  };

  return (
    <div className="w-full box-border flex flex-col text-black   items-center">
      <div className="w-full box-border relative grid " id="faq">
        <ul className="w-full box-border  md:px-10 lg:px-14">
          <li className="flex flex-col   border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-start box-border">
            <div
              className={clsx(
                "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                openMenu == 0 ? "pb-0" : "pb-6"
              )}
              onClick={() => toggleMenu(0)}
            >
              <span
                className={clsx(
                  "text-base font-semibold peer transition-colors ease-in-out"
                )}
              >
                {questionsV1[0].topic}
              </span>
              <div className="p-3">
                {openMenu === 0 ? (
                  <ChevronUpIcon className="size-6 transition-colors ease-in-out text-black " />
                ) : (
                  <ChevronDownIcon className="size-6 transition-colors ease-in-out text-black " />
                )}
              </div>
            </div>
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out ",
                openMenu === 0
                  ? "max-h-[450px] opacity-100 pb-6"
                  : "max-h-0 opacity-0 pb-0"
              )}
            >
              <ul
                style={{ scrollbarWidth: "none" }}
                className="w-full box-border px-6 flex overflow-scroll flex-col"
              >
                <li className="w-full text-base font-light">
                  {questionsV1[0].baby}
                </li>
                <div
                  style={{ aspectRatio: 16 / 9, overflow: "unset" }}
                  className="lg:absolute relative lg:w-1/2 top-0 right-0 w-full h-full bg-[#fa551e] flex items-center justify-center"
                >
                  <div className="w-full h-auto flex items-center max-h-full max-w-full">
                    <Image
                      src={questionsV1[0].src}
                      alt={""}
                      width={2880}
                      height={1368} // Adjust this as needed
                      quality={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </ul>
            </div>
          </li>
          <li className="flex flex-col  border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
            <div
              className={clsx(
                "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                openMenu == 1 ? "pb-0" : "pb-6"
              )}
              onClick={() => toggleMenu(1)}
            >
              <span
                className={clsx(
                  "text-base font-semibold peer transition-colors ease-in-out"
                )}
              >
                {questionsV1[1].topic}
              </span>
              <div className="p-3">
                {openMenu === 1 ? (
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
                "overflow-hidden transition-all duration-300 ease-in-out ",
                openMenu === 1
                  ? "max-h-[450px] opacity-100 pb-6"
                  : "max-h-0 opacity-0 pb-0"
              )}
            >
              <ul
                style={{ scrollbarWidth: "none" }}
                className="w-full box-border px-6 flex overflow-scroll flex-col"
              >
                <li className="w-full text-base font-light">
                  {questionsV1[1].baby}
                </li>
                <div
                  style={{ aspectRatio: 16 / 9, overflow: "unset" }}
                  className="lg:absolute lg:w-1/2 top-0 right-0 w-full h-full bg-[#c8aff0] flex items-center justify-center"
                >
                  <div className="w-full h-full flex items-center max-h-full max-w-full">
                    <Image
                      src={questionsV1[1].src}
                      alt={""}
                      width={2880}
                      height={1368} // Adjust this as needed
                      quality={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </ul>
            </div>
          </li>
          <li className="flex flex-col  border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
            <div
              className={clsx(
                "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                openMenu == 2 ? "pb-0" : "pb-6"
              )}
              onClick={() => toggleMenu(2)}
            >
              <span
                className={clsx(
                  "text-base font-semibold peer transition-colors ease-in-out"
                )}
              >
                {questionsV1[2].topic}
              </span>
              <div className="p-3">
                {openMenu === 2 ? (
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
                "overflow-hidden transition-all duration-300 ease-in-out ",
                openMenu === 2
                  ? "max-h-[450px] opacity-100 pb-6"
                  : "max-h-0 opacity-0 pb-0"
              )}
            >
              <ul
                style={{ scrollbarWidth: "none" }}
                className="w-full box-border px-6 flex overflow-scroll flex-col"
              >
                <li className="w-full text-base font-light">
                  {questionsV1[2].baby}
                </li>
                <div
                  style={{ aspectRatio: 16 / 9, overflow: "unset" }}
                  className="lg:absolute lg:w-1/2 top-0 right-0 w-full h-full bg-[#14c8eb] flex items-center justify-center"
                >
                  <div className="w-full h-full flex items-center max-h-full max-w-full">
                    <Image
                      src={questionsV1[2].src}
                      alt={""}
                      width={2880}
                      height={1368} // Adjust this as needed
                      quality={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </ul>
            </div>
          </li>
          <li className="flex flex-col  border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
            <div
              className={clsx(
                "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                openMenu == 3 ? "pb-0" : "pb-6"
              )}
              onClick={() => toggleMenu(3)}
            >
              <span
                className={clsx(
                  "text-base font-semibold peer transition-colors ease-in-out"
                )}
              >
                {questionsV1[3].topic}
              </span>
              <div className="p-3">
                {openMenu === 3 ? (
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
                "overflow-hidden transition-all duration-300 ease-in-out ",
                openMenu === 3
                  ? "max-h-[450px] opacity-100 pb-6"
                  : "max-h-0 opacity-0 pb-0"
              )}
            >
              <ul
                style={{ scrollbarWidth: "none" }}
                className="w-full box-border px-6 flex overflow-scroll flex-col"
              >
                <li className="w-full text-base font-light">
                  {questionsV1[3].baby}
                </li>
                <div
                  style={{ aspectRatio: 16 / 9, overflow: "unset" }}
                  className="lg:absolute lg:w-1/2 top-0 right-0 w-full h-full bg-[#fad24b] flex items-center justify-center"
                >
                  <div className="w-full h-full flex items-center max-h-full max-w-full">
                    <Image
                      src={questionsV1[3].src}
                      alt={""}
                      width={2880}
                      height={1368} // Adjust this as needed
                      quality={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </ul>
            </div>
          </li>
          <li className="flex flex-col  border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
            <div
              className={clsx(
                "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                openMenu == 4 ? "pb-0" : "pb-6"
              )}
              onClick={() => toggleMenu(4)}
            >
              <span
                className={clsx(
                  "text-base font-semibold peer transition-colors ease-in-out"
                )}
              >
                {questionsV1[4].topic}
              </span>
              <div className="p-3">
                {openMenu === 4 ? (
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
                "overflow-hidden transition-all duration-300 ease-in-out ",
                openMenu === 4
                  ? "max-h-[450px] opacity-100 pb-6"
                  : "max-h-0 opacity-0 pb-0"
              )}
            >
              <ul
                style={{ scrollbarWidth: "none" }}
                className="w-full box-border px-6 flex overflow-scroll flex-col"
              >
                <li className="w-full text-base font-light">
                  {questionsV1[4].baby}
                </li>
                <div
                  style={{ aspectRatio: 16 / 9, overflow: "unset" }}
                  className="lg:absolute lg:w-1/2 top-0 right-0 w-full h-full bg-[#ffafa5] flex items-center justify-center"
                >
                  <div className="w-full h-full flex items-center max-h-full max-w-full">
                    <Image
                      src={questionsV1[4].src}
                      alt={""}
                      width={2880}
                      height={1368} // Adjust this as needed
                      quality={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </ul>
            </div>
          </li>
          <li className="flex flex-col  border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
            <div
              className={clsx(
                "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                openMenu == 5 ? "pb-0" : "pb-6"
              )}
              onClick={() => toggleMenu(5)}
            >
              <span
                className={clsx(
                  "text-base font-semibold peer transition-colors ease-in-out"
                )}
              >
                {questionsV1[5].topic}
              </span>
              <div className="p-3">
                {openMenu === 5 ? (
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
                "overflow-hidden transition-all duration-300 ease-in-out ",
                openMenu === 5
                  ? "max-h-[450px] opacity-100 pb-6"
                  : "max-h-0 opacity-0 pb-0"
              )}
            >
              <ul
                style={{ scrollbarWidth: "none" }}
                className="w-full box-border px-6 flex overflow-scroll flex-col"
              >
                <li className="w-full text-base font-light">
                  {questionsV1[5].baby}
                </li>
                <div
                  style={{ aspectRatio: 16 / 9, overflow: "unset" }}
                  className="lg:absolute lg:w-1/2 top-0 right-0 w-full h-full bg-[#14c8eb] flex items-center justify-center"
                >
                  <div className="w-full h-full flex items-center max-h-full max-w-full">
                    <Image
                      src={questionsV1[5].src}
                      alt={""}
                      width={2880}
                      height={1368} // Adjust this as needed
                      quality={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </ul>
            </div>
          </li>
          <li className="flex flex-col  border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
            <div
              className={clsx(
                "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                openMenu == 6 ? "pb-0" : "pb-6"
              )}
              onClick={() => toggleMenu(6)}
            >
              <span
                className={clsx(
                  "text-base font-semibold peer transition-colors ease-in-out"
                )}
              >
                {questionsV1[6].topic}
              </span>
              <div className="p-3">
                {openMenu === 6 ? (
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
                "overflow-hidden transition-all duration-300 ease-in-out ",
                openMenu === 6
                  ? "max-h-[450px] opacity-100 pb-6"
                  : "max-h-0 opacity-0 pb-0"
              )}
            >
              <ul
                style={{ scrollbarWidth: "none" }}
                className="w-full box-border px-6 flex overflow-scroll flex-col"
              >
                <li className="w-full text-base font-light">
                  {questionsV1[6].baby}
                </li>
                <div
                  style={{ aspectRatio: 16 / 9, overflow: "unset" }}
                  className="lg:absolute lg:w-1/2 top-0 right-0 w-full h-full bg-[#b4dc19] flex items-center justify-center"
                >
                  <div className="w-full h-full flex items-center max-h-full max-w-full">
                    <Image
                      src={questionsV1[6].src}
                      alt={""}
                      width={2880}
                      height={1368} // Adjust this as needed
                      quality={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </ul>
            </div>
          </li>
        </ul>
        <div className="inset-0 hidden lg:flex items-center justify-center relative overflow-hidden"></div>
      </div>
    </div>
  );
}