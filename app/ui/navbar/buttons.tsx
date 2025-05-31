"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Menu from "./menu";
import Whitemenu from "./menu 2.0";
export function GetStarted() {
  return (
    <div>
      <Link
        href="/en_GB/plans"
        className=" rounded-xl px-4 py-3 text-black  bg-white w-full font-semibold "
      >
        Get Started
      </Link>
    </div>
  );
}

export function Started() {
  return (
    <div>
      <Link
        href="/en_GB/plans"
        className=" rounded-xl px-4 py-3  bg-blue-600 w-full font-semibold "
      >
        Get Started
      </Link>
    </div>
  );
}

export function Mainmenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="mr-3 sm:mr-0">
      {!menuOpen && (
        <Bars3Icon
          className=" h-6 xl:hidden cursor-pointer "
          onClick={handleMenuToggle}
        />
      )}
      {menuOpen && (
        <XMarkIcon
          className=" h-6 xl:hidden cursor-pointer"
          onClick={handleMenuToggle}
        />
      )}
      {menuOpen && <Menu />}
    </div>
  );
}

export function Replmenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="mr-3 sm:mr-0">
      {!menuOpen && (
        <Bars3Icon
          className=" h-6 xl:hidden cursor-pointer "
          onClick={handleMenuToggle}
        />
      )}
      {menuOpen && (
        <XMarkIcon
          className=" h-6 xl:hidden cursor-pointer"
          onClick={handleMenuToggle}
        />
      )}
      {menuOpen && <Whitemenu />}
    </div>
  );
}

export function Menue() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="mr-2 ">
      {!menuOpen && (
        <Bars3Icon
          className=" h-6 xl:hidden cursor-pointer "
          onClick={handleMenuToggle}
        />
      )}
      {menuOpen && (
        <XMarkIcon
          className=" h-6 xl:hidden cursor-pointer"
          onClick={handleMenuToggle}
        />
      )}
      {menuOpen && <Whitemenu />}
    </div>
  );
}
