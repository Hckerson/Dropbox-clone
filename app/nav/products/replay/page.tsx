import Navbar from "@/app/ui/components/stripped-nav";
import About from "@/app/ui/components/about";
import Frame, { Frametwo, FrameOne } from "@/app/ui/components/big-vid";
import Expression, {Expresstwo} from "@/app/ui/components/expression";
import Righty, { Lefty } from "@/app/ui/components/rem";
import { Frametri } from "@/app/ui/components/big-vid";
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
          <About />
        </div>
        <Frame />
        <div className=" w-full">
          <Expression />
        </div>
        <div className="w-full box-border grid" id="features">
          <div
            style={{ backgroundColor: "#2b2929" }}
            className="lg:py-16 py-6 px-6 sm:py-10 sm:px-8 flex items-center justify-center"
          >
            <FrameOne />
          </div>
          <div className="w-full box-border h-full">
            <Righty />
          </div>
        </div>
        <div className="w-full box-border grid pb-14" id="integrations">
          <div className="w-full box-border h-full">
            <Lefty />
          </div>
          <div
            style={{ backgroundColor: "#2b2929" }}
            className="lg:py-24 py-6 px-6 sm:py-10 sm:px-8 flex items-center justify-center"
          >
            <Frametwo />
          </div>
        </div>
        <div className="w-full box-border">
          <Expresstwo/>
        </div>
        <div className='w-full box-border'>
          <Frametri/>
        </div>
      </div>
    </div>
  );
}
