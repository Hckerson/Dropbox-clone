/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import {
  productLInkL,
  productLInkR,
  team,
  industries,
  useCase,
  app,
} from "./links";

import clsx from "clsx";
export default function NavMenu() {
  const [openMenu, setMenuOpen] = useState<string | null>(null);
  const toggleMenu = (menu: string) => {
    setMenuOpen(openMenu === menu ? null : menu);
  };
  return (
    <div className="fixed inset-x-0 h-auto bg-black bg-opacity-90  z-50  ">
      <div className=" w-full">
        <ul className="flex px-[194px]">
          <li>
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
