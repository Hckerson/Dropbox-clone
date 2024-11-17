import Link from "next/link";
import { golos, dmSans } from "../fonts";
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

      <div
        id="media"
        className="grid justify-center px-10 gap-y-20 md:gap-x-20 group"
      >
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

export function Expresstri() {
  return (
    <div
      className=" grid items-center text-white justify-center w-full gap-y-8 pb-16"
      id="pricing"
    >
      <div
        className="grid gap-y-6  text-center"
        style={{
          maxWidth: "80ch",
          lineHeight: "1.2",
          textAlign: "center",
        }}
      >
        <h5 className="text-center">Dropbox Replay add-on</h5>
        <h3
          className={`${golos.className} text-3xl px-7 md:text-4xl font-normal `}
        >
          $10 / month per user (billed annually as $120 / year)
        </h3>
        <h5 className="text-center ">Or $12 / month per user billed monthly</h5>
        <span className="text-wrap">
          Dropbox Basic users must upgrade to a Plus or higher plan before
          buying the Add-On. The Replay Add-On is not available to Dropbox
          Family plan users. Learn more.
        </span>
      </div>

      <div className="w-full flex items-center justify-center flex-col relative space-y-6">
        <div className="flex  py-4">
          <div
            className="flex flex-col space-y-3 "
            style={{ opacity: 1, willChange: "opacity" }}
          >
            <Link
              className="text-base font-medium px-5 py-6 group rounded-2xl bg-blue-500 hover:bg-blue-600 flex space-x-8 items-center transition-transform duration-300"
              href="/login"
            >
              <p className="text-black">Buy the Replay Add-on</p>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                width="24"
                height="24"
                role="presentation"
                focusable="false"
              >
                <path
                  d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  vectorEffect="non-scaling-stroke"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Expressionv1() {
  return (
    <div className=" grid items-center justify-center  w-full  gap-y-8">
      <h3
        className={`${golos.className} text-lg px-7 md:text-2xl text-center font-normal `}
      >
        Choose your Dropbox plan
      </h3>
      <h5
        style={{
          maxWidth: "70ch",
          lineHeight: "1.2",
          textAlign: "center",
        }}
        className="font-normal"
      >
        Get Backup, plus a robust set of organization and collaboration tools,
        with any Dropbox plan.
      </h5>
    </div>
  );
}

export function Expressionv2() {
  return (
    <div className=" grid items-center justify-center  w-full  gap-y-5">
      <h3
        className={`${dmSans.className}  px-7 text-2xl md:text-4xl tracking-normal text-center font-normal `}
      >
        Easier than the competition
      </h3>
      <h5
        style={{
          maxWidth: "75ch",
          lineHeight: "1.2",
          textAlign: "center",
        }}
        className="font-light text-lg md:text-base"
      >
        Dropbox Backup users ranked Dropbox Backup as more intuitive and easier
        to use than Backblaze and Carbonite in a recent study comparing top
        backup solutions.*
      </h5>
      <h5 className="font-light text-lg md:text-base text-center">
        *Based on a 2021 Dropbox research survey of registered Dropbox users who
        have used Dropbox Backup
      </h5>
    </div>
  );
}
