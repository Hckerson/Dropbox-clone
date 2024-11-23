import Navbar from "@/app/ui/navbar/nav-bar 2.0";
import { Informationv5 } from "@/app/ui/components/inform";
import { FrameV } from "@/app/ui/components/vid_frame";
import { FrameV1 } from "@/app/ui/components/picture-frame";
import Cvid from "@/app/ui/components/control-vid";
import { LeftV2, RightV1 } from "@/app/ui/components/rem";
import { DiscList } from "@/app/ui/components/why-rep";
import { FaqV5 } from "@/app/ui/components/FAQ";
import { Expressionv8 } from "@/app/ui/components/expression";
import Saying from "@/app/ui/landing-page/txtSaying";
import { SmallPicV2 } from "@/app/ui/components/why-rep";
import Edge from "@/app/ui/landing-page/edge";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Fast track video reviews and approve",
};
export default function page() {
  return (
    <div className="box-border w-full ">
      <div className="w-full box-border z-50 fixed top-0">
        <Navbar />
      </div>
      <div className="w-full box-border  mt-12 md:mt-20 grid" id="drop">
        <div className="w-full box-border bg-stone-900 text-white">
          <Informationv5 />
        </div>
        <div className="w-full h-full bg-[#b4dc19] box-border justify-center flex flex-col items-center">
          <FrameV />
        </div>
      </div>
      <div className="w-full box-border">
        <DiscList />
      </div>
      <div
        style={{ backgroundColor: "#f7f5f2" }}
        className="w-full box-border flex flex-col space-y-10 items-center"
      >
        <div className="w-full box-border grid" id="features">
          <div
            style={{ backgroundColor: "#eee9e2  " }}
            className="lg:py-16 py-6 px-6 sm:py-10 sm:px-8 flex items-center justify-center"
          >
            <FrameV1
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/human-resources/fss-dynamic-filters-ui-2048x1280.png?id=a4260bbe-8bd1-45db-a981-2cb0207c58d5&output_type=png"
              alt="Dropbox homepage"
            />
          </div>
          <div className="w-full box-border h-full">
            <RightV1 />
          </div>
        </div>
        <div className="w-full box-border grid pb-14" id="integrations">
          <div className="w-full box-border h-full">
            <LeftV2 />
          </div>
          <div
            style={{ backgroundColor: "#eee9e2" }}
            className="lg:py-24 py-6 px-6 sm:py-10 sm:px-8 flex items-center justify-center"
          >
            <FrameV1
              alt="Dropbox homepage"
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/human-resources/sign-send-reminder-ui-2048x1280.png?id=7358894c-a88d-4c3c-88da-641284a6732a&output_type=png"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f7f5f2]">
        <Cvid />
      </div>
      <div className="pt-20 bg-[#1e1919] grid gap-y-14">
        <SmallPicV2 />
        <div className="box-border w-full  bg-white">
          <div className="w-full flex flex-col items-center box-border">
            <div
              style={{ flexGrow: 1 }}
              className=" box-border flex flex-col items-center  w-full mx-auto "
            >
              <div className="w-full flex justify-center py-20 bg-[#f7f5f2]">
                <Expressionv8 />
              </div>
              <div className="w-full box-border flex flex-col  items-center">
                <FaqV5 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full box-border flex flex-col  items-center">
        <Saying />
        <Edge/>
      </div>
    </div>
  );
}
