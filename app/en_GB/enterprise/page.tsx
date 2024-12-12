import Navbar from "@/app/ui/navbar/nav-bar 2.0";
import {Informationv6} from "@/app/ui/components/inform";
import { FrameV1 } from "@/app/ui/components/picture-frame";
import { Blur } from "@/app/ui/navbar/nav-link 2.0";
import Frame, { Frametwo, FrameOne } from "@/app/ui/components/big-vid";
import { everyV3 } from "@/app/ui/navbar/links";
import Expression, {
  Expresstwo,
  Expresstri,
  ExpressV11
} from "@/app/ui/components/expression";
import Righty, { Lefty } from "@/app/ui/components/rem";
import { EverythingV3 } from "@/app/ui/components/everything";
import { Frametri } from "@/app/ui/components/big-vid";
import Faq from "@/app/ui/components/FAQ";
import Why from "@/app/ui/components/why-rep";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Enterprise - Dropbox",
};
export default function page() {
  return (
    <div className="box-border w-full ">
      <Blur />
      <div className="w-full box-border z-50 fixed top-0">
        <Navbar />
      </div>

      <div className="w-full box-border  mt-12 md:mt-20 grid" id="drop">
        <div className="w-full box-border bg-[#f7f5f2]  ">
          <Informationv6 />
        </div>
        <div
          style={{
            backgroundColor: "#f7f5f2",
          }}
          className="w-full h-full text-stone-400 box-border justify-center flex flex-col items-center"
        >
          <FrameV1
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/enterprise/fss-send-track-ui-2048x1280-en_GB.png?id=a3100dda-77ad-4b24-97db-d916197bb1f7&output_type=png"
            alt="Dropbox homepage image"
          />
        </div>
      </div>
      <div
        style={{ backgroundColor: "#1e1919" }}
        className="w-full box-border flex flex-col space-y-10 items-center"
      >
        <div className="w-full flex flex-col  box-border ">
          <ExpressV11 />
          <EverythingV3 content={everyV3}/>
        </div>
        <Frame />
        <div className=" w-full">
          <Expression />
        </div>
        <div className="w-full box-border grid" id="features">
          <div
            style={{ backgroundColor: "#2b2929" }}
            className="lg:py-16 py-6 px-6 sm:py-10 sm:px-8 flex items-center justify-center"
          >
            <FrameOne />
          </div>
          <div className="w-full box-border h-full">
            <Righty />
          </div>
        </div>
        <div className="w-full box-border grid pb-14" id="integrations">
          <div className="w-full box-border h-full">
            <Lefty />
          </div>
          <div
            style={{ backgroundColor: "#2b2929" }}
            className="lg:py-24 py-6 px-6 sm:py-10 sm:px-8 flex items-center justify-center"
          >
            <Frametwo />
          </div>
        </div>
        <div className="w-full box-border">
          <Expresstwo />
        </div>
        <div className="w-full box-border">
          <Frametri />
        </div>
        <div className="w-full box-border">
          <Expresstri />
        </div>
        <div
          style={{ backgroundColor: "#f7f5f2" }}
          className="w-full box-border "
        >
          <Faq />
        </div>
        <div className="w-full box-border">
          <Why />
        </div>
        <div className="w-full bg-white px-4  py-20 flex items-center justify-center">
          <span
            className="text-base font-light  "
            style={{
              maxWidth: "70ch",
              lineHeight: "1.2",
            }}
          >
            *Based on a 2021 Dropbox research survey of registered Dropbox users
            who have used Dropbox Replay.
          </span>
        </div>
      </div>
    </div>
  );
}
