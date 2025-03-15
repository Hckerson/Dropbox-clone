import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import clsx from "clsx";

export function Row({classes, fill}: {classes : string, fill : string}) {
  return (
    <>
      <div
        style={{ verticalAlign: "center" }}
        className={clsx("inline-flex  items-center justify-center  rounded-md py-2", classes)}
      >
        <span className="hover:bg-stone-700 flex items-center justify-center rounded-lg p-[1px]">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 5h3v3H5V5Zm8.5 0h-3v3h3V5ZM19 5h-3v3h3V5ZM5 10.5h3v3H5v-3Zm8.5 0h-3v3h3v-3Zm2.5 0h3v3h-3v-3ZM8 16H5v3h3v-3Zm2.5 0h3v3h-3v-3Zm8.5 0h-3v3h3v-3Z"
                    fill={fill}
                    vectorEffect="non-scaling-stroke"
                  ></path>
                </svg>
              </TooltipTrigger>
              <TooltipContent>
                <p>Explore more dropbox app</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </span>
        <span className="hover:bg-stone-700 flex items-center justify-center rounded-lg p-[1px]">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
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
                    d="M4 5.5v8.25A2.25 2.25 0 0 0 6.25 16H11v1.5H8.5V19H15v-1.5h-2.5V16h4.75a2.25 2.25 0 0 0 2.25-2.25V5.5H4Zm14 8.25a.75.75 0 0 1-.75.75h-11a.75.75 0 0 1-.75-.75V7H18v6.75Z"
                    fill={fill}
                    vectorEffect="non-scaling-stroke"
                  ></path>
                  <path
                    d="M13.5 9H10v3.5h3.5V9Z"
                    fill={fill}
                    vectorEffect="non-scaling-stroke"
                  ></path>
                </svg>
              </TooltipTrigger>
              <TooltipContent>
                <p>Vid</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </span>
        <span className="hover:bg-stone-700 flex items-center justify-center rounded-lg p-[1px]">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
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
                    d="M11.75 4C6.535 4 4 6.535 4 11.75s2.535 7.75 7.75 7.75 7.75-2.535 7.75-7.75S16.965 4 11.75 4Zm0 14c-4.322 0-6.25-1.927-6.25-6.25 0-4.322 1.928-6.25 6.25-6.25 4.323 0 6.25 1.928 6.25 6.25 0 4.323-1.927 6.25-6.25 6.25Z"
                    fill={fill}
                    vectorEffect="non-scaling-stroke"
                  ></path>
                  <path
                    d="M11.75 14.5a.75.75 0 1 0 .75.75.71.71 0 0 0-.75-.75Zm.007-7h-.007A2.76 2.76 0 0 0 9 10.26v.24h1.5v-.24A1.256 1.256 0 0 1 11.75 9c.866 0 1.25.386 1.25 1.25 0 .887-.443 1.074-.588 1.136A2.244 2.244 0 0 0 11 13.428v.166a3.01 3.01 0 0 1 1.5 0v-.166a.75.75 0 0 1 .496-.66A2.532 2.532 0 0 0 14.5 10.25a2.55 2.55 0 0 0-2.743-2.75Z"
                    fill={fill}
                    vectorEffect="non-scaling-stroke"
                  ></path>
                </svg>
                <span
                  data-testid="learning-center-notification-dot"
                  className="dig-Badge _utilityNavBadge_1bt7h_3 dig-5032no1_21-6-0 dig-5032noc_21-6-0 dig-5032no2_21-6-0 dig-5032no9_21-6-0 dig-5032no7_21-6-0 dig-5032nod_21-6-0 dig-Badge--alert dig-Badge--xsmall dig-Badge--no-children dig-5032nof_21-6-0"
                >
                  <span className="dig-ekabin8u_3-12-0 dig-ekabin9e_3-12-0 dig-4rjmw90_3-12-0"></span>
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>{`See what's new`}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </span>
        <span className="hover:bg-stone-700 flex items-center justify-center rounded-lg p-[1px]">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="dig-UIIcon dig-UIIcon--standard"
                  width="24"
                  height="24"
                  role="presentation"
                  focusable="false"
                  color="inherit"
                >
                  <path
                    d="m17.608 12.971-.329-.219a1.747 1.747 0 0 1-.779-1.457v-1.67c0-1.094 0-2.332-.563-3.336C15.261 5.084 13.972 4.5 12 4.5c-1.972 0-3.26.585-3.937 1.787C7.5 7.292 7.5 8.531 7.5 9.624v1.672a1.747 1.747 0 0 1-.78 1.454l-.327.219A4.241 4.241 0 0 0 4.5 16.507v.993H10a1.857 1.857 0 0 0 2 2 1.857 1.857 0 0 0 2-2h5.5v-.993a4.242 4.242 0 0 0-1.892-3.536ZM6.047 16a2.743 2.743 0 0 1 1.178-1.781L7.553 14A3.244 3.244 0 0 0 9 11.296V9.622c0-.953 0-1.938.37-2.6C9.618 6.584 10.16 6 12 6c1.841 0 2.383.584 2.63 1.023.371.662.371 1.646.37 2.6v1.674A3.244 3.244 0 0 0 16.447 14l.329.219A2.744 2.744 0 0 1 17.953 16H6.047Z"
                    fill={fill}
                    vectorEffect="non-scaling-stroke"
                  ></path>
                </svg>
              </TooltipTrigger>
              <TooltipContent>
                <p>Notification</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </span>
      </div>
    </>
  );
}
