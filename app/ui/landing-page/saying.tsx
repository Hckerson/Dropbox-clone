'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { golos } from "../fonts";
import 'swiper/css';
import { useState } from 'react';
import Collection from "../components/frame";
import { customers } from "../navbar/links";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function Saying() {
  return (
    <div style={{ backgroundColor: "#1e1919" }} className="w-full box-border ">
      <div className="flex flex-col items-center w-full box-border ">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1350px] box-border w-full flex flex-col items-center gap-y-20 py-20 mx-auto"
        >
          <h2
            style={{ overflowWrap: "anywhere", lineHeight: "120%" }}
            className={`text-center p-0 mx-4 font-medium text-2xl md:text-4xl text-white box-border hyphens-manual ${golos.className}`}
          >
            What Dropbox customers are saying
          </h2>
          <div
            style={{ zIndex: 1 }}
            className=" box-border w-full flex flex-col space-y-5 justify-center items-center xl:max-w-[1350px]"
          >
            <div
              style={{ flexGrow: 1 }}
              className="flex overflow-x-hidden relative w-full group  box-border"
            >
              <div
                style={{ zIndex: 2, top: "30%" }}
                className=" transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-x-5 absolute w-24 h-24 left-5 flex "
              >
                <button
                  style={{
                    aspectRatio: 1,
                    cursor: "pointer",
                    overflow: "unset",
                  }}
                  className="m-0 inline-flex relative items-center justify-center p-0 w-full box-border"
                >
                  <span className="">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="dig-PictogramIcon"
                      width="64"
                      height="64"
                      focusable="false"
                      role="presentation"
                    >
                      <path
                        d="M19 11.75H7m5.25 6.5L6 11.75l6.25-6.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div
                style={{
                  scrollSnapType: "x mandatory",
                  scrollbarWidth: "none",
                }}
                className="flex  min-w-full overflow-x-scroll box-border"
              >
                
                {customers.map((customer) => (
                  <Collection key={customer.id} {...customer} />
                ))}
              </div>
              <div
                style={{ zIndex: 2, top: "30%" }}
                className=" transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-5 absolute right-5 w-24 h-24 flex"
              >
                <button
                  style={{
                    aspectRatio: 1,
                    cursor: "pointer",
                    overflow: "unset",
                  }}
                  className="m-0 inline-flex relative items-center justify-center p-0 w-full box-border"
                >
                  <span className="">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="dig-PictogramIcon"
                      width="64"
                      height="64"
                      focusable="false"
                      role="presentation"
                    >
                      <path
                        d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex box-border">
              <button
                style={{ aspectRatio: 1, cursor: "pointer", overflow: "unset" }}
                className="m-0 inline-flex relative items-center justify-center p-2 hover:bg-stone-700 w-full box-border"
              >
                <span className="">
                  <ChevronLeftIcon className="size-8 text-white"/>
                </span>
              </button>
              <div>

              </div>
              <button
                style={{ aspectRatio: 1, cursor: "pointer", overflow: "unset" }}
                className="m-0 inline-flex relative items-center justify-center p-2 hover:bg-stone-700 w-full box-border"
              >
                <span className="">
                  <ChevronRightIcon className="size-8 text-white"/>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
