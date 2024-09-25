'use client';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import clsx from "clsx";
import Link from "next/link";

const lLink = [
  { name: "Products", href: "/products", icon: ChevronDownIcon },
  { name: "Solution", href: "/solution", icon: ChevronDownIcon },
  { name: "Enterprise", href: "/enterprise" },
  { name: "Pricing", href: "/pricing" },
];

const rLink = [
  { name: "Contact sales", href: "/contact_sales" },
  { name: "Get app", href: "/get_app", icon: ChevronDownIcon },
  { name: "Sign up", href: "/sign_up" },
  { name: "Log in", href: "/log_in" },
];

export function Leftlink() {
  return (
    <>
      {lLink.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link key={link.name} href={link.href} className={clsx('px-3 py-3 font-medium text-white hover:text-blue-400 flex space-x-1')}>
            <p>{link.name}</p>
            {LinkIcon && <LinkIcon className="w-4" />} 
          </Link>
        )
      })}
    </>
  );
}

export function Rightlink() {
  return (
    <>
      {rLink.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link key={link.name} href={link.href} className={clsx('px-2 py-3 font-normal text-white hover:text-blue-400 flex space-x-1')}>
            <p>{link.name}</p>
            {LinkIcon && <LinkIcon className="w-4" />} 
          </Link>
        )
      })}
    </>
  );
}