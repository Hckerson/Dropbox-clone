"use client";
import { useState } from "react";
import { ReadyB } from "@/app/ui/components/get-started";
import Link from "next/link";
import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import { golos } from "@/app/ui/fonts";
import { plans } from "@/app/lib/placeholder-data";
import { Plan } from "@/app/lib/definitions";
import { ActionBV1 } from "@/app/ui/components/get-started";
import {
  PhotoIcon,
  ArrowLeftEndOnRectangleIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import {
  PermIdentity,
  SendOutlined,
  ScheduleOutlined,
  DrawOutlined,
  PictureAsPdfOutlined,
  AutoAwesomeOutlined,
  PeopleOutlined,
  LockOutlined,
  VpnKeyOutlined,
  VerifiedUserOutlined,
  BalanceOutlined,
  SmartphoneOutlined,
  FolderOutlined,
  CreateNewFolderOutlined,
} from "@mui/icons-material";

const plus = [
  { id: 1, label: "1 user", src: PermIdentity },
  { id: 2, label: "2 TB of storage", src: ChartPieIcon },
  { id: 3, label: "Connect all your devices", src: SmartphoneOutlined },
  { id: 4, label: "Transfer files up to 50 GB", src: ScheduleOutlined },
  { id: 5, label: "30 days to restore deleted files", src: ChartBarSquareIcon },
  { id: 6, label: "Edit PDFs and get signatures", src: DrawOutlined },
];

const essentials = [
  { id: 1, label: "1 user", src: PermIdentity },
  { id: 2, label: "3 TB of storage", src: ChartPieIcon },
  { id: 3, label: "Connect all your devices", src: SmartphoneOutlined },
  { id: 4, label: "Transfer files up to 50 GB", src: SendOutlined },
  { id: 5, label: "180 days to restore deleted files", src: ScheduleOutlined },
  { id: 6, label: "Edit PDFs and get signatures", src: PhotoIcon },
  { id: 7, label: "Brand files you share", src: ScheduleOutlined },
  { id: 8, label: "Password-protect any files", src: VerifiedUserOutlined },
];

const businesses = [
  { id: 1, label: "3+ user", src: PermIdentity },
  { id: 2, label: "Starts at 9 TB for the team", src: ChartPieIcon },
  {
    id: 3,
    label: "One place to work together",
    src: ArrowLeftEndOnRectangleIcon,
  },
  { id: 4, label: "Transfer files up to 100GB", src: SendOutlined },
  { id: 5, label: "180 days to restore deleted files", src: ScheduleOutlined },
  { id: 6, label: "Edit PDFs and get signatures", src: PictureAsPdfOutlined },
  { id: 7, label: "Brand files you share", src: PhotoIcon },
  { id: 8, label: "Password-protect any files", src: VerifiedUserOutlined },
  { id: 9, label: "Team folders for organisation", src: FolderOutlined },
  { id: 10, label: "Admin-managed file access", src: VerifiedUserOutlined },
  { id: 11, label: "Roles, groups and permissions", src: PeopleOutlined },
  {
    id: 12,
    label: "Manage team sharing activity",
    src: CreateNewFolderOutlined,
  },
];

const businessPlus = [
  { id: 1, label: "3+ user", src: PermIdentity },
  { id: 2, label: "Starts at 15 TB for the team", src: ChartPieIcon },
  {
    id: 3,
    label: "One place to work together",
    src: ArrowLeftEndOnRectangleIcon,
  },
  { id: 4, label: "Transfer files up to 250 GB", src: SendOutlined },
  { id: 5, label: "1 year to restore deleted files", src: ScheduleOutlined },
  { id: 6, label: "Edit PDFs and get signatures", src: PictureAsPdfOutlined },
  { id: 7, label: "Tiered-admin management", src: PeopleOutlined },
  { id: 8, label: "Team folders for organisation", src: FolderOutlined },
  { id: 9, label: "Roles, groups and permissions", src: PeopleOutlined },
  { id: 10, label: "End-to-end encryption", src: LockOutlined },
  { id: 11, label: "Advanced key management", src: VpnKeyOutlined },
  { id: 12, label: "Compliance tracking", src: BalanceOutlined },
  { id: 13, label: "Suspicious activity alerts", src: VerifiedUserOutlined },
  { id: 14, label: "Single sign-on", src: SendOutlined },
];

export default function Plans() {
  const [value, setValue] = useState("monthly");
  const [filteredData, setFilteredData] = useState<Plan[]>([
    {
      id: "410544b2-4001-4271-9855-fec4b6a6442a",
      name: "monthly",
      plus: 11.99,
      essential: 19.99,
      business: 18,
      businessPlus: 30,
    },
  ]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectValue = event.target.value;
    setValue(selectValue);
    const data = plans.filter((plan) => plan.name == selectValue);
    setFilteredData(data);
  };
  return (
    <div className="box-border w-full ">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1350px]  box-border flex flex-col items-center  w-full mx-auto py-16"
        >
          <div className="w-full box-border h-16 relative">
            <form action="">
              <FormControl className="absolute left-8">
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="monthly"
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
                    value="yearly"
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
            </form>
          </div>
          <div className="w-full box-border">
            <div
              id="plansE"
              className="grid gap-y-7  box-border md:gap-x-6 gap-x-0 px-5 md:px-8 xl:px-5  "
            >
              <div className="flex  flex-col w-full box-border rounded-xl">
                <div className="lg:min-h-8 w-full"></div>
                <div
                  className="py-6 h-full  flex flex-col gap-y-8 px-8 rounded-xl "
                  style={{ backgroundColor: "#faf9f7" }}
                >
                  <div className="flex flex-col w-full box-border gap-y-3 max-h-min">
                    <legend className="font-light text-sm text-stone-700">
                      For personal use
                    </legend>
                    <h2 className={`text-3xl font-semibold ${golos.className}`}>
                      Plus
                    </h2>
                    <span className={`text-xl font-medium ${golos.className}`}>
                      {" "}
                      <span className="text-2xl font-medium">US</span>$
                      {filteredData[0].plus}/ month
                    </span>
                  </div>
                  <div className="flex flex-col h-full gap-y-8 w-full box-border">
                    <ReadyB link={"aspect/try/essentials"} />
                    <div className="flex flex-col justify-between h-full">
                      <div className="flex flex-col  gap-y-8">
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
                          <ul className="w-full grid gap-y-3">
                            {plus.map((each) => {
                              const Icon = each.src;
                              return (
                                <li className="inline " key={each.id}>
                                  <div className="w-full flex space-x-3">
                                    <div className="shrink-0 relative">
                                      <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex  flex-col justify-center">
                                      <p className="text-sm font-normal text-stone-800 ">
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
                      <ActionBV1 text="View all features" link="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex  flex-col w-full box-border rounded-xl">
                <div className="lg:min-h-8 w-full"></div>
                <div
                  className="py-6 h-full  flex flex-col gap-y-8 px-8 rounded-xl "
                  style={{ backgroundColor: "#f7f5f2" }}
                >
                  <div className="flex flex-col w-full box-border gap-y-3 max-h-min">
                    <legend className="font-light text-sm text-stone-700">
                      For professionals
                    </legend>
                    <h2 className={`text-3xl font-semibold ${golos.className}`}>
                      Essentials
                    </h2>
                    <span className={`text-xl font-medium ${golos.className}`}>
                      {" "}
                      <span className="text-2xl font-medium">US</span>$
                      {filteredData[0].business} / user/ month
                    </span>
                  </div>
                  <div className="flex flex-col h-full gap-y-8 w-full box-border">
                    <ReadyB link={"aspect/try/essentials"} />
                    <div className="flex flex-col justify-between h-full">
                      <div className="flex flex-col  gap-y-8">
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
                          <ul className="w-full grid gap-y-3">
                            {essentials.map((essential) => {
                              const Icon = essential.src;
                              return (
                                <li className="inline " key={essential.id}>
                                  <div className="w-full flex space-x-3">
                                    <div className="shrink-0 relative">
                                      <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex  flex-col justify-center">
                                      <p className="text-sm font-normal text-stone-800 ">
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
                      <ActionBV1 text="View all features" link="" />
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
                  className="py-6 h-full  flex flex-col gap-y-8 px-8 rounded-b-xl"
                  style={{ backgroundColor: "#f2eee8" }}
                >
                  <div className="flex flex-col w-full box-border gap-y-3">
                    <legend className="font-light text-sm text-stone-700">
                      For teams
                    </legend>
                    <h2 className={`text-3xl font-semibold ${golos.className}`}>
                      Business
                    </h2>
                    <span className={`text-xl font-medium ${golos.className}`}>
                      <span className="text-2xl font-medium">US</span>$
                      {filteredData[0].essential} / month
                    </span>
                  </div>
                  <div className="flex flex-col h-full gap-y-8 w-full box-border">
                    <ReadyB link={"aspect/try/essentials"} />
                    <div className="flex flex-col justify-between h-full">
                      <div className="flex flex-col  gap-y-8">
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
                          <ul className="w-full grid gap-y-3">
                            {businesses.map((business) => {
                              const Icon = business.src;
                              return (
                                <li className="inline " key={business.id}>
                                  <div className="w-full flex space-x-3">
                                    <div className="shrink-0 relative">
                                      <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex  flex-col justify-center">
                                      <p className="text-sm font-normal text-stone-800 ">
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
                      <ActionBV1 text="View all features" link="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full box-border justify-between rounded-xl">
                <div className="lg:min-h-8 w-full"></div>
                <div
                  className="py-6  grid gap-y-8 px-8 rounded-xl"
                  style={{ backgroundColor: "#eee9e2" }}
                >
                  <div className="flex flex-col w-full box-border gap-y-3">
                    <legend className="font-light text-sm text-stone-700">
                      For companies
                    </legend>
                    <h2 className={`text-3xl font-semibold ${golos.className}`}>
                      Business plus
                    </h2>
                    <span className={`text-xl font-medium ${golos.className}`}>
                      <span className="text-2xl font-medium">US</span>$
                      {filteredData[0].businessPlus} / user / month
                    </span>
                  </div>
                  <ReadyB link={"aspect/try/essentials"} />
                  <div className="flex flex-col space-y-4 justify-between">
                    <div className="flex flex-col  gap-y-8">
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
                        <ul className="w-full grid gap-y-3">
                          {businessPlus.map((each) => {
                            const Icon = each.src;
                            return (
                              <li className="inline " key={each.id}>
                                <div className="w-full flex space-x-3">
                                  <div className="shrink-0 relative">
                                    <Icon className="w-5 h-5" />
                                  </div>
                                  <div className="flex  flex-col justify-center">
                                    <p className="text-sm font-normal text-stone-800 ">
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
                    <ActionBV1 text="View all features" link="" />
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
