import {Informationv4} from "@/app/ui/components/inform";
import {FrameV1} from "@/app/ui/components/picture-frame";
import Navbar from "@/app/ui/navbar/nav-bar 2.0";
import { Blur } from "@/app/ui/navbar/nav-link 2.0";
import {EverythingV2} from "@/app/ui/components/everything";
import Saying from "@/app/ui/landing-page/saying";
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Dropbox Sign - Dropbox',
}
export default function page() {
  return (
    <main className="box-border w-full ">
      <Blur />
      <div className="w-full box-border z-50 fixed top-0">
        <Navbar />
      </div>
      <div className="w-full box-border  mt-12 md:mt-20 grid" id="drop">
        <div className="w-full box-border bg-stone-900 text-white">
          <Informationv4 />
        </div>
        <div
          style={{
            backgroundColor: "#b4c8e1",
          }}
          className="w-full h-full text-stone-400 box-border justify-center flex flex-col items-center"
        >
          <FrameV1 src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/hellosign/sign-entry-point-ui-transparent-2048x1280.png?id=75f1a89e-1f72-48f9-afd5-ee9b368108c8&output_type=png" alt="Dropbox homepage image" />
        </div>
      </div>
      <div
        style={{ backgroundColor: "#f7f5f2" }}
        className="w-full box-border flex flex-col items-center"
      >
        <EverythingV2 />
      </div>
      <div className="w-full box-border ">
        <Saying />
      </div>
    </main>
  );
}
