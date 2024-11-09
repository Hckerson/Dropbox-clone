import Link from "next/link";
import { golos } from "../fonts";
import Image from "next/image";
export default function Expression() {
  return (
    <div className=" grid items-center text-white justify-center w-full gap-y-8 ">
      <h3
        className={`${golos.className} text-3xl px-7 md:text-4xl font-normal `}
        style={{
          maxWidth: "40ch",
          lineHeight: "1.2",
          textAlign: "center",
        }}
      >
        Take a self—guided tour of Dropbox Replay
      </h3>
      <div className="flex justify-center group">
        <Link href="/" className="text-center">
          Get the demo
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
  );
}

export function Expresstwo() {
  return (
    <div className=" grid items-center justify-center text-white py-10 w-full gap-y-8">
      <div className="grid gap-y-6  text-center">
        <h3
          className={`${golos.className} text-3xl px-7 md:text-4xl font-normal `}
          style={{
            maxWidth: "35ch",
            lineHeight: "1.2",
            textAlign: "center",
          }}
        >
          Integrate wherever you edit
        </h3>
        <span>
          View feedback, resolve comments, and upload a new cut without leaving
          your editing app.
        </span>
        <h5>Learn about third party integrations</h5>
      </div>

      <div id="media" className="grid justify-center px-10 gap-y-20 md:gap-x-20 group">
        <div
          style={{
            aspectRatio: 1,
            overflow: "unset",
          }}
          className=" h-auto w-[175px]  flex relative items-center max-h-full max-w-full box-border"
        >
          <Image
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/Adobe_Premiere_Pro_CC_icon.svg?id=d476a94e-280a-4ce8-9171-ccb7b09de660"
            alt="girl"
            width={500}
            height={500} // Adjust this as needed
            quality={80}
            className="object-contain w-full absolute inset-0 h-full"
          />
        </div>
        <div
          style={{
            aspectRatio: 1,
            overflow: "unset",
          }}
          className=" h-auto w-[175px] flex relative items-center max-h-full max-w-full box-border"
        >
          <Image
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/Apple-final-cut.png?id=022506e2-a401-4bf4-a6f9-526849b1517a&output_type=png"
            alt="girl"
            width={500}
            height={500} // Adjust this as needed
            quality={80}
            className="object-contain w-full absolute inset-0 h-full"
          />
        </div>
        <div
          style={{
            aspectRatio: 1,
            overflow: "unset",
          }}
          className=" h-auto w-[175px] flex relative items-center max-h-full max-w-full box-border"
        >
          <Image
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/Blackmagic-logo.svg?id=b2244b95-45c4-432a-afe8-1fda2d90d29b"
            alt="girl"
            width={500}
            height={500} // Adjust this as needed
            quality={80}
            className="object-contain w-full absolute inset-0 h-full"
          />
        </div>
      </div>
    </div>
  );
}
