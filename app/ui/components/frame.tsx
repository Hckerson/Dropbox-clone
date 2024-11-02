import Image from "next/image";
import Link from "next/link";
type Cardprops = {
  id: number;
  src: string;
  body: string;
  link: string;
  name: string;
  role: string;
};
export default function Collection({
  id,
  src,
  body,
  link,
  name,
  role,
}: Cardprops) {
  return (
    <div
      className="flex box-border people"
      aria-hidden="false"
      role="group"
      aria-roledescription="slide"
    >
      <div className="flex flex-wrap box-border flex-row w-full">
        <div className="box-content px-10 lg:px-24  w-full flex">
          <div
            style={{ flexShrink: 0 }}
            className="flex snap-center people lg:flex-row flex-col box-border"
          >
            <div
              style={{ flexGrow: 0, flexShrink: 0, overflow: "unset" }}
              className=" box-border lg:mr-20 mr-0 lg:mb-0 mb-6 justify-center flex relative items-center"
            >
          <div
            style={{
              aspectRatio: 2.2,
              overflow: "unset",
            }}
            className="w-full h-auto flex relative items-center max-h-full max-w-full box-border"
          >
            <Image
              src={src}
              alt="girl"
              width={996}
              height={1200} // Adjust this as needed
              quality={80}
              className="object-contain w-full absolute inset-0 h-full"
            />
          </div>
            </div>
            <div
              style={{ flexGrow: "1" }}
              className="flex flex-col box-border"
            >
              <div
                style={{ gridAutoFlow: "row", gridTemplateRows: "max-content" }}
                className="p-0 m-0  justify-stretch h-auto grid items-center text-white box-border "
              >
                <div
                  style={{ overflowWrap: "anywhere", lineHeight: "150%" }}
                  className="text-left pb-8 p-0 m-0 font-normal text-base box-border "
                >
                  {body}
                </div>
                <div className=" mb-8 box-border">
                  <Link href={link} className="group">
                    Read the full story{" "}
                    <span className="">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="inline-flex transition-transform duration-300 group-hover:translate-x-2  "
                        width="24"
                        height="24"
                        role="presentation"
                        focusable="false"
                      >
                        <path
                          d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          vectorEffect="non-scaling-stroke"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
                <span className="text-left p-0 m-0 font-medium text-base">
                  <p className="font-medium text-sm text-stone-200">{name}</p>
                  <p className="text-stone-500 pt-3">{role}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
