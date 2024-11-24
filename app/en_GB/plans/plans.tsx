import { ReadyB } from "@/app/ui/components/get-started";
import Link from "next/link";
import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import { golos } from "@/app/ui/fonts";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import {
  PermIdentity,
  SendOutlined,
  PieChartOutline,
  ScheduleOutlined,
  DrawOutlined,
  PictureAsPdfOutlined,
  OndemandVideoOutlined,
  AutoAwesomeOutlined,
  PeopleOutlined,
  VerifiedUserOutlined,
  BalanceOutlined,
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

const businesses = [
  { id: 1, label: "1 user", src: PermIdentity },
  { id: 2, label: "3 TB of storage", src: PieChartOutline },
  { id: 3, label: "Transfer files up to 100GB", src: SendOutlined },
  { id: 4, label: "180 days to restore deleted files", src: ScheduleOutlined },
  { id: 5, label: "Track file engagement", src: ChartBarSquareIcon },
  { id: 6, label: "Unlimited signature request", src: DrawOutlined },
  { id: 7, label: "PDF editing", src: PictureAsPdfOutlined },
  { id: 8, label: "Record, review and edit video", src: OndemandVideoOutlined },
  { id: 9, label: "Set up admins", src: PeopleOutlined },
  { id: 10, label: "Know what content is shared", src: VerifiedUserOutlined },
];

const plus = [
  { id: 1, label: "1 user", src: PermIdentity },
  { id: 2, label: "3 TB of storage", src: PieChartOutline },
  { id: 3, label: "Transfer files up to 100GB", src: SendOutlined },
  { id: 4, label: "180 days to restore deleted files", src: ScheduleOutlined },
  { id: 5, label: "Track file engagement", src: ChartBarSquareIcon },
  { id: 6, label: "Unlimited signature request", src: DrawOutlined },
  { id: 7, label: "PDF editing", src: PictureAsPdfOutlined },
  { id: 8, label: "Record, review and edit video", src: OndemandVideoOutlined },
  { id: 9, label: "Set up admins", src: PeopleOutlined },
  { id: 10, label: "Suspicious activity alerts", src: VerifiedUserOutlined },
  { id: 11, label: "Compliance tracking", src: BalanceOutlined },
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
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={
                    <Radio
                      sx={{
                        color: "black",
                        "&.Mui-checked": {
                          color: "black",
                        },
                      }}
                    />
                  }
                  label="Billed monthly"
                />
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      sx={{
                        color: "black",
                        "&.Mui-checked": {
                          color: "black",
                        },
                      }}
                    />
                  }
                  label="Billed yearly"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="w-full box-border">
            <div
              id="plans"
              className="grid gap-y-7  box-border md:gap-x-7 gap-x-0 px-5 md:px-10 xl:px-5  "
            >
              <div className="flex  flex-col w-full box-border rounded-xl">
                <div className="lg:min-h-8 w-full"></div>
                <div
                  className="py-6 h-full  flex flex-col gap-y-8 px-10 rounded-xl "
                  style={{ backgroundColor: "#faf9f7" }}
                >
                  <div className="flex flex-col w-full box-border gap-y-4 max-h-min">
                    <legend className="font-light text-sm text-stone-700">
                      For professionals
                    </legend>
                    <h2 className={`text-3xl font-semibold ${golos.className}`}>
                      Essentials
                    </h2>
                    <span className={`text-xl font-medium ${golos.className}`}>
                      {" "}
                      / month
                    </span>
                  </div>
                  <div className="flex flex-col  gap-y-8 w-full box-border">
                    <ReadyB link={"aspect/try/essentials"} />
                    <div className="flex flex-col gap-y-8 ">
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
                      <div className="w-full box-border ">
                        <ul className="w-full grid gap-y-4 ">
                          {essentials.map((essential) => {
                            const Icon = essential.src;
                            return (
                              <li className="inline " key={essential.id}>
                                <div className="w-full flex space-x-3">
                                  <div className="shrink-0 relative">
                                    <Icon className="w-5 h-5" />
                                  </div>
                                  <div className="flex  flex-col justify-center">
                                    <p className="text-base font-normal text-stone-800 ">
                                      {essential.label}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full box-border rounded-xl">
                <div className=" w-full bg-[#b4dc19] rounded-t-xl">
                  <li className="inline ">
                    <div className="w-full flex space-x-2 h-8">
                      <div className="shrink-0 relative pl-6">
                        <AutoAwesomeOutlined className="w-6 h-6" />
                      </div>
                      <div className="flex  flex-col justify-center ">
                        <p className="text-sm font-semibold ">Best value</p>
                      </div>
                    </div>
                  </li>
                </div>
                <div
                  className="py-6 h-full  flex flex-col gap-y-8 px-10 rounded-b-xl"
                  style={{ backgroundColor: "#f7f5f2" }}
                >
                  <div className="flex flex-col w-full box-border gap-y-4">
                    <legend className="font-light text-sm text-stone-700">
                      For teams
                    </legend>
                    <h2 className={`text-3xl font-semibold ${golos.className}`}>
                      Business
                    </h2>
                    <span className={`text-xl font-medium ${golos.className}`}>
                      / user / month
                    </span>
                  </div>
                  <div className="flex flex-col  gap-y-8 w-full box-border">
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
                          {businesses.map((business) => {
                            const Icon = business.src;
                            return (
                              <li className="inline " key={business.id}>
                                <div className="w-full flex space-x-3">
                                  <div className="shrink-0 relative">
                                    <Icon className="w-5 h-5" />
                                  </div>
                                  <div className="flex  flex-col justify-center">
                                    <p className="text-base font-normal text-stone-800 ">
                                      {business.label}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full box-border rounded-xl">
                <div className="lg:min-h-8 w-full"></div>
                <div
                  className="py-6  grid gap-y-8 px-10 rounded-xl"
                  style={{ backgroundColor: "#f2eee8" }}
                >
                  <div className="flex flex-col w-full box-border gap-y-4">
                    <legend className="font-light text-sm text-stone-700">
                      For companies
                    </legend>
                    <h2 className={`text-3xl font-semibold ${golos.className}`}>
                      Business plus
                    </h2>
                    <span className={`text-xl font-medium ${golos.className}`}>
                      / user / month
                    </span>
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
                        {plus.map((each) => {
                          const Icon = each.src;
                          return (
                            <li className="inline " key={each.id}>
                              <div className="w-full flex space-x-3">
                                <div className="shrink-0 relative">
                                  <Icon className="w-5 h-5" />
                                </div>
                                <div className="flex  flex-col justify-center">
                                  <p className="text-base font-normal text-stone-800 ">
                                    {each.label}
                                  </p>
                                </div>
                              </div>
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
