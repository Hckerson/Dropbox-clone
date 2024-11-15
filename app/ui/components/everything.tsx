import { golos } from "../fonts";
import BigPicCard from "./big-pic Card";
import { every } from "../navbar/links";

export default function Everything() {
  return (
    <div className="box-border w-full ">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1280px]  box-border flex flex-col items-center gap-y-20 w-full mx-auto py-20"
        >
          <h2
            style={{ overflowWrap: "anywhere", lineHeight: "120%" }}
            className={`text-center p-0 mx-4 font-medium text-3xl md:text-4xl box-border hyphens-manual ${golos.className}`}
          >
            Keep everything at your fingertips
          </h2>
          <div className="w-full box-border">
            <div style={{width : 'fit-content'}} id="everything" className="grid gap-y-14 md:gap-y-0 box-border px-6 md:px-10 xl:px-0  ">
              {every.map((one)=>{
                return(
                  <div key={one.id} className="w-full relative box-border">
                      <BigPicCard key={one.id} {...one} />
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
