"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState, useEffect } from "react";
import { lLink, rLink } from "./links";

export function Leftlink() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (linkName: string) => {
    setActiveDropdown(linkName); // Show dropdown on hover
  };

  const handleMouseLeave = (linkName: string) => {
    if (activeDropdown === linkName) {
      setActiveDropdown(null); // Hide dropdown if not hovering on the dropdown
    }
  };

  useEffect(() => {
    // Reset the hover effect when the component unmounts
    return () => {
      setActiveDropdown(null);
    };
  }, []); 
  return (
    <>
      {lLink.map((link) => {
        const LinkIcon = link.icon;
        const DropdownComponent = link.dropdown;
        return (
          <div
            key={link.name}
            onMouseEnter={() => handleMouseEnter(link.name)}
            onMouseLeave={() => handleMouseLeave(link.name)}
            className="relative group h-full box-border"
          >
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "px-3 py-3 h-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 items-center font-medium transition-colors  ease-in-out hidden  xl:flex space-x-1  ", activeDropdown === link.name ? 'text-blue-500' : 'text-white'
              )}
            >
              <div className="flex items-center h-10">
                {link.name}
                {LinkIcon && (
                  <LinkIcon className="w-4 transition group-hover:translate-y-1 " />
                )}
              </div>
            </Link>
            {DropdownComponent && activeDropdown === link.name && (
              <div
                className={clsx(
                  "absolute overflow-hidden transition-all duration-1000 ease-in-out",
                  activeDropdown === link.name ? "max-h-[500px] " : "max-h-0 "
                )}
                style={{
                  transitionProperty: "max-height",
                }}
              >
                <DropdownComponent />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export function Rightlink() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (linkName: string) => {
    setActiveDropdown(linkName); // Show dropdown on hover
  };

  const handleMouseLeave = (linkName: string) => {
    if (activeDropdown === linkName) {
      setActiveDropdown(null); // Hide dropdown if not hovering on the dropdown
    }
  };

  useEffect(() => {
    // Reset the hover effect when the component unmounts
    return () => {
      setActiveDropdown(null);
    };
  }, []); 
  return (
    <>
      {rLink.map((link, index) => {
        const LinkIcon = link.icon;
        const DropdownComponent = link.dropdown;
        const hide = index === 0 || index === 1 ? "xl:flex hidden" : null;
        return (
          <div
            key={link.name}
            onMouseEnter={() => handleMouseEnter(link.name)}
            onMouseLeave={() => handleMouseLeave(link.name)}
            className="relative group h-full box-border"
          >
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "px-2 py-3 font-normal h-full focus:outline-none focus:ring-2 text-sm xs:text-base focus:ring-blue-500 focus:ring-offset-0 items-center  transition-colors ease-in-out  flex space-x-1 ", 
                hide, activeDropdown === link.name ? 'text-blue-500' : 'text-white'
              )}
            >
              <div className="flex items-center h-10">
                {link.name}
                {LinkIcon && (
                  <LinkIcon className="w-4 transition group-hover:translate-y-1 " />
                )}
              </div>
            </Link>
            {DropdownComponent && activeDropdown === link.name && (
              <div
              className={clsx(
                "absolute overflow-hidden transition-all duration-1000 ease-in-out",
                activeDropdown === link.name ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              )}
              style={{
                transitionProperty: "max-height, opacity",
              }}
            >
              <DropdownComponent />
            </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export function MobileNav() {
  return <></>;
}
