/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import {
  productLInkL,
  productLInkR,
  team,
  industries,
  useCase,
  app,
} from "./links";

import clsx from "clsx";
export default function Menu() {
  const [openMenu, setMenuOpen] = useState<string | null>(null);
  const toggleMenu = (menu: string) => {
    setMenuOpen(openMenu === menu ? null : menu);
  };
  return (
    <div
      style={{ maxHeight: "100vh" }}
      className="fixed h-full  inset-x-0 block xl:hidden bg-black  w-full box-border overflow-scroll mt-3 md:mt-7 z-30 justify-center"
    >
      <div className="py-10 w-full box-border ">
        <ul className="space-y-14 relative box-border z-50">
          <li className="flex flex-col relative  items-center box-border ">
            <div
              className="cursor-pointer w-full box-border py-3 flex space-x-2 items-center"
              onClick={() => toggleMenu("products")}
            >
              <span
                className={clsx(
                  " text-2xl font-semibold pl-6 md:pl-12 peer transition-colors ease-in-out",
                  openMenu === "products" ? "text-blue-600" : "text-white"
                )}
              >
                Products
              </span>
              {openMenu === "products" ? (
                <ChevronDownIcon
                  className={clsx(
                    "w-4 h-4 transition-colors ease-in-out",
                    openMenu === "products" ? "text-blue-500" : "text-white"
                  )}
                />
              ) : (
                <ChevronUpIcon
                  className={clsx(
                    "w-4 h-4  transition-colors ease-in-out",
                    openMenu === "products" ? "text-blue-500" : "text-white"
                  )}
                />
              )}
            </div>
            <div
              className={clsx(
                "transition-all w-full box-border duration-300 ease-in-out",
                openMenu === "products" ? "h-auto opacity-100" : "h-0 opacity-0"
              )}
            >
              <ul className="w-full box-border p-6 md:p-12 bg-stone-900 flex justify-between space-x-3 overflow-scroll">
                <div
                  id="products"
                  className="grid box-border gap-y-6 md:gap-x-6 w-full"
                >
                  <div className="w-full  flex flex-col space-y-8">
                    {productLInkL.map((each) => {
                      return (
                        <li className="" key={each.label}>
                          <Link
                            href={each.href}
                            className="hover:text-blue-500 text-white transition-colors "
                          >
                            <div className="w-full flex space-x-5">
                              <div className="shrink-0">
                                <img
                                  src={each.src}
                                  className="size-10"
                                  alt="image"
                                />
                              </div>
                              <div className="flex  flex-col">
                                <p
                                  className={clsx(
                                    "transition-opacity duration-500 ease-in-out text-xl font-semibold",
                                    openMenu === "products"
                                      ? "opacity-100 "
                                      : "opacity-0"
                                  )}
                                >
                                  {each.label}
                                </p>
                                <p className="text-sm text-stone-400">
                                  {each.body}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                  <div className="w-full flex flex-col space-y-8">
                    {productLInkR.map((each) => {
                      return (
                        <li className="" key={each.label}>
                          <Link
                            href={each.href}
                            className="hover:text-blue-500 text-white transition-colors "
                          >
                            <div className="w-full flex space-x-5">
                              <div className="shrink-0">
                                <img
                                  src={each.src}
                                  className="size-8 bg-white rounded-md"
                                  alt="image"
                                />
                              </div>
                              <div className="flex  flex-col">
                                <p
                                  className={clsx(
                                    "transition-opacity duration-500 ease-in-out text-xl font-semibold",
                                    openMenu === "products"
                                      ? "opacity-100 "
                                      : "opacity-0"
                                  )}
                                >
                                  {each.label}
                                </p>
                                <p className="text-sm text-stone-400">
                                  {each.body}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                </div>
              </ul>
            </div>
          </li>
          <li className="flex flex-col relative  items-center box-border ">
            <div
              className="cursor-pointer w-full box-border py-3 flex space-x-2 items-center"
              onClick={() => toggleMenu("solutions")}
            >
              <span
                className={clsx(
                  " text-2xl font-semibold pl-6 md:pl-12 peer transition-colors ease-in-out",
                  openMenu === "solutions" ? "text-blue-500" : "text-white"
                )}
              >
                Solutions
              </span>
              {openMenu === "solutions" ? (
                <ChevronDownIcon
                  className={clsx(
                    "w-4 h-4 transition-colors ease-in-out",
                    openMenu === "solutions" ? "text-blue-500" : "text-white"
                  )}
                />
              ) : (
                <ChevronUpIcon
                  className={clsx(
                    "w-4 h-4 transition-colors ease-in-out",
                    openMenu === "solutions" ? "text-blue-500" : "text-white"
                  )}
                />
              )}
            </div>
            <div
              className={clsx(
                "overflow-hidden w-full transition-all duration-300 ease-in-out",
                openMenu === "solutions"
                  ? "h-auto opacity-100"
                  : "h-0 opacity-0"
              )}
            >
              <ul className="w-full box-border p-6 md:p-12 bg-stone-900 flex justify-between space-x-3 overflow-scroll">
                <div
                  id="solutions"
                  className="grid box-border gap-y-6 md:gap-x-6 w-full"
                >
                  <div className="w-full box-border  flex flex-col space-y-8">
                    <div className="flex flex-col space-y-6">
                      <legend className="text-base text-stone-400">Team</legend>
                      {team.map((each) => {
                        return (
                          <li className="" key={each.label}>
                            <Link
                              href={each.href}
                              className="hover:text-blue-500 text-white transition-colors "
                            >
                              <div className="w-full flex space-x-5">
                                <div className="flex  flex-col">
                                  <p
                                    className={clsx(
                                      "transition-opacity duration-500 ease-in-out text-xl font-semibold",
                                      openMenu === "solutions"
                                        ? "opacity-100 "
                                        : "opacity-0"
                                    )}
                                  >
                                    {each.label}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </div>
                    <div className="flex flex-col space-y-6">
                      <legend className="text-base text-stone-400">
                        Industries
                      </legend>
                      {industries.map((each) => {
                        return (
                          <li className="" key={each.label}>
                            <Link
                              href={each.href}
                              className="hover:text-blue-500 text-white transition-colors "
                            >
                              <div className="w-full flex space-x-5">
                                <div className="flex  flex-col">
                                  <p
                                    className={clsx(
                                      "transition-opacity duration-500 ease-in-out text-xl font-semibold",
                                      openMenu === "solutions"
                                        ? "opacity-100 "
                                        : "opacity-0"
                                    )}
                                  >
                                    {each.label}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-full box-border flex flex-col space-y-6">
                    <legend className="text-base text-stone-400">
                      Use cases
                    </legend>
                    {useCase.map((each) => {
                      return (
                        <li className="" key={each.label}>
                          <Link
                            href={each.href}
                            className="hover:text-blue-500 text-white transition-colors "
                          >
                            <div className="w-full flex space-x-5">
                              <div className="flex  flex-col">
                                <p
                                  className={clsx(
                                    "transition-opacity duration-500 ease-in-out text-xl font-semibold",
                                    openMenu === "solutions"
                                      ? "opacity-100 "
                                      : "opacity-0"
                                  )}
                                >
                                  {each.label}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                </div>
              </ul>
            </div>
          </li>
          <li className="flex flex-col relative  items-start box-border ">
            <div
              className="cursor-pointer flex space-x-2 items-center"
              onClick={() => toggleMenu("enterprise")}
            >
              <span
                className={clsx(
                  "text-2xl font-semibold pl-6 md:pl-12 peer transition-colors ease-in-out",
                  openMenu === "enterprise" ? "text-blue-500" : "text-white"
                )}
              >
                <Link href="/en_GB/enterprise">Enterprise</Link>
              </span>
            </div>
          </li>
          <li className="flex flex-col relative  items-start box-border ">
            <div
              className="cursor-pointer flex space-x-2 items-center"
              onClick={() => toggleMenu("pricing")}
            >
              <span
                className={clsx(
                  " text-2xl font-semibold pl-6 md:pl-12 peer transition-colors ease-in-out",
                  openMenu === "pricing" ? "text-blue-500" : "text-white"
                )}
              >
                <Link href="/en_GB/plans"> Pricing</Link>
              </span>
            </div>
          </li>
          <li className="flex flex-col relative  items-start box-border ">
            <div
              className="cursor-pointer flex space-x-2 items-center"
              onClick={() => toggleMenu("contact sales")}
            >
              <span
                className={clsx(
                  " text-2xl font-semibold pl-6 md:pl-12 peer transition-colors ease-in-out",
                  openMenu === "contact sales" ? "text-blue-500" : "text-white"
                )}
              >
                <Link href="https://experience.dropbox.com/contact">
                  {" "}
                  Contact sales
                </Link>
              </span>
            </div>
          </li>
          <li className="flex flex-col relative  items-center box-border ">
            <div
              className="cursor-pointer w-full box-border py-3 flex space-x-2 items-center"
              onClick={() => toggleMenu("get app")}
            >
              <span
                className={clsx(
                  " text-2xl font-semibold pl-6  md:pl-12 peer transition-colors ease-in-out",
                  openMenu === "get app" ? "text-blue-500" : "text-white"
                )}
              >
                Get app
              </span>
              {openMenu === "get app" ? (
                <ChevronDownIcon
                  className={clsx(
                    "w-4 h-4  transition-colors ease-in-out",
                    openMenu === "get app" ? "text-blue-500" : "text-white"
                  )}
                />
              ) : (
                <ChevronUpIcon
                  className={clsx(
                    "w-4 h-4 transition-colors ease-in-out",
                    openMenu === "get app" ? "text-blue-500" : "text-white"
                  )}
                />
              )}
            </div>
            <div
              className={clsx(
                "transition-all w-full box-border duration-300 ease-in-out",
                openMenu === "get app" ? "h-auto opacity-100" : "h-0 opacity-0"
              )}
            >
              <ul className="w-full box-border p-6 md:p-12 bg-stone-900 flex justify-between space-x-3 overflow-scroll">
                <div className="grid box-border gap-y-6 md:gap-x-6 w-full">
                  <div className=" flex flex-col space-y-8">
                    {app.map((each) => {
                      return (
                        <li className="" key={each.label}>
                          <Link
                            href={each.href}
                            className="hover:text-blue-500 text-white transition-colors "
                          >
                            <div className="w-full flex space-x-5">
                              <div className="flex  flex-col">
                                <p
                                  className={clsx(
                                    "transition-opacity duration-500 ease-in-out text-xl font-semibold",
                                    openMenu === "get app"
                                      ? "opacity-100 "
                                      : "opacity-0"
                                  )}
                                >
                                  {each.label}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                </div>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
