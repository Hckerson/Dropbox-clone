"use client";
import { useState, useEffect } from "react";
import { plans } from "@/app/lib/placeholder-data";
import { Plan } from "@/app/lib/definitions";
import { ActionBV2, ActionBV1 } from "./get-started";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";

export default function Compare() {
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
  const [isRow, setIsRow] = useState(false);

  useEffect(() => {
    const handleChange = () => setIsRow(window.innerWidth >= 768);
    handleChange();

    window.addEventListener("resize", handleChange);
    return () => window.removeEventListener("resize", handleChange);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectValue = event.target.value;
    setValue(selectValue);
    const data = plans.filter((plan) => plan.name == selectValue);
    setFilteredData(data);
  };
  return (
    <div className="mt-10 flow-root">
      <div className="w-full box- h-16 relative  flex">
        <form action="">
          <FormControl className="translate-x-3">
            <RadioGroup
              row={isRow}
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
        <div className="flex xl:hidden w-full box- mb-[22px]">
          <select
            id="1"
            name="option1"
            className="peer block w-full  text-lg font-normal c cursor-pointer  -gray-200 py-2 pl-10   placeholder:text-gray-500"
            defaultValue=""
            aria-describedby="customer-error"
          >
            <option className="font-normal text-lg" value="">
              Plus
            </option>
            <option className="font-normal text-lg" value="">
              Essential
            </option>
            <option className="font-normal text-lg" value="">
              Business
            </option>
            <option className="font-normal text-lg" value="">
              Business Plus
            </option>
          </select>
          <select
            id="1"
            name="option1"
            className="peer block text-lg font-normal w-full cursor-pointer  -gray-200 py-2 pl-10  placeholder:text-gray-500"
            defaultValue=""
            aria-describedby="customer-error"
          >
            <option className="font-normal text-lg" value="">
              Plus
            </option>
            <option className="font-normal text-lg" value="">
              Essential
            </option>
            <option className="font-normal text-lg" value="">
              Business
            </option>
            <option className="font-normal text-lg" value="">
              Business Plus
            </option>
          </select>
          <select
            id="1"
            name="option1"
            className="peer block text-lg font-normal w-full cursor-pointer  -gray-200 py-2 pl-10  placeholder:text-gray-500"
            defaultValue=""
            aria-describedby="customer-error"
          >
            <option className="font-normal text-lg" value="">
              Plus
            </option>
            <option className="font-normal text-lg" value="">
              Essential
            </option>
            <option className="font-normal text-lg" value="">
              Business
            </option>
            <option className="font-normal text-lg" value="">
              Business Plus
            </option>
          </select>
        </div>
      </div>
      <div className="inline-block min-w-full align-middle">
        <table className="hidden md:table  w-full">
          <thead className="text-left w-full  text-sm font-normal sticky top-20">
            <tr className="">
              <th
                scope="col"
                className="px-6 pb-5 font-medium  w-[20%]  "
              ></th>
              <th
                scope="col"
                className="px-6  pb-5 font-medium w-[20%]  bg-[#faf9f7] "
              >
                <div className="flex flex-col w-full  -translate-y-6 relative space-y-6 box-">
                  <div className="relative h-[70px] p-0 w-full ">
                    <p className="text-black text-2xl font-medium absolute bottom-0 left-0">
                      Plus
                    </p>
                  </div>
                  <span className="text-base font-medium">
                    US${filteredData[0].plus}/ month
                  </span>
                  <div className="grid gap-y-5 text-black text-lg font-medium">
                    <div className="flex flex-col justify-between text-white">
                      <ActionBV2 link="" text="Buy now" />
                    </div>
                  </div>
                </div>
              </th>
              <th
                scope="col"
                className="px-6  pb-5 font-medium w-[20%]  bg-[#f7f5f2]"
              >
                <div className="flex flex-col w-full space-y-6 box-">
                  <div className="relative h-[70px] p-0 w-full ">
                    <p className="text-black text-2xl font-medium absolute bottom-0 left-0">
                      Essentials
                    </p>
                  </div>
                  <span className="text-base font-medium">
                    US${filteredData[0].essential}/ month
                  </span>
                  <div className="grid gap-y-5 text-black text-lg font-medium">
                    <div className="flex flex-col justify-between text-white">
                      <ActionBV2 link="" text="Buy now" />
                    </div>
                    <ActionBV1 link="" text="or buy now" />
                  </div>
                </div>
              </th>
              <th
                scope="col"
                className="px-6  pb-5 font-medium w-[20%]  bg-[#f2eee8]"
              >
                <div className="flex flex-col w-full space-y-6 box-">
                  <div className="relative h-[70px] p-0 w-full ">
                    <div className="absolute top-2   right-0">
                      <div className="rounded-2xl bg-[#b4dc19] py-1  pr-2">
                        <span
                          className="inline-flex align-middle"
                          data-testid="alignable-container_banner-dwg-icon"
                        >
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
                              d="M19.25 16c-1.21 0-1.75-.54-1.75-1.75v-.75H16v.75c0 1.21-.54 1.75-1.75 1.75h-.75v1.5h.75c1.21 0 1.75.54 1.75 1.75V20h1.5v-.75c0-1.21.54-1.75 1.75-1.75H20V16h-.75ZM16.5 9.5C12.8 9.5 11 7.7 11 4H9.5c0 3.7-1.8 5.5-5.5 5.5V11c3.7 0 5.5 1.8 5.5 5.5H11c0-3.7 1.8-5.5 5.5-5.5V9.5Zm-6.25 3.3a5.421 5.421 0 0 0-2.55-2.55 5.422 5.422 0 0 0 2.55-2.55 5.421 5.421 0 0 0 2.55 2.55 5.421 5.421 0 0 0-2.55 2.55Z"
                              fill="currentColor"
                              vectorEffect="non-scaling-stroke"
                            ></path>
                          </svg>
                        </span>
                        <span className="text-xs">Best value</span>
                      </div>
                    </div>

                    <p className="text-black text-2xl font-medium absolute bottom-0 left-0">
                      Business
                    </p>
                  </div>
                  <span className="text-base font-medium">
                    US${filteredData[0].business}/user/ month
                  </span>
                  <div className="grid gap-y-5 text-black text-lg font-medium">
                    <div className="flex flex-col justify-between text-white">
                      <ActionBV2 link="" text="Buy now" />
                    </div>
                    <ActionBV1 link="" text="or buy now" />
                  </div>
                </div>
              </th>
              <th
                scope="col"
                className="px-6  pb-5 font-medium w-[20%]  bg-[#eee9e2]"
              >
                <div className="flex flex-col w-full space-y-6 box-">
                  <div className="relative h-[70px] p-0 w-full ">
                    <p className="text-black text-2xl font-medium absolute bottom-0 left-0">
                      Business plus
                    </p>
                  </div>
                  <span className="text-base font-medium">
                    US${filteredData[0].businessPlus}/user/ month
                  </span>
                  <div className="grid gap-y-5 text-black text-lg font-medium">
                    <div className="flex flex-col justify-between text-white">
                      <ActionBV2 link="" text="Buy now" />
                    </div>
                    <ActionBV1 link="" text="or buy now" />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="w-full -b py-3 text-sm last-of-type:-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
              <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex items-center gap-3">
                  <p></p>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-3"></td>
              <td className="whitespace-nowrap px-3 py-3"></td>
              <td className="whitespace-nowrap px-3 py-3"></td>
              <td className="whitespace-nowrap px-3 py-3"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
