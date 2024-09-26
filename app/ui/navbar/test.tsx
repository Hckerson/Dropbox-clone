"use client";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"; // You can use Heroicons for dropdown icons

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="bg-black text-white w-64 p-4">
      <ul className="space-y-2">
        {/* Products */}
        <li>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleMenu("products")}
          >
            <span>Products</span>
            {openMenu === "products" ? (
              <ChevronUpIcon className="w-4 h-4" />
            ) : (
              <ChevronDownIcon className="w-4 h-4" />
            )}
          </div>
          {openMenu === "products" && (
            <ul className="ml-4 mt-2 space-y-1">
              <li>
                <a href="#" className="hover:text-gray-400 text-white">
                  Product 1
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 text-white">
                  Product 2
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Solutions */}
        <li>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleMenu("solutions")}
          >
            <span>Solutions</span>
            {openMenu === "solutions" ? (
              <ChevronUpIcon className="w-4 h-4" />
            ) : (
              <ChevronDownIcon className="w-4 h-4" />
            )}
          </div>
          {openMenu === "solutions" && (
            <ul className="ml-4 mt-2 space-y-1">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Solution 1
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Solution 2
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Enterprise */}
        <li>
          <a href="#" className="block hover:text-gray-400">
            Enterprise
          </a>
        </li>

        {/* Pricing */}
        <li>
          <a href="#" className="block hover:text-gray-400">
            Pricing
          </a>
        </li>

        {/* Contact Sales */}
        <li>
          <a href="#" className="block hover:text-gray-400">
            Contact Sales
          </a>
        </li>

        {/* Get App */}
        <li>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleMenu("getApp")}
          >
            <span>Get App</span>
            {openMenu === "getApp" ? (
              <ChevronUpIcon className="w-4 h-4" />
            ) : (
              <ChevronDownIcon className="w-4 h-4" />
            )}
          </div>
          {openMenu === "getApp" && (
            <ul className="ml-4 mt-2 space-y-1">
              <li>
                <a href="#" className="hover:text-gray-400">
                  iOS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Android
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
