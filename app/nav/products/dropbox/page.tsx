import Information from "@/app/ui/components/inform";
import Frame from "@/app/ui/components/picture-frame";
import Navbar from "@/app/ui/navbar/nav-bar 2.0";
import { Blur } from "@/app/ui/navbar/nav-link 2.0";
import Everything from "@/app/ui/components/everything";
import How from "@/app/ui/components/how";
import Saying from "@/app/ui/landing-page/saying";
export default function page() {
  return (
    <main className="box-border w-full ">
      <Blur />
      <div className="w-full box-border z-50 fixed top-0">
        <Navbar />
      </div>
      <div className="w-full box-border  mt-12 md:mt-20 grid" id="drop">
        <div className="w-full box-border bg-stone-900 text-white">
          <Information />
        </div>
        <div
          style={{
            backgroundColor : '#d8d3cb'
          }}
          className="w-full h-full text-stone-400 box-border justify-center flex flex-col items-center"
        >
          <Frame />
        </div>
      </div>
      <div style={{backgroundColor : '#f7f5f2'}} className="w-full box-border flex flex-col items-center">
        <Everything />
        <How/>
      </div>
      <div className="w-full box-border hidden xl:block">
          <Saying/>
      </div>
      
    </main>
  );
}
