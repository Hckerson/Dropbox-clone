import Navbar from "@/app/ui/navbar/nav-bar 2.0";
import { Expressionv13 } from "@/app/ui/components/expression";
import { FrameV2 } from "@/app/ui/components/picture-frame";
import { RightyV5, RightyV6, LeftyV6 } from "@/app/ui/components/rem";
import { Blur } from "@/app/ui/navbar/nav-link 2.0";
import IFrame from "@/app/ui/components/iframe";
import Code from "@/app/ui/components/code";
import { golos } from "@/app/ui/fonts";
import { VidV2 } from "@/app/ui/components/big-vid";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Fast track video reviews and approve",
};
export default function page() {
  return (
    <div className="box-border w-full ">
      <Blur />
      <div className="w-full box-border z-50 fixed top-0">
        <Navbar />
      </div>
      <div className="w-full box-border  bg-[#f7f5f2]  mt-12 md:mt-20">
        <Expressionv13 />
      </div>
      <div className="w-full box-border  grid" id="half">
        <div className="w-full box-border h-full">
          <VidV2 />
        </div>
        <Code />
      </div>
      <div className="w-full box-border  bg-[#f7f5f2]  ">
        <IFrame src="https://player.vimeo.com/video/915282309" />
      </div>
      <div
        className="w-full box-border flex flex-col bg-[#f7f5f2]  space-y-6  items-center"
        id="drop"
      >
        <div className="w-full box-border pb-14  grid" id="features">
          <div className="lg:py-16 py-6 bg-[#eee9e2] px-6 sm:py-10 sm:px-8 flex items-center justify-center">
            <FrameV2
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/mobile/MobileOfflineDownloads.png?id=44ed5b96-fe52-44ed-af19-b488178dfef1&output_type=png"
              alt="Dropbox homepage"
            />
          </div>
          <div className="w-full box-border h-full">
            <RightyV5 />
          </div>
        </div>
        <div className="w-full box-border grid pb-14" id="integrations">
          <div className="w-full box-border h-full">
            <LeftyV6 />
          </div>
          <div className="lg:py-16 py-6 px-6 bg-[#eee9e2] sm:py-10 sm:px-8 flex items-center justify-center">
            <FrameV2
              alt="Dropbox homepage"
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/mobile/MobileComments-en_GB.png?id=fc42ea7d-5ea5-4802-a653-65d81678eebf&output_type=png"
            />
          </div>
        </div>
        <div className="w-full box-border  grid" id="features">
          <div className="lg:py-16 py-6 bg-[#eee9e2] px-6 sm:py-10 sm:px-8 flex items-center justify-center">
            <FrameV2
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/mobile/MobileScans.png?id=019988fc-0096-4d03-828f-f713882bf8ef&output_type=png"
              alt="Dropbox homepage"
            />
          </div>
          <div className="w-full box-border h-full">
            <RightyV6 />
          </div>
        </div>
      </div>
      <div>
        <div className="w-full box-border  grid" id="half">
          <div className="w-full box-border h-full min-h-[390px] flex flex-col items-center justify-center">
            <h3
              className={`${golos.className} text-3xl 2xl:text-5xl text-black px-7 md:text-4xl font-normal `}
              style={{
                maxWidth: "20ch",
                lineHeight: "1.2",
                textAlign: "center",
              }}
            >
              Keep work flowing on the go
            </h3>
          </div>
          <Code />
        </div>
      </div>
    </div>
  );
}
