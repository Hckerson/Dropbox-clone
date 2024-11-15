import { golos } from "../fonts";
import BigPicCard from "./big-pic Card";
import { easy } from "../navbar/links";
import { FaqV1 } from "./FAQ";

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
            className={`text-center p-0 mx-4 font-medium text-xl tracking-wide md:text-4xl box-border hyphens-manual ${golos.className}`}
          >
            Easy to use. Secure. Fast.
          </h2>
          <div className="w-full box-border">
            <div
              style={{ width: "fit-content" }}
              id="everything"
              className="grid gap-y-14 md:gap-y-0 box-border px-6 md:px-10 xl:px-0  "
            >
              {easy.map((one) => {
                return (
                  <div key={one.id} className="w-full relative box-border">
                    <BigPicCard key={one.id} {...one} />
                  </div>
                );
              })}
            </div>
          </div>
          <h2
            style={{
              maxWidth: "35ch",
              lineHeight: "1.2",
              textAlign: "center",
            }}
            className={`text-center p-0 mx-4 font-medium text-2xl tracking-wide md:text-3xl box-border hyphens-manual ${golos.className}`}
          >
            Automatic backup means quick recovery for your most important files
          </h2>
        </div>
        <div className="w-full">
          <FaqV1 />
        </div>
      </div>
    </div>
  );
}
