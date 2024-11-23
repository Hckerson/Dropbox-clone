"use client";
import { useState } from "react";
import { golos } from "../fonts";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import {
  questions,
  questionsV1,
  questionsV2,
  questionsV3,
  questionsv4,
} from "../navbar/links";

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
            {questions.map((question, index) => {
              return (
                <li
                  key={question.id}
                  className="flex flex-col relative border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-start box-border"
                >
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
              );
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
                      style={{
                        aspectRatio: 16 / 9,
                        overflow: "unset",
                        backgroundColor: question.bg,
                      }}
                      className={clsx(
                        "lg:absolute relative  sixty top-0  right-0 w-full h-full  flex items-center justify-center  transition-transform ease-in-out duration-300",
                        openMenu == index ? "translate-x-0" : "translate-x-full"
                      )}
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
      <div
        className="w-full box-border relative grid overflow-hidden "
        id="faq"
      >
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
                      style={{
                        aspectRatio: 16 / 9,
                        overflow: "unset",
                        backgroundColor: question.bg,
                      }}
                      className={clsx(
                        "lg:absolute relative  sixty top-0  right-0 w-full h-full  flex items-center justify-center  transition-transform ease-in-out duration-300",
                        openMenu == index ? "translate-x-0" : "translate-x-full"
                      )}
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
      <div
        className="w-full box-border relative grid overflow-hidden "
        id="faq"
      >
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
                      style={{
                        aspectRatio: 16 / 9,
                        overflow: "unset",
                        backgroundColor: question.bg,
                      }}
                      className={clsx(
                        "lg:absolute relative  sixty top-0  right-0 w-full h-full  flex items-center justify-center  transition-transform ease-in-out duration-300",
                        openMenu == index ? "translate-x-0" : "translate-x-full"
                      )}
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
      <div
        className="w-full box-border relative grid overflow-hidden "
        id="faq"
      >
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
                    openMenu == index ? "pb-0" : "pb-6",
                    index == 0 || index == questionsv4.length
                      ? " "
                      : "border-t border-black border-opacity-40 "
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
                      style={{
                        aspectRatio: 16 / 9,
                        overflow: "unset",
                        backgroundColor: question.bg,
                      }}
                      className={clsx(
                        "lg:absolute relative  sixty top-0  right-0 w-full h-full  flex items-center justify-center  transition-transform ease-in-out duration-300",
                        openMenu == index ? "translate-x-0" : "translate-x-full"
                      )}
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

export function ComplexFaq() {
  const [openMenu, setMenuOpen] = useState<number | null>(null);
  const toggleMenu = (menu: number) => {
    setMenuOpen(openMenu == menu ? null : menu);
  };

  return (
    <div className="w-full box-border flex flex-col text-black  items-center">
      <div className="xl:max-w-[1200px] box-border gap-y-20 md:p-14 lg:p-20 flex flex-col w-full mx-auto items-center">
        <h3
          className={`md:text-4xl text-3xl font-medium text-center px-6  ${golos.className}`}
        >
          Frequently asked questions
        </h3>
        <div className="w-full box-border">
          <ul className="w-full box-border">
            <li className="flex flex-col relative border-y border-black hover:bg-[#eee9e2] border-opacity-40 items-start box-border">
              <div
                className="cursor-pointer w-full box-border px-6 py-8 flex  justify-between space-x-2 items-center"
                onClick={() => toggleMenu(0)}
              >
                <span
                  className={clsx(
                    "text-base font-semibold peer transition-colors ease-in-out"
                  )}
                >
                  Which CRM tools does Dropbox integrate with?
                </span>
                <div className="p-3">
                  {openMenu === 0 ? (
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
                  openMenu === 0
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6  lg:w-9/12 w-full mb-6">
                  Your CRM tool is the backbone of your sales department, which
                  is why Dropbox integrates seamlessly with leading CRM
                  platforms:
                </div>
                <ul
                  style={{ scrollbarWidth: "none" }}
                  className="lg:w-4/5 w-full box-border px-6 flex flex-col gap-y-4 overflow-scroll  list-disc   pl-12"
                >
                  <li>
                    <span className="text-lg font-semibold  underline underline-offset-2 decoration-1  hover:no-underline ">
                      <Link href="">Salesforce</Link>
                    </span>
                    <p className="font-light inline">
                      —collaborate with your customers and team members on any
                      of your content stored in Dropbox, directly from your
                      Salesforce records
                    </p>
                  </li>
                  <li>
                    <span className="text-lg font-semibold  underline underline-offset-2 decoration-1   hover:no-underline">
                      <Link href="">Zoho CRM</Link>
                    </span>
                    <p className="font-light inline">
                      —give sales reps a quick and easy solution to manage,
                      create, share and access files in your Dropbox account
                      from within Zoho CRM.
                    </p>
                  </li>
                  <li>
                    <span className="text-lg font-semibold  underline underline-offset-2 decoration-1  hover:no-underline ">
                      <Link href="">Hubspot</Link>
                    </span>
                    <p className="font-light inline">
                      —access any Dropbox file from within your Hubspot
                      workflow, sign documents seamlessly, and simplify
                      processes to get more done—with less work
                    </p>
                  </li>
                  <li>
                    <span className="text-lg font-semibold  underline underline-offset-2 decoration-1   hover:no-underline">
                      <Link href="">amoCRM</Link>
                    </span>
                    <p className="font-light inline">
                      —attach Dropbox files directly to your lead card notes,
                      and access Dropbox files directly from amoCRM (also known
                      as Kommo CRM)
                    </p>
                  </li>
                  <li>
                    <span className="text-lg font-semibold  underline underline-offset-2 decoration-1   hover:no-underline">
                      <Link href="">Insightly</Link>
                    </span>
                    <p className="font-light inline">
                      —link files stored in your Dropbox account to your
                      Insightly records, no need to upload to two separate
                      platforms
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex flex-col relative border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-start box-border">
              <div
                className="cursor-pointer w-full box-border px-6 py-8 flex  justify-between space-x-2 items-center"
                onClick={() => toggleMenu(1)}
              >
                <span
                  className={clsx(
                    "text-base font-semibold peer transition-colors ease-in-out"
                  )}
                >
                  What do I get with a Dropbox plan?
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
                  "overflow-hidden transition-all duration-300 ease-in-out -translate-y-7",
                  openMenu === 1
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <ul
                  style={{ scrollbarWidth: "none" }}
                  className="w-full box-border px-6 flex flex-col gap-y-6 overflow-scroll"
                >
                  <li className="w-full text-base font-light">
                    Our plans for individual users and teams give you access to
                    a wide range of tools and features that help to speed up
                    your sales workflow.
                  </li>
                  <li className="w-full text-base font-light">
                    <span className="underline underline-offset-2 decoration-1 hover:decoration-white transition-colors duration-200 decoration-stone-400">
                      Explore the latest plans and pricing
                    </span>
                    for details.
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex flex-col relative border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-start box-border">
              <div
                className="cursor-pointer w-full box-border px-6 py-8 flex  justify-between space-x-2 items-center"
                onClick={() => toggleMenu(2)}
              >
                <span
                  className={clsx(
                    "text-base font-semibold peer transition-colors ease-in-out"
                  )}
                >
                  What tools does Dropbox offer for sales teams?
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
                  "overflow-hidden transition-all duration-300 ease-in-out -translate-y-7",
                  openMenu === 2
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6  lg:w-9/12 w-full mb-6">
                  In addition to lightning-fast file syncing and collaborative
                  capabilities, Dropbox provides a number of tools that make
                  life easier for sales teams to engage leads and close deals:
                </div>
                <ul
                  style={{ scrollbarWidth: "none" }}
                  className="lg:w-4/5 w-full box-border px-6 flex flex-col gap-y-4 overflow-scroll  list-disc   pl-12"
                >
                  <li>
                    <span className="text-lg font-semibold  underline underline-offset-2 decoration-1  hover:no-underline ">
                      <Link href="/nav/products/sign">Sign</Link>
                    </span>
                    <p className="font-light inline">
                      —all of your contracting and eSignature needs covered
                    </p>
                  </li>
                  <li>
                    <span className="text-lg font-semibold  underline underline-offset-2 decoration-1   hover:no-underline">
                      <Link href="/nav/products/docsend">DocSend</Link>
                    </span>
                    <p className="font-light inline">
                      —finalize, send, and track engagement with sales proposals
                      and pitches
                    </p>
                  </li>
                  <li>
                    <span className="text-lg font-semibold  underline underline-offset-2 decoration-1  hover:no-underline ">
                      <Link href="">Capture</Link>
                    </span>
                    <p className="font-light inline">
                      —communicate with clarity, using short screen recordings
                      to save writing lengthy emails
                    </p>
                  </li>
                  <li>
                    <span className="text-lg font-semibold  underline underline-offset-2 decoration-1   hover:no-underline">
                      <Link href="">Transfer</Link>
                    </span>
                    <p className="font-light inline">
                      —securely share large files, with password protection and
                      custom branding
                    </p>
                  </li>
                  <li>
                    <span className="text-lg font-semibold  underline underline-offset-2 decoration-1   hover:no-underline">
                      <Link href="">Passwords</Link>
                    </span>
                    <p className="font-light inline">
                      —store passwords and log into platforms in a single click
                    </p>
                  </li>
                  <li>
                    <span className="text-lg font-semibold  underline underline-offset-2 decoration-1   hover:no-underline">
                      <Link href="">Backup</Link>
                    </span>
                    <p className="font-light inline">
                      —automatically back up important files and easily restore
                      them to any device
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex flex-col  relative border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-start box-border">
              <div
                className="cursor-pointer w-full box-border px-6 py-8 flex  justify-between space-x-2 items-center"
                onClick={() => toggleMenu(3)}
              >
                <span
                  className={clsx(
                    "text-base font-semibold peer transition-colors ease-in-out"
                  )}
                >
                  What sales team processes does Dropbox help with?
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
                  "overflow-hidden w-full transition-all duration-300 ease-in-out -translate-y-7",
                  openMenu === 3
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6  lg:w-9/12 w-full mb-6">
                  Dropbox makes your life easier at every stage of the sales
                  pipeline:
                </div>
                <ul
                  style={{ scrollbarWidth: "none" }}
                  className="lg:w-4/5 w-full box-border px-6 flex flex-col gap-y-4 overflow-scroll  list-disc   pl-12"
                >
                  <li>
                    <p className="font-light inline">
                      Create, store, and organize your pitch decks in your
                      Dropbox cloud storage
                    </p>
                  </li>
                  <li>
                    <p className="font-light inline">
                      Send pitches and proposals with DocSend
                    </p>
                  </li>
                  <li>
                    <p className="font-light inline">
                      dd context to your proposals with screen recordings from
                      Capture
                    </p>
                  </li>
                  <li>
                    <p className="font-light inline">
                      When it’s time to sign new contracts or renewals, request
                      eSignatures with Sign
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex flex-col relative border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-start box-border">
              <div
                className="cursor-pointer w-full box-border px-6 py-8 flex  justify-between space-x-2 items-center"
                onClick={() => toggleMenu(4)}
              >
                <span
                  className={clsx(
                    "text-base font-semibold peer transition-colors ease-in-out"
                  )}
                >
                  How does Dropbox help to improve sales efficiency?
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
                  "overflow-hidden transition-all w-full duration-300 ease-in-out -translate-y-7",
                  openMenu === 4
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6  lg:w-9/12 w-full mb-6">
                  An effective sales team needs to run seamlessly, like a
                  well-oiled machine.
                </div>
                <ul
                  style={{ scrollbarWidth: "none" }}
                  className="lg:w-4/5 w-full box-border px-6 flex flex-col gap-y-4 overflow-scroll  list-disc   pl-12"
                >
                  <li>
                    <p className="font-light inline">
                      Create, store, and organize your pitch decks in your
                      Dropbox cloud storage
                    </p>
                  </li>
                  <li>
                    <p className="font-light inline">
                      Send pitches and proposals with DocSend
                    </p>
                  </li>
                  <li>
                    <p className="font-light inline">
                      dd context to your proposals with screen recordings from
                      Capture
                    </p>
                  </li>
                  <li>
                    <p className="font-light inline">
                      When it’s time to sign new contracts or renewals, request
                      eSignatures with Sign
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex flex-col relative border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-start box-border">
              <div
                className="cursor-pointer w-full box-border px-6 py-8 flex  justify-between space-x-2 items-center"
                onClick={() => toggleMenu(5)}
              >
                <span
                  className={clsx(
                    "text-base font-semibold peer transition-colors ease-in-out"
                  )}
                >
                  How does Dropbox keep sales data secure?
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
                  "overflow-hidden transition-all duration-300 ease-in-out -translate-y-7",
                  openMenu === 5
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <ul
                  style={{ scrollbarWidth: "none" }}
                  className="w-full box-border px-6 flex flex-col gap-y-6 overflow-scroll"
                >
                  <li className="w-full text-base font-light">
                    Dropbox is built with multiple layers of protection to keep
                    your team’s files secure.
                  </li>
                  <li className="w-full text-base font-light">
                    Simplify data security for your sales team and enable them
                    to build customer trust, with Dropbox tools that prioritize
                    the protection of sensitive information.
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
