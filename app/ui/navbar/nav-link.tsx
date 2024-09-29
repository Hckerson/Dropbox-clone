'use client';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import clsx from "clsx";
import Link from "next/link";

const lLink = [
  { name: "Products", href: "/nav/products", icon: ChevronDownIcon },
  { name: "Solution", href: "/nav/solution", icon: ChevronDownIcon },
  { name: "Enterprise", href: "/nav/enterprise" },
  { name: "Pricing", href: "/nav/pricing" },
];

const rLink = [
  { name: "Contact sales", href: "/nav/contact_sales" },
  { name: "Get app", href: "/nav/get_app", icon: ChevronDownIcon },
  { name: "Sign up", href: "/nav/sign_up" },
  { name: "Log in", href: "/nav/log_in" },
];

export function Leftlink() {
  return (
    <>
      {lLink.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link key={link.name} href={link.href} className={clsx('px-3 py-3 h-full items-center font-medium text-white hover:text-blue-500 transition-colors  ease-in-out hidden  xl:flex space-x-1 group ')}>
            <div className='flex items-center h-10'>
              {link.name}
              {LinkIcon && <LinkIcon className="w-4 transition group-hover:translate-y-1 " />} 
            </div>
          </Link>
        )
      })}
    </>
  );
}

export function Rightlink() {  
  return (
    <>
      {rLink.map((link, index) => {
        const LinkIcon = link.icon;
        const hide = index === 0 || index ===1 ? 'xl:flex hidden' : null;
        return (
          <Link key={link.name} href={link.href} className={clsx('px-2 py-3 font-normal h-full items-center text-white hover:text-blue-500 transition-colors ease-in-out  flex space-x-1 group', hide)}>
            <div className='flex items-center h-10'>
              {link.name}
              {LinkIcon && <LinkIcon className="w-4 transition group-hover:translate-y-1 " />} 
            </div>
          </Link>
        )
      })}
    </>
  );
}

export function MobileNav(){
  return(
    <>
    
    </>
  )
}