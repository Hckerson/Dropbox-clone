import Information from "@/app/ui/components/inform"
import Frame from "@/app/ui/components/picture-frame"
import Navbar from "@/app/ui/navbar/nav-bar 2.0"
import { Blur } from "@/app/ui/navbar/nav-link 2.0"
export default function page(){
  return (
    <main className="box-border w-full ">
      <Blur/>
      <div className="w-full box-border z-50 fixed top-0">
        <Navbar/>
      </div>
      <div className="w-full box-border  mt-12 md:mt-20 grid" id="drop">
        <div className="w-full box-border bg-stone-900 text-white">
          <Information/>
        </div>
        <div className="w-full box-border flex flex-col items-center">
          <Frame/>
        </div>
      </div>
    </main>
  )
}