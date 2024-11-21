import {Informationv3} from "@/app/ui/components/inform";
import {FrameV1} from "@/app/ui/components/picture-frame";
import Navbar from "@/app/ui/navbar/nav-bar 2.0";
import { Blur } from "@/app/ui/navbar/nav-link 2.0";
import {FaqV3} from "@/app/ui/components/FAQ";
import { Expressionv3, ExpressV4 } from "@/app/ui/components/expression";
import { ReplayV2 } from "@/app/ui/landing-page/saying2.0";
import { customerV2 } from "@/app/ui/navbar/links";
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'DocSend - Dropbox',
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
          <Informationv3 />
        </div>
        <div
          style={{
            backgroundColor: "#14c8eb",
          }}
          className="w-full h-full text-stone-400 box-border justify-center flex flex-col items-center"
        >
          <FrameV1 alt="Dropbox docsend image" src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/docsend/docsend-document-analytics-ui-2048x1280.png?id=8f94c5c0-ae0a-4655-ba71-9bdbd9165910&output_type=png" />
        </div>
      </div>
      <div className="w-full flex justify-center py-20">
          <Expressionv3/>
      </div>
      <div className="w-full box-border flex flex-col  items-center">
        <FaqV3/>
      </div>
      <div>
        <ExpressV4/>
      </div>
      <div className="w-full box-border ">
        <ReplayV2 customers={customerV2} />
      </div>
    </main>
  );
}
