"use client";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { golos } from "../fonts";
import "swiper/css";
import { useState, useRef } from "react";
import Collection from "../components/frame";
import { customers } from "../navbar/links";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Saying() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
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
              {currentSlide > 0 && (
                <div
                  style={{ zIndex: 2, top: "30%" }}
                  className=" transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-x-5 absolute w-24 h-24 left-5 hidden xl:flex "
                >
                  <button
                    style={{
                      aspectRatio: 1,
                      cursor: "pointer",
                      overflow: "unset",
                    }}
                    className="m-0 inline-flex relative items-center justify-center p-0 w-full box-border"
                    onClick={() => {
                      if (swiperRef.current) {
                        const newSlide =
                          currentSlide > 0
                            ? currentSlide - 1
                            : customers.length - 1;
                        swiperRef.current.slideTo(newSlide);
                        setCurrentSlide(newSlide);
                      }
                    }}
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
              )}

              <div
                style={{
                  scrollSnapType: "x mandatory",
                  scrollbarWidth: "none",
                }}
                className="flex  min-w-full overflow-x-scroll box-border"
              >
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  onSlideChange={(swiper) =>
                    setCurrentSlide(swiper.activeIndex)
                  }
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                  {customers.map((customer) => (
                    <SwiperSlide key={customer.id}>
                      <Collection {...customer} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {currentSlide < customers.length - 1 && (
                <div
                  style={{ zIndex: 2, top: "30%" }}
                  className=" transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-5 absolute right-5 w-24 h-24 hidden xl:flex"
                >
                  <button
                    style={{
                      aspectRatio: 1,
                      cursor: "pointer",
                      overflow: "unset",
                    }}
                    className="m-0 inline-flex relative items-center justify-center p-0 w-full box-border"
                    onClick={() => {
                      if (swiperRef.current) {
                        const newSlide =
                          currentSlide < customers.length - 1
                            ? currentSlide + 1
                            : 0;
                        swiperRef.current.slideTo(newSlide);
                        setCurrentSlide(newSlide);
                      }
                    }}
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
              )}
            </div>
            <div className="flex box-border">
              {currentSlide > 0 && (
                <button
                  style={{
                    aspectRatio: 1,
                    cursor: "pointer",
                    overflow: "unset",
                  }}
                  className="m-0 inline-flex relative items-center justify-center p-2 hover:bg-stone-700 w-full box-border"
                  onClick={() => {
                    const newSlide =
                      currentSlide > 0
                        ? currentSlide - 1
                        : customers.length - 1;
                    swiperRef.current?.slideTo(newSlide);
                    setCurrentSlide(newSlide);
                  }}
                >
                  <span className="">
                    <ChevronLeftIcon className="size-8 text-white" />
                  </span>
                </button>
              )}

              <div className="flex flex-col items-center justify-center">
                <span className=" text-xl text-stone-400 px-2">
                  {String(currentSlide + 1).padStart(2, "0")}/07
                </span>
              </div>
              {currentSlide < customers.length - 1 && (
                <button
                  style={{
                    aspectRatio: 1,
                    cursor: "pointer",
                    overflow: "unset",
                  }}
                  className="m-0 inline-flex relative items-center justify-center p-2 hover:bg-stone-700 w-full box-border"
                  onClick={() => {
                    const newSlide =
                      currentSlide < customers.length - 1
                        ? currentSlide + 1
                        : 0;
                    swiperRef.current?.slideTo(newSlide);
                    setCurrentSlide(newSlide);
                  }}
                >
                  <span className="">
                    <ChevronRightIcon className="size-8 text-white" />
                  </span>
                </button>
              )}
            </div>
          </div>
          <div id="way" className="w-full box-border pl-6 lg:pl-16 lg:gap-y-0 gap-y-6  grid">
            <h2 className={`text-white text-2xl md:text-4xl lg:px-6 text-wrap ${golos.className}`}>
              Discover a better way to work together
            </h2>
            <div
              style={{ width: "fit-content", height : 'fit-content' }}
              className="rounded-2xl py-4 px-5 group flex  bg-blue-600 hover:bg-blue-700 space-x-3"
            >
              <Link href="/overview/frompath=dropbox"></Link>
              <p className="text-white text-sm xs:text-base font-semibold">
                Learn about Dropbox
              </p>
              <span className="group-hover:translate-x-1  transition-transform ease-out duration-300">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="inline-flex transition-transform duration-300 "
                  width="24"
                  height="24"
                  role="presentation"
                  focusable="false"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
