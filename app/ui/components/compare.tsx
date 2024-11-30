"use client";
import { useState } from "react";
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectValue = event.target.value;
    setValue(selectValue);
    const data = plans.filter((plan) => plan.name == selectValue);
    setFilteredData(data);
  };
  return (
    <div className="mt-10 flow-root">
      <div className="w-full box-border h-16 relative  flex">
        <form action="">
          <FormControl className="translate-x-3">
            <RadioGroup
              row={window.innerWidth >= 768}
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
        <div className="flex box-border mb-[22px]">
          <select
            id="1"
            name="option1"
            className="peer block w-full cursor-pointer border border-gray-200 py-2 pl-10 text-sm    placeholder:text-gray-500"
            defaultValue=""
            aria-describedby="customer-error"
          >
            <option value="" >
              Plus
            </option>
            <option value="" >
              Essential
            </option>
            <option value="" >
              Business
            </option>
            <option value="" >
              Business Plus
            </option>
          </select>
          <select
            id="1"
            name="option1"
            className="peer block w-full cursor-pointer border border-gray-200 py-2 pl-10 text-sm    placeholder:text-gray-500"
            defaultValue=""
            aria-describedby="customer-error"
          >
            <option value="" >
              Plus
            </option>
            <option value="" >
              Essential
            </option>
            <option value="" >
              Business
            </option>
            <option value="" >
              Business Plus
            </option>
          </select>
                    <select
            id="1"
            name="option1"
            className="peer block w-full cursor-pointer border border-gray-200 py-2 pl-10 text-sm    placeholder:text-gray-500"
            defaultValue=""
            aria-describedby="customer-error"
          >
            <option value="" >
              Plus
            </option>
            <option value="" >
              Essential
            </option>
            <option value="" >
              Business
            </option>
            <option value="" >
              Business Plus
            </option>
          </select>
          
        </div>
      </div>
      <div className="inline-block min-w-full align-middle">
        <table className="hidden md:table border w-full">
          <thead className="text-left w-full  text-sm font-normal">
            <tr className="sticky top-40">
              <th
                scope="col"
                className="px-6 pb-5 font-medium  w-[20%] border sticky top-40 "
              ></th>
              <th
                scope="col"
                className="px-6  pb-5 font-medium w-[20%] border bg-[#faf9f7] sticky top-40"
              >
                <div className="flex flex-col w-full  -translate-y-6 relative space-y-6 box-border">
                  <div className="relative h-[70px] p-0 w-full ">
                    <p className="text-black text-3xl font-semibold absolute bottom-0 left-0">
                      Plus
                    </p>
                  </div>
                  <span>${filteredData[0].plus}/ month</span>
                  <div className="grid gap-y-5 text-black text-lg font-medium">
                    <div className="flex flex-col justify-between text-white">
                      <ActionBV2 link="" text="Buy now" />
                    </div>
                  </div>
                </div>
              </th>
              <th
                scope="col"
                className="px-6  pb-5 font-medium w-[20%] border bg-[#f7f5f2]"
              >
                <div className="flex flex-col w-full space-y-6 box-border">
                  <div className="relative h-[70px] p-0 w-full ">
                    <p className="text-black text-3xl font-semibold absolute bottom-0 left-0">
                      Essentials
                    </p>
                  </div>
                  <span>${filteredData[0].essential}/ month</span>
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
                className="px-6  pb-5 font-medium w-[20%] border bg-[#f2eee8]"
              >
                <div className="flex flex-col w-full space-y-6 box-border">
                  <div className="relative h-[70px] p-0 w-full ">
                    <p className="text-black text-3xl font-semibold absolute bottom-0 left-0">
                      Business
                    </p>
                  </div>
                  <span>${filteredData[0].business}/user/ month</span>
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
                className="px-6  pb-5 font-medium w-[20%] border bg-[#eee9e2]"
              >
                <div className="flex flex-col w-full space-y-6 box-border">
                  <div className="relative h-[70px] p-0 w-full ">
                    <p className="text-black text-3xl font-semibold absolute bottom-0 left-0">
                      Business plus
                    </p>
                  </div>
                  <span>${filteredData[0].businessPlus}/user/ month</span>
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
            <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
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
