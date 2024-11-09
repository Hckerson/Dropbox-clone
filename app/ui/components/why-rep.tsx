import { golos } from "../fonts";
import Image from "next/image";
import { why } from "../navbar/links";
import Replay from "../landing-page/saying2.0";

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
            className={`text-center px-4 m-0 font-medium text-2xl md:text-4xl box-border hyphens-manual ${golos.className}`}
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
          <h2
            style={{ overflowWrap: "anywhere", lineHeight: "120%" }}
            className={`text-center px-4 m-0 font-medium text-2xl md:text-4xl box-border hyphens-manual ${golos.className}`}
          >
            What Replay customers are saying
          </h2>
          <div className="w-full box-border">
            <Replay />
          </div>
        </div>
      </div>
    </div>
  );
}
