import { Informationv1 } from "@/app/ui/components/inform";
import Frame from "@/app/ui/components/vid_frame";
import Navbar from "@/app/ui/navbar/nav-bar 2.0";
import { Blur } from "@/app/ui/navbar/nav-link 2.0";
import Everything from "@/app/ui/components/everything";
import Saying from "@/app/ui/landing-page/saying";
import { Expressionv1 } from "@/app/ui/components/expression";
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
        style={{ backgroundColor: "#f7f5f2" }}
        className="w-full box-border flex flex-col items-center"
      >
        <Everything />
      </div>
      <div className="w-full box-border ">
        <Saying />
      </div>
    </main>
  );
}
