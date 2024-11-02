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
    <div className="flex box-border people">
      <div className="flex flex-wrap box-border flex-row w-full">
        <div className="box-content px-16 w-full flex">
          <div
            style={{ flexShrink: 0 }}
            className="flex snap-center people lg:flex-row flex-col box-border"
          >
            <div
              id="did"
              style={{ flexGrow: 0, flexShrink: 0 }}
              className=" box-border lg:mr-20 mr-0 justify-center flex relative items-center"
            >
              <div
                style={{ aspectRatio: 16 / 9 }}
                className="w-full h-full max-h-full max-w-full overflow-hidden relative box-border "
              >
                <Image
                  src={src}
                  alt="girl"
                  width={1920}
                  height={1080}
                  className="h-full object-cover w-full absolute inset-0 max-h-full max-w-full box-border"
                />
              </div>
            </div>
            <div
              id="note"
              style={{ flexGrow: "1" }}
              className="flex flex-col box-border"
            >
              <div
                style={{ gridAutoFlow: "row", gridTemplateRows: "max-content" }}
                className="p-0 m-0 gap-y-6  justify-stretch h-auto grid items-center text-white box-border "
              >
                <div>{body}</div>
                <div className="group">
                  <Link href={link} className="">
                    Read the full story{" "}
                    <span className=" transition-transform ease-out duration-300">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="inline-flex transition-transform duration-300 group-hover:translate-x-1 "
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
                <div>
                  <p>{name}</p>
                  <p>{role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
