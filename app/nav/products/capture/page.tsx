import { Informationv2 } from "@/app/ui/components/inform";
import { FrameV1 } from "@/app/ui/components/vid_frame";
import Navbar from "@/app/ui/navbar/nav-bar 2.0";
import { Blur } from "@/app/ui/navbar/nav-link 2.0";
import Plans from "@/app/ui/components/plans";
import Saying from "@/app/ui/landing-page/saying";
import {FaqV2} from "@/app/ui/components/FAQ";
import { EverythingV1 } from "@/app/ui/components/everything";
import {golos} from "@/app/ui/fonts"
export default function page() {
  return (
    <main className="box-border w-full ">
      <Blur />
      <div className="w-full box-border z-50 fixed top-0">
        <Navbar />
      </div>
      <div className="w-full box-border  mt-12 md:mt-20 grid" id="drop">
        <div className="w-full box-border bg-stone-900 text-white">
          <Informationv2 />
        </div>
        <div className="w-full h-full bg-[#b4dc19] box-border justify-center flex flex-col items-center">
          <FrameV1 />
        </div>
      </div>
      <div className="w-full box-border bg-[#f7f5f2]">
        <EverythingV1 />
      </div>
      <div className="w-full box-border flex flex-col items-center">
        <Plans />
      </div>
      <div className="w-full box-border flex flex-col gap-y-20 items-center">
        <h3
          style={{ overflowWrap: "anywhere", lineHeight: "120%" }}
          className={`text-center p-0 mx-4 font-medium text-3xl md:text-4xl box-border hyphens-manual ${golos.className}`}
        >
          What can you do with Capture?
        </h3>
        <FaqV2/>
      </div>
      <Saying />
    </main>
  );
}
