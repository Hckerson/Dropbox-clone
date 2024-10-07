import { UsersIcon } from "@heroicons/react/24/outline";
import { dmSans } from "../fonts";
import Link from "next/link";
export default function Content() {
  return (
    <main>
      <div className="mt-52">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4 text-center">
          <p
            className=" p-1 text-white  rounded-2xl max-w-max"
            style={{ backgroundColor: "#be4b0a" }}
          >
            <UsersIcon className="size-5 inline-flex" /> Content collaboration
          </p>
          <span className={`${dmSans.className} font-medium text-4xl`}>
            {" "}
            work with anyone, from anywhere, on any device
          </span>
          <span>
            Dropbox delivers flexible sharing, smart organization and seamless 
            collaboration{" "}
            <span
              className="w-4 inline-block"
              style={{ color: "gray", verticalAlign: "middle" }}
            >
              —
            </span>{" "}
            even for those <br />
            without an account{" "}
            <span
              className="w-4 inline-block"
              style={{ color: "gray", verticalAlign: "middle" }}
            >
              —
            </span>{" "}
            so you and your team can get it done, and done right.
          </span>

          <div className="space-y-6">
            <Link href={"#"}>
              Get started free{" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="inline-flex ml-2 transition-transform duration-300 group-hover:translate-x-2"
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
            </Link>
            <Link href={"#"}>
              Learn more{" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="inline-flex ml-2 transition-transform duration-300 group-hover:translate-x-2"
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
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
