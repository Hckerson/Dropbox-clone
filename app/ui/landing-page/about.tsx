import Link from "next/link"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"
export default function About(){
  return (
    <div className="w-full bg-black flex items-center justify-center flex-col pt-24 pb-36 space-y-6">
      <h2 className="text-6xl font-semibold  text-white">Get to work, with a lot less work</h2>
      <p className="text-lg text-neutral-300 text-center">Dropbox delivers tools that help you move your work forward faster, keep it safe, and <br /> let you collaborate with ease.</p>
      <p className="text-neutral-500 font-normal text-sm"></p>
      <div className="flex space-x-9 ">
        <div className="flex flex-col space-y-3">
          <Link className="text-base font-medium px-5 py-6 rounded-2xl bg-blue-500 flex" href="/login">
            Sign up for free
            <ArrowLongRightIcon className=" ml-5 w-6"/>
          </Link>
          <p className="text-xs text-neutral-400 text-center">No credit card required</p>
        </div>
        <div>
          <Link className="text-sm text-white underline flex  mt-5 mb-1" href="/login">
            <p className="inline-flex text-base">Find your plan <ArrowLongRightIcon className=" ml-5 w-5 h-6"/></p>

          </Link>
        </div>
      </div>

    </div>
  )
}