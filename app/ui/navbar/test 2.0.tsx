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
export function PDDs() {
  return (
    <div className="bg-white inset-x-0 fixed border-t z-50 border-opacity-20">
      <div className="pl-[194px] ">
        <div className="py-1  bg-white">
          <div className="flex  space-x-8 ">
            <div className=" flex flex-col py-3">
              {productLInkL.map((each) => {
                return (
                  <li className="inline w-60" key={each.label}>
                    <Link
                      href={each.href}
                      className="hover:text-blue-500 text-black transition-colors "
                    >
                      <div className="w-full flex space-x-5 p-4 rounded-xl hover:bg-stone-200">
                        <div className="shrink-0">
                          <img src={each.src} className="size-8" alt="image" />
                        </div>
                        <div className="flex  flex-col">
                          <p className="text-base font-semibold">
                            {each.label}
                          </p>
                          <p className="text-xs text-stone-500">{each.body}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </div>
            <div className="flex flex-col  py-3">
              {productLInkR.map((each) => {
                return (
                  <li className="inline w-60" key={each.label}>
                    <Link
                      href={each.href}
                      className="hover:text-blue-500 text-black transition-colors "
                    >
                      <div className="w-full flex space-x-5 p-4 rounded-xl hover:bg-stone-200">
                        <div className="shrink-0">
                          <img
                            src={each.src}
                            className="size-8 bg-white rounded-md"
                            alt="image"
                          />
                        </div>
                        <div className="flex  flex-col">
                          <p className="text-base font-semibold">
                            {each.label}
                          </p>
                          <p className="text-xs text-stone-500">{each.body}</p>
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

export function SDDs() {
  return (
    <div className="bg-white inset-x-0 fixed border-t  border-opacity-20">
      <div className="pl-[301px] bg-white py-3">
        <div className=" flex  space-x-3">
          <div className="flex flex-col  w-60 ">
            <legend className="text-sm font-semibold pl-3 pb-3 text-stone-500">
              Teams
            </legend>
            {team.map((each) => {
              return (
                <li className="inline" key={each.label}>
                  <Link
                    href={each.href}
                    className=" text-black transition-colors "
                  >
                    <p className="py-2 px-3 font-light text-lg  w-full hover:bg-stone-200 rounded-xl ">
                      {each.label}
                    </p>
                  </Link>
                </li>
              );
            })}
          </div>
          <div className=" flex flex-col  w-60 ">
            <legend className="text-sm font-semibold pl-3 pb-3 text-stone-500">
              Use cases
            </legend>
            {useCase.map((each) => {
              return (
                <li className="inline" key={each.label}>
                  <Link
                    href={each.href}
                    className=" text-black transition-colors "
                  >
                    <p className="py-2 px-3 font-light text-lg  w-full hover:bg-stone-200 rounded-xl">
                      {each.label}
                    </p>
                  </Link>
                </li>
              );
            })}
          </div>
          <div className="flex flex-col  w-60 ">
            <legend className="text-sm font-semibold pl-3 pb-3 text-stone-500">
              Industries
            </legend>
            {industries.map((each) => {
              return (
                <li className="inline" key={each.label}>
                  <Link
                    href={each.href}
                    className=" text-black transition-colors "
                  >
                    <p className="py-2 px-3 font-light text-lg  w-full hover:bg-stone-200 rounded-xl">
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

export function GDDs() {
  return (
    <div className="bg-white inset-x-0 fixed border-t  border-opacity-20">
      <div className="pl-[1133px]">
        <ul className="py-4 ">
          <div className=" flex flex-col space-y-4 w-52">
            {app.map((each) => {
              return (
                <li className="" key={each.label}>
                  <Link
                    href={each.href}
                    className=" text-black transition-colors "
                  >
                    <p className="p-2 text-lg font-light  w-full hover:bg-stone-200 rounded-lg">
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
