"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { L, R } from "./links";

export function Leftlink() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeout = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (linkName: string) => {
    if (timeout.current) clearTimeout(timeout.current);
    setActiveDropdown(linkName); // Show dropdown on hover

    if(['Products', 'Solutions'].includes(linkName)){
      const item = document.getElementById('blur')
      if (item){
        item.style.inset  = '0'
      }
    }
  };

  const handleMouseLeave = (linkName: string) => {
    if (activeDropdown === linkName) {
        timeout.current = setTimeout(() => {
        setActiveDropdown(null); // Hide dropdown
      }, 200); // Hide dropdown if not hovering on the dropdown
    }
    const item = document.getElementById('blur')
    if (item){
      item.style.inset  = ''
    }
  };

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current );
      setActiveDropdown(null);
    };
  }, [timeout]);
  return (
    <>
      {L.map((link) => {
        const LinkIcon = link.icon;
        const DropdownComponent = link.dropdown;
        return (
          <div
            key={link.name}
            onPointerEnter={() => handleMouseEnter(link.name)}
            onPointerLeave={() => handleMouseLeave(link.name)}
            className="relative group h-full box-border"
          >
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "px-3 py-3 h-full focus:outline-none  focus:ring-offset-0 items-center font-semibold transition-colors text-sm  ease-in-out hidden  xl:flex space-x-1  ", activeDropdown === link.name ? 'text-blue-600' : ''
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

export function Blur() {
  return (
    <div
      className=" fixed z-10 bg-black bg-opacity-30"
      style={{ filter: "blur(50%)" }}
      id="blur"
    ></div>
  );
}

export function Rightlink() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (linkName: string) => {
    setActiveDropdown(linkName); // Show dropdown on hover
    if(['Get app'].includes(linkName)){
      const item = document.getElementById('blur')
      if (item){
        item.style.inset  = '0'
      }
    }
  };

  const handleMouseLeave = (linkName: string) => {
    if (activeDropdown === linkName) {
      setActiveDropdown(null); // Hide dropdown if not hovering on the dropdown
    }
    const item = document.getElementById('blur')
    if (item){
      item.style.inset  = ''
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
      {R.map((link, index) => {
        const LinkIcon = link.icon;
        const DropdownComponent = link.dropdown;
        const hide = index === 0 || index === 1 ? "xl:flex hidden" : null;
        return (
          <div
            key={link.name}
            onPointerEnter={() => handleMouseEnter(link.name)}
            onPointerLeave={() => handleMouseLeave(link.name)}
            className="relative group h-full box-border"
          >
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "px-2 py-3 font-light h-full focus:outline-none text-sm xs:text-base  focus:ring-offset-0 items-center  transition-colors ease-in-out  flex space-x-1 ", 
                hide, activeDropdown === link.name ? 'text-blue-500' : ''
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