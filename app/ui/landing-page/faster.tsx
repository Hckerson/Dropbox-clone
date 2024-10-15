import { dmSans } from "../fonts";
import Image from "next/image";
import Link from "next/link";
export default function Faster() {
  return (
    <main className=" gap-5">
      <div className="flex flex-col space-y-12 items-center ">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8 ">
          <div className="flex flex-col text-center items-center space-y-6 w-full">
            <p
              className="p-1 text-white rounded-2xl max-w-max"
              style={{ backgroundColor: "#007891" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="inline-flex"
                width="24"
                height="24"
                role="presentation"
                focusable="false"
              >
                <path
                  d="m13.964 10-3.928 2.5v-5l3.928 2.5Z"
                  fill="currentColor"
                  vectorEffect="non-scaling-stroke"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 4h16v12H4V4Zm1.5 1.5h13v9h-13v-9Z"
                  fill="currentColor"
                  vectorEffect="non-scaling-stroke"
                ></path>
                <path
                  d="M8 19.5H6V18h2v-.5h1.5v.5H18v1.5H9.5v.5H8v-.5Z"
                  fill="currentColor"
                  vectorEffect="non-scaling-stroke"
                ></path>
              </svg>
              Faster Feedback
            </p>
            <span className={`${dmSans.className} font-medium text-3xl`}>
              Reduce the chaos
            </span>
            <span className="text-base">
              Dropbox Replay reduces ‌feedback back-and-forth. Collect video,
              image, and audio feedback all in one place, so you can get to
              final delivery in no time.
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
          <div className="absolute right-20 top-[130px]">
            <Image
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/features/replay/The_Luupe_Genya_Oneall.jpg?id=e2669bcf-402f-4d94-bde1-1671ff42b8e7&width=3840&output_type=jpg"
              alt=""
              width={450}
              height={1060}
            />
          </div>
          <div className="absolute left-12 top-[400px] rounded-lg">
            <Image
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/features/replay/user-interface/png/replay-hero-ui-2048x1280.png?id=e8f8a500-5931-4bd6-a32b-fce48813fa97&output_type=png"
              alt="girl"
              width={650}
              height={430} // Adjust this as needed
              quality={80}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
