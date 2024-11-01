import { golos } from "../fonts";
import BigTopPicCard from "./big-top-pic Card";
import { hows } from "../navbar/links";
import Link from "next/link";

export default function How() {
  return (
    <div className="box-border w-full ">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1280px]  box-border flex flex-col items-center gap-y-20 w-full mx-auto pt-20"
        >
          <h2
            style={{ overflowWrap: "anywhere", lineHeight: "120%" }}
            className={`text-center p-0 mx-4 font-medium text-2xl md:text-4xl box-border hyphens-manual ${golos.className}`}
          >
            How will you use Dropbox ?
          </h2>
          <div className="w-full box-border">
            <div
              style={{ width: "fit-content" }}
              id="how"
              className="grid box-border px-6 md:px-10 md:gap-y-0 gap-y-14 xl:px-0  "
            >
              {hows.map((one) => {
                return (
                  <div key={one.id} className="w-full relative box-border">
                    <BigTopPicCard key={one.id} {...one} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" grid items-center justify-center my-14 w-full gap-y-8">
          <h3
            className={`${golos.className} text-3xl px-7 md:text-4xl font-normal `}
            style={{
              maxWidth: "35ch",
              lineHeight: "1.2",
              textAlign: "center",
            }}
          >
            Trusted by over 700 million registered users and 575,000 teams
          </h3>
          <div className="flex justify-center group">
            <Link href="/" className="text-center">
              View customer stories{" "}
              <span className="group-hover:translate-x-1 transition-transform ease-out duration-300">
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
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    vectorEffect="non-scaling-stroke"
                  ></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
