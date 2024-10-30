import { GetStarted } from "./get-started";
import Link from "next/link";
import { golos } from "../fonts";
export default function Information() {
  return (
    <div className="box-border w-full p-6 md:p-12 md:pb-16 grid">
      <div className="w-full box-border grid gap-y-5">
        {" "}
        <legend className="text-base font-semibold">Dropbox</legend>
        <h1
          style={{
            overflowWrap: "anywhere",
            textAlign: "unset",
            lineHeight: "100%",
          }}
          className={`font-normal box-border hyphens-manual text-3xl text-wrap   md:text-5xl ${golos.className}`}
        >
          Do more than store with dropbox
        </h1>
        <p className="font-normal text-wrap hyphens-manual text-base ">
          Bring your entire workflow together on one integrated platform that
          works on the tools you already use. Edit PDFs, share videos, sign
          document, and collaborate seamlessly with internal and external
          stakeholders—all without leaving Dropbox
        </p>
      </div>
      <div className="w-full box-border grid pt-6 gap-y-6" id="start">
        <div className="w-full box-border grid  gap-y-6">
          <div className="2xl:pr-6">
            <GetStarted />
          </div>
          <Link href="nav/login">
            {" "}
            <p className="inline-flex items-center text-base group  underline underline-offset-2 decoration-1 hover:decoration-white transition-colors duration-200 decoration-stone-400">
              Already have a dropbox account? Sign in here{" "}
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
        <div className="lg:hidden md:block hidden">

        </div>
      </div>
    </div>
  );
}
