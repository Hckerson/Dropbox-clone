"use client";
import { useState } from "react";
import { golos } from "../fonts";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
const questions = [
  {
    id: 1,
    topic:
      "Can I use Replay without upgrading to Dropbox Plus or a higher plan?",
    baby: "Yes, Replay is available to users on our Basic plan with limited features. To explore Replay, sign-in or sign-up to get started.",
  },
  {
    id: 2,
    topic: "Can I edit video, audio and images using Replay?",
    baby: "No. Replay is a review and approvals solution. When it comes to making amends to your content, Replay integrates with editing software such as Adobe Premiere Pro, Adobe After Effects, Apple Final Cut Pro, Blackmagic Design DaVinci Resolve, and Avid Pro Tools.",
  },
  {
    id: 3,
    topic: "Where will the media files be stored?",
    baby: "Files uploaded from your local drive or third-party video tools, to Replay, are stored in your Dropbox account and will count towards your total storage amount. Files already stored in your Dropbox account and opened in Replay, will not count additionally towards your total storage. For every project, you can view how much storage they use, directly inside of Replay.",
  },
  {
    id: 4,
    topic: "What type of media files are compatible with Replay?",
    baby: "Video, image, audio, PSD, and PDF projects are all compatible with Replay. File sizes up to 150 GB can be uploaded, and the maximum supported audio and video length is 12 hours.",
  },
  {
    id: 5,
    topic: "Is this a web based or desktop application? Or both?",
    baby: "While there is a macOS desktop application, Replay is accessible through the internet browser on your Windows, macOS, or mobile device. You can use Chrome, Firefox, or Safari, but we recommend using Chrome for the best experience. ",
  },
];

const questionsV1 = [
  {
    id: 1,
    topic: "Migrate files to a new computer",
    baby: "You can restore your files to a new computer to get your shiny new laptop up and running with ease—no complicated or slow manual connections from computer to computer.",
    alt: "Restoration process image",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/backup/Backup_migrate_files_1440x1440.png?id=58105247-15e4-4dab-9fc0-7ae97b983f0b&width=2880&output_type=png",
    bg : '#fa551e'
  },
  {
    id: 2,
    topic: "Easily recover if something goes wrong",
    baby: "Getting back up and running works just the way it should—quickly and easily. Start recovery with just a few clicks, and your files will be automatically restored from cloud backup to their original locations.",
    alt: "Restoration process image",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/backup/Backup_easily_recover_1440x1440.png?id=b60e06ec-61f1-4763-92f9-6addbd7ce60c&width=2880&output_type=png",
    bg : '#c8aff0'
  },
  {
    id: 3,
    topic: "Consolidate tools and have less to manage",
    baby: "Backup is included in all Dropbox plans, giving you cloud backup and all the tools you need to collaborate and stay organized—all in a single subscription.",
    alt: "image of dropbox tools",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/backup/Backup-consolidate-tools-1440x1440.png?id=f3af389e-caaa-44e0-80fc-49d5ec88f0a1&output_type=png",
    bg : '#14c8eb'
  },
  {
    id: 4,
    topic: "Keep your files secure",
    baby: "Built on a secure and reliable network trusted by 700 million users worldwide, your files are safe with Dropbox.",
    alt: "image depicting security",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/backup/Backup-secure-files-1440x1440.png?id=2590edd3-e04a-4b41-b89e-85d9f0f60a79&output_type=png",
    bg : '#fad24b'
  },
  {
    id: 5,
    topic: "Keep backed up files in their own safe place",
    baby: "Dropbox Backup stores your files separate from your shared files, so you won’t have to worry about overwriting your emergency backups.",
    alt: "Backup page",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/backup/Backup_keep_files_separate_1440x1440.png?id=56e7c04b-3b3e-4023-887b-c6eb428fbe82&width=2880&output_type=png",
    bg : '#ffafa5'
  },
  {
    id: 6,
    topic: "Back up multiple devices",
    baby: "One-time setup keeps files stored across devices—like your computer and external drive—safe in one place.",
    alt: "Backup page",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/backup/Backup_multiple_device_backup_1440x1440.png?id=94f0d8d2-5c68-4ffe-af46-f45e13dde525&width=2880&output_type=png",
    bg : '#14c8eb'
  },
  {
    id: 7,
    topic: "View backups whenever, wherever",
    baby: "Just as you’d expect from Dropbox, you can easily get to your backed up files any time, anywhere—from your computer, through our mobile app, or on the web.",
    alt: "Backup on android",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/backup/Backup_mobile_backup_1440x1440.png?id=f6f79922-b054-4058-9b45-9be63eaaca89&width=2880&output_type=png",
    bg : '#b4dc19'
  },
];

