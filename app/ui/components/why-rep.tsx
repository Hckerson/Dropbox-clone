import { golos } from "../fonts";
import Image from "next/image";
import { why, stats, doings } from "../navbar/links";
import Replay from "../landing-page/saying2.0";
import Link from "next/link";

const one = [
  { label: "Transcriptions and captions", id: 1 },
  { label: "Version comparison", id: 2 },
  { label: "Due dates", id: 3 },
  { label: "Lossless audio", id: 4 },
];

const two = [
  { label: "Password-protected review links", id: 1 },
  { label: "Digital watermarking", id: 2 },
  { label: "Shared link mangement", id: 3 },
];

const tri = [
  { label: "Unlimited file uploads (up to your storage cap)", id: 1 },
  { label: "Free large file transfer (up to 250GB per transfer)", id: 2 },
];

const collabs = [
  {
    topic: "Office 365",
    id: 1,
    body: "Easily access, edit, and share Office docs online in Dropbox.",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/office-365-64x64.svg?id=4476fa42-2482-45b5-8bbd-3b83027ca3e7",
  },
  {
    topic: "Slack",
    id: 2,
    body: "Bring Slack conversations and Dropbox content together to keep teams in sync.",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/slack-64x64.svg?id=e028dbd7-df26-4076-ad15-faa51c132578",
  },
  {
    topic: "Hubspot",
    id: 3,
    body: "Deliver great campaigns quickly, and create, send and sign contracts from within HubSpot.",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/hubspot-64x64.svg?id=7e2af795-5f18-44f7-994f-52e63f0de4f4",
  },
  {
    topic: "Google Workspace",
    id: 4,
    body: "Create, edit, and share Google Docs, Sheets, and Slides from Dropbox.",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/google-workspace-64x64.svg?id=78f36f5f-a55a-4904-b45f-03a76f6688a9",
  },
];

const collabsV1 = [
  {
    topic: "amoCRM",
    id: 1,
    body: "Increase your amoCRM storage space by instantly saving sales documents in Dropbox.",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/amocrm-64x64.svg?id=2fd41b51-1b61-4ca5-97d4-f907e4e1a623",
  },
  {
    topic: "Asana",
    id: 2,
    body: "Teams can track any kind of work with Asana, while keeping content from Dropbox right alongside.",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/asana-64x64.svg?id=7f82e737-0902-4a4b-9396-2117a12a8eee",
  },
  {
    topic: "Salesforce",
    id: 3,
    body: "Sync and share your Dropbox content securely within Salesforce.",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/salesforce-64x64.svg?id=a4695992-bbc1-43b1-b5bd-e192d13013bd",
  },
  {
    topic: "Zoho CRM",
    id: 4,
    body: "Share files from Dropbox and collaborate with your team to accelerate your sales cycle.",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/zoho-crm-64x64_white.svg?id=561edcf4-78f4-4e2d-8fc7-38895573bb41",
  },
];

