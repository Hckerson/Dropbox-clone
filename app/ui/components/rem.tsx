import { golos } from "../fonts";
import Link from "next/link";
export default function Righty() {
  return (
    <div className="grid items-center h-full p-4" id="one">
      <div className=" box-border px-4 md:px-8 h-full flex items-center justify-center">
        <div className="grid  gap-y-6">
          <p className={`text-3xl text-white font-normal ${golos.className}`}>
            Bring everyone together
          </p>
          <span className="text-white font-normal">
            Host a live virtual review for your audio, video, or image project.
            And collect everyone’s feedback with real-time comments and markup
            tools.
          </span>
          <Link
            href=""
            className=" rounded-xl text-white group py-5 px-6 ring-2 ring-white flex space-x-5 font-semibold "
            style={{ width: "fit-content" }}
          >
            <p>Get started</p>
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
          </Link>
        </div>
      </div>
      <div className="xl:flex hidden"></div>
    </div>
  );
}

export function Lefty() {
  return (
    <div className="grid items-center h-full p-4" id="two">
      <div className="xl:flex hidden"></div>
      <div className=" box-border px-4 md:px-8 h-full flex items-center justify-center">
        <div className="grid  gap-y-6">
          <p className={`text-3xl text-white font-normal ${golos.className}`}>
            Prioritize security
          </p>
          <span className="text-white font-normal">
            Replay is backed by Dropbox, so you know your work is safe. Password
            protect shared files and manage all your review links in one
            centralized hub.
          </span>
          <Link
            href=""
            className=" rounded-xl text-white group py-5 px-6 ring-2 ring-white flex space-x-5 font-semibold "
            style={{ width: "fit-content" }}
          >
            <p>Start project</p>
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
          </Link>
        </div>
      </div>
    </div>
  );
}

export function LeftyV1() {
  return (
    <div className="grid items-center h-full p-4" id="two">
      <div className="xl:flex hidden"></div>
      <div className=" box-border px-4 md:px-8 h-full flex items-center justify-center">
        <div className="grid  gap-y-3 text-white">
          <legend>Dash for Business</legend>
          <p className={`text-3xl text-white font-normal ${golos.className}`}>
            Find anything. Protect everything.
          </p>
          <span className="text-white font-normal">
            Introducing Dash for Business, the platform that combines AI
            universal search and organization with universal content access
            control. Dash is here to help teams find what they need, and let
            admins protect what matters.
          </span>
          <ul className="w-full list-disc  pl-6">
            <li>
              Universal search helps users quickly find the content they need
              within Dropbox and beyond
            </li>
            <li>
              Summarize documents with a click, instantly generate AI-powered
              insights, and collaborate easily using shareable content
              collections
            </li>
            <li>
              Powerful admin controls—easily view and manage access permissions
              to make sure only the right people see sensitive content
            </li>
          </ul>
          <span>
            Dropbox Dash is currently available to users in the US in English
            only.
          </span>
          <Link
            href="https://dash.dropbox.com/?tk=dea"
            className=" rounded-xl text-white group py-5 px-6 ring-2 hover:bg-stone-700 ring-white flex space-x-5 font-semibold "
            style={{ width: "fit-content" }}
          >
            <p>Try Dash now</p>
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
          </Link>
        </div>
      </div>
    </div>
  );
}

export function RightV1() {
  return (
    <div className="grid items-center h-full p-4" id="one">
      <div className=" box-border px-4 md:px-8 h-full flex items-center justify-center">
        <div className="grid  gap-y-6">
          <p className={`text-2xl font-normal ${golos.className}`}>
            Centralize your content, maximize your productivity
          </p>
          <span className=" font-normal">
            No more toggling between apps—you can{" "}
            <span className="underline underline-offset-2 decoration-2">
              <Link
                href={"https://www.dropbox.com/features/content_collaboration"}
              >
                organize and make edits
              </Link>
            </span>{" "}
            to contracts and PDFs inside Dropbox, then{" "}
            <span className="underline underline-offset-2 decoration-2">
              <Link href={"https://www.dropbox.com/features/share"}>
                share those files
              </Link>
            </span>{" "}
            with a few clicks.
          </span>
        </div>
      </div>
      <div className="xl:flex hidden"></div>
    </div>
  );
}

export function LeftV2() {
  return (
    <div className="grid items-center h-full md:p-3 px-4" id="two">
      <div className="xl:flex hidden"></div>
      <div className=" box-border px-4 h-full flex items-center justify-center">
        <div className="grid  gap-y-6">
          <p className={`text-2xl  font-normal ${golos.className}`}>
            Close deals up to 80% faster
          </p>
          <span className=" font-normal">
            Your sales team doesn’t need any more distractions. With{" "}
            <span className="underline underline-offset-2 decoration-2">
              <Link
                href={"https://www.dropbox.com/features/content_collaboration"}
              >
                files synced across devices
              </Link>
            </span>{" "}
            and
            <span className="underline underline-offset-2 decoration-2">
              <Link href={"https://www.dropbox.com/features/share"}>
                secure eSignatures,
              </Link>
            </span>{" "}
            Dropbox takes admin work off your plate so you can close deals
            faster.
          </span>
        </div>
      </div>
    </div>
  );
}

