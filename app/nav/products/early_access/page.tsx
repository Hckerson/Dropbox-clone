import Navbar from "@/app/ui/navbar/nav-bar 2.0";
import  { Frametwo } from "@/app/ui/components/big-vid";
import 
 {
  Expresstwo,
  Expresstri,
} from "@/app/ui/components/expression";
import { Expressionv5 } from "@/app/ui/components/expression";
import  { LeftyV1 } from "@/app/ui/components/rem";
import { Frametri } from "@/app/ui/components/big-vid";
import Faq from "@/app/ui/components/FAQ";
import Why from "@/app/ui/components/why-rep";
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Fast track video reviews and approve',
}
export default function page() {
  return (
    <div className="box-border w-full ">
      <div className="w-full box-border z-50 fixed top-0">
        <Navbar />
      </div>
      <div
        style={{ backgroundColor: "#1e1919" }}
        className="w-full box-border flex flex-col space-y-10 items-center"
      >
        <div className="w-full box-border ">
          <Expressionv5 />
        </div> 
        <div className="w-full box-border grid pb-14" id="integrations">
          <div className="w-full box-border h-full">
            <LeftyV1 />
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
