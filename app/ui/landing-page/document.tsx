import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import { dmSans } from "../fonts";
import Image from "next/image";
import Link from "next/link";
export default function Document() {
  return (
    <main className=" zgap-5">
      <div className="flex flex-col space-y-12 items-center ">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8 ">
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
              With Dropbox DocSend, page-by-page analytics and permission
              controls track file use in real-time, so <br />
              you can see when clients, contractors, or collaborators have
              viewed your content.
            </span>
          </div>

          <div className="w-full text-center box-border flex space-x-3 justify-center items-center">
            <Link
              href="#"
              className="py-3 px-5 inline-block rounded-xl ring-2 ring-black"
            >
              Get started free{" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="inline-flex ml-5 transition-transform duration-300 group-hover:translate-x-2"
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
            <Link href="#" className="">
              <p className="inline underline underline-offset-2 decoration-1 decoration-stone-300">
                Learn more
              </p>{" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="inline-flex ml-2 transition-transform duration-300 group-hover:translate-x-2"
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

        <div className="max-w-7xl h-[900px] w-[1180px] relative  flex items-start ">
          <Image
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/features/docsend/docsend-feature-photo.png?id=16ad971c-bbd8-4c11-a10d-7b794636ac79&output_type=png"
            alt="girl"
            width={540}
            height={650} // Adjust this as needed
            quality={80}
            className="absolute right-0 top-[130px]"
          />
          <div className="flex items-center  h-[430px] w-[700px] rounded-lg shadow-2xl  absolute xl:left-0 top-[400px]">
            <video
              className="absolute block w-full h-auto rounded-lg shadow-2xl object-fill"
              aria-hidden="false"
              aria-label=""
              autoPlay
              playsInline
              loop
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
    </main>
  );
}
