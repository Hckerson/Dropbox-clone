"use client";
import { useState } from "react";
import { golos } from "../fonts";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { questions, questionsV1, questionsV2 } from "../navbar/links";


const questionsV3 = [
  {
    id: 1,        
    topic: "Close deals and protect relationships",
    baby: "Get sales contracts, MSAs, change orders, and more signed 80% faster so you can focus on landing the next big client.",
    alt: "Dropbox sign features",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/hellosign/sign_workflow_1440x368.png?id=358d7fce-a975-41af-b9cc-53b780795355&output_type=png",
    bg: "#fad24b",
  },
  {
    id: 2,
    topic: "Easy onboarding = happier employees",
    baby: "Optimize the employee paperwork experience and boost retention by making non-disclosure agreements, offer letters, and other documents easier to turn around.",
    alt: "Dropbox sign features",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/features/productivity/electronic-signature-request/sign_templates_1440xauto.jpg?id=c9f8e9c2-081a-433b-9c63-b9524cbebcad&output_type=jpg",
    bg: "#b4c8e1",
  },
  {
    id: 3,
    topic: "Protect your business and IP",
    baby: "Put your business relationships in writing by getting legally binding eSignatures for privacy and liability agreements like NDAs and waivers signed quickly.",
    alt: "Dropbox sign features",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/hellosign/sign-signaturepage-2560xauto.jpg?id=8b1c6388-4835-49a1-aafc-a03382b11ff3&width=2560&output_type=jpg",
    bg: "#c8aff0",
  },
  {
    id: 4,
    topic: "Streamline real estate agreements",
    baby: "Manage the flood of agreements for buyers, sellers, agents, financing, and rentals that come across your desk and keep clients happy.",
    alt: "Dropbox sign features",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/features/productivity/electronic-signature-request/sign_documents_1440x960.png?id=931cb9ed-c5a3-4b0c-8a5b-d41126015c42&output_type=png",
    bg: "#fa551e",
  },
  {
    id: 5,
    topic: "Secure finances and grow your business",
    baby: "Easily process loan and grant applications; shareholders' agreements and term sheets; invoices; and other financial documents.",
    alt: "Dropbox sign features",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/hellosign/sign-templates-2560xauto.png?id=9e7dc209-9bf3-4ce2-a5f1-c4f06430f4e9&width=2560&output_type=png",
    bg: "#b4dc19",
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