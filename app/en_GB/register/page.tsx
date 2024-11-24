import type { Metadata } from "next";
import { Button } from "@/app/ui/button";
export const metadata: Metadata = {
  title: "Dropbox - Register",
};
export default function page() {
  return (
    <main className="box-border w-full ">
      <div className="w-full box-border  items-center  justify-center py-20  mt-12 md:mt-20 flex">
        <div className="w-[350px] text-center">
          <form action="">
            <div className="grid gap-y-5">
              <h3 className="text-2xl font-medium"> sign up or Log in</h3>
              <h5 className="font-light">
                We recommend using your <span className=" text-base font-semibold">work email address.</span>
              </h5>
              <div className="w-full flex items-center border hover:bg-[#f7f5f2] ">
                <div className="flex  flex-col w-full ">
                  <p className="text-sm ">Continue with Google</p>
                </div>
                <div className="shrink-0">
                  <div style={{ zIndex: 2 }} className=" w-10 h-10 ">
                    <button
                      style={{
                        aspectRatio: 1,
                        cursor: "pointer",
                        overflow: "unset",
                      }}
                      className="m-0 inline-flex relative items-center pr-2 justify-center p-0 w-full box-border"
                    >
                      <span className="">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          className="size-9"
                        >
                          <g>
                            <path
                              fill="#EA4335"
                              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                            ></path>
                            <path
                              fill="#4285F4"
                              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                            ></path>
                            <path
                              fill="#FBBC05"
                              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                            ></path>
                            <path
                              fill="#34A853"
                              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                            ></path>
                            <path fill="none" d="M0 0h48v48H0z"></path>
                          </g>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center border hover:bg-[#f7f5f2]">
                <div className="shrink-0">
                  <div style={{ zIndex: 2 }} className=" w-10 h-10 ">
                    <button
                      style={{
                        aspectRatio: 1,
                        cursor: "pointer",
                        overflow: "unset",
                      }}
                      className="m-0 inline-flex relative items-center justify-center p-0 w-full box-border"
                    >
                      <span className="">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="size-9"
                          role="presentation"
                          focusable="false"
                        >
                          <path
                            d="M18.695 16.469a8.691 8.691 0 0 1-.86 1.546c-.453.645-.823 1.092-1.109 1.34-.442.407-.916.615-1.424.627-.364 0-.804-.104-1.315-.314-.514-.21-.985-.313-1.417-.313-.452 0-.937.103-1.456.313-.52.21-.938.32-1.258.33-.487.021-.972-.193-1.457-.643-.309-.27-.696-.732-1.159-1.387a9.591 9.591 0 0 1-1.225-2.434c-.343-.999-.515-1.966-.515-2.902 0-1.072.232-1.997.696-2.772a4.082 4.082 0 0 1 1.457-1.474 3.92 3.92 0 0 1 1.97-.556c.387 0 .894.12 1.524.355.628.236 1.032.355 1.209.355.132 0 .58-.14 1.34-.418.718-.259 1.325-.366 1.822-.324 1.346.109 2.357.64 3.03 1.595-1.204.73-1.8 1.752-1.788 3.062.01 1.021.381 1.87 1.109 2.545.33.313.698.555 1.108.727-.089.258-.183.505-.282.742ZM15.607 4.32c0 .8-.292 1.547-.875 2.239-.703.822-1.553 1.297-2.476 1.222a2.502 2.502 0 0 1-.018-.303c0-.768.334-1.59.928-2.263.296-.34.673-.623 1.13-.849.457-.222.889-.345 1.295-.366.011.107.016.214.016.32Z"
                            fill="currentColor"
                            vectorEffect="non-scaling-stroke"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex  flex-col w-full ">
                  <p className="text-sm ">Continue with Apple</p>
                </div>
              </div>
              <div className="flex items-center justify-center ">
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="mx-3 text-gray-500">or</span>
                <div className="border-t border-gray-300 flex-grow"></div>
              </div>
              <label className="block">
                <span className="block text-start text-xs font-medium text-slate-500">
                  Email address
                </span>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 hover:bg-[#f7f5f2] hover:border-black    border border-slate-300 text-sm  placeholder-slate-400 "
                  autoFocus
                />
              </label>
              <Button type="submit">Continue</Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