const questionsV2 = [
  {
    id: 1,
    topic: "Secure Sharing",
    baby: "Control every aspect of your shared documents, even after you hit send.",
    alt: "Dropbox clone features",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/docsend/docsend_securesharing_1440x1080.jpg?id=4f7660e9-44d5-4a95-8908-bc9cfa9ddaf1&output_type=jpg",
    link: "https://www.docsend.com/features/sharing/?utm_medium=referral&utm_source=referral%20traffic&utm_campaign=dbx%20top%20nav&utm_content=jtbd",
    bg: "#b4c8e1",
  },
  {
    id: 2,
    topic: "Document and Video Analytics",
    baby: "Gain actionable insights that drive your deals forward and build lasting relationships.",
    alt: "Dropbox clone features",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/docsend/docsend_documentanalytics_1440x1080.jpg?id=181e1c99-2834-48dd-8d2a-3aedb98cd21b&output_type=jpg",
    link: "https://www.docsend.com/features/analytics/?utm_medium=referral&utm_source=referral%20traffic&utm_campaign=dbx%20top%20nav&utm_content=jtbd",
    bg: "#fa551e",
  },
  {
    id: 3,
    topic: "Advanced DocSend Features",
    baby: "DocSend offers advanced features like virtual data rooms, file indexing and, one-click NDAs, and much more.",
    alt: "Dropbox clone features",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/docsend/docsend_oneclick_1442x988.jpg?id=9fec2bd2-6c3a-4409-b2cc-cd48f280b148&output_type=jpg",
    link: "https://www.docsend.com/",
    bg: "#f2eee8",
  },
];

