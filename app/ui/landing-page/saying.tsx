import { golos } from "../fonts";
import Collection from "../components/frame";
import { customers } from "../navbar/links";

export default function Saying() {
  return (
    <div style={{ backgroundColor: "#1e1919" }} className="w-full box-border ">
      <div className="flex flex-col items-center w-full box-border ">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1350px] box-border w-full flex flex-col items-center gap-y-20 py-20 mx-auto"
        >
          <h2
            style={{ overflowWrap: "anywhere", lineHeight: "120%" }}
            className={`text-center p-0 mx-4 font-medium text-2xl md:text-4xl text-white box-border hyphens-manual ${golos.className}`}
          >
            What Dropbox customers are saying
          </h2>
          <div className="w-full box-border">
            <div
              style={{ scrollbarWidth: "none" }}
              className="overflow-x-scroll overscroll-x-none select-none box-border"
            >
              <div
                id="collections"
                style={{ width: "fit-content" }}
                className=" box-border  grid "
              >
                {customers.map((customer) => (
                  <Collection key={customer.id} {...customer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
