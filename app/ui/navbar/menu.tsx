"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
export default function Menu(){
  const [openMenu, setMenuOpen] = useState<string | null>(null);
  const toggleMenu = (menu : string) =>{
    setMenuOpen(openMenu === menu ? null : menu)
  }
  return (
    <div className="fixed inset-0 mt-[95px] bg-black bg-opacity-90  z-50  justify-center">
      <div className="py-10 w-full">
        <ul className="space-y-2">
          <li>
            <div className="cursor-pointer flex space-x-2 items-center" onClick={()=> toggleMenu('products')}>
              <span className="text-white text-2xl font-medium pl-10">Products</span>
              {openMenu === 'products' ? <ChevronDownIcon className="w-4 h-4 text-white"/> : <ChevronUpIcon className="w-4 h-4 text-white"/>}
            </div>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${ openMenu === 'products' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="mt-2 space-y-1 inset-x-0 bg- p-10 bg-stone-900 flex justify-between space-x-3">
                <div className="w-1/2">
                  <li className="">
                    <Link href="#" className="hover:text-gray-400 text-white">
                      Product 1
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-gray-400 text-white">
                      Product 2
                    </Link>
                  </li>
                </div>
                <div className="w-1/2">
                  <li className="">
                    <Link href="#" className="hover:text-gray-400 text-white">
                      Product 3
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-gray-400 text-white">
                      Product 4
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
            
          </li>
        </ul>
      </div>
    </div>
  );
}