export function RightyV3() {
  return (
    <div className="grid items-center h-full py-10   lg:py-20" id="one">
      <div className=" box-border px-4 md:px-8 h-full flex items-center justify-center">
        <div className="grid  gap-y-6">
          <legend>Domain management</legend>
          <p className={`text-3xl font-normal ${golos.className}`}>
            Simplicity makes security feel effortless
          </p>
          <span>
            Onboarding to Dropbox is simple, quick and controllable with a
            click.
          </span>
          <span className=" font-normal">
            Verify users in your organisation and prevent unauthorised usage.
            Migrate anyone with a company email to a single team with domain
            verification and account capture.
          </span>
        </div>
      </div>
      <div className="xl:flex hidden"></div>
    </div>
  );
}

export function LeftyV3() {
  return (
    <div className="grid items-center h-full py-10   lg:py-20" id="two">
      <div className="xl:flex hidden"></div>
      <div className=" box-border px-4 md:px-8 h-full flex items-center justify-center">
        <div className="grid  gap-y-6">
          <legend>Domain management</legend>
          <p className={`text-3xl font-normal ${golos.className}`}>
            Simplicity makes security feel effortless
          </p>
          <span>
            Onboarding to Dropbox is simple, quick and controllable with a
            click.
          </span>
          <span className=" font-normal">
            Host a live virtual review for your audio, video, or image project.
            And collect everyone’s feedback with real-time comments and markup
            tools.
          </span>
          <Link
            href=""
            className=" rounded-xl text-black group py-5 px-6 ring-2 ring-black flex space-x-5 font-semibold "
            style={{ width: "fit-content" }}
          >
            <p>Start project</p>
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
          </Link>
        </div>
      </div>
    </div>
  );
}

export function LeftyV4() {
  return (
    <div className="grid items-center h-full py-10   lg:py-20" id="two">
      <div className="xl:flex hidden"></div>
      <div className=" box-border px-4 md:px-8 h-full flex items-center justify-center">
        <div className="grid text-white  gap-y-3">
          <p className={`text-3xl font-normal ${golos.className}`}>
            Share files quickly, with anyone
          </p>
          <span>
            Share a Dropbox link – of photos, videos, zipped folders, CAD files
            and more – with anyone, even if they don’t have a Dropbox account.
          </span>
          <span className=" font-normal">
            Have big files to share? Got you covered. Dropbox is still the best
            way to share big files.
          </span>
        </div>
      </div>
    </div>
  );
}

export function LeftyV6() {
  return (
    <div className="grid items-center h-full py-10   lg:py-20" id="two">
      <div className="xl:flex hidden"></div>
      <div className=" box-border px-4 md:px-8 h-full flex items-center justify-center">
        <div className="grid  gap-y-3">
          <p className={`text-3xl font-normal ${golos.className}`}>
            Give and get feedback
          </p>
          <span>
            Dropbox makes it easy to send files, big and small, and collect
            everyone’s comments in one place. Viewers can access links and
            preview over 150 file types, as well as add comments and read yours
            – even if they don’t have a Dropbox account.
          </span>
        </div>
      </div>
    </div>
  );
}

export function RightyV4() {
  return (
    <div className="grid items-center h-full py-10   lg:py-20" id="one">
      <div className=" box-border px-4 md:px-8 h-full flex items-center justify-center">
        <div className="grid text-white gap-y-6">
          <p className={`text-3xl  font-normal ${golos.className}`}>
            Changes sync everywhere
          </p>
          <span>
            Every update you make to your desktop file or folder will also
            reflect on dropbox.com, and on your mobile phone and tablet.
          </span>
        </div>
      </div>
      <div className="xl:flex hidden"></div>
    </div>
  );
}

export function LeftyV5() {
  return (
    <div className="grid items-center h-full py-10   lg:py-20" id="two">
      <div className="xl:flex hidden"></div>
      <div className=" box-border px-4 md:px-8 h-full flex items-center justify-center">
        <div className="grid text-white  gap-y-3">
          <p className={`text-3xl font-normal ${golos.className}`}>
            Right-click your files and do more
          </p>
          <span>
            Want to send your file for signature? See version history? By
            right-clicking a file in your Dropbox folder, you can uncover a
            whole host of options.
          </span>
        </div>
      </div>
    </div>
  );
}

export function RightyV5() {
  return (
    <div className="grid items-center h-full py-10   lg:py-20" id="one">
      <div className=" box-border px-4 md:px-8 h-full flex items-center justify-center">
        <div className="grid  gap-y-6">
          <p className={`text-3xl  font-normal ${golos.className}`}>
            All of your work, at your fingertips
          </p>
          <span>
            Access your files from anywhere with the Dropbox mobile app, and
            never miss a beat. You can even mark files and folders for offline
            access to make them available if you lose your Internet connection.
          </span>
        </div>
      </div>
      <div className="xl:flex hidden"></div>
    </div>
  );
}

export function RightyV6() {
  return (
    <div className="grid items-center h-full py-10   lg:py-20" id="one">
      <div className=" box-border px-4 md:px-8 h-full flex items-center justify-center">
        <div className="grid  gap-y-6">
          <p className={`text-3xl  font-normal ${golos.className}`}>
            Get your time back
          </p>
          <span>
            The Dropbox mobile app simplifies common tasks that can eat up your
            day. Scan receipts, stickers and other documents in seconds using
            your phone’s camera. Save time – and get peace of mind – with
            automatic photo and video backup.
          </span>
        </div>
      </div>
      <div className="xl:flex hidden"></div>
    </div>
  );
}
