import Navbar from "@/app/ui/navbar/nav-bar 2.0";
import { Informationv6 } from "@/app/ui/components/inform";
import { FrameV1 } from "@/app/ui/components/picture-frame";
import { Blur } from "@/app/ui/navbar/nav-link 2.0";
import {PicFrame} from "@/app/ui/components/big-frame";
import { everyV3 } from "@/app/ui/navbar/links";
import Footer from "@/app/ui/landing-page/footer";
import { questionsV4 } from "@/app/ui/navbar/links";
import {
  ExpressV11,
  ExpressV12,
} from "@/app/ui/components/expression";
import  { LeftyV3, RightyV3 } from "@/app/ui/components/rem";
import { EverythingV3 } from "@/app/ui/components/everything";
import { FaqV6 } from "@/app/ui/components/FAQ";
import {Enterprise} from "@/app/ui/components/why-rep";
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
        className="w-full box-border flex flex-col  items-center"
      >
        <div className="w-full flex flex-col  box-border ">
          <ExpressV11 />
          <EverythingV3 content={everyV3} />
        </div>
        <div className="w-full box-border bg-[#f7f5f2]  flex flex-col ">
          <ExpressV12
            title="Security isn’t just our priority, it’s our promise"
            body="Dropbox helps teams work securely. User, device and content controls ensure nothing gets shared you don’t want shared, and nothing gets seen you don’t want seen."
            link="https://assets.dropbox.com/www/en-us/business/solutions/solutions/dfb_security_whitepaper.pdf"
            linkName="Read our security whitepaper"
          />
          <FaqV6 question={questionsV4} />
        </div>
        <div className="bg-[#f7f5f2] w-full box-border flex-col flex pt-8 xl:pt-16 gap-y-10 xl:gap-y-16">
          <h2
            style={{ overflowWrap: "anywhere", lineHeight: "120%" }}
            className="text-center p-0 m-0 font-medium text-3xl box-border hyphens-manual"
          >
            Features built for enterprise teams
          </h2>
          <div className="w-full">
            <div className="w-full box-border grid" id="features">
              <div
                style={{ backgroundColor: "#2b2929" }}
                className="flex items-center justify-center"
              >
                <PicFrame src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/enterprise/work-from-office-01-2560x1709.png?id=a07fd89c-199f-47dd-b447-055c7cf38aa6&width=2560&output_type=png" />
              </div>
              <div className="w-full box-border h-full">
                <RightyV3 />
              </div>
            </div>
            <div className="w-full box-border grid " id="integrations">
              <div className="w-full box-border h-full">
              <LeftyV3 />
              </div>
              <div
                style={{ backgroundColor: "#2b2929" }}
                className=" flex items-center justify-center"
              >
                <PicFrame src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/enterprise/work-from-office-02-2560x1707.png?id=f4c2bb17-6210-4986-abd3-006eea519f7a&width=2560&output_type=png" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full box-border">
          <Enterprise />
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
      <footer className="w-full box-border">
        <Footer />
      </footer>
    </div>
  );
}