export default function Faq() {
  const [openMenu, setMenuOpen] = useState<number | null>(null);
  const toggleMenu = (menu: number) => {
    setMenuOpen(openMenu == menu ? null : menu);
  };

  return (
    <div className="w-full box-border flex flex-col text-black py-20  items-center">
      <div className="xl:max-w-[1200px] box-border gap-y-20 md:p-14 lg:p-20 flex flex-col w-full mx-auto items-center">
        <h3
          className={`md:text-4xl text-3xl font-medium text-center px-6  ${golos.className}`}
        >
          Frequently asked questions
        </h3>
        <div className="w-full box-border">
          <ul className="w-full box-border">
            {questions.map((question, index)=>{
              return(
                <li key={question.id} className="flex flex-col relative border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-start box-border">
                <div
                  className="cursor-pointer w-full box-border px-6 py-8 flex  justify-between space-x-2 items-center"
                  onClick={() => toggleMenu(index)}
                >
                  <span
                    className={clsx(
                      "text-base font-semibold peer transition-colors ease-in-out"
                    )}
                  >
                    {question.topic}
                  </span>
                  <div className="p-3">
                    {openMenu === index ? (
                      <ChevronUpIcon
                        className={clsx(
                          "size-6 transition-colors ease-in-out text-black "
                        )}
                      />
                    ) : (
                      <ChevronDownIcon
                        className={clsx(
                          "size-6 transition-colors ease-in-out text-black "
                        )}
                      />
                    )}
                  </div>
                </div>
                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-300 ease-in-out -translate-y-7",
                    openMenu === index
                      ? "max-h-[100px] opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <ul
                    style={{ scrollbarWidth: "none" }}
                    className="w-full box-border px-6 flex overflow-scroll"
                  >
                    <li className="w-full text-base font-light">
                      {question.baby}
                    </li>
                  </ul>
                </div>
              </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function FaqV1() {
  const [openMenu, setMenuOpen] = useState<number | null>(0);
  const toggleMenu = (menu: number) => {
    setMenuOpen(menu);
  };

  return (
    <div className="w-full box-border flex flex-col text-black   items-center">
      <div className="w-full box-border relative grid " id="faq">
        <ul className="w-full box-border  md:px-10 lg:px-14">
          {questionsV1.map((question, index) => {
            return (
              <li
                key={question.id}
                className="flex flex-col   border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-start box-border"
              >
                <div
                  className={clsx(
                    "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                    openMenu == index ? "pb-0" : "pb-6"
                  )}
                  onClick={() => toggleMenu(index)}
                >
                  <span
                    className={clsx(
                      "text-base font-semibold peer transition-colors ease-in-out"
                    )}
                  >
                    {question.topic}
                  </span>
                  <div className="p-3">
                    {openMenu === index ? (
                      <ChevronUpIcon className="size-6 transition-colors ease-in-out text-black " />
                    ) : (
                      <ChevronDownIcon className="size-6 transition-colors ease-in-out text-black " />
                    )}
                  </div>
                </div>
                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-300 ease-in-out ",
                    openMenu === index
                      ? "max-h-[450px] opacity-100 pb-6"
                      : "max-h-0 opacity-0 pb-0"
                  )}
                >
                  <ul
                    style={{ scrollbarWidth: "none" }}
                    className="w-full box-border px-6 flex overflow-scroll flex-col"
                  >
                    <li className="w-full text-base font-light">
                      {question.baby}
                    </li>
                    <div
                      style={{ aspectRatio: 16 / 9, overflow: "unset", backgroundColor : question.bg }}
                      className="lg:absolute relative lg:w-1/2 top-0 right-0 w-full h-full  flex items-center justify-center"
                    >
                      <div className="w-full relative h-full py-4 flex items-center  max-w-full">
                        <Image
                          src={question.src}
                          alt={question.alt}
                          width={2880}
                          height={1368} // Adjust this as needed
                          quality={80}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="inset-0 hidden lg:flex items-center justify-center relative"></div>
      </div>
    </div>
  );
}



export function FaqV3() {
  const [openMenu, setMenuOpen] = useState<number | null>(0);
  const toggleMenu = (menu: number) => {
    setMenuOpen(menu);
  };

  return (
    <div className="w-full box-border flex flex-col text-black   items-center">
      <div className="w-full box-border relative grid " id="faq">
        <ul className="w-full box-border  md:px-10 lg:px-14">
          {questionsV2.map((question, index) => {
            return (
              <li
                key={question.id}
                className="flex flex-col   border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-start box-border"
              >
                <div
                  className={clsx(
                    "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                    openMenu == index ? "pb-0" : "pb-6"
                  )}
                  onClick={() => toggleMenu(index)}
                >
                  <span
                    className={clsx(
                      "text-base font-semibold peer transition-colors ease-in-out"
                    )}
                  >
                    {question.topic}
                  </span>
                  <div className="p-3">
                    {openMenu === index ? (
                      <ChevronUpIcon className="size-6 transition-colors ease-in-out text-black " />
                    ) : (
                      <ChevronDownIcon className="size-6 transition-colors ease-in-out text-black " />
                    )}
                  </div>
                </div>
                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-300 ease-in-out ",
                    openMenu === index
                      ? "max-h-[450px] opacity-100 pb-6"
                      : "max-h-0 opacity-0 pb-0"
                  )}
                >
                  <ul
                    style={{ scrollbarWidth: "none" }}
                    className="w-full box-border px-6 flex overflow-x-hidden flex-col"
                  >
                    <li className="w-full text-base font-light">
                      {question.baby}
                    </li>
                    <li className="w-full text-base font-light">
                        <Link href={question.link}>Learn more</Link>
                    </li>
                    <div
                      style={{ aspectRatio: 16 / 9, overflow: "unset", backgroundColor : question.bg }}
                      className={clsx("lg:absolute relative lg:w-1/2 2xl:w-3/5 top-0 right-0 w-full h-full  flex items-center justify-center transition-transform ease-in-out duration-300")}
                    >
                      <div className="w-full relative h-full py-4 flex items-center  max-w-full">
                        <Image
                          src={question.src}
                          alt={question.alt}
                          width={2880}
                          height={1368} // Adjust this as needed
                          quality={80}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="inset-0 hidden lg:flex items-center justify-center relative"></div>
      </div>
    </div>
  );
}


export function FaqV2() {
  const [openMenu, setMenuOpen] = useState<number | null>(0);
  const toggleMenu = (menu: number) => {
    setMenuOpen(menu);
  };

  return (
    <div className="w-full box-border flex flex-col text-black   items-center">
      <div className="w-full box-border relative grid " id="faq">
        <ul className="w-full box-border  md:px-10 lg:px-14">
          <li className="flex flex-col   border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-start box-border">
            <div
              className={clsx(
                "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                openMenu == 0 ? "pb-0" : "pb-6"
              )}
              onClick={() => toggleMenu(0)}
            >
              <span
                className={clsx(
                  "text-base font-semibold peer transition-colors ease-in-out"
                )}
              >
                {questionsV1[0].topic}
              </span>
              <div className="p-3">
                {openMenu === 0 ? (
                  <ChevronUpIcon className="size-6 transition-colors ease-in-out text-black " />
                ) : (
                  <ChevronDownIcon className="size-6 transition-colors ease-in-out text-black " />
                )}
              </div>
            </div>
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out ",
                openMenu === 0
                  ? "max-h-[450px] opacity-100 pb-6"
                  : "max-h-0 opacity-0 pb-0"
              )}
            >
              <ul
                style={{ scrollbarWidth: "none" }}
                className="w-full box-border px-6 flex overflow-scroll flex-col"
              >
                <li className="w-full text-base font-light">
                  {questionsV1[0].baby}
                </li>
                <div
                  style={{ aspectRatio: 16 / 9, overflow: "unset" }}
                  className="lg:absolute relative lg:w-1/2 top-0 right-0 w-full h-full bg-[#fa551e] flex items-center justify-center"
                >
                  <div className="w-full h-auto flex items-center max-h-full max-w-full">
                    <Image
                      src={questionsV1[0].src}
                      alt={""}
                      width={2880}
                      height={1368} // Adjust this as needed
                      quality={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </ul>
            </div>
          </li>
          <li className="flex flex-col  border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
            <div
              className={clsx(
                "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                openMenu == 1 ? "pb-0" : "pb-6"
              )}
              onClick={() => toggleMenu(1)}
            >
              <span
                className={clsx(
                  "text-base font-semibold peer transition-colors ease-in-out"
                )}
              >
                {questionsV1[1].topic}
              </span>
              <div className="p-3">
                {openMenu === 1 ? (
                  <ChevronUpIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                ) : (
                  <ChevronDownIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                )}
              </div>
            </div>
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out ",
                openMenu === 1
                  ? "max-h-[450px] opacity-100 pb-6"
                  : "max-h-0 opacity-0 pb-0"
              )}
            >
              <ul
                style={{ scrollbarWidth: "none" }}
                className="w-full box-border px-6 flex overflow-scroll flex-col"
              >
                <li className="w-full text-base font-light">
                  {questionsV1[1].baby}
                </li>
                <div
                  style={{ aspectRatio: 16 / 9, overflow: "unset" }}
                  className="lg:absolute lg:w-1/2 top-0 right-0 w-full h-full bg-[#c8aff0] flex items-center justify-center"
                >
                  <div className="w-full h-full flex items-center max-h-full max-w-full">
                    <Image
                      src={questionsV1[1].src}
                      alt={""}
                      width={2880}
                      height={1368} // Adjust this as needed
                      quality={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </ul>
            </div>
          </li>
          <li className="flex flex-col  border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
            <div
              className={clsx(
                "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                openMenu == 2 ? "pb-0" : "pb-6"
              )}
              onClick={() => toggleMenu(2)}
            >
              <span
                className={clsx(
                  "text-base font-semibold peer transition-colors ease-in-out"
                )}
              >
                {questionsV1[2].topic}
              </span>
              <div className="p-3">
                {openMenu === 2 ? (
                  <ChevronUpIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                ) : (
                  <ChevronDownIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                )}
              </div>
            </div>
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out ",
                openMenu === 2
                  ? "max-h-[450px] opacity-100 pb-6"
                  : "max-h-0 opacity-0 pb-0"
              )}
            >
              <ul
                style={{ scrollbarWidth: "none" }}
                className="w-full box-border px-6 flex overflow-scroll flex-col"
              >
                <li className="w-full text-base font-light">
                  {questionsV1[2].baby}
                </li>
                <div
                  style={{ aspectRatio: 16 / 9, overflow: "unset" }}
                  className="lg:absolute lg:w-1/2 top-0 right-0 w-full h-full bg-[#14c8eb] flex items-center justify-center"
                >
                  <div className="w-full h-full flex items-center max-h-full max-w-full">
                    <Image
                      src={questionsV1[2].src}
                      alt={""}
                      width={2880}
                      height={1368} // Adjust this as needed
                      quality={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </ul>
            </div>
          </li>
          <li className="flex flex-col  border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
            <div
              className={clsx(
                "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                openMenu == 3 ? "pb-0" : "pb-6"
              )}
              onClick={() => toggleMenu(3)}
            >
              <span
                className={clsx(
                  "text-base font-semibold peer transition-colors ease-in-out"
                )}
              >
                {questionsV1[3].topic}
              </span>
              <div className="p-3">
                {openMenu === 3 ? (
                  <ChevronUpIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                ) : (
                  <ChevronDownIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                )}
              </div>
            </div>
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out ",
                openMenu === 3
                  ? "max-h-[450px] opacity-100 pb-6"
                  : "max-h-0 opacity-0 pb-0"
              )}
            >
              <ul
                style={{ scrollbarWidth: "none" }}
                className="w-full box-border px-6 flex overflow-scroll flex-col"
              >
                <li className="w-full text-base font-light">
                  {questionsV1[3].baby}
                </li>
                <div
                  style={{ aspectRatio: 16 / 9, overflow: "unset" }}
                  className="lg:absolute lg:w-1/2 top-0 right-0 w-full h-full bg-[#fad24b] flex items-center justify-center"
                >
                  <div className="w-full h-full flex items-center max-h-full max-w-full">
                    <Image
                      src={questionsV1[3].src}
                      alt={""}
                      width={2880}
                      height={1368} // Adjust this as needed
                      quality={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </ul>
            </div>
          </li>
          <li className="flex flex-col  border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
            <div
              className={clsx(
                "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                openMenu == 4 ? "pb-0" : "pb-6"
              )}
              onClick={() => toggleMenu(4)}
            >
              <span
                className={clsx(
                  "text-base font-semibold peer transition-colors ease-in-out"
                )}
              >
                {questionsV1[4].topic}
              </span>
              <div className="p-3">
                {openMenu === 4 ? (
                  <ChevronUpIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                ) : (
                  <ChevronDownIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                )}
              </div>
            </div>
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out ",
                openMenu === 4
                  ? "max-h-[450px] opacity-100 pb-6"
                  : "max-h-0 opacity-0 pb-0"
              )}
            >
              <ul
                style={{ scrollbarWidth: "none" }}
                className="w-full box-border px-6 flex overflow-scroll flex-col"
              >
                <li className="w-full text-base font-light">
                  {questionsV1[4].baby}
                </li>
                <div
                  style={{ aspectRatio: 16 / 9, overflow: "unset" }}
                  className="lg:absolute lg:w-1/2 top-0 right-0 w-full h-full bg-[#ffafa5] flex items-center justify-center"
                >
                  <div className="w-full h-full flex items-center max-h-full max-w-full">
                    <Image
                      src={questionsV1[4].src}
                      alt={""}
                      width={2880}
                      height={1368} // Adjust this as needed
                      quality={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </ul>
            </div>
          </li>
          <li className="flex flex-col  border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
            <div
              className={clsx(
                "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                openMenu == 5 ? "pb-0" : "pb-6"
              )}
              onClick={() => toggleMenu(5)}
            >
              <span
                className={clsx(
                  "text-base font-semibold peer transition-colors ease-in-out"
                )}
              >
                {questionsV1[5].topic}
              </span>
              <div className="p-3">
                {openMenu === 5 ? (
                  <ChevronUpIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                ) : (
                  <ChevronDownIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                )}
              </div>
            </div>
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out ",
                openMenu === 5
                  ? "max-h-[450px] opacity-100 pb-6"
                  : "max-h-0 opacity-0 pb-0"
              )}
            >
              <ul
                style={{ scrollbarWidth: "none" }}
                className="w-full box-border px-6 flex overflow-scroll flex-col"
              >
                <li className="w-full text-base font-light">
                  {questionsV1[5].baby}
                </li>
                <div
                  style={{ aspectRatio: 16 / 9, overflow: "unset" }}
                  className="lg:absolute lg:w-1/2 top-0 right-0 w-full h-full bg-[#14c8eb] flex items-center justify-center"
                >
                  <div className="w-full h-full flex items-center max-h-full max-w-full">
                    <Image
                      src={questionsV1[5].src}
                      alt={""}
                      width={2880}
                      height={1368} // Adjust this as needed
                      quality={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </ul>
            </div>
          </li>
          <li className="flex flex-col  border-b border-black hover:bg-[#eee9e2] border-opacity-40 items-center box-border">
            <div
              className={clsx(
                "cursor-pointer w-full box-border px-6 pt-6 flex  justify-between space-x-2 items-center",
                openMenu == 6 ? "pb-0" : "pb-6"
              )}
              onClick={() => toggleMenu(6)}
            >
              <span
                className={clsx(
                  "text-base font-semibold peer transition-colors ease-in-out"
                )}
              >
                {questionsV1[6].topic}
              </span>
              <div className="p-3">
                {openMenu === 6 ? (
                  <ChevronUpIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                ) : (
                  <ChevronDownIcon
                    className={clsx(
                      "size-6 transition-colors ease-in-out text-black "
                    )}
                  />
                )}
              </div>
            </div>
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out ",
                openMenu === 6
                  ? "max-h-[450px] opacity-100 pb-6"
                  : "max-h-0 opacity-0 pb-0"
              )}
            >
              <ul
                style={{ scrollbarWidth: "none" }}
                className="w-full box-border px-6 flex overflow-scroll flex-col"
              >
                <li className="w-full text-base font-light">
                  {questionsV1[6].baby}
                </li>
                <div
                  style={{ aspectRatio: 16 / 9, overflow: "unset" }}
                  className="lg:absolute lg:w-1/2 top-0 right-0 w-full h-full bg-[#b4dc19] flex items-center justify-center"
                >
                  <div className="w-full h-full flex items-center max-h-full max-w-full">
                    <Image
                      src={questionsV1[6].src}
                      alt={""}
                      width={2880}
                      height={1368} // Adjust this as needed
                      quality={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </ul>
            </div>
          </li>
        </ul>
        <div className="inset-0 hidden lg:flex items-center justify-center relative"></div>
      </div>
    </div>
  );
}