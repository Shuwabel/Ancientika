"use client";
import React from "react";
import { footerLinks } from "@/components/utils/constants/index";
import { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  PiFacebookLogoBold,
  PiInstagramLogoBold,
  PiPinterestLogoBold,
  PiTiktokLogoBold,
  PiTwitterLogoBold,
} from "react-icons/pi";
import { BsChevronDown } from "react-icons/bs";
import {
  SiAmericanexpress,
  SiDinersclub,
  SiDiscover,
  SiMastercard,
  SiPaypal,
  SiVisa,
} from "react-icons/si";

const Footer = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };
  return (
    <section className="h-screen  w-full text-black flex flex-col font-sans p-8 gap-8 justify-between fixed bottom-0 -z-1">
      {/* Navlinks */}
      <div className="flex items-center">
        <div className="grid grid-row-4 lg:grid-cols-4 ">
          {footerLinks.map((footer, id) => (
            <div key={id} className="space-y-4">
              {/* Section Header */}
              <button
                onClick={() => toggleSection(id)}
                className="flex justify-between items-center w-full text-lg fontmelo font-bold tracking-wider uppercase touch-pan-up"
              >
                {footer.heading}
                {openSection === id ? (
                  <IoIosArrowUp className="text-xl outline-none text-secondary lg:hidden" />
                ) : (
                  <IoIosArrowDown className="text-xl outline-none text-secondary lg:hidden" />
                )}
              </button>

              {/* Collapsible Links */}
              <ul
                className={`mt-2 space-y-2 text-neutral-800 text-sm overflow-hidden lg:overflow-visible transition-all duration-300 ease-in-out cursor-pointer clash ${
                  openSection === id ? "max-h-full p-2" : " max-h-0 p-0"
                }`}
              >
                {footer.link.map((link, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-black transition-all duration-300 ease-in-out"
                  >
                    {link.href.startsWith("https") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.href}>{link.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex items-start md:flex-col gap-4 mt-4 md:mt-0 md:col-span-2 lg:col-span-1">
            <h1 className="uppercase tracking-wider fontmelo font-bold">
              About
            </h1>
            <p className="text-sm text-neutral-700 clash">
              We could not have created this demo without the help of an amazing
              source of content and products. Visit our about page to find out
              where all the products used in this demo care from.
            </p>
          </div>
        </div>
      </div>

      {/* Icons */}
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center clash">
            <p>EN</p>
            <Link href={"/"}>
              <BsChevronDown />
            </Link>
          </div>
          <div className="flex text-2xl gap-4 cursor-pointer">
            <PiPinterestLogoBold className="cursor-pointer" />
            <PiInstagramLogoBold className="cursor-pointer" />
            <PiTiktokLogoBold className="cursor-pointer" />
            <PiTwitterLogoBold className="cursor-pointer" />
            <PiFacebookLogoBold className="cursor-pointer" />
          </div>
        </div>
        <div className="flex text-2xl">
          <div className="mx-2 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out border px-2 rounded-sm py-1">
            <SiMastercard />
          </div>
          <div className="mx-2 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out border px-2 rounded-sm py-1">
            <SiVisa />
          </div>
          <div className="mx-2 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out border px-2 rounded-sm py-1">
            <SiAmericanexpress />
          </div>
          <div className="mx-2 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out border px-2 rounded-sm py-1">
            <SiPaypal />
          </div>
          <div className="mx-2 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out border px-2 rounded-sm py-1">
            <SiDinersclub />
          </div>
          <div className="mx-2 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out border px-2 rounded-sm py-1">
            <SiDiscover />
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="w-full text-center flex items-center justify-center">
        <h1 className="text-[220px] uppercase zina leading-28">ancientika </h1>
        <h1 className="text-[40px] uppercase zina leading-16 hidden max-sm:flex absolute bg-background px-4 h-fit">
          ancientika{" "}
        </h1>
      </div>
    </section>
  );
};

export default Footer;
