import { GetStartedv1, GetStarted, ActionB } from "./get-started";
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
        <div className="lg:hidden md:block hidden"></div>
      </div>
    </div>
  );
}

export function Informationv1() {
  return (
    <div className="box-border w-full p-6 md:p-12 md:pb-16 grid">
      <div className="w-full box-border grid gap-y-5">
        {" "}
        <legend className="text-base font-semibold">Dropbox Backup</legend>
        <h1
          style={{
            overflowWrap: "anywhere",
            textAlign: "unset",
            lineHeight: "100%",
          }}
          className={`font-normal box-border hyphens-manual text-3xl text-wrap   md:text-5xl ${golos.className}`}
        >
          Peace of mind for your digital life and work
        </h1>
        <p className="font-normal text-wrap hyphens-manual text-base ">
          Don’t wait until something goes wrong—automatically back up important
          files on your devices and easily restore them, with Dropbox Backup.
        </p>
      </div>
      <div className="w-full box-border grid pt-6 gap-y-6" id="start">
        <div className="w-full box-border grid  gap-y-6">
          <div className="2xl:pr-6">
            <GetStartedv1 />
          </div>
          <Link href="nav/login">
            {" "}
            <p className="inline-flex items-center text-base group  underline underline-offset-2 decoration-1 hover:decoration-white transition-colors duration-200 decoration-stone-400">
              Already have a dropbox account? Try Backup now{" "}
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
        <div className="lg:hidden md:block hidden"></div>
      </div>
    </div>
  );
}

export function Informationv2() {
  return (
    <div className="box-border w-full p-6 md:p-12 md:pb-14 grid">
      <div className="w-full box-border grid gap-y-5">
        <h1
          style={{
            overflowWrap: "anywhere",
            textAlign: "unset",
            lineHeight: "100%",
          }}
          className={`font-normal box-border hyphens-manual text-3xl text-wrap tracking-wide   md:text-5xl ${golos.className}`}
        >
          Give context to your content with Dropbox Capture
        </h1>
        <p className="font-normal text-wrap hyphens-manual text-base ">
          Move work forward in less time, on your own time. Capture lets you
          give and receive feedback on work, provide context to complicated
          topics, and strike the right tone using screen recordings, voiceovers,
          and screenshots. And with everything connected to Dropbox, you can
          securely share your work without switching apps.
        </p>
      </div>
      <div className="w-full box-border grid pt-7 gap-y-6" id="start">
        <div className="w-full box-border grid  gap-y-6">
          <div className="2xl:pr-6">
            <ActionB
              text="Download for Windows"
              link="https://apps.microsoft.com/detail/9msmrxt381vp?hl=en-us&gl=US"
            />
          </div>
          <Link href="nav/login">
            {" "}
            <p className="inline-flex items-center text-base group  underline underline-offset-2 decoration-1 hover:decoration-white transition-colors duration-200 decoration-stone-400">
              Try Capture with a Dropbox plan{" "}
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
        <div className="lg:hidden md:block hidden"></div>
      </div>
    </div>
  );
}

export function Informationv3() {
  return (
    <div className="box-border w-full p-6 md:p-12 md:pb-28 grid">
      <div className="w-full box-border grid gap-y-5">
        {" "}
        <legend className="text-base font-semibold">Dropbox DocSend</legend>
        <h1
          style={{
            overflowWrap: "anywhere",
            textAlign: "unset",
            lineHeight: "100%",
          }}
          className={`font-normal box-border hyphens-manual text-3xl text-wrap   md:text-5xl ${golos.className}`}
        >
          Securely share files with real-time control and insights
        </h1>
        <p className="font-normal text-wrap hyphens-manual text-base ">
          Enjoy complete control over your most sensitive files after hitting
          send and sharpen your business proposals with valuable insights.
        </p>
      </div>
      <div className="w-full box-border grid pt-6 gap-y-6" id="start">
        <div className="w-full box-border grid  gap-y-6">
          <div style={{ width: "fit-content" }} className="2xl:pr-6 text-black">
            <ActionB link="" text="Try Docsend" />
          </div>
        </div>
        <div className="lg:hidden md:block hidden"></div>
      </div>
    </div>
  );
}

export function Informationv4() {
  return (
    <div className="box-border w-full p-6 md:p-12 md:pb-24 grid">
      <div className="w-full box-border grid gap-y-5">
        {" "}
        <legend className="text-base font-semibold">Dropbox Sign</legend>
        <h1
          style={{
            overflowWrap: "anywhere",
            textAlign: "unset",
            lineHeight: "100%",
          }}
          className={`font-normal box-border hyphens-manual text-3xl text-wrap   md:text-5xl ${golos.className}`}
        >
          Sign paperwork without all the paperwork
        </h1>
        <p className="font-normal text-wrap hyphens-manual text-base ">
          Sign the contract, sign your next client, or sign up a new hire the
          simple way. With legally-binding eSignatures, you can execute business
          critical documents in a few quick clicks.
        </p>
      </div>
      <div className="w-full box-border grid pt-6 gap-y-6" id="start">
        <div className="w-full box-border grid  gap-y-6">
          <div className="2xl:pr-6 text-black">
            <ActionB
              link="https://sign.dropbox.com/products/dropbox-sign/pricing"
              text="Try eSignature for free"
            />
          </div>
          <Link href="nav/login">
            {" "}
            <p className="inline-flex items-center text-base group  underline underline-offset-2 decoration-1 hover:decoration-white transition-colors duration-200 decoration-stone-400">
              Need to sign and store? Try Dropbox Essentials{" "}
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
        <div className="lg:hidden md:block hidden"></div>
      </div>
    </div>
  );
}

export function Informationv5() {
  return (
    <div className="box-border w-full p-6 md:p-12 md:pb-20 grid">
      <div className="w-full box-border grid gap-y-5">
        {" "}
        <legend className="text-base font-semibold">Dropbox for sales</legend>
        <h1
          style={{
            overflowWrap: "anywhere",
            textAlign: "unset",
            lineHeight: "100%",
          }}
          className={`font-normal box-border hyphens-manual text-3xl text-wrap   md:text-5xl ${golos.className}`}
        >
          Close the deal without clicking through countless apps
        </h1>
        <p className="font-normal text-wrap hyphens-manual text-base ">
          Create an integrated sales process with Dropbox. Sign contracts, store
          and edit proposals, and collaborate with stakeholders—making for
          snappier deals and happier customers.
        </p>
      </div>
      <div className="w-full box-border grid pt-6 gap-y-6" id="start">
        <div className="w-full box-border grid  gap-y-6">
          <div className="2xl:pr-6 text-black">
            <ActionB
              link="https://experience.dropbox.com/contact"
              text="Contact Sales"
            />
          </div>
          <Link href="https://dropbox.com/try/teams">
            {" "}
            <p className="inline-flex items-center text-base group  underline underline-offset-2 decoration-1 hover:decoration-white transition-colors duration-200 decoration-stone-400">
              Try free for 30 days{" "}
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
        <div className="lg:hidden md:block hidden"></div>
      </div>
    </div>
  );
}
