import { ReadyB } from "./get-started";
import Link from "next/link";
import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import { golos } from "../fonts";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import {
  PermIdentity,
  SendOutlined,
  PieChartOutline,
  ScheduleOutlined,
  DrawOutlined,
  PictureAsPdfOutlined,
  OndemandVideoOutlined,
} from "@mui/icons-material";

const essentials = [
  { id: 1, label: "1 user", src: PermIdentity },
  { id: 2, label: "3 TB of storage", src: PieChartOutline },
  { id: 3, label: "Transfer files up to 100GB", src: SendOutlined },
  { id: 4, label: "180 days to restore deleted files", src: ScheduleOutlined },
  { id: 5, label: "Track file engagement", src: ChartBarSquareIcon },
  { id: 6, label: "Unlimited signature request", src: DrawOutlined },
  { id: 7, label: "PDF editing", src: PictureAsPdfOutlined },
  { id: 8, label: "Record, review and edit video", src: OndemandVideoOutlined },
];

export default function Plans() {
  return (
    <div className="box-border w-full ">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1280px]  box-border flex flex-col items-center  w-full mx-auto py-16"
        >
          <div className="w-full box-border h-16 relative">
            <FormControl className="absolute left-8">
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                className="flex flex-row space-x-4"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Billed monthly"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Billed yearly"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="w-full box-border" >
            <div
              id="plans"
              className="grid gap-y-10 md:gap-y-0 box-border md:gap-x-6 gap-x-0 px-5 md:px-10 xl:px-5  "
            >
              <div className="flex flex-col w-full box-border rounded-xl" >
                <div className="min-h-8 w-full"></div>
                <div className="py-6  grid gap-y-8 px-10 rounded-xl"         style={{ backgroundColor: "#f7f5f2" }}>
                  <div className="flex flex-col w-full box-border gap-y-4">
                    <legend className="font-light text-sm text-stone-700">For professionals</legend>
                    <h2 className={`text-3xl font-semibold ${golos.className}`}>Essentials</h2>
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
                      <ul className="w-full grid gap-y-4">
                        {essentials.map((essential) => {
                          const Icon = essential.src;
                          return (
                            <li className="inline " key={essential.id}>
                              <Link href={""}>
                                <div className="w-full flex space-x-5">
                                  <div className="shrink-0 relative">
                                    <Icon className="w-5 h-5" />
                                  </div>
                                  <div className="flex  flex-col justify-center">
                                    <p className="text-base font-light ">
                                      {essential.label}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          );
                        })}
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
