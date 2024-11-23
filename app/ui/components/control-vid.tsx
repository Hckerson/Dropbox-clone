import { golos } from "../fonts";
import { SmallPic } from "./why-rep";
export default function Cvid() {
  return (
    <div className="box-border w-full ">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1280px]  box-border flex flex-col items-center gap-y-20 w-full mx-auto py-20"
        >
          <h2
            style={{
              maxWidth: "35ch",
              lineHeight: "1.2",
              textAlign: "center",
            }}
            className={`text-center p-0 mx-4 font-medium text-xl tracking-wide md:text-4xl box-border hyphens-manual ${golos.className}`}
          >
            How easy closing the deal can be with Dropbox
          </h2>
          <div className="w-full box-border">
            <div
              style={{ aspectRatio: 16 / 9, overflow: "unset" }}
              className=" relative h-auto overflow-hidden max-h-full w-full min-w-0   box-border "
            >
              <div
                style={{
                  aspectRatio: 16 / 9,
                }}
                className="w-full h-auto  flex relative items-center max-h-full  max-w-full box-border"
              >
                <iframe
                loading="lazy"
                  className="w-full h-full pointer-events-none"
                  src="https://player.vimeo.com/video/887067209"
                ></iframe>
              </div>
            </div>
          </div>
          <SmallPic/>
        </div>
      </div>
    </div>
  );
}
