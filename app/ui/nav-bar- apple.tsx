import { Navlinks } from "./nav-link";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <div className="bg-neutral-200">
      <nav className=" flex justify-center ">
        <div className="mx-auto  px-2 sm:px-5 lg:px-6">
          <div className="relative flex h-12 items-center justify-between ">
            <div className="flex flex-1 items-center justify-start gap-3 ">
              <MinusCircleIcon className="size-5 fill-black" />
              <Navlinks />
              <MagnifyingGlassIcon className="size-4 " />
              <ShoppingBagIcon className="size-4 ml-2" />
            </div>
          </div>
        </div>
        <div className="hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white "
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white "
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
