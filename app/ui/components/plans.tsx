import { ReadyB } from "./get-started";
import Link from "next/link";
import Button from '@mui/material/Button';


const essential = [
  {id : 1, label : '1 user', src : Button},
  {id : 2, label : '1 user', src : Button},
  {id : 3, label : '1 user', src : Button},
  {id : 4, label : '1 user', src : Button},
  {id : 5, label : '1 user', src : Button},
  {id : 6, label : '1 user', src : Button},
  {id : 7, label : '1 user', src : Button},
  {id : 8, label : '1 user', src : Button},
  {id : 9, label : '1 user', src : Button},
  {id : 10, label : '1 user', src : Button},
  
]

export default function Plans() {
  return (
    <div className="box-border w-full ">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1280px]  box-border flex flex-col items-center gap-y-20 w-full mx-auto py-20"
        >
          <div className="w-full box-border">
            <div
              id="plans"
              className="grid gap-y-10 md:gap-y-0 box-border md:gap-x-6 gap-x-0 px-5 md:px-10 xl:px-5  "
            >
              <div className="flex flex-col w-full box-border">
                <div className="min-h-8 w-full"></div>
                <div className="py-6  grid gap-y-8 px-10 ">
                  <div className="flex flex-col w-full box-border gap-y-4">
                    <legend>For professionals</legend>
                    <h2>Essentials</h2>
                    <span> / month</span>
                  </div>
                  <ReadyB link={"aspect/try/essentials"} />
                  <div className="flex flex-col gap-y-8">
                    <span>
                      <Link href={""} className="group/svg">
                        or buy now{" "}
                        <span className="">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="inline-flex transition-transform duration-300 group-hover/svg:translate-x-2  "
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
                        </span>
                      </Link>
                    </span>
                    <div className="w-full box-border">
                      <ul className="w-full">
                        <li className="inline " key={"each.label"}>
                          <Link href={""}>
                            <div className="w-full flex space-x-5">
                              <div className="shrink-0 relative">
                                <span className="">
                                  <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="dig-UIIcon dig-UIIcon--standard"
                                    width="24"
                                    height="24"
                                    role="presentation"
                                    focusable="false"
                                  >
                                    <path
                                      d="M14.9 11.508A4.822 4.822 0 0 0 15.5 9c0-2.542-1.275-4-3.5-4S8.5 6.458 8.5 9a4.822 4.822 0 0 0 .6 2.508A4.25 4.25 0 0 0 5 15.75V19h14v-3.25a4.25 4.25 0 0 0-4.1-4.242ZM12 6.5c.931 0 2 .284 2 2.5s-1.069 2.5-2 2.5-2-.284-2-2.5 1.069-2.5 2-2.5Zm5.5 11h-11v-1.75A2.753 2.753 0 0 1 9.25 13h5.5a2.753 2.753 0 0 1 2.75 2.75v1.75Z"
                                      fill="currentColor"
                                      vectorEffect="non-scaling-stroke"
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                              <div className="flex  flex-col justify-center">
                                <p className="text-xs text-stone-400">
                                  {"each.body"}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
