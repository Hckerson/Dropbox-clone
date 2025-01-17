import { golos } from "../fonts";
import BigPicCard, { BigPicCardV1 } from "./big-pic Card";
import { every, everyV1, everyV2 } from "../navbar/links";
import { EveryV3, EveryV4 } from "@/app/lib/definitions";

export default function Everything() {
  return (
    <div className="box-border w-full ">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1280px]  box-border flex flex-col items-center gap-y-20 w-full mx-auto py-20"
        >
          <h2
            style={{ overflowWrap: "anywhere", lineHeight: "120%" }}
            className={`text-center p-0 mx-4 font-medium text-3xl md:text-4xl box-border hyphens-manual ${golos.className}`}
          >
            Keep everything at your fingertips
          </h2>
          <div className="w-full box-border">
            <div
              style={{ width: "fit-content" }}
              id="everything"
              className="grid gap-y-14 md:gap-y-0 box-border px-6 md:px-10 xl:px-0  "
            >
              {every.map((one) => {
                return (
                  <div key={one.id} className="w-full relative box-border">
                    <BigPicCard key={one.id} {...one} />
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

export function EverythingV1() {
  return (
    <div className="box-border w-full ">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1280px]  box-border flex flex-col items-center gap-y-20 w-full mx-auto py-20"
        >
          <h2
            style={{ overflowWrap: "anywhere", lineHeight: "120%" }}
            className={`text-center p-0 mx-4 font-medium text-3xl md:text-4xl box-border hyphens-manual ${golos.className}`}
          >
            Built for quick and easy communication
          </h2>
          <div className="w-full box-border">
            <div
              style={{ width: "fit-content" }}
              id="everything"
              className="grid gap-y-14 md:gap-y-0 box-border px-6 md:px-10 xl:px-0  "
            >
              {everyV1.map((one) => {
                return (
                  <div key={one.id} className="w-full relative box-border">
                    <BigPicCard key={one.id} {...one} />
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

export function EverythingV2() {
  return (
    <div className="box-border w-full ">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1280px]  box-border flex flex-col items-center gap-y-20 w-full mx-auto py-20"
        >
          <h2
            style={{ overflowWrap: "anywhere", lineHeight: "120%" }}
            className={`text-center p-0 mx-4 font-medium text-3xl md:text-4xl box-border hyphens-manual ${golos.className}`}
          >
            eSignatures have never been this easy
          </h2>
          <div className="w-full box-border">
            <div
              style={{ width: "fit-content" }}
              id="everything"
              className="grid gap-y-14 md:gap-y-0 box-border px-6 md:px-10 xl:px-0  "
            >
              {everyV2.map((one) => {
                return (
                  <div key={one.id} className="w-full relative box-border">
                    <BigPicCard key={one.id} {...one} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" grid items-center justify-center  w-full gap-y-8">
            <h3
              className={`${golos.className} text-3xl px-7 md:text-4xl font-normal `}
              style={{
                maxWidth: "35ch",
                lineHeight: "1.2",
                textAlign: "center",
              }}
            >
              Simple, automated workflows for your most vital agreements
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EverythingV3({ content }: { content: EveryV3[] }) {
  return (
    <div className="box-border w-full ">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1280px]  box-border flex flex-col items-center gap-y-14 w-full mx-auto py-10"
        >
          <div className="w-full box-border flex items-center justify-center">
            <div
              style={{ width: "fit-content" }}
              id="position"
              className="grid items-center justify-center gap-y-14 md:gap-y-0 box-border px-6 md:px-8 xl:px-0  "
            >
              {content.map((one) => {
                return (
                  <div key={one.id} className="w-full relative box-border">
                    <BigPicCardV1 key={one.id} {...one} />
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

export function EverythingV4({ content }: { content: EveryV4[] }) {
  return (
    <div className="box-border w-full ">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1280px]  box-border flex flex-col items-center gap-y-20 w-full mx-auto py-20"
        >
          <h2
            style={{
              maxWidth: "35ch",
              lineHeight: "1.2",
              textAlign: "center",
            }}
            className={`text-center p-0 mx-4 font-medium text-3xl md:text-4xl box-border hyphens-manual ${golos.className}`}
          >
            Unlock the full potential of the Dropbox folder on desktop
          </h2>
          <div className="w-full box-border">
            <div
              style={{ width: "fit-content" }}
              id="everything"
              className="grid gap-y-14 md:gap-y-0 box-border px-6 md:px-10 xl:px-0  "
            >
              {content.map((one) => {
                return (
                  <div key={one.id} className="w-full relative box-border">
                    <BigPicCard key={one.id} {...one} />
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
