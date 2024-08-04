// components/main/Navbar.tsx
"use client";

import Image from "next/image";
import React from "react";
import Button from "@/components/main/Button";import { motion } from "framer-motion";
import {
  slideInFromLeft
} from "@/utils/motion";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="home" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            GoodGains Work
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              Home
            </a>
            <a href="#skills" className="cursor-pointer">
              Stack
            </a>
            <a href="#projects" className="cursor-pointer">
              Products
            </a>
            <a href="#pricing" className="cursor-pointer">
              Pricing
            </a>
            <a href="#about-me" className="cursor-pointer">
              Sales
            </a>
          </div>
        </div>

        <motion.a
  href="https://goodgainswork.com" // Add your URL here
  variants={{ ...slideInFromLeft(1) }}
  transition={{ duration: 1 }}
  className="py-2 px-4 text-center text-white bg-gradient-to-r from-orange-500 to-orange-500 hover:from-orange-400 hover:via-red-600 hover:to-orange-400 cursor-pointer rounded-lg max-w-[200px]"
  style={{
    transform: "translate(40px, 0px)", // Adjust positioning here
  }}
>
  Get Started!
</motion.a>

      </div>
    </div>
  );
};

export default Navbar;
