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

export function Expressionv3() {
  return (
    <div
      style={{
        maxWidth: "75ch",
        lineHeight: "1.2",
        textAlign: "center",
      }}
      className=" grid items-center justify-center  w-full  gap-y-8"
    >
      <h3
        className={`${golos.className} text-lg px-7 md:text-2xl text-center font-normal `}
      >
        Share and track with Dropbox DocSend
      </h3>
      <h5 className="font-light text-lg">
        Upgrade from traditional email attachments to DocSend links for enhanced
        security and a more polished, professional presentation.
      </h5>
    </div>
  );
}

export function ExpressV4() {
  return (
    <div className=" grid items-center justify-center py-10 w-full gap-y-8">
      <div className=" grid items-center justify-center  w-full  gap-y-8">
        <h5
          style={{
            maxWidth: "25ch",
            lineHeight: "1.2",
            textAlign: "center",
          }}
          className="font-normal text-4xl"
        >
          DocSend is the easiest to setup, has the best ROI
        </h5>

        <h5 className="underline underline-offset-1 text-lg text-center font-semibold text-stone-800">
          <Link href={"https://www.g2.com/products/dropbox-docsend/reviews"}>
            Check out our reviews
          </Link>
        </h5>
      </div>
      <div
        id="media"
        className="grid justify-center px-10 gap-y-20 md:gap-x-16 group"
      >
        <div
          style={{
            aspectRatio: 1,
            overflow: "unset",
          }}
          className=" h-auto w-[150px]  flex relative items-center max-h-full max-w-full box-border"
        >
          <Image
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/docsend/Cloud-Content-Collaboration-Leader.png?id=cfb4808a-bf10-43fd-8ee7-18ebfbe3740d&output_type=png"
            alt="Leader emblem"
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
          className=" h-auto w-[150px] flex relative items-center max-h-full max-w-full box-border"
        >
          <Image
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/docsend/Cloud-Content-Collaboration-EasiestSetup-EaseOfSetup.png?id=c007ebfe-1b5c-4b25-974f-9f35be1f1faa&output_type=png"
            alt="Setup emblem"
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
          className=" h-auto w-[150px] flex relative items-center max-h-full max-w-full box-border"
        >
          <Image
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/docsend/Sales-Enablement-BestEstimatedROI-Roi.png?id=ee143ba3-9f21-4602-b911-2783d53f649b&output_type=png"
            alt="Best emblem"
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
          className=" h-auto w-[150px] lg:flex hidden relative items-center max-h-full max-w-full box-border"
        >
          <Image
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/docsend/VirtualDataRoom(VDR)-FastestImplementation-Mid-Market-GoLiveTime.png?id=0dd2e2d4-8234-433a-8bb8-92ed962c177a&output_type=png"
            alt="Fastest implemmtation emblem"
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

export function Expressionv5() {
  return (
    <div className=" grid items-center justify-center text-white  gap-y-8   z-0 pb-8 pt-36 transition-opacity  px-6 xs:px-12 md:px-0">
      <h3
        className={`${golos.className} text-xl px-7 md:text-4xl text-center font-normal `}
      >
        Dropbox Early Access
      </h3>
      <h5
        className="font-light text-lg"
        style={{
          maxWidth: "75ch",
          lineHeight: "1.2",
          textAlign: "center",
        }}
      >
        Test drive the next generation of work tools, now in alpha or beta.
        Scroll down for more info on all the cutting-edge tech available to you
        through Dropbox Early Access. And thanks in advance for sharing
        feedback—your ideas could directly influence the final product!
      </h5>
    </div>
  );
}

export function ExpressionV6() {
  return (
    <div className=" grid items-center text-white justify-center w-full gap-y-8 ">
      <div
        style={{
          maxWidth: "75ch",
          lineHeight: "1.2",
          textAlign: "center",
        }}
        className=" grid items-center justify-center  w-full  gap-y-4"
      >
        <h3
          className={`${golos.className} text-2xl px-7 md:text-4xl text-center font-normal `}
        >
          Investing in innovation
        </h3>
        <h5 className="font-light text-lg">
          We’re looking for the biggest ideas, the best new tech, and the most
          talented teams. Through Dropbox Ventures, we’re investing up to $50
          million in early-stage AI startups.
        </h5>
      </div>
      <div className="flex justify-center group">
        <Link href="https://www.dropbox.com/ventures" className="text-center">
          Learn more
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

export function Expressionv7() {
  return (
    <div
      className=" grid items-center justify-center  w-full  gap-y-14"
      style={{
        maxWidth: "70ch",
        lineHeight: "1.2",
        textAlign: "center",
      }}
    >
      <div className="w-full grid gap-y-4">
        {" "}
        <h3
          className={`${dmSans.className}  px-7 text-2xl md:text-4xl tracking-normal text-center font-normal `}
        >
          Dropbox AI Principles
        </h3>
        <h5 className="font-light text-lg md:text-base text-center">
          Customer focused. Security minded. Responsible and honest.
        </h5>
        <Link
          href="https://www.dropbox.com/ventures"
          className="text-center underline underline-offset-1 decoration-1  decoration-stone-800"
        >
          Learn about all the principles guiding our teams as they develop new
          AI-powered products
        </Link>
      </div>

      <h5 className="font-light text-lg md:text-base text-center">
        Your participation in Dropbox Early Access is subject to the following
        <span>
          <Link href="https://help.dropbox.com/account-settings/alpha-beta-product" className="text-blue-700"> {" "}terms</Link>
        </span>
        . We cannot guarantee that the features or products we make available as
        part of this program will be accessible to you in the future.
      </h5>
    </div>
  );
}


export function Expressionv8() {
  return (
    <div className=" grid items-center  justify-center w-full gap-y-8 ">
      <h3
        className={`${golos.className} text-3xl px-7 md:text-4xl font-normal `}
        style={{
          maxWidth: "40ch",
          lineHeight: "1.2",
          textAlign: "center",
        }}
      >
      Rest easy with data compliant security
      </h3>
      <div className="flex justify-center group">
        <Link href="https://assets.dropbox.com/www/en-us/business/solutions/solutions/dfb_security_whitepaper.pdf" className="text-center underline underline-offset-2 decoration-1 hover:decoration-white transition-colors duration-200 decoration-stone-400">
          Read security whitepaper
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
