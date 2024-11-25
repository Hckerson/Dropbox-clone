import Navbar from "@/app/ui/navbar/nav-bar 2.0";
import { Blur } from "@/app/ui/navbar/nav-link 2.0";
import Plans from "./plans";
import { ReplayV1 } from "@/app/ui/landing-page/saying2.0";
import { ExpressionV10 } from "@/app/ui/components/expression";
import Everything from "@/app/ui/components/easyToUse";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dropbox Bakcup: Your Secure Clone",
};
export default function page() {
  return (
    <main className="box-border w-full ">
      <Blur />
      <div className="w-full box-border z-50 fixed top-0">
        <Navbar condition={false} />
      </div>
      <div className="w-full box-border  mt-12 md:mt-20 grid" id="drop">

      </div>
      <div className="w-full box-border py-14 ">
        <ExpressionV10 />
      </div>
      <div
        id="dropbox-backup-plan"
        className="w-full box-border flex flex-col items-center"
      >
        <Plans />
      </div>
      <div className="w-full box-border bg-[#f7f5f2]">
        <Everything />
      </div>
      <ReplayV1 />
    </main>
  );
}
