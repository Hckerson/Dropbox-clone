import { golos } from "../fonts";
import { SmallPic } from "./why-rep";
import IFrame from "./iframe";
export default function Cvid() {
  return (
    <div className="box-border w-full ">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className=" box-border flex flex-col items-center gap-y-20 w-full mx-auto py-20"
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
            <IFrame src={"https://player.vimeo.com/video/887067209"} />
          </div>
          <SmallPic />
        </div>
      </div>
    </div>
  );
}
