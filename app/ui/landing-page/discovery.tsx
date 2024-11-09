"use client"; // For Next.js App Router (if applicable)
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { articles } from "../navbar/links";

export default function Discovery() {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const target = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5,rootMargin: "50px" }
    );

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []); 
  return (
    <div
      style={{ backgroundColor: "#f7f5f2" }}
      className="box-border w-full py-20"
    >
      <div className="w-full flex items-center flex-col box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1100px] box-border gap-y-20 flex flex-col   w-full mx-auto  py-20  items-center"
        >
          <h2
            style={{ overflowWrap: "anywhere", lineHeight: "120%" }}
            className="text-center p-0 m-0 font-medium text-3xl box-border hyphens-manual"
          >
            Discover, learn, thrive with Dropbox
          </h2>
          <div className="w-full box-border">
            <div
              style={{ scrollbarWidth: "none"}}
              className="overflow-x-scroll overscroll-x-none select-none box-border"
            >
              <div
                id="discovery"
                style={{ width: "fit-content" }}
                className=" gap-x-6 box-border    xl:px-0 lg:px-20  md:px-12 px-6   grid "
              >
                {articles.map((article) => {
                  return (
                    <div
                      key={article.id}
                      ref={elementRef}
                      className={clsx('relative box-border transition-all duration-500', isVisible ? 'opacity-100 scale-100 blur-0' : 'lg:opacity-0  lg:scale-75 lg:blur-3xl')}
                    >
                      <div className=" xs:min-w-[293px] xs:w-full  w-[230px] h-full box-border">
                        <div style={{gridAutoFlow : 'row', gridTemplateRows : 'max-content', backgroundColor : '#fff'}} className="rounded-2xl select-none overflow-hidden p-0 m-0 justify-stretch h-full grid items-start box-border">
                          <div className="rounded-lg m-2 overflow-hidden box-border">
                            <div
                              style={{ aspectRatio: 2.2 }}
                              className="w-full relative flex box-border"
                            >
                              <div className="w-full absolute inset-0 flex items-center box-border max-h-full max-w-full">
                                <Image
                                  src={article.src}
                                  alt="girl"
                                  width={662}
                                  height={300} // Adjust this as needed
                                  className="h-full w-full absolute inset-0 box-border max-h-full max-w-full"
                                  quality={100}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="px-6 pb-8 pt-2 h-full  box-border">
                            <div className="flex h-full flex-col justify-between box-border">
                              <div
                                style={{
                                  gridAutoFlow: "row",
                                  gridTemplateRows: "max-content",
                                }}
                                className="gap-y-3 m-0 p-0 grid justify-stretch box-border"
                              >
                                <div
                                  style={{
                                    overflowWrap: "anywhere",
                                    color: "rgba(82,74,62,.82)",
                                    lineHeight: "300%",
                                  }}
                                  className="m-0 p-0 font-bold  hyphens-manual box-border text-xs "
                                >
                                  Article
                                </div>
                                <p
                                  style={{ overflowWrap: "anywhere" }}
                                  className=" font-semibold text-lg hyphens-manual leading-5"
                                >
                                  {article.about}
                                </p>
                                <p
                                  style={{
                                    overflowWrap: "anywhere",
                                    color: "rgba(82,74,62,.82)",
                                  }}
                                  className=" text-stone-600  hyphens-manual text-sm font-normal "
                                >
                                  {article.note}{" "}
                                </p>
                              </div>
                              <div className="mt-6">
                                <Link href={'#'}>
                                  Read Article
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex h-[169px]  items-center justify-center text-blue-700">
            <Link href="/mac ">View more resources</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
