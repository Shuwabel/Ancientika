"use client";
import React from "react";
import Image from "next/image";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { motion } from "framer-motion";

export const navbar = [
  { label: "MensWear", href: "/" },
  { label: "WomensWear", href: "/" },
  { label: "About", href: "/" },
  { label: "Contact", href: "/" },
];
const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "anticipate", duration: 0.3 }}
      className="w-full absolute top-0 left-0 h-[10vh] flex items-center justify-between px-7.5 py-5 text-sm z-50 shadow-md "
    >
      <nav className="flex items-center px-2 py-0.5 w-full justify-between">
        <div className="heading w-8 relative h-8 magnet">
          <Image
            src={"/Logo.png"}
            alt="Logo"
            fill
            className="w-full h-full object-cover"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-black text-2xl">
          <div>
            <CiSearch />
          </div>
          <div>
            <CiUser />
          </div>
          <div className="relative">
            <CiShoppingCart />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              0
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};
export default Header;
