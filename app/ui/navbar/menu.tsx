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
    <div className="fixed inset-0 mt-9  bg-black bg-opacity-90  -z-50  justify-center">
      <div className="py-20 w-full">
        <ul className="space-y-14">
          <li>
            <div
              className="cursor-pointer flex space-x-2 items-center"
              onClick={() => toggleMenu("products")}
            >
              <span
                className={clsx(
                  " text-2xl font-semibold pl-12 peer transition-colors ease-in-out",
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
                "overflow-hidden transition-all duration-300 ease-in-out",
                openMenu === "products"
                  ? "max-h-max opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <ul className="mt-2  inset-x-0 bg- p-12 bg-stone-900 flex justify-between space-x-3">
                <div className="w-1/2  flex flex-col space-y-8">
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
                                    ? "opacity-100 delay-300"
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
                <div className="w-1/2 flex flex-col space-y-8">
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
                                className="size-10"
                                alt="image"
                              />
                            </div>
                            <div className="flex  flex-col">
                              <p
                                className={clsx(
                                  "transition-opacity duration-500 ease-in-out text-xl font-semibold",
                                  openMenu === "products"
                                    ? "opacity-100 delay-300"
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
              </ul>
            </div>
          </li>
          <li>
            <div
              className="cursor-pointer flex space-x-2 items-center"
              onClick={() => toggleMenu("solutions")}
            >
              <span
                className={clsx(
                  " text-2xl font-semibold pl-12 peer transition-colors ease-in-out",
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
                "overflow-hidden transition-all duration-300 ease-in-out",
                openMenu === "solutions"
                  ? "max-h-max opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <ul className="  inset-x-0  p-12 bg-stone-900 flex justify-between space-x-3">
                <div className="w-1/2  flex flex-col space-y-8">
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
                                      ? "opacity-100 delay-300"
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
                                      ? "opacity-100 delay-300"
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
                <div className="w-1/2 flex flex-col space-y-6">
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
                                    ? "opacity-100 delay-300"
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
              </ul>
            </div>
          </li>
          <li>
            <div
              className="cursor-pointer flex space-x-2 items-center"
              onClick={() => toggleMenu("enterprise")}
            >
              <span
                className={clsx(
                  "text-2xl font-semibold pl-12 peer transition-colors ease-in-out",
                  openMenu === "enterprise" ? "text-blue-500" : "text-white"
                )}
              >
                Enterprise
              </span>
            </div>
          </li>

          <li>
            <div
              className="cursor-pointer flex space-x-2 items-center"
              onClick={() => toggleMenu("pricing")}
            >
              <span
                className={clsx(
                  " text-2xl font-semibold pl-12 peer transition-colors ease-in-out",
                  openMenu === "pricing" ? "text-blue-500" : "text-white"
                )}
              >
                Pricing
              </span>
            </div>
          </li>
          <li>
            <div
              className="cursor-pointer flex space-x-2 items-center"
              onClick={() => toggleMenu("contact sales")}
            >
              <span
                className={clsx(
                  " text-2xl font-semibold pl-12 peer transition-colors ease-in-out",
                  openMenu === "contact sales" ? "text-blue-500" : "text-white"
                )}
              >
                Contact sales
              </span>
            </div>
          </li>
          <li>
            <div
              className="cursor-pointer flex space-x-2 items-center"
              onClick={() => toggleMenu("get app")}
            >
              <span
                className={clsx(
                  " text-2xl font-semibold pl-12 peer transition-colors ease-in-out",
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
                "overflow-hidden transition-all duration-300 ease-in-out",
                openMenu === "get app"
                  ? "max-h-max opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <ul className=" w-full  inset-x-0 bg- p-12 bg-stone-900 ">
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
                                    ? "opacity-100 delay-300"
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
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
