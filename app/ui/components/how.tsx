import { golos } from "../fonts";
import BigTopPicCard from "./big-top-pic Card";
import { hows } from "../navbar/links";

export default function How() {
  return (
    <div className="box-border w-full ">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1280px]  box-border flex flex-col items-center gap-y-20 w-full mx-auto py-20"
        >
          <h2
            style={{ overflowWrap: "anywhere", lineHeight: "120%" }}
            className={`text-center p-0 mx-4 font-medium text-2xl md:text-4xl box-border hyphens-manual ${golos.className}`}
          >
            How will you use Dropbox ?
          </h2>
          <div className="w-full box-border">
            <div style={{width : 'fit-content'}} id="how" className="grid box-border px-6 md:px-12 lg:px-20 xl:px-0  ">
              {hows.map((one)=>{
                return(
                  <div key={one.id} className="w-full relative box-border">
                      <BigTopPicCard key={one.id} {...one} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
