"use client"; // For Next.js App Router (if applicable)
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { aspects } from "../navbar/links";

export default function Aspect() {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    if (typeof window === "undefined") return;

    const target = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5,rootMargin: "450px" }
    );

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []); 
  
  return (
    <div className="w-full box-border flex flex-col items-center">
      <div
        style={{ gridAutoFlow: "row", gridTemplateRows: "max-content" }}
        className="xl:max-w-[1100px] box-border lg:gap-y-20  gap-y-12  w-full mx-auto xl:px-0 lg:px-20 lg:py-24 md:px-12 px-6  py-20 grid items-center "
      >
        <h2
          style={{ overflowWrap: "anywhere", lineHeight: "120%" }}
          className="text-center p-0 m-0 font-medium text-3xl box-border hyphens-manual"
        >
          Dropbox empowers across industries
        </h2>
        <div id="aspect" className="grid gap-6 box-border">
          {aspects.map((aspect) => {
            return (
              <div
                key={aspect.id}
                style={{ backgroundColor: "#f7f5f2" }}
                ref={elementRef}
                className={clsx('box-border h-full overflow-hidden relative rounded-2xl group animate__animated transition-all duration-500', isVisible ? 'opacity-100 scale-100 blur-0' : 'md:opacity-0  md:scale-75 md:blur-3xl')} 
              >
                <div
                  className="p-0 m-0 h-full grid justify-start items-center box-border"
                  id="pic"
                >
                  <div className="md:w-[186px] h-full md:block hidden box-border">
                    <div
                      style={{ aspectRatio: 1.7 }}
                      className="w-full h-full flex overflow-hidden relative max-h-full max-w-full box-border items-center"
                    >
                      <Image
                        src={aspect.pic.trim()}
                        alt={aspect.name}
                        width={1920}
                        height={1080} // Adjust this as needed
                        className="h-full object-cover w-full absolute inset-0 max-h-full max-w-full box-border"
                      />
                    </div>
                  </div>
                  <div
                    className="w-full p-6 "
                    style={{ backgroundColor: "#f7f5f2" }}
                  >
                    <div>
                      <div className="w-full text-base font-semibold">
                        {aspect.name}
                      </div>
                      <span className="font-light text-sm text-stone-600">{aspect.about}</span>
                    </div>
                    <>
                      <p className="inline underline underline-offset-2 decoration-1 decoration-stone-300">
                        <Link href={aspect.href}>Learn more</Link>
                      </p>{" "}
                      <span className="group-hover:translate-x-2 transition-transform ease-in duration-300">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="inline-flex ml-2 transition-transform duration-300 group-hover:translate-x-1"
                          width="24"
                          height="24"
                          role="presentation"
                          focusable="false"
                        >
                          <path
                            d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            vectorEffect="non-scaling-stroke"
                          ></path>
                        </svg>
                      </span>
                    </>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
