import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import { dmSans } from "../fonts";
import Image from "next/image";
import Link from "next/link";
export default function Document() {
  return (
    <div className="flex flex-col space-y-6 items-center pt-24 md:pt-52 w-full px-6 xl:px-0  flex-grow box-border  ">
      <div className="max-w-4xl box-border mx-auto flex flex-col items-center space-y-8 ">
        <div className="flex flex-col text-center items-center space-y-6 w-full">
          <p
            className="p-1 text-white rounded-2xl max-w-max"
            style={{ backgroundColor: "#78286e" }}
          >
            <ChartBarSquareIcon className="size-5 inline-flex" /> Document
            analytics
          </p>
          <span className={`${dmSans.className} font-medium text-3xl`}>
            instant, actionable insights
          </span>
          <span className="text-base">
            With Dropbox DocSend, page-by-page analytics and permission controls
            track file use in real-time, so <br />
            you can see when clients, contractors, or collaborators have viewed
            your content.
          </span>
        </div>

        <div className="w-full text-center box-border flex flex-col space-y-6 md:space-y-0 md:flex-row space-x-12 justify-center items-center">
          <Link
            href="#"
            className="py-3 px-5 inline-block rounded-xl ring-2 ring-black group"
          >
            Get started free{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="inline-flex ml-5 transition-transform duration-300 group-hover:translate-x-1"
              width="24"
              height="24"
              role="presentation"
              focusable="false"
            >
              <path
                d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                vectorEffect="non-scaling-stroke"
              ></path>
            </svg>
          </Link>
          <Link href="#" className="group">
            <p className="inline underline underline-offset-2 decoration-1 decoration-stone-300">
              Learn more
            </p>{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="inline-flex ml-2 transition-transform duration-300 group-hover:translate-x-1"
              width="24"
              height="24"
              role="presentation"
              focusable="false"
            >
              <path
                d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                vectorEffect="non-scaling-stroke"
              ></path>
            </svg>
          </Link>
        </div>
      </div>

      <div
        style={{ maxWidth: "100%", overflow: "unset" }}
        className="  w-[1280px]  relative  flex items-center box-border "
        id="document"
      >
        <div
          style={{ aspectRatio: 0.83 }}
          className="box-border hidden  lg:block w-[540px] lg:h-auto lg:max-h-full absolute"
          id="lady"
        >
          <div
            style={{
              aspectRatio: 0.83,
              overflow: "unset",
            }}
            className="w-full h-auto flex relative items-center max-h-full max-w-full box-border"
          >
            <Image
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/features/docsend/docsend-feature-photo.png?id=16ad971c-bbd8-4c11-a10d-7b794636ac79&output_type=png"
              alt="girl"
              width={996}
              height={1200} // Adjust this as needed
              quality={80}
              className="object-contain w-full absolute inset-0 h-full"
            />
          </div>
        </div>
        <div style={{filter : 'drop-shadow(0 16px 32px rgba(0,0,0,.3))', aspectRatio : 1.6}} className="relative lg:absolute w-full lg:h-auto lg:w-[700px] lg:max-h-full box-border  " id="cobalt">
          <div style={{overflow : 'unset', aspectRatio : 1.6}} className="w-full h-auto flex relative items-center max-h-full max-w-full box-border">
            <video
              className="absolute w-full object-contain"
              aria-hidden="false"
              aria-label=""
              autoPlay
              playsInline
              loop
              height={3000}
              width={1500}
              muted
            >
              <source
                src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/test/homepageredesign2024/features/docsend/user-interface/mov/docsend-permissioning-ui-1080xauto.mov"
                type="video/quicktime; codecs=hvc1"
              />
              <source
                src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/test/homepageredesign2024/features/docsend/user-interface/webm/docsend-permissioning-ui-1080xauto.webm"
                type="video/webm; codecs=vp9"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
