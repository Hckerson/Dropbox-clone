import { Informationv1 } from "@/app/ui/components/inform";
import Frame from "@/app/ui/components/vid_frame";
import Navbar from "@/app/ui/navbar/nav-bar 2.0";
import { Blur } from "@/app/ui/navbar/nav-link 2.0";
import Plans from "@/app/ui/components/plans";
import { ReplayV1 } from "@/app/ui/landing-page/saying2.0";
import { Expressionv1 } from "@/app/ui/components/expression";
import Everything from "@/app/ui/components/easyToUse";
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Dropbox Bakcup: Your Secure Clone',
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
          <Informationv1 />
        </div>
        <div
          className="w-full h-full bg-yellow-500 box-border justify-center flex flex-col items-center"
        >
          <Frame />
        </div>
      </div>
      <div className="w-full box-border py-14 bg-[#f7f5f2]">
        <Expressionv1/>
      </div>
      <div
        className="w-full box-border flex flex-col items-center"
      >
        <Plans/>
      </div>
      <div className="w-full box-border bg-[#f7f5f2]">
        <Everything/>
      </div>
      <ReplayV1/>
    </main>
  );
}
