/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  productLInkL,
  productLInkR,
  team,
  industries,
  useCase,
  app,
} from "./links";
export function PDD() {
  return (
    <div className="bg-black inset-x-0 fixed border-t border-white border-opacity-20">
      <div className="pl-[194px] ">
        <div className="py-1  bg-black">
          <div className="flex  space-x-8 ">
            <div className=" flex flex-col space-y-3 py-3">
              {productLInkL.map((each) => {
                return (
                  <li className="inline" key={each.label} >
                    <Link
                      href={each.href}
                      className="hover:text-blue-500 text-neutral-200 transition-colors "
                    >
                      <div className="w-full flex space-x-5 p-4 rounded-lg hover:bg-stone-900">
                        <div className="shrink-0">
                          <img src={each.src} className="size-8" alt="image" />
                        </div>
                        <div className="flex  flex-col">
                          <p className="text-base font-semibold">
                            {each.label}
                          </p>
                          <p className="text-sm text-stone-400">{each.body}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </div>
            <div className="flex flex-col space-y-3 py-3">
              {productLInkR.map((each) => {
                return (
                  <li className="inline" key={each.label}>
                    <Link
                      href={each.href}
                      className="hover:text-blue-500 text-neutral-200 transition-colors "
                    >
                      <div className="w-full flex space-x-5 p-4 rounded-lg hover:bg-stone-900">
                        <div className="shrink-0">
                          <img src={each.src} className="size-8" alt="image" />
                        </div>
                        <div className="flex  flex-col">
                          <p className="text-base font-semibold">
                            {each.label}
                          </p>
                          <p className="text-sm text-stone-400">{each.body}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SDD() {
  return (
    <div className="bg-black inset-x-0 fixed border-t border-white border-opacity-20">
      <div className="pl-[301px] bg-black py-3">
        <div className=" flex  space-x-3">
          <div className="flex flex-col  w-52 ">
            <legend className="text-base pl-2 text-stone-400">Team</legend>
            {team.map((each) => {
              return (
                <li className="inline" key={each.label}>
                  <Link href={each.href} key={each.label}>
                    <p className="p-2  w-full hover:bg-stone-900 transition-colors rounded-lg text-neutral-200">
                      {each.label}
                    </p>
                  </Link>
                </li>
              );
            })}
          </div>
          <div className="flex flex-col  w-52 ">
            <legend className="text-base pl-2 text-stone-400">Industries</legend>
            {industries.map((each) => {
              return (
                <li className="inline" key={each.label}>
                  <Link
                    href={each.href}
                    className=" text-neutral-200 transition-colors "
                  >
                    <p className="p-2  w-full hover:bg-stone-900 rounded-lg">
                      {each.label}
                    </p>
                  </Link>
                </li>
              );
            })}
          </div>
          <div className=" flex flex-col  w-52 ">
            <legend className="text-base pl-2 text-stone-400">Use cases</legend>
            {useCase.map((each) => {
              return (
                <li className="inline" key={each.label}>
                  <Link
                    href={each.href}
                    className=" text-neutral-200 transition-colors "
                  >
                    <p className="p-2  w-full hover:bg-stone-900 rounded-lg">
                      {each.label}
                    </p>
                  </Link>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function GDD() {
  return (
    <div className="bg-black inset-x-0 fixed border-t border-white border-opacity-20">
      <div className="pl-[1133px]">
        <ul className="py-4 ">
          <div className=" flex flex-col space-y-4 w-52">
            {app.map((each) => {
              return (
                <li className="" key={each.label}>
                  <Link
                    href={each.href}
                    className=" text-neutral-200 transition-colors "
                  >
                    <p className="p-2  w-full hover:bg-stone-900 rounded-lg">
                      {each.label}
                    </p>
                  </Link>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
}