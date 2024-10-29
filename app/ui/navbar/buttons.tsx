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
        href="/nav/plans"
        className=" rounded-xl w-full font-semibold "
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
    <div style={{marginRight : 10}}>
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
    <div style={{marginRight : 10}}>
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