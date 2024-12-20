import Link from "next/link";
type Cardprops = {
  id: number;
  body: string;
  name: string;
  role: string;
};

type CardpropsV1 = {
  id: number;
  body: string;
  name: string;
  role: string;
  link: string;
};
export default function Collection({ body, name, role }: Cardprops) {
  return (
    <div
      className="flex box-border people"
      aria-hidden="false"
      role="group"
      aria-roledescription="slide"
    >
      <div className="flex flex-wrap box-border flex-row w-full">
        <div className="box-content px-6 lg:px-24  w-full flex">
          <div
            style={{ flexShrink: 1 }}
            className="flex snap-center people lg:flex-row flex-col box-border"
          >
            <div
              style={{ flexGrow: 1, flexShrink: 1 }}
              className="flex flex-col box-border"
            >
              <div
                style={{ gridAutoFlow: "row", gridTemplateRows: "max-content" }}
                className="p-0 m-0  justify-stretch h-auto grid items-center text-center text-white box-border "
              >
                <div
                  style={{ overflowWrap: "anywhere", lineHeight: "150%" }}
                  className=" pb-8 p-0 m-0 font-normal text-base text-center box-border "
                >
                  {body}
                </div>
                <span className="p-0 m-0 font-medium text-center text-base">
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

export function CollectionV1({ body, name, role, link }: CardpropsV1) {
  return (
    <div
      className="flex box-border people"
      aria-hidden="false"
      role="group"
      aria-roledescription="slide"
    >
      <div className="flex flex-wrap box-border flex-row w-full">
        <div className="box-content px-6 lg:px-24  w-full flex">
          <div
            style={{ flexShrink: 1 }}
            className="flex snap-center people lg:flex-row flex-col box-border"
          >
            <div
              style={{ flexGrow: 1, flexShrink: 1 }}
              className="flex flex-col box-border"
            >
              <div
                style={{ gridAutoFlow: "row", gridTemplateRows: "max-content" }}
                className="p-0 m-0  justify-stretch h-auto grid items-center text-center  box-border "
              >
                <div
                  style={{ overflowWrap: "anywhere", lineHeight: "150%" }}
                  className=" pb-8 p-0 m-0 text-black font-normal text-base text-center box-border "
                >
                  {body}
                </div>
                <Link href={link}>
                  {" "}
                  <p className="inline-flex items-center text-base group font-medium  underline underline-offset-2 decoration-1 hover:decoration-white transition-colors duration-200 decoration-stone-400">
                    Read full review{" "}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
                  </p>
                </Link>
                <span className="pt-6 m-0 font-medium text-center text-base">
                  <p className="font-semibold text-sm text-stone-800">{name}</p>
                  <p className="text-stone-500 font-light  pt-2">{role}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
