import Navbar from "@/app/ui/navbar/nav-bar 2.0";
import { Informationv7 } from "@/app/ui/components/inform";
import { FrameV1 } from "@/app/ui/components/picture-frame";
import { Blur } from "@/app/ui/navbar/nav-link 2.0";
import { LeftyV4, RightyV4, LeftyV5 } from "@/app/ui/components/rem";
import { EverythingV4 } from "@/app/ui/components/everything";
import { golos } from "@/app/ui/fonts";
import Ending from "@/app/ui/components/ending";
import { everyV4 } from "@/app/ui/navbar/links";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Fast track video reviews and approve",
};
export default function page() {
  return (
    <div className="box-border w-full ">
      <Blur/>
      <div className="w-full box-border z-50 fixed top-0">
        <Navbar />
      </div>
      <div className="w-full box-border  mt-12 md:mt-20 grid" id="drop">
        <div className="w-full box-border bg-[#f7f5f2] ">
          <Informationv7 />
        </div>
        <div className="w-full h-full bg-[#be4b0a] box-border justify-center flex flex-col items-center">
          <FrameV1
            alt="Dropbox capability"
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/desktop/Image-1-Explorer-en_GB.png?id=b6982c97-bd19-474f-ba53-dc28ccbd895e&output_type=png"
          />
        </div>
      </div>
      <div className="w-full box-border flex flex-col bg-[#1e1919]  space-y-6  items-center">
        <h2
          style={{
            maxWidth: "28ch",
            lineHeight: "1.2",
            textAlign: "center",
          }}
          className={`text-center p-0 mx-4 text-white pt-16 pb-10 font-medium text-xl tracking-wide md:text-4xl box-border hyphens-manual ${golos.className}`}
        >
          Simplify and secure your digital workspace
        </h2>
        <div className="w-full box-border grid pb-14" id="integrations">
          <div className="w-full box-border h-full">
            <LeftyV4 />
          </div>
          <div className="lg:py-16 py-6 px-6 bg-[#2b2929] sm:py-10 sm:px-8 flex items-center justify-center">
            <FrameV1
              alt="Dropbox homepage"
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/desktop/Image-2-share-en_GB.png?id=fffecd2c-7075-4d2d-af04-f864a59eb0fc&output_type=png"
            />
          </div>
        </div>
        <div className="w-full box-border  grid" id="features">
          <div className="lg:py-16 py-6 bg-[#2b2929] px-6 sm:py-10 sm:px-8 flex items-center justify-center">
            <FrameV1
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/desktop/Image-3-sync-en_GB.png?id=653f4fc2-1bf8-44bc-a907-5da15be9c422&output_type=png"
              alt="Dropbox homepage"
            />
          </div>
          <div className="w-full box-border h-full">
            <RightyV4 />
          </div>
        </div>
        <div className="w-full box-border grid py-14" id="integrations">
          <div className="w-full box-border h-full">
            <LeftyV5 />
          </div>
          <div className="lg:py-16 py-6 px-6 bg-[#2b2929] sm:py-10 sm:px-8 flex items-center justify-center">
            <FrameV1
              alt="Dropbox homepage"
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/desktop/Image-2-share-en_GB.png?id=fffecd2c-7075-4d2d-af04-f864a59eb0fc&output_type=png"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#f7f5f2]">
        <EverythingV4 content={everyV4} />
        <Ending word="Get the Dropbox desktop app today" link="https://www.dropbox.com/download?os=win" text="Download now"    />
      </div>
    </div>
  );
}
