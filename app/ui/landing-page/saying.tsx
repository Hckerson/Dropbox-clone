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
          <div
            style={{ zIndex: 1 }}
            className=" box-border w-full flex flex-col justify-center items-center xl:max-w-[1350px]"
          >
            <div style={{flexGrow : 1}} className="flex overflow-x-hidden relative w-full  box-border">
              <div style={{zIndex : 2}} className=" transition-all duration-1000 absolute left-0">
                <button className="" aria-label="Previous slide">
                  <span className="">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="dig-PictogramIcon"
                      width="64"
                      height="64"
                      focusable="false"
                      role="presentation"
                    >
                      <path
                        d="M19 11.75H7m5.25 6.5L6 11.75l6.25-6.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div style={{scrollSnapType : 'x mandatory', scrollbarWidth: "none"}} className="flex flex-nowrap min-w-full overflow-x-scroll box-border ">
                {customers.map((customer) => (
                  <Collection key={customer.id} {...customer} />
                ))}
              </div>
              <div  style={{zIndex : 2}} className=" transition-all duration-1000 absolute right-0">
                <button className="" aria-label="Previous slide">
                  <span className="">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="dig-PictogramIcon"
                      width="64"
                      height="64"
                      focusable="false"
                      role="presentation"
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
                </button>
              </div>
            </div>
            <div>controls</div>
          </div>
        </div>
      </div>
    </div>
  );
}
