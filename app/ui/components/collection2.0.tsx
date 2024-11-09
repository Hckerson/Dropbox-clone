import Image from "next/image";
type Cardprops = {
  id: number;
  src: string;
  body: string;
  name: string;
  role: string;
};
export default function Collection({ src, body, name, role }: Cardprops) {
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
              style={{ flexGrow: 0, flexShrink: 0, overflow: "unset" }}
              className=" box-border lg:mr-16 mr-0 lg:mb-0 mb-6 justify-center bg-white   relative items-center"
            >
              <div
                style={{ overflow: "unset" }}
                className="w-full h-full flex max-h-full max-w-full relative box-border inner "
              >
                <div className="w-full relative flex box-border inner">
                  <div  className="w-full lg:static absolute flex lg:w-[350px] items-center max-h-full max-w-full box-border inner">
                    <div
                      style={{
                        aspectRatio: 1,
                        overflow: "unset",
                        lineHeight: 0,
                      }}
                      className=" w-full h-full flex relative items-center max-h-full max-w-full"
                    >
                      <Image
                        src={src}
                        alt="girl"
                        width={2560}
                        height={1440}
                        className="h-full object-cover w-full absolute inset-0 max-h-full max-w-full box-border"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ flexGrow: 1, flexShrink: 1 }}
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
