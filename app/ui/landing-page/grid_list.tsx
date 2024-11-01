import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

type list = {
  src : string;
  name : string;
  about : string;
  href : string
}

export default function Grid_list({src, name, about, href} : list){
  return(
    <div
    style={{ backgroundColor: "#f7f5f2" }}
    className={clsx('box-border h-full overflow-hidden relative rounded-2xl group animate__animated transition-all duration-500')} 
  >
    <div
      className="p-0 m-0 h-full grid justify-start items-center box-border"
      id="pic"
    >
      <div className="md:w-[186px] h-full md:block hidden box-border">
        <div
          style={{ aspectRatio: 1.7 }}
          className="w-full h-full flex overflow-hidden relative max-h-full max-w-full box-border items-center"
        >
          <Image
            src={src}
            alt="picture"
            width={1920}
            height={1080} // Adjust this as needed
            className="h-full object-cover w-full absolute inset-0 max-h-full max-w-full box-border"
          />
        </div>
      </div>
      <div
        className="w-full p-6 "
        style={{ backgroundColor: "#f7f5f2" }}
      >
        <div>
          <div className="w-full text-base font-semibold">
            {name}
          </div>
          <span className="font-light text-sm text-stone-600">{about}</span>
        </div>
        <>
          <p className="inline underline underline-offset-2 decoration-1 decoration-stone-300">
            <Link href={href}>Learn more</Link>
          </p>{" "}
          <span className="group-hover:translate-x-2 transition-transform ease-in duration-300">
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
          </span>
        </>
      </div>
    </div>
  </div>
  )
}