export default function Why() {
  return (
    <div
      style={{ backgroundColor: "#1e1919" }}
      className="box-border w-full text-white"
    >
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1280px]  box-border flex flex-col items-center gap-y-20 w-full mx-auto pt-20"
        >
          <div
            id="box"
            className="grid items-center justify-center w-full gap-y-8 box-border px-6  lg:px-14"
          >
            <div className="w-full px-3  lg:px-6">
              <div className="flex flex-col gap-y-6">
                <div className="w-full box-border">
                  <p className="text-xl font-semibold">More features</p>
                </div>
                <div className="w-full box-border">
                  <ul className="w-full list-disc flex flex-col gap-y-4 pl-6">
                    {one.map((each) => {
                      return (
                        <li key={each.id} className="">
                          {each.label}{" "}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full px-3  lg:px-6 h-full">
              <div className="flex flex-col gap-y-6">
                <div className="w-full box-border">
                  <p className="text-xl font-semibold">More security</p>
                </div>
                <div className="w-full box-border">
                  <ul className="w-full list-disc flex flex-col gap-y-4 pl-6">
                    {two.map((each) => {
                      return (
                        <li key={each.id} className="">
                          {each.label}{" "}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full px-3  lg:px-6 h-full">
              <div className="flex flex-col gap-y-6">
                <div className="w-full box-border">
                  <p className="text-xl font-semibold">More space</p>
                </div>
                <div className="w-full box-border">
                  <ul className="w-full list-disc flex flex-col gap-y-4 pl-6">
                    {tri.map((each) => {
                      return (
                        <li key={each.id} className="">
                          {each.label}{" "}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h2
            style={{ overflowWrap: "anywhere", lineHeight: "120%" }}
            className={`text-center px-4 m-0 font-medium text-3xl md:text-4xl box-border hyphens-manual ${golos.className}`}
          >
            More productions, fewer revisions*
          </h2>
          <div className="w-full box-border">
            <div
              id="dropbox"
              className="grid box-border px-6 w-full lg:px-10 md:gap-y-0 gap-y-10   "
            >
              {why.map((each) => {
                return (
                  <div
                    key={each.id}
                    className="box-border w-full h-full px-3 lg:px-6"
                  >
                    <div
                      style={{
                        gridAutoFlow: "row",
                        gridTemplateRows: "max-content",
                      }}
                      className="box-border grid overflow-hidden h-full items-start p-0 m-0 "
                    >
                      <div className="overflow-hidden box-border  ">
                        <div
                          style={{ aspectRatio: 4 }}
                          className="w-full relative box-border"
                        >
                          <div className=" max-w-full max-h-full h-14 w-14 absolute inset-0 box-border flex items-center">
                            <Image
                              src={each.src}
                              alt="picture"
                              width={400}
                              height={400} // Adjust this as needed
                              className="h-full w-full absolute  inset-0 box-border max-h-full max-w-full"
                              quality={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="box-border flex flex-col gap-y-4 h-full ">
                        <div className="text-2xl font-medium">{each.why}</div>
                        <div className="font-normal text-base ">
                          {each.fact}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full box-border">
            <Replay />
          </div>
        </div>
      </div>
    </div>
  );
}

export function DiscList() {
  return (
    <div style={{ backgroundColor: "#f7f5f2" }} className="box-border w-full ">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1380px]  box-border flex flex-col items-center gap-y-20 w-full mx-auto py-20"
        >
          <h2
            style={{ overflowWrap: "anywhere", lineHeight: "120%" }}
            className={`text-center px-4 m-0 font-medium text-3xl md:text-4xl box-border hyphens-manual ${golos.className}`}
          >
            You’re in good company
          </h2>
          <div className="w-full box-border">
            <div
              id="stats"
              className="grid box-border px-4 w-full lg:px-10 md:gap-y-0 gap-y-10   "
            >
              {stats.map((stat) => {
                return (
                  <div
                    key={stat.id}
                    className="box-border w-full h-full px-3 lg:px-4"
                  >
                    <div
                      style={{
                        gridAutoFlow: "row",
                        gridTemplateRows: "max-content",
                      }}
                      className="box-border grid overflow-hidden h-full items-start p-0 m-0 "
                    >
                      <div className="overflow-hidden box-border  ">
                        <div
                          style={{ aspectRatio: 4 }}
                          className="w-full relative box-border"
                        >
                          <div className=" max-w-full max-h-full text-4xl font-semibold absolute inset-0 box-border flex items-center">
                            {stat.no}
                          </div>
                        </div>
                      </div>
                      <div className="box-border flex flex-col gap-y-4 h-full ">
                        <div className="text-xl font-medium">{stat.topic}</div>
                        <div className="font-normal text-base ">
                          {stat.body}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SmallPic() {
  return (
    <div className="box-border w-full ">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1280px]  box-border flex flex-col items-center gap-y-20 w-full mx-auto "
        >
          <h2
            style={{ overflowWrap: "anywhere", lineHeight: "120%" }}
            className={`text-center px-4 m-0 font-medium text-3xl md:text-4xl box-border hyphens-manual ${golos.className}`}
          >
            Impress your customers from pitch to close
          </h2>
          <div className="w-full box-border">
            <div
              id="dropbox"
              className="grid box-border px-4 w-full lg:px-10 md:gap-y-0 gap-y-10   "
            >
              {doings.map((stat) => {
                return (
                  <div
                    key={stat.id}
                    className="box-border w-full h-full px-3 lg:px-4"
                  >
                    <div
                      style={{
                        gridAutoFlow: "row",
                        gridTemplateRows: "max-content",
                      }}
                      className="box-border grid overflow-hidden h-full items-start p-0 m-0 "
                    >
                      <div className="overflow-hidden box-border  ">
                        <div
                          style={{ aspectRatio: 4 }}
                          className="w-full relative box-border"
                        >
                          <div className=" max-w-full max-h-full h-14 w-14 absolute inset-0 box-border flex items-center">
                            <Image
                              src={stat.src}
                              alt="picture"
                              width={400}
                              height={400} // Adjust this as needed
                              className="h-full w-full absolute  inset-0 box-border max-h-full max-w-full"
                              quality={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="box-border flex flex-col gap-y-4 h-full ">
                        <div className="text-xl font-medium">{stat.topic}</div>
                        <div className="font-normal text-base ">
                          {stat.body}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SmallPicV2() {
  return (
    <div className="box-border w-full text-white">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1280px]  box-border flex flex-col items-center gap-y-10 w-full mx-auto "
        >
          <span className="grid gap-y-4">
            <h2
              style={{
                maxWidth: "35ch",
                lineHeight: "1.2",
                textAlign: "center",
              }}
              className={`text-center px-4 m-0 font-medium text-3xl md:text-4xl box-border hyphens-manual ${golos.className}`}
            >
              Dropbox works with the tools you know best
            </h2>
            <Link
              href="https://www.dropbox.com/app-integrations"
              className="text-center"
            >
              {" "}
              <p className="inline-flex items-center text-base group   underline underline-offset-2 decoration-1 hover:decoration-white transition-colors duration-200 decoration-stone-400">
                Explore app integrations{" "}
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
          </span>

          <div className="w-full box-border">
            <div className="w-full grid gap-y-8">
              <div
                id="collabs"
                className="grid box-border px-4 w-full lg:px-10 lg:gap-y-0 gap-y-10   "
              >
                {collabs.map((stat) => {
                  return (
                    <div
                      key={stat.id}
                      className="box-border w-full h-full px-3 lg:px-4"
                    >
                      <div
                        style={{
                          gridAutoFlow: "row",
                          gridTemplateRows: "max-content",
                        }}
                        className="box-border grid overflow-hidden h-full items-start p-0 m-0 "
                      >
                        <div className="overflow-hidden box-border  ">
                          <div
                            style={{ aspectRatio: 4 }}
                            className="w-full relative box-border"
                          >
                            <div className=" max-w-full max-h-full h-14 w-14  absolute inset-0 box-border flex items-center">
                              <Image
                                src={stat.src}
                                alt="picture"
                                width={400}
                                height={400} // Adjust this as needed
                                className="h-full w-full absolute  inset-0 box-border max-h-full max-w-full"
                                quality={100}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="box-border flex flex-col gap-y-4 h-full ">
                          <div className="text-xl font-medium">
                            {stat.topic}
                          </div>
                          <div className="font-normal text-base ">
                            {stat.body}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                id="collabs"
                className="grid box-border px-4 w-full lg:px-10 lg:gap-y-0 gap-y-10   "
              >
                {collabsV1.map((stat) => {
                  return (
                    <div
                      key={stat.id}
                      className="box-border w-full h-full px-3 lg:px-4"
                    >
                      <div
                        style={{
                          gridAutoFlow: "row",
                          gridTemplateRows: "max-content",
                        }}
                        className="box-border grid overflow-hidden h-full items-start p-0 m-0 "
                      >
                        <div className="overflow-hidden box-border  ">
                          <div
                            style={{ aspectRatio: 4 }}
                            className="w-full relative box-border"
                          >
                            <div className=" max-w-full max-h-full h-14 w-14  absolute inset-0 box-border flex items-center">
                              <Image
                                src={stat.src}
                                alt="picture"
                                width={400}
                                height={400} // Adjust this as needed
                                className="h-full w-full absolute  inset-0 box-border max-h-full max-w-full"
                                quality={100}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="box-border flex flex-col gap-y-4 h-full ">
                          <div className="text-xl font-medium">
                            {stat.topic}
                          </div>
                          <div className="font-normal text-base ">
                            {stat.body}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
