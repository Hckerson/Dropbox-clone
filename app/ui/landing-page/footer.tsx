import {
  dropbox,
  products,
  features,
  supports,
  resources,
  company,
  subLink
} from "../navbar/links";
import { GlobeAltIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="w-full box-border">
      <div
        style={{ backgroundColor: "#000" }}
        className="flex flex-col items-center pt-24  relative box-border"
      >
        <div className="flex flex-col w-full gap-y-10 items-start box-border xl:max-w-[1344px]">
          <div className=" flex flex-grow w-full flex-col items-start box-border px-6">
            <div className="grid w-full gap-y-6 lg:gap-y-0" id="foot">
              <div className="flex flex-col">
                <legend className=" pl-2 text-stone-200 text-lg font-semibold mb-6">
                  Dropbox
                </legend>
                {dropbox.map((each) => {
                  return (
                    <li className="inline" key={each.label}>
                      <Link href={each.href}>
                        <p className="p-2  w-full  transition-colors rounded-lg text-stone-200 text-sm font-light tracking-tight">
                          {each.label}
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </div>
              <div className="flex flex-col  ">
                <legend className=" pl-2 text-stone-200 text-lg font-semibold mb-6">
                  Products
                </legend>
                {products.map((each) => {
                  return (
                    <li className="inline" key={each.label}>
                      <Link href={each.href}>
                        <p className="p-2  w-full  transition-colors rounded-lg text-stone-200 text-sm font-light tracking-tight">
                          {each.label}
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </div>
              <div className="flex flex-col  ">
                <legend className=" pl-2 text-stone-200 text-lg font-semibold mb-6">
                  Features
                </legend>
                {features.map((each) => {
                  return (
                    <li className="inline" key={each.label}>
                      <Link href={each.href}>
                        <p className="p-2  w-full  transition-colors rounded-lg text-stone-200 text-sm font-light tracking-tight">
                          {each.label}
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </div>
              <div className="flex flex-col  ">
                <legend className=" pl-2 text-stone-200 text-lg font-semibold mb-6">
                  Support
                </legend>
                {supports.map((each) => {
                  return (
                    <li className="inline" key={each.label}>
                      <Link href={each.href}>
                        <p className="p-2  w-full  transition-colors rounded-lg text-stone-200 text-sm font-light tracking-tight">
                          {each.label}
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </div>
              <div className="flex flex-col  ">
                <legend className=" pl-2 text-stone-200 text-lg font-semibold mb-6">
                  Resources
                </legend>
                {resources.map((each) => {
                  return (
                    <li className="inline" key={each.label}>
                      <Link href={each.href}>
                        <p className="p-2  w-full  transition-colors rounded-lg text-stone-200 text-sm font-light tracking-tight">
                          {each.label}
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </div>
              <div className="flex flex-col  ">
                <legend className=" pl-2 text-stone-200 text-lg font-semibold mb-6">
                  Company
                </legend>
                {company.map((each) => {
                  return (
                    <li className="inline" key={each.label}>
                      <Link href={each.href}>
                        <p className="p-2  w-full  transition-colors rounded-lg text-stone-200 text-sm font-light tracking-tight">
                          {each.label}
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </div>
            </div>
            <div className=" flex mt-10  space-x-3">
              <div className="dwg-footer-plank__social-item dwg-box dwg-display--inline-block dwg-mr--1_5">
                <Link
                  className="dwg-icon-button dwg-icon-button--hoverActiveFilter dwg-box dwg-display--inline-flex dwg-aspect-ratio dwg-m--0 dwg-bg-color--transparent dwg-color--standard"
                  href="https://twitter.com/Dropbox"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Twitter"
                  data-uxa-log="warp_footer_social_media_twitter"
                  data-trackingid="warp_footer_social_media_twitter"
                >
                  <span className="dwg-lazy-icon--large dwg-box dwg-display--inline-block">
                    <svg
                      viewBox="0 0 24 24"
                      fill="white"
                      className="inline-flex"
                      width="32"
                      height="32"
                      role="presentation"
                      focusable="false"
                    >
                      <path
                        d="M13.485 10.775 19.314 4h-1.381l-5.061 5.883L8.83 4H4.168l6.112 8.896L4.168 20h1.381l5.344-6.212L15.162 20h4.662l-6.339-9.225Zm-1.891 2.199-.62-.886L6.047 5.04h2.121l3.977 5.688.62.886 5.168 7.394h-2.121l-4.218-6.034Z"
                        fill="white"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </div>
              <div className="dwg-footer-plank__social-item dwg-box dwg-display--inline-block dwg-mr--1_5">
                <Link
                  className="dwg-icon-button dwg-icon-button--hoverActiveFilter dwg-box dwg-display--inline-flex dwg-aspect-ratio dwg-m--0 dwg-bg-color--transparent dwg-color--standard"
                  href="https://www.facebook.com/Dropbox/"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Facebook"
                  data-uxa-log="warp_footer_social_media_facebook"
                  data-trackingid="warp_footer_social_media_facebook"
                >
                  <span className="dwg-lazy-icon--large dwg-box dwg-display--inline-block">
                    <svg
                      viewBox="0 0 24 24"
                      fill="white"
                      className="inline-flex"
                      width="32"
                      height="32"
                      role="presentation"
                      focusable="false"
                    >
                      <path
                        d="M20 12a8 8 0 0 0-8-8 8.001 8.001 0 0 0-1.25 15.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.009c-.994 0-1.303.617-1.303 1.25V12h2.219l-.355 2.313H13.25v5.59A8.001 8.001 0 0 0 20 12Z"
                        fill="white"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </div>
              <div className="dwg-footer-plank__social-item dwg-box dwg-display--inline-block dwg-mr--1_5">
                <Link
                  className="dwg-icon-button dwg-icon-button--hoverActiveFilter dwg-box dwg-display--inline-flex dwg-aspect-ratio dwg-m--0 dwg-bg-color--transparent dwg-color--standard"
                  href="https://www.youtube.com/user/dropbox"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Youtube"
                  data-uxa-log="warp_footer_social_media_youtube"
                  data-trackingid="warp_footer_social_media_youtube"
                >
                  <span className="dwg-lazy-icon--large dwg-box dwg-display--inline-block">
                    <svg
                      viewBox="0 0 24 24"
                      fill="white"
                      className="inline-flex"
                      width="32"
                      height="32"
                      role="presentation"
                      focusable="false"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.148 7.358c.249.248.427.557.519.896.329 1.248.333 3.851.333 3.851s0 2.604-.333 3.852a2.006 2.006 0 0 1-1.415 1.414c-1.247.335-6.252.335-6.252.335s-5.004 0-6.25-.335a2.004 2.004 0 0 1-1.415-1.414C4 14.709 4 12.105 4 12.105s0-2.603.335-3.85a2.003 2.003 0 0 1 1.414-1.42C6.995 6.5 12 6.5 12 6.5s5.004 0 6.252.34c.34.091.648.27.896.518Zm-4.59 4.747-4.158-2.4v4.8l4.158-2.4Z"
                        fill="white"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-start space-y-10 w-full box-border px-7 pb-12 flex-col">
            <div className=" w-[115px]">
              <hr className="opacity-50" />
            </div>
            <div className="flex  ">
              <GlobeAltIcon className="w-6 h-6 text-white" />{" "}
              <span className="text-white ml-2">English (United States)</span>{" "}
              <ChevronRightIcon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MiniFooter() {
  return (
    <div className="w-full flex items-center flex-col box-border">
      <div
        style={{ flexGrow: 1 }}
        className="xl:max-w-[1300px] box-border gap-y-20 flex flex-col   w-full mx-auto  py-10  items-center"
      >
        <div className="flex items-start  space-y-10 w-full box-border px-7 pb-12 flex-col">
          <div className="flex gap-x-8">
            {subLink.map((link)=>{
              return(
                <li key={link.id} className="inline text-base font-light hover:underline decoration-1">
                  <Link href={link.link}>
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </div>
          <div className=" w-[115px]">
            <hr className="" />
          </div>
          <div className="flex  ">
            <GlobeAltIcon className="w-6 h-6 " />{" "}
            <span className=" ml-2">English (United States)</span>{" "}
            <ChevronRightIcon className="w-6 h-6 " />
          </div>
        </div>
      </div>
    </div>
  );
}
