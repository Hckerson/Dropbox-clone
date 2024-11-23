import { ExpressV9 } from "../components/expression";
import { collabsV2 } from "../navbar/links";
import { golos } from "../fonts";
import { SmallPicV3 } from "../components/why-rep";
import { ActionB } from "../components/get-started";
import Link from "next/link";
import { ComplexFaq } from "../components/FAQ";
export default function Edge() {
  return (
    <div className="box-border w-full bg-[#f7f5f2] ">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1280px]  box-border flex flex-col items-center gap-y-20 w-full mx-auto py-20"
        >
          <ExpressV9 />
          <div>
            <SmallPicV3 collabsV2={collabsV2} />
          </div>
          <ComplexFaq />
        </div>
        <div className="w-full bg-[#1e1919] flex justify-center  box-border py-20">
          <div
            id="way"
            className=" lg:gap-y-0 gap-y-6 xl:max-w-[1280px]  justify-center   grid "
          >
            <h2
              className={` text-2xl text-white   md:text-5xl px-4  lg:px-6 text-wrap ${golos.className}`}
            >
              Sales contracts as good as “Signed”
            </h2>
            <div className="grid gap-y-6 justify-start px-4 lg:justify-center box-border">
              <ActionB
                link="https://www.dropbox.com/try/teams"
                text="Try for free"
              />
              <Link href="https://experience.dropbox.com/contact">
                {" "}
                <p className="inline-flex items-center text-base group text-white  underline underline-offset-2 decoration-1 hover:decoration-white transition-colors duration-200 decoration-stone-400">
                  Contact Sales{" "}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
