"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const textTransform = {
  hidden: { opacity: 0, x: 0, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const videoTransform = {
  hidden: { opacity: 0, x: 0, y: 0, scale: 1 },
  visible: { opacity: 1, x: 0, y: 0, scale: 1.2 },
};

const HeroContent = () => {
  return (
    <div className="relative flex flex-col items-center justify-center px-20 mt-40 w-full z-[20]">
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        

        <motion.div
          variants={{ ...slideInFromLeft(0.5), ...textTransform }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          style={{
            transform: "translate(30px, 120px)", // Adjust positioning here
          }}
        >
         <span>
            
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              GoodGains{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Work
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={{ ...slideInFromLeft(0.8), ...textTransform }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
          style={{
            transform: "translate(40px, 120px)", // Adjust positioning here
          }}
        >
         GoodGains Work is a cutting-edge social productivity platform that seamlessly integrates the services of Trello, Slack, Zoom, and Calendly. Designed to help you and your team stay productive and connected, no matter where you are.
        </motion.p>
        <motion.a
  href="https://goodgainswork.com" // Add your URL here
  variants={{ ...slideInFromLeft(1) }}
  transition={{ duration: 1 }}
  className="py-2 px-4 text-center text-white bg-gradient-to-r from-orange-500 to-orange-500 hover:from-orange-400 hover:via-red-600 hover:to-orange-400 cursor-pointer rounded-lg max-w-[200px]"
  style={{
    transform: "translate(40px, 120px)", // Adjust positioning here
  }}
>
  Get Started!
</motion.a>
      </div>

      <div className="relative flex justify-center items-center mt-0">
        <motion.div
          variants={videoTransform}
          transition={{ duration: 0.8 }}
          className="relative"
          style={{
            width: "600px", // Set the width of the video player
            height: "400px", // Set the height of the video player
            transform: "translate(350px, -100px)", // Adjust positioning here
          }}
        >
          <video
            className="w-full h-full object-cover" // Ensure the video covers the container
            src="/GoodGains Work (1).mp4"
            controls
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;